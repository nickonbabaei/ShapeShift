import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditGoalForm from '../components/EditGoalForm'

const GoalPage = ({ user, handleLogout }) => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    const [goalInfo, setGoalInfo] = useState()
    const [editGoal, setEditGoal] = useState()

    const handleGoalChange = (e) => {
        setEditGoal({ ...editGoal, [e.target.id]: e.target.value })
    }

    const handleGoalSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/api/goal/update/${goalInfo.Goal.id}`, editGoal)
        toggleOpen()
        getGoalInfo()
       
    }

    let navigate = useNavigate()

    const getGoalInfo = async () => {
        let response = await axios.get(`http://localhost:3001/api/user/get/${user?.id}`)
        setGoalInfo(response.data)
        setEditGoal(response.data.Goal)
    }
    // const getupdatedGoalInfo = async () => {
    //     let response = await axios.get(`http://localhost:3001/api/user/get/${goalInfo.id}`)
    //     setGoalInfo(response.data)
    // }


    useEffect(() => {
        getGoalInfo()
    }, [])









    return goalInfo && (
        <section class="bg-sky-200 text-black">
            <Nav handleLogout={handleLogout} />
            <div
                class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div class="mx-auto max-w-lg text-center pb-6">
                    <h2 class="text-3xl font-bold sm:text-4xl"> {goalInfo.username.split(' ')[0]}'s Information and Goal</h2>
                </div>

                <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition"

                    >
                        <h2 class="mt-4 text-xl font-bold text-black">Activity Level</h2>

                        <p class="mt-1 text-sm text-black">
                            {goalInfo.Goal.activity === '1.2' ? 'Sedentary (little or no exercise)'
                                : goalInfo.Goal.activity === '1.375' ? 'Lightly active (light exercise/sports 1-3 days/week)'
                                    : goalInfo.Goal.activity === '1.55' ? 'Moderately active (moderate exercise/sports 3-5 days/week)'
                                        : goalInfo.Goal.activity === '1.725' ? 'Very active (hard exercise/sports 6-7 days a week)'
                                            : goalInfo.Goal.activity === '1.9' ? 'Extra active (very hard exercise/sports & a physical job)'
                                                : ''
                            }
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition "
                        href="/services/digital-campaigns"
                    >

                        <h2 class="mt-4 text-xl font-bold text-black">Body Goal</h2>

                        <p class="mt-1 text-sm text-black">
                            {goalInfo.Goal.description === '600' ? 'Dirty bulk (gain weight/muscle with no regards to fat gain)'
                                : goalInfo.Goal.description === '300' ? 'Lean bulk (gain weight/muscle while putting on minimal fat)'
                                    : goalInfo.Goal.description === '0' ? 'Maintain your current weight'
                                        : goalInfo.Goal.description === '-300' ? 'Cut weight (lose weight while losing minimum muscle)'
                                            : goalInfo.Goal.description === '-600' ? 'Lose weight (lose weight with no regards to muscle loss)'
                                                : ''
                            }
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition "
                    >

                        <h2 class="mt-4 text-xl font-bold text-black">{goalInfo.Goal.age} years old</h2>

                        {/* <p class="mt-1 text-sm text-black">

                        </p> */}
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition  lg:row-start-3"

                    >


                        <h2 class="mt-4 text-xl font-bold text-black">{goalInfo.Goal.height} centimeters tall</h2>

                        <p class="mt-1 text-sm text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition  lg:row-start-3"

                    >

                        <h2 class="mt-4 text-xl font-bold text-black">Weighing in at {goalInfo.Goal.weight} kilograms</h2>

                        <p class="mt-1 text-sm text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition  lg:row-start-3"
                    >
                        <h2 class="mt-4 text-xl font-bold text-black">{goalInfo.Goal.sex.charAt(0).toUpperCase() + goalInfo.Goal.sex.slice(1)}</h2>

                        <p class="mt-1 text-sm text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>
                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition  lg:row-start-2 lg:col-start-2"
                    >

                        <h2 class="mt-4 text-xl font-bold text-black">Based on your goal, you need {goalInfo.Goal.calories} calories per day</h2>
                    </a>
                </div>

                <div class="mt-12 text-center">
                    <button
                        onClick={toggleOpen}
                        class="inline-block rounded bg-sky-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-white hover:text-sky-600 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Update Info/Goal
                    </button>
                </div>
            </div>
            {open && <EditGoalForm toggleOpen={toggleOpen} open={open} editGoal={editGoal} handleGoalChange={handleGoalChange} handleGoalSubmit={handleGoalSubmit}/>}
                
            

        </section>

    )
}

export default GoalPage