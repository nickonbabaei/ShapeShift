import React from 'react'

const FoodCard = ({name}) => {
    return (

        <li class="mb-2 pl-2 border-b-4">
            {/* <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">some description</p>
        </li>

    )
}

export default FoodCard