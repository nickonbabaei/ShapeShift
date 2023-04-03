import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeFoodCard = ({ food, deleteLog }) => {
    return (
        <ol className='flex w-full'>
            <button className="font-bold pr-2 hover:text-red-500" onClick={() => deleteLog(food)}>x</button>
            <ul class="w-full bg-white rounded-lg shadow-md">
                <NavLink>
                    <li class="p-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{food.name}</h4> 
                        <p className="text-base text-gray-500 dark:text-gray-400">{food.servingSize} serving, {Math.round(food.calories)} cal, {Math.round(food.protein)}g protein, {Math.round(food.fat)}g fat, {Math.round(food.carbs)}g carb</p>        
                    </li>
                </NavLink>
                
            </ul>
        </ol>
    )
}

export default HomeFoodCard