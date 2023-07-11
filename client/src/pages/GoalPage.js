import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import EditGoalForm from '../components/EditGoalForm'
import bg from '../images/bg.jpeg'
import Client from '../services/api'

const GoalPage = ({ user, handleLogout }) => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    const [goalInfo, setGoalInfo] = useState()
    const [editGoal, setEditGoal] = useState()
    const [page, setPage] = useState('Details')

    const handleGoalChange = (e) => {
        setEditGoal({ ...editGoal, [e.target.id]: e.target.value })
    }

    const handleGoalSubmit = async (e) => {
        e.preventDefault()
        await Client.put(`/api/goal/update/${goalInfo.Goal.id}`, editGoal)
        toggleOpen()
        getGoalInfo()

    }


    const getGoalInfo = async () => {
        let response = await Client.get(`/api/user/get/${user?.id}`)
        setGoalInfo(response.data)
        setEditGoal(response.data.Goal)
    }


    useEffect(() => {
        getGoalInfo()
    }, [])

    return goalInfo && (
        <div className="mx-auto min-h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <Nav handleLogout={handleLogout} page={page} />
            <div className='mx-auto px-4'>
                <div class="mx-auto max-w-lg text-center pb-6 pt-2">
                    <h2 class="text-2xl font-semibold sm:text-3xl"> {goalInfo.username.split(' ')[0].charAt(0).toUpperCase() + goalInfo.username.slice(1).split(' ')[0]}'s Details</h2>
                </div>
                <div className='mx-auto max-w-screen-sm w-full flex flex-col bg-white px-4 shadow-lg rounded-md'>
                    <div className='flex justify-between border-b-2 py-2'>
                        <h2 class="text-md font-semibold text-black">Age:</h2>
                        <h2 class="text-md text-black">{goalInfo.Goal.age}</h2>
                    </div>
                    <div className='flex justify-between border-b-2 py-2'>
                        <h2 class="text-md font-semibold text-black">Height:</h2>
                        <h2 class="text-md text-black">{goalInfo.Goal.height} cm</h2>
                    </div>
                    <div className='flex justify-between border-b-2 py-2'>
                        <h2 class="text-md font-semibold text-black">Weight:</h2>
                        <h2 class="text-md text-black">{goalInfo.Goal.weight} kg</h2>
                    </div>
                    <div className='flex justify-between border-b-2 py-2'>
                        <h2 class="text-md font-semibold text-black">Sex:</h2>
                        <h2 class="text-md text-black">{goalInfo.Goal.sex.charAt(0).toUpperCase() + goalInfo.Goal.sex.slice(1)}</h2>
                    </div>
                    <div className='justify-between border-b-2 py-2 sm:flex'>
                        <h2 class="text-md font-semibold text-black">Activity Level:</h2>
                        <p class="mt-1 text-sm text-black">
                            {goalInfo.Goal.activity === '1.2' ? 'Sedentary (little to no exercise)'
                                : goalInfo.Goal.activity === '1.375' ? 'Lightly active (light exercise/sports 1-3 days/week)'
                                    : goalInfo.Goal.activity === '1.55' ? 'Moderately active (moderate exercise/sports 3-5 days/week)'
                                        : goalInfo.Goal.activity === '1.725' ? 'Very active (hard exercise/sports 6-7 days a week)'
                                            : goalInfo.Goal.activity === '1.9' ? 'Extra active (very hard exercise/sports & a physical job)'
                                                : ''
                            }
                        </p>
                    </div>
                    <div className='justify-between py-2 sm:flex'>
                        <h2 class="text-md font-semibold text-black">Goal:</h2>
                        <p class="mt-1 text-sm text-black">
                            {goalInfo.Goal.description === '600' ? 'Dirty bulk (gain weight/muscle with no regards to fat gain)'
                                : goalInfo.Goal.description === '300' ? 'Lean bulk (gain weight/muscle while putting on minimal fat)'
                                    : goalInfo.Goal.description === '0' ? 'Maintain your current weight'
                                        : goalInfo.Goal.description === '-300' ? 'Cut weight (lose weight while losing minimum muscle)'
                                            : goalInfo.Goal.description === '-600' ? 'Lose weight (lose weight with no regards to muscle loss)'
                                                : ''
                            }
                        </p>
                    </div>
                </div>
                <div className='mx-auto text-center max-w-screen-sm w-full bg-white px-4 py-2 mt-8 shadow-lg rounded-md'>
                    <h2 class="text-xl font-bold text-black">You need {goalInfo.Goal.calories} calories per day</h2>
                </div>
                <div class='flex justify-center pt-6 pb-16'>
                    <button
                        onClick={toggleOpen}
                        class="inline-block rounded bg-sky-600 px-6 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
                    >
                        Update
                    </button>

                </div>

            </div>


            <div class="mt-6 text-center">
                {/* <button
                    onClick={toggleOpen}
                    class="inline-block rounded bg-sky-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-white hover:text-sky-600"
                >
                    Update
                </button> */}
            </div>
            {open && <EditGoalForm toggleOpen={toggleOpen} open={open} editGoal={editGoal} handleGoalChange={handleGoalChange} handleGoalSubmit={handleGoalSubmit} />}



        </div>

    )
}

export default GoalPage