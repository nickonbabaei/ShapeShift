import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import FoodCard from './FoodCard'
import { Modal } from '@mui/material'
import { NavLink } from 'react-router-dom'

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
    const { open, toggleOpen, user, getUserInfo } = props
    const [renderDetails, setRenderDetails] = useState(false)
    const [searched, setSearched] = useState(null)
    const [foodDetails, setFoodDetails] = useState(null)
    const [foodBody, setFoodBody] = useState(null)
    const [searchResults, setSearchResults] = useState(null)

    const toggleDetails = () => {
        setRenderDetails(!renderDetails)
    }

    const handleChanges = (event) => {
        setSearched(event.target.value)
    }

    const getSearchResults = async (e) => {
        e.preventDefault()
        setSearchResults(null)
        const name = await axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${searched}`, {
            headers: {
                'x-app-id': 'bec583d3',
                'x-app-key': process.env.REACT_APP_NUTRIONIX_KEY
            }
        })

        let nutrientsArray = []
        for (let i = 0; i < 8; i++) {
            const nutrients = await axios.post(`https://trackapi.nutritionix.com/v2/natural/nutrients`, { "query": name.data.common[i].food_name }, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': 'bec583d3',
                    'x-app-key': process.env.REACT_APP_NUTRIONIX_KEY,
                    'x-remote-user-id': '0'
                }
            })
            nutrientsArray.push(nutrients.data.foods[0])
        }
        setSearchResults(nutrientsArray)
        nutrientsArray = []
    }

    const getSpecificFood = (food) => {
        setFoodDetails(food)
        console.log(foodDetails)
        toggleDetails()
    }

    const logFood = async () => {
        // setFoodBody({
        //     'userId': user.id,
        //     'name': foodDetails.food_name,
        //     'calories': foodDetails.nf_calories,
        //     'protein': foodDetails.nf_protein,
        //     'carbs': foodDetails.nf_total_carbohydrate,
        //     'fat': foodDetails.nf_total_fat,
        //     'servingInfo': `(1 serving = ${foodDetails.serving_qty} ${foodDetails.serving_unit} or ${foodDetails.serving_weight_grams} g)`,
        //     'servingSize': 1
        // })

        await axios.post('http://localhost:3001/api/ingredient/create', {
            'userId': user.id,
            'name': foodDetails.food_name,
            'calories': foodDetails.nf_calories,
            'protein': foodDetails.nf_protein,
            'carbs': foodDetails.nf_total_carbohydrate,
            'fat': foodDetails.nf_total_fat,
            'servingInfo': `(1 serving = ${foodDetails.serving_qty} ${foodDetails.serving_unit} or ${foodDetails.serving_weight_grams} g)`,
            'servingSize': 1
        })
        // setFoodBody(null)
        setFoodDetails(null)
        getUserInfo()
        toggleOpen()
    }



    return (
        <Modal open={open} ref={ref}>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg bg-gray-100">
                    {renderDetails ?
                        <div className='sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-md shadow-md'>
                            <div className='flex justify-between pb-2'>
                                <div><button onClick={toggleDetails} className='font-bold'> back </button></div>
                                <div><button onClick={toggleOpen} className='text-xl font-bold hover:text-red-500'> x </button></div>
                            </div>
                            <div class="flex-col ml-4 mr-4 sm:justify-start">
                                <h2 class="text-2xl font-bold justify-center">Nutrition Information for {foodDetails.food_name}</h2>
                                <h5 >(1 serving = {foodDetails.serving_qty} {foodDetails.serving_unit} or {foodDetails.serving_weight_grams} g)</h5>
                            </div>
                            <div class="flex justify-center sm:justify-center mr-4 pt-4 sm:mt-0">
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4 sm:mt-0">
                                    <p class="text-lg font-semibold underline">Calories</p>
                                    <p id="calories" class="text-lg font-bold">{Math.round(foodDetails.nf_calories * 10) / 10}</p>
                                </div>
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4 sm:mt-0">
                                    <p class="text-lg font-semibold underline">Protein</p>
                                    <p id="protein" class="text-lg font-bold">{Math.round(foodDetails.nf_protein * 10) / 10}g</p>
                                </div>
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4 sm:mt-0">
                                    <p class="text-lg font-semibold underline">Carbs</p>
                                    <p id="carbs" class="text-lg font-bold">{Math.round(foodDetails.nf_total_carbohydrate * 10) / 10}g</p>
                                </div>
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mt-4 sm:mt-0">
                                    <p class="text-lg font-semibold underline">Fat</p>
                                    <p id="fat" class="text-lg font-bold">{Math.round(foodDetails.nf_total_fat * 10) / 10}g</p>
                                </div>
                            </div>
                            <div class="mt-4 items-center flex justify-center">
                                <label for="servings" class="mr-2 font-semibold">Servings:</label>
                                <input id="servings" type="number" min="1" max="10" value="1" class="p-2 border rounded-md shadow-md" />
                            </div>
                            <div onClick={logFood} className='flex justify-center pt-4'>
                                <button className="block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-600 ">
                                    Add Food
                                </button>
                            </div>
                        </div>
                        :
                        <div>
                            <div className='mx-auto'>
                                <SearchBar handleChange={handleChanges} onSubmit={getSearchResults} />
                            </div>
                            <div className='container overflow-auto h-60'>
                                {searchResults &&
                                    searchResults.map((result) => (
                                        <FoodCard result={result} getSpecificFood={getSpecificFood} />
                                    ))
                                }

                                {/* <FoodCard result={searchResults[0]} getSpecificFood={getSpecificFood} />                   
                                <FoodCard result={searchResults[1]} getSpecificFood={getSpecificFood} /> */}




                            </div>
                            <div>
                                <button onClick={toggleOpen} className='rounded-b-lg ml-2'> close </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Modal>


    )

})

// }

export default AddFoodModal