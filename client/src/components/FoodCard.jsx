import React from 'react'
import { NavLink } from 'react-router-dom'

const FoodCard = ({ result, getSpecificFood}) => {
    return (
        <ol className='flex w-full'>
            <ul class="w-full bg-white rounded-lg shadow-md">
                <NavLink onClick={() => getSpecificFood(result)}>
                    <li class="px-4 py-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{result.description}</h4>
                        <p className="text-base text-gray-500 dark:text-gray-400">{result?.brandName ? <p>{Math.round(result?.foodNutrients[3]?.value)} cal, {result?.brandName}</p> : <p>{Math.round(result?.foodNutrients[3]?.value)} cal, GENERIC </p>}</p>
                    </li>
                </NavLink>
            </ul>
        </ol>
    )
}



export default FoodCard