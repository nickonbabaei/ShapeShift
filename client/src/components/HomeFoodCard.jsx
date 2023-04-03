import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeFoodCard = ({ food }) => {
    return (
        <ol className='flex w-full'>
            <ul class="w-full bg-white rounded-lg shadow-md">
                
                    <li class="px-4 py-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{food.name}</h4>
                        <p className="text-base text-gray-500 dark:text-gray-400">{Math.round(food.calories)} cal, {food.servingInfo.split('= ')[1].split[0]}, {food.servingSize} servings</p>
                    </li>
                
            </ul>
        </ol>
    )
}

export default HomeFoodCard