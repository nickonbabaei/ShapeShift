import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import AddFoodModal from '../components/AddFoodModal'
import HomeFoodCard from '../components/HomeFoodCard'


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



  return (
    <div>
      <header>
        <Nav handleLogout={handleLogout} />
      </header>
      {open && <AddFoodModal user={user} open={open} toggleOpen={toggleOpen} />}
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg border-2 border-black">
          <button
            class="inline-block rounded bg-indigo-600 px-8 py-3 mt-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            onClick={toggleOpen}
          >
            Add Food
          </button>
          <div>
            {userInfo?.Ingredient ?
              <div>
                {
                  userInfo.Ingredient.map((food) => (
                    <HomeFoodCard food={food} />
                  ))

                }

              </div>
              :
              <div>
                nothing logged
              </div>



            }
          </div>

        </div>
      </div>



    </div>
  )
}

export default Home