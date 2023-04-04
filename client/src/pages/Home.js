import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import AddFoodModal from '../components/AddFoodModal'
import HomeFoodCard from '../components/HomeFoodCard'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import ShapeShiftLogo from '../images/ShapeShiftLogo.png'


const Home = ({ handleLogout, user }) => {

  let [open, setOpen] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)
  const [logged, setLogged] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const getUserInfo = async () => {
    const response = await axios.get(`http://localhost:3001/api/user/get/${user?.id}`)
    setUserInfo(response.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const toggleOpen = () => {
    setOpen(!open)
  }

  const clearLog = async () => {
    for (let food of userInfo.Ingredients) {
      await axios.delete(`http://localhost:3001/api/ingredient/delete/${food.id}`)
    }
    getUserInfo()

  }

  const deleteLog = async (food) => {
    await axios.delete(`http://localhost:3001/api/ingredient/delete/${food.id}`)
    getUserInfo()
  }



  return (
    <div className='bg-sky-200'>
      <header>
        <Nav handleLogout={handleLogout} />
        <div className='flex justify-center'> <img src={ShapeShiftLogo} style={{ borderRadius: '4px', width: '28rem', height: '12rem' }} /> </div>
      </header>
      {open && <AddFoodModal getUserInfo={getUserInfo} user={user} open={open} toggleOpen={toggleOpen} />}
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">

          <div className='flex justify-center pb-4'>
            <h1 className='font-mono text-5xl font-bold'>Your Logged Food</h1>
          </div>
          <div className='flex justify-between'>
            <button
              class="inline-block rounded bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              onClick={toggleOpen}
            >
              Add Food
            </button>
            <button
              class="inline-block rounded bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              onClick={clearLog}
            >
              Clear Log
            </button>
          </div>
          <div className='p-4 round-md shadow-xl container bg-slate-100 overflow-auto h-80'>


            {
              userInfo && userInfo.Ingredients.length > 0 ?
                <div>
                  {
                    userInfo.Ingredients.map((food) => (
                      <HomeFoodCard food={food} deleteLog={deleteLog} />
                    ))

                  }
                </div>

                :
                <div className='flex justify-center'>
                  <h1 className='font-bold text-3xl pt-2'>Nothing logged! Lets get logging </h1>
                </div>


            }





          </div>
        </div>
        <div className='sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-md shadow-md'>
          <div class="flex-col ml-4 mr-4 sm:justify-start">
            <h2 class="text-2xl font-bold justify-center">Total Nutrients</h2>
          </div>
          <div class="flex justify-center sm:justify-center mr-4 pt-4 sm:mt-0">
            <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4 sm:mt-0">
              <p class="text-lg font-semibold underline">Calories</p>
              <p id="calories" class="text-lg font-bold">{Math.round(foodDetails.nf_calories * 10) / 10}</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4 sm:mt-0">
              <p class="text-lg font-semibold underline">Protein</p>
              <p id="protein" class="text-lg font-bold">{Math.round(foodDetails.nf_protein * 10) / 10}g</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 mt-4 sm:mt-0">
              <p class="text-lg font-semibold underline">Carbs</p>
              <p id="carbs" class="text-lg font-bold">{Math.round(foodDetails.nf_total_carbohydrate * 10) / 10}g</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mt-4 sm:mt-0">
              <p class="text-lg font-semibold underline">Fat</p>
              <p id="fat" class="text-lg font-bold">{Math.round(foodDetails.nf_total_fat * 10) / 10}g</p>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Home