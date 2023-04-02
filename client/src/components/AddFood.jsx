import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import FoodCard from './FoodCard'

const AddFood = () => {
    const [searched, setSearched] = useState(null)
    const [searchResults, setSearchResults] = useState(null)


    // const getSearchResults = async (e) => {
 
    //     const food = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=%22steak%22&dataType=&sortBy=dataType.keyword&api_key=${process.env.REACT_APP_USDA_API_KEY}`).catch(function(error) {console.log(error)})
    //     setSearchResults(food?.data)
    //     console.log(searchResults.data)
    //     setSearched('')
    // }

    const handleChange = (event) => {
        setSearched(event.target.value)

    }

    // useEffect(() => {
    //     getSearchResults()
    // }, [])


    return (
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg border-4 border-slate-400">
                <div className='mx-auto'>
                <SearchBar handleChange={handleChange} />
                </div>

                {/* <button
                    class="inline-block rounded bg-indigo-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                    onClick={toggleFood}
                >
                    Add Food
                </button> */}


                {/* <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                </p> */}
                <div className='container overflow-auto h-48 border-4 border-slate-400'>
                    {/* {
                        searchResults.map((search) => (


                        ))  
                    } */}
                    <FoodCard />
                    <FoodCard />
                </div>
                {/* <form
                    action=""
                    class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p class="text-center text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            <input
                                type="email"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span
                                class="absolute inset-y-0 right-0 grid place-content-center px-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>

                        <div class="relative">
                            <input
                                type="password"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span
                                class="absolute inset-y-0 right-0 grid place-content-center px-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>

                    <p class="text-center text-sm text-gray-500">
                        No account?
                        <a class="underline" href="">Sign up</a>
                    </p>
                </form> */}
            </div>
        </div>
    )
}

export default AddFood