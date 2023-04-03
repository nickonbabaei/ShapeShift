import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import AddFoodModal from '../components/AddFoodModal'
import HomeFoodCard from '../components/HomeFoodCard'
import { NavLink } from 'react-router-dom'


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
    <div>
      <header>
        <Nav handleLogout={handleLogout} />
      </header>
      {open && <AddFoodModal getUserInfo={getUserInfo} user={user} open={open} toggleOpen={toggleOpen} />}
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
          <div className='flex justify-between'>
            <button
              class="inline-block rounded bg-indigo-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              onClick={toggleOpen}
            >
              Add Food
            </button>
            <button
              class="inline-block rounded bg-indigo-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              onClick={clearLog}
            >
              Clear Log
            </button>
          </div>
          <div className='mt-4 p-4 round-md shadow-md container overflow-auto h-80'>


            {
              userInfo ?
              <div>
                {console.log(userInfo.Ingredients)}
                  {
                    userInfo.Ingredients.map((food) => (
                      <HomeFoodCard food={food} deleteLog={deleteLog}/>
                    ))

                  }
                </div>
                
                :
                <div>
                  nothing logged
                </div>
                

            }
            {/* {
              userInfo.Ingredients.map((food) => (
                <HomeFoodCard food={food} />
              ))

            } */}






          </div>

        </div>
      </div>



    </div>
  )
}

export default Home