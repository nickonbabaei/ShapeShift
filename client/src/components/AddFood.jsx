import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import FoodCard from './FoodCard'
import { Modal } from '@mui/material'

// const AddFood = () => {
// const [searched, setSearched] = useState(null)
//     const [searchResults, setSearchResults] = useState(null)


// const getSearchResults = async (e) => {

//     const food = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=%22steak%22&dataType=&sortBy=dataType.keyword&api_key=${process.env.REACT_APP_USDA_API_KEY}`).catch(function(error) {console.log(error)})
//     setSearchResults(food?.data)
//     console.log(searchResults.data)
//     setSearched('')
// }

// const handleChange = (event) => {
//     setSearched(event.target.value)

// }

// useEffect(() => {
//     getSearchResults()
// }, [])

const AddFoodModal = React.forwardRef((props, ref) => {
    const { open, toggleOpen } = props
    const [searched, setSearched] = useState(null)
    const [searchResults, setSearchResults] = useState('')
    const handleChanges = (event) => {
        setSearched(event.target.value)
    }

    const getSearchResults = async (e) => {
        e.preventDefault()
        const food = await axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${searched}`, {
            headers: {
                'x-app-id': 'bec583d3',
                'x-app-key': process.env.REACT_APP_NUTRIONIX_KEY
            }
        })
        setSearchResults(food.data)
    }


    return (
        <Modal open={open} ref={ref}>

            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg bg-slate-200">
                    <div className='mx-auto'>
                        <SearchBar handleChange={handleChanges} onSubmit={getSearchResults} />
                    </div>
                    <div className='container overflow-auto h-48'>
                        {searchResults && <FoodCard searchResults={searchResults}/>}
                    </div>
                    <div>
                        <button onClick={toggleOpen}> close </button>
                    </div>

                </div>

            </div>
        </Modal>


    )

})

// }

export default AddFoodModal