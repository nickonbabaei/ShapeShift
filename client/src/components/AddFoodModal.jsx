import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import FoodCard from './FoodCard'
import { Modal } from '@mui/material'
import loading from '../images/loadingIcon.gif'

const AddFoodModal = React.forwardRef((props, ref) => {
    const { open, toggleOpen, user, getUserInfo } = props
    const [renderDetails, setRenderDetails] = useState(false)
    const [searched, setSearched] = useState(null)
    const [foodDetails, setFoodDetails] = useState(null)
    const [searchResults, setSearchResults] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const toggleDetails = () => {
        setRenderDetails(!renderDetails)
    }

    const handleChanges = (event) => {
        setSearched(event.target.value)
    }

    const getSearchResults = async (e) => {
        e.preventDefault()
        setSearchResults(null)
        setIsLoading(true)
        const name = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query="${searched}"&dataType=&pageSize=&api_key=${process.env.REACT_APP_USDA_KEY}`)
        setSearchResults(name.data.foods)
        setIsLoading(false)
    }

    const getSpecificFood = (food) => {
        setFoodDetails(food)
        toggleDetails()
    }

    const logFood = async () => {
        await axios.post('http://localhost:3001/api/ingredient/create', {
            'userId': user.id,
            'name': foodDetails.description,
            'calories': foodDetails.foodNutrients[3].value,
            'protein': foodDetails.foodNutrients[0].value,
            'carbs': foodDetails.foodNutrients[2].value,
            'fat': foodDetails.foodNutrients[1].value,
            'servingSize': 1
        })
        setFoodDetails(null)
        getUserInfo()
        toggleOpen()
    }

    return (
        <Modal open={open} ref={ref}>
            <div class="mt-[45%] mr-[5%] ml-[5%] sm:mx-auto sm:mt-[10%] sm:mr-[20%] sm:ml-[20%] max-w-screen-xl">
                <div class="rounded-lg mx-auto max-w-lg bg-gray-100">
                    {renderDetails ?
                        <div className='sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-md shadow-md'>
                            <div className='rounded-xl flex justify-between pb-2'>
                                <div><button onClick={toggleDetails} className='font-bold pt-1'> back </button></div>
                                <div><button onClick={toggleOpen} className='text-xl font-bold hover:text-red-500'> x </button></div>
                            </div>
                            <div class="flex-col ml-4 mr-4 sm:justify-start">
                                <h2 class="text-2xl font-bold justify-center">{foodDetails.description}</h2>
                                <h5>{foodDetails.foodMeasures.length > 0 ? <h5> (1 serving = {foodDetails.foodMeasures[0].gramWeight} g)</h5> : <h5>(serving size not available) </h5>}</h5>
                            </div>
                            <div class="pl-4 grid grid-cols-2 md:flex md:justify-center md:mr-4 md:pt-4">
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4">
                                    <p class="text-lg font-semibold underline">Calories</p>
                                    <p id="calories" class="text-lg font-bold">{Math.round(foodDetails.foodNutrients[3].value * 10) / 10}</p>
                                </div>
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4">
                                    <p class="text-lg font-semibold underline">Protein</p>
                                    <p id="protein" class="text-lg font-bold">{Math.round(foodDetails.foodNutrients[0].value * 10) / 10}g</p>
                                </div>
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4">
                                    <p class="text-lg font-semibold underline">Carbs</p>
                                    <p id="carbs" class="text-lg font-bold">{Math.round(foodDetails.foodNutrients[2].value * 10) / 10}g</p>
                                </div>
                                <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mt-4 mr-4">
                                    <p class="text-lg font-semibold underline">Fat</p>
                                    <p id="fat" class="text-lg font-bold">{Math.round(foodDetails.foodNutrients[1].value * 10) / 10}g</p>
                                </div>
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
                                {isLoading ?
                                    <img src={loading} className='mx-auto w-1/5 mt-20 sm:mt-16' />
                                    : null}
                                {searchResults &&
                                    searchResults.map((result) => (
                                        result?.foodNutrients[3]?.value &&
                                        <FoodCard result={result} getSpecificFood={getSpecificFood} />
                                    ))
                                }
                            </div>
                            <div>
                                <button onClick={toggleOpen} className='ml-2 hover:text-red-700'> close </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Modal>
    )
})


export default AddFoodModal