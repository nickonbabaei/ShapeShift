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
                    class="inline-block shrink-0 rounded-md border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-sky-600 focus:outline-none focus:ring active:text-blue-500"
                >
                    Search
                </button>

            </form>

        </div>
    )
}

export default SearchBar