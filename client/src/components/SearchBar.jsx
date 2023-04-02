import React from 'react'

const SearchBar = ({ handleChange, onSubmit }) => {


    return (
        <div className='relative'>
            <form class='flex border-b-4' onSubmit={onSubmit}>
                <input
                    type="text"
                    name='search'
                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Search Food"
                    onChange={handleChange}

                />
                <button
                    type="submit"
                    class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                    Search
                </button>

            </form>

            {/* <span
                    class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                </span> */}
        </div>
    )
}

export default SearchBar