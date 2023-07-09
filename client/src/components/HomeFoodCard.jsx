import React from 'react'

const HomeFoodCard = ({ food, deleteLog }) => {

    return (
        <ol className=''>
            <ul class="flex justify-between w-full bg-white border-b-2">
                <li class="p-2">
                    <h4 className="text-gray-800 font-lg font-bold">{food.name}</h4>
                    <p className="text-base text-gray-500 dark:text-gray-400">{Math.round(food.calories)}cal, {Math.round(food.protein)}p, {Math.round(food.carbs)}c, {Math.round(food.fat)}f</p>
                </li>
                <button className="font-bold pr-2 py-6 hover:text-red-500" onClick={() => deleteLog(food)}>x</button>
            </ul>
        </ol>
    )
}

export default HomeFoodCard