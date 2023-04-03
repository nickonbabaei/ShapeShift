import React from 'react'
import { NavLink } from 'react-router-dom'

const FoodCard = ({ result, getSpecificFood}) => {
    return (
        <ol className='flex w-full'>
            <ul class="w-full bg-white rounded-lg shadow-md">
                <NavLink onClick={() => getSpecificFood(result)}>
                    <li class="px-4 py-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{result.food_name}</h4>
                        <p className="text-base text-gray-500 dark:text-gray-400">{Math.round(result.nf_calories)} cal, {result.serving_qty} {result.serving_unit}</p>
                    </li>
                </NavLink>
            </ul>
        </ol>
    )
}

export default FoodCard