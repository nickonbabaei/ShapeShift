import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeFoodCard = ({ food, deleteLog }) => {
    return (
        <ol className=''>
            <ul class="flex justify-between w-full bg-white rounded-md shadow-md">
                <NavLink>
                    <li class="p-2 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{food.name}</h4> 
                        <p className="text-base text-gray-500 dark:text-gray-400">{Math.round(food.calories)}cal, {Math.round(food.protein)}p, {Math.round(food.carbs)}c, {Math.round(food.fat)}f</p>        
                    </li>
                </NavLink>
                <button className="font-bold pr-2 hover:text-red-500" onClick={() => deleteLog(food)}>x</button>
            </ul>
        </ol>
    )
}

export default HomeFoodCard