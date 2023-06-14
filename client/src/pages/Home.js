import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import AddFoodModal from '../components/AddFoodModal'
import HomeFoodCard from '../components/HomeFoodCard'
import { NavLink } from 'react-router-dom'
import ShapeShiftLogo from '../images/ShapeShiftLogo.png'


const Home = ({ handleLogout, user }) => {

  let [open, setOpen] = useState(false)
  // const [selectedFood, setSelectedFood] = useState([])
  // const [logged, setLogged] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [page, setPage] = useState('Dashboard')

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
    <div className="mx-auto min-h-screen bg-cover" style={{backgroundImage: 'url("data:image/jpeg;base64,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")'}}>
      <header>
        <Nav handleLogout={handleLogout} page={page} />
        <div className='hidden sm:flex sm:justify-center'> <img src={ShapeShiftLogo} className="h-52 w-screen sm:rounded-b-lg sm:w-96 sm:h-48" /> </div>
      </header>
      {open && <AddFoodModal getUserInfo={getUserInfo} user={user} open={open} toggleOpen={toggleOpen} />}
      <div class="mx-auto max-w-screen-xl px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
          <div className='flex flex-col items-center justify-center bg-white py-1 rounded-md shadow-md'>
            <p className='text-gray-400 text-sm'>Calories left</p>
            {userInfo && userInfo?.Ingredients.length > 0 ?
              <h1 className='text-black text-4xl font-semibold'>
                {userInfo?.Goal.calories - userInfo.Ingredients.map((item) => Math.round(item.calories)).reduce((acc, curr) => acc + curr, 0)} <span className='font-light'>cal</span>
              </h1>
              :
              <h1 className='text-black text-4xl font-semibold'>
                {userInfo?.Goal.calories} <span className='font-light'>cal</span>
              </h1>
            }

          </div>
          <div className='mt-4 sm:flex-row items-center justify-center sm:justify-between bg-white pt-1 rounded-md shadow-md'>
            <div class="flex justify-center ml-4 mr-4">
              <h2 class="text-sm text-gray-400">Total nutrients</h2>
            </div>
            {
              userInfo && userInfo.Ingredients.length > 0 ?
                <div class="flex justify-between pt-2 sm:mt-0 sm:px-8 rounded-b-md">
                  <div class="flex flex-col items-center justify-center px-4 pb-1 bg-white rounded-b-md sm:mt-0">
                    <p class="text-lg">Cal</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.calories)).reduce((acc, curr) => acc + curr, 0)}</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-1  bg-white sm:mt-0">
                    <p class="text-lg">Protein</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.protein)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-1 bg-white sm:mt-0">
                    <p class="text-lg">Carb</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.carbs)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-1 rounded-b-md bg-white sm:mt-0">
                    <p class="text-lg">Fat</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.fat)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                </div>
                :
                <div class="flex justify-between pt-2 sm:mt-0 sm:px-8 rounded-b-md">
                  <div class="flex flex-col items-center justify-center px-4 pb-1 bg-white rounded-b-md sm:mt-0">
                    <p class="text-lg">Cal</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-1  bg-white sm:mt-0">
                    <p class="text-lg">Protein</p>
                    <p class="text-lg font-bold">0g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-1 bg-white sm:mt-0">
                    <p class="text-lg">Carb</p>
                    <p class="text-lg font-bold">0g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-1 rounded-b-md bg-white sm:mt-0">
                    <p class="text-lg">Fat</p>
                    <p class="text-lg font-bold">0g</p>
                  </div>
                </div>
            }

          </div>
          <div className='px-4 pb-4 mt-4 rounded-md shadow-xl container bg-white overflow-auto h-80'>
            <div className='flex justify-center'>
              <button className='sm:hidden border border-gray-800 px-1 rounded-lg mt-2' onClick={clearLog}>clear log</button>
            </div>

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
                  <h1 className='font-bold text-2xl pt-2'>Logged food displays here!</h1>
                </div>
            }
          </div>
          <div className='flex justify-center sm:justify-between'>
            <button
              class="hidden sm:inline-block rounded-lg bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
              onClick={toggleOpen}
            >
              Add Food
            </button>
            <button
              class="hidden sm:inline-block rounded-lg bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
              onClick={clearLog}
            >Clear Log
            </button>
            <button
              class='sm:hidden mt-4'
              onClick={toggleOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>


            </button>
          </div>

          {/* {
            userInfo && userInfo.Ingredients.length > 0 ?
              <div className='mt-16 sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-md shadow-md'>
                <div class="flex justify-center ml-4 mr-4">
                  <h2 class="text-2xl font-bold">Total Nutrients Logged</h2>
                </div>
                <div class="flex justify-center sm:justify-center pt-4 sm:mt-0">
                  <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 sm:mt-0">
                    <p class="text-lg font-semibold underline">Calories</p>
                    <p id="calories" class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.calories)).reduce((acc, curr) => acc + curr, 0)}</p>
                  </div>
                  <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 sm:mt-0">
                    <p class="text-lg font-semibold underline">Protein</p>
                    <p id="protein" class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.protein)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md mr-4 sm:mt-0">
                    <p class="text-lg font-semibold underline">Carbs</p>
                    <p id="carbs" class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.carbs)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md sm:mt-0">
                    <p class="text-lg font-semibold underline">Fat</p>
                    <p id="fat" class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.fat)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                </div>

              </div>
              :
              <div className='mt-16 sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-md shadow-md'>
                <div class="flex justify-center ml-4 mr-4">
                  <h2 class="text-2xl underline font-bold justify-center">Total Nutrients Logged</h2>
                </div>
                <div className='flex justify-center pt-10 pb-10'>
                  <h1 className='font-bold'>No nutrients to display!</h1>

                </div>

              </div>
          } */}

        </div>


      </div>



    </div>
  )
}

export default Home