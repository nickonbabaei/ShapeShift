import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeFoodCard = ({ food, deleteLog }) => {
    return (
        <ol className='flex w-full'>
            <ul class="w-full bg-white rounded-lg shadow-md">
                <button onClick={() => deleteLog(food)}>x</button>
                <NavLink>
                    <li class="p-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg font-bold">{food.name}</h4> 
                        <p className="text-base text-gray-500 dark:text-gray-400">{Math.round(food.calories)} cal, {food.servingSize} serving</p>        
                    </li>
                </NavLink>
            </ul>
        </ol>
    )
}

export default HomeFoodCard