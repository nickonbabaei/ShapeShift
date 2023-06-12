import React from 'react'

const SearchBar = ({ handleChange, onSubmit }) => {


    return (
        <div className='relative rounded-xl'>
            <form class='flex' onSubmit={onSubmit}>
                <input
                    type="text"
                    name='search'
                    class="w-full rounded-tl-lg p-4 pr-12 text-sm shadow-sm"
                    placeholder="Search Food"
                    onChange={handleChange}

                />
                <button
                    type="submit"
                    class="inline-block shrink-0 rounded-tr-lg border border-sky-600 bg-sky-600 px-2 sm:px-12 text-sm font-medium text-white transition"
                >
                    Search
                </button>

            </form>

        </div>
    )
}

export default SearchBar