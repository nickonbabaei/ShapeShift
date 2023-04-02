import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import AddFood from '../components/AddFood'
import AddFoodModal from '../components/AddFood'


const Home = ({ handleLogout }) => {

  let [open, setOpen] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)
  const [searchResults, setSearchResults] = useState(null)

  // useEffect(() => {

  // }, [])
  const handleChange = (event) => {
    setSearchResults(event.target.value)

  }

  const toggleOpen = () => {
    setOpen(!open)
  }


  return (
    <div>
      <header>
        <Nav handleLogout={handleLogout} />
      </header>
      {open && <AddFoodModal open={open} toggleOpen={toggleOpen}/>}
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg border-4 border-black">
          <button
            class="inline-block rounded bg-indigo-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            onClick={toggleOpen}
          >
            Add Food
          </button>

          <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
            dolores deleniti inventore quaerat mollitia?
          </p>
        </div>
      </div>



    </div>
  )
}

export default Home