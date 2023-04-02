import React from 'react'
import { NavLink } from 'react-router-dom'

const FoodCard = ({ name }) => {
    return (
        <ol className='flex'>
            {/* <div class="flex flex-col items-center"> */}
                <ul class="w-full bg-white rounded-lg shadow-md">
                    <NavLink>
                    <li class="px-4 py-2 border-b border-gray-300 hover:bg-gray-100">
                        <h4 className="text-gray-800 font-lg hover:text-blue-500">Ingredient 1</h4>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">some description</p>
                    </li>
                    </NavLink>
                </ul>
                <button>add food</button>
                
            {/* </div> */}

            {/* <li class="mb-2 pl-2 border-b-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">something</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">some description</p>
        </li> */}
        </ol>
    )
}

export default FoodCard