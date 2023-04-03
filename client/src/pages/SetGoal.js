import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'

const SetGoal = ({ user }) => {
  let {user_id} = useParams()
  const initalState = {
    age: '',
    weight: '',
    height: '',
    activity: '',
    description: '',
    sex: ''
  }
  let navigate = useNavigate()
  const [goal, setGoal] = useState(initalState)

  

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:3001/api/goal/create/${user_id}`, goal)
    setGoal(initalState)
    navigate('/home')
  }




  return (
    <section class="bg-gray-100">
      <div class="mx-auto h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div class="mt-8">
              <a href="" class="text-2xl font-bold text-pink-600">
                0151 475 4450
              </a>

              <address class="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} class="space-y-4">

              <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-4">
                <div>
                  <label class="sr-only" for="sex">Sex</label>
                  <select
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Age"
                    type="text"
                    id="sex"
                    onChange={handleChange}
                    required
                  >
                    <option disabled selected>Sex</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
                <div>
                  <label class="sr-only" for="age">Age</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Age"
                    type="text"
                    id="age"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label class="sr-only" for="weight">Weight</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Weight (kg)"
                    type="text"
                    id="weight"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label class="sr-only" for="height">Height</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Height (cm)"
                    type="text"
                    id="height"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label class="sr-only" for="activity">Activity Level</label>
                <select
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Activity Level"
                  type="text"
                  id="activity"
                  onChange={handleChange}
                  required>
                  <option disabled selected>
                    Activity Level
                  </option>
                  <option value="1.2">
                    Sedentary (little or no exercise)
                  </option>
                  <option value="1.375">
                    Lightly active (light exercise/sports 1-3 days/week)
                  </option>
                  <option value="1.55">
                    Moderately active (moderate exercise/sports 3-5 days/week)
                  </option>
                  <option value="1.725">
                    Very active (hard exercise/sports 6-7 days a week)
                  </option>
                  <option value="1.9">
                    Extra active (very hard exercise/sports & a physical job)
                  </option>
                </select>

              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                <div>
                  <label class="sr-only" for="description">Goal</label>
                  <select
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="description"
                    onChange={handleChange}
                    required
                  >
                    <option disabled selected>Goal</option>
                    <option value='600'>Dirty bulk (gain weight/muscle with no regards to fat gain)</option>
                    <option value='300'>Lean bulk (gain weight/muscle while putting on minimal fat)</option>
                    <option value='0'>Maintain your current weight</option>
                    <option value='-300'> Cut weight (lose weight while losing minimum muscle)</option>
                    <option value='-600'> Lose weight (lose weight with no regards to muscle loss) </option>
                    <option></option>

                  </select>
                </div>

                {/* <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div> */}
              </div>

              {/* <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    class="peer sr-only"
                    id="option1"
                    type="radio"
                    tabindex="-1"
                    name="option"
                  />

                  <label
                    for="option1"
                    class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabindex="0"
                  >
                    <span class="text-sm font-medium"> Option 1 </span>
                  </label>
                </div>

                <div>
                  <input
                    class="peer sr-only"
                    id="option2"
                    type="radio"
                    tabindex="-1"
                    name="option"
                  />

                  <label
                    for="option2"
                    class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabindex="0"
                  >
                    <span class="text-sm font-medium"> Option 2 </span>
                  </label>
                </div>

                <div>
                  <input
                    class="peer sr-only"
                    id="option3"
                    type="radio"
                    tabindex="-1"
                    name="option"
                  />

                  <label
                    for="option3"
                    class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabindex="0"
                  >
                    <span class="text-sm font-medium"> Option 3 </span>
                  </label>
                </div>
              </div> */}

              {/* <div>
                <label class="sr-only" for="message">Message</label>

                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div> */}

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Set Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SetGoal