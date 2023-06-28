import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import AddFoodModal from '../components/AddFoodModal'
import HomeFoodCard from '../components/HomeFoodCard'
import { NavLink } from 'react-router-dom'
import bg from '../images/bg.jpeg'

const Home = ({ handleLogout, user }) => {

  let [open, setOpen] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [page, setPage] = useState('Home')

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
    <div className="mx-auto min-h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <header>
        <Nav handleLogout={handleLogout} page={page} user={user} />
      </header>
      {open && <AddFoodModal getUserInfo={getUserInfo} user={user} open={open} toggleOpen={toggleOpen} />}
      <div class="mx-auto max-w-screen-xl px-4 sm:pb-16 pb-6 pt-2 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">

          {user?.email === 'guest@gmail.com' ?
            <div className='pb-4 pt-2'>
              <h1 className='text-center font-semibold text-2xl sm:text-3xl'>Welcome Guest!</h1>
              <h3 className='text-xs sm:text-sm text-center font-medium'>Create an account in order to access more features</h3>
            </div>
            :
            <div>
              <h1 className='text-center font-semibold text-2xl sm:text-3xl'>Welcome {userInfo?.username.split(' ')[0].charAt(0).toUpperCase() + userInfo?.username.slice(1).split(' ')[0]}</h1>
              <h3 className='text-xs sm:text-sm text-center font-medium pb-6'>Lets get tracking!</h3>
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
            </div>
          }

          <div className='mt-4 sm:flex-row items-center justify-center sm:justify-between bg-white pt-1 rounded-md shadow-md'>
            <div class="flex justify-center mx-4">
              <h2 class="text-sm text-gray-400">Total nutrients</h2>
            </div>
            {
              userInfo && userInfo.Ingredients.length > 0 ?
                <div class="flex flex-wrap justify-between pt-2 sm:mt-0 px-4 sm:px-8 rounded-b-md">
                  <div class="flex flex-col items-center justify-center px-4 bg-white rounded-b-md pb-4 sm:mt-0">
                    <p class="text-lg">Cal</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.calories)).reduce((acc, curr) => acc + curr, 0)}</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-4 bg-white sm:mt-0">
                    <p class="text-lg">Protein</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.protein)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-4 bg-white sm:mt-0">
                    <p class="text-lg">Carb</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.carbs)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-4 rounded-b-md bg-white sm:mt-0">
                    <p class="text-lg">Fat</p>
                    <p class="text-lg font-bold">{userInfo.Ingredients.map((item) => Math.round(item.fat)).reduce((acc, curr) => acc + curr, 0)}g</p>
                  </div>
                </div>
                :
                <div class="flex flex-wrap justify-between pt-2 sm:mt-0 sm:px-8 rounded-b-md">
                  <div class="flex flex-col items-center justify-center px-4 pb-4 bg-white rounded-b-md sm:mt-0">
                    <p class="text-lg">Cal</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-4 bg-white sm:mt-0">
                    <p class="text-lg">Protein</p>
                    <p class="text-lg font-bold">0g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-4 bg-white sm:mt-0">
                    <p class="text-lg">Carb</p>
                    <p class="text-lg font-bold">0g</p>
                  </div>
                  <div class="flex flex-col items-center justify-center px-4 pb-4 rounded-b-md bg-white sm:mt-0">
                    <p class="text-lg">Fat</p>
                    <p class="text-lg font-bold">0g</p>
                  </div>
                </div>
            }

          </div>
          <div className='px-4 pb-4 mt-4 rounded-md shadow-xl container bg-white overflow-auto h-80'>
            <div className='flex justify-center'>
              <button className='md:hidden border border-gray-800 px-1 rounded-lg mt-2' onClick={clearLog}>clear log</button>
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
          <div className='flex justify-center md:justify-between'>
            <button
              class="hidden md:inline-block rounded-lg bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
              onClick={toggleOpen}
            >
              Add Food
            </button>
            <button
              class="hidden md:inline-block rounded-lg bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
              onClick={clearLog}
            >Clear Log
            </button>
            <button
              class='md:hidden mt-4'
              onClick={toggleOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home