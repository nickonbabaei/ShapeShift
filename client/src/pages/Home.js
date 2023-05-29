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
  const [selectedFood, setSelectedFood] = useState([])
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
    <div className='bg-sky-100'>
      <header>
        <Nav handleLogout={handleLogout} />
        <div className='flex justify-center'> <img src={ShapeShiftLogo} className="h-52 w-screen sm:rounded-b-lg sm:w-96 sm:h-48" /> </div>
      </header>
      {open && <AddFoodModal getUserInfo={getUserInfo} user={user} open={open} toggleOpen={toggleOpen}/>}
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
          <div className='flex justify-between'>
            <button
              class="inline-block rounded-lg bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
              onClick={toggleOpen}
            >
              Add Food
            </button>
            <button
              class="inline-block rounded-lg bg-sky-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
              onClick={clearLog}
            >Clear Log
            </button>
          </div>
          <div className='p-4 rounded-lg shadow-xl container bg-slate-100 overflow-auto h-80'>
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
                  <h1 className='font-bold text-2xl pt-2'>Nothing logged! Lets get logging! </h1>
                </div>
            }
          </div>

          {
            userInfo && userInfo.Ingredients.length > 0 ?
              <div className='mt-16 sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-lg shadow-md'>
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
              <div className='mt-16 sm:flex-row items-center justify-center sm:justify-between bg-gray-100 pt-1 pr-4 pl-4 pb-4 rounded-lg shadow-md'>
                <div class="flex justify-center ml-4 mr-4">
                  <h2 class="text-2xl underline font-bold justify-center">Total Nutrients Logged</h2>
                </div>
                <div className='flex justify-center pt-10 pb-10'>
                  <h1 className='font-bold'>No nutrients to display!</h1>

                </div>

              </div>
          }

        </div>


      </div>



    </div>
  )
}

export default Home