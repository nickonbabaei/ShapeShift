import React from 'react'

const AddFood = () => {
    const [searched, setSearched] = useState(null)
    const [searchResults, setSearchResults] = useState(null)

    // REMINDER: MAKE THROUGH TABLE JUST BETWEEN USERID AND INGREDIENTS, SO A USER JUST GETS ASSIGNED INGREDIENTS BASED ON WHAT THEY ADD TO DASHBOARD,
    // NO NEED FOR MEAL. OR MAYBE JUST MAKE ONE TO MANY RELATIONSHIP BETWEEN USER AND INGREDIENT SO EVERYTIME INGREDIENT GETS CREATED IT GETS ADDED WITH A USERID. 

    const getSearchResults = async () => {
        const food = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=%22${searched}%22&dataType=&pageSize=100&sortBy=dataType.keyword&api_key=${process.env.REACT_APP_USDA_API_KEY}`)
        setSearchResults(food.data)
        console.log(searchResults.data)
        setSearched('')
    }

    const handleChange = (event) => {
        setSearched(event.target.value)
    
      }

    useEffect(() => {
        getSearchResults()
    }, [])


    return (
        <div>
            

        </div>
    )
}

export default AddFood