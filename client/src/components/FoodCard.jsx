import React from 'react'
import { NavLink } from 'react-router-dom'

const FoodCard = ({ result, getSpecificFood }) => {

    return (
        <div className='flex w-full'>
            <div class="w-full bg-white shadow-md">
                <NavLink onClick={() => getSpecificFood(result)}>
                    <div class="px-4 py-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{result.description}</h4>
                        <p className="text-base text-gray-500">
                            {
                                result?.brandName ?
                                    <p>{Math.round(result?.foodNutrients[3]?.value)} cal, {result?.brandName}</p>
                                    :
                                    <p>{Math.round(result?.foodNutrients[3]?.value)} cal</p>
                            }
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default FoodCard