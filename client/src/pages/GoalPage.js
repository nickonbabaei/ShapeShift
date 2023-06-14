import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import EditGoalForm from '../components/EditGoalForm'
import ShapeShiftLogo from '../images/ShapeShiftLogo.png'

const GoalPage = ({ user, handleLogout }) => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    const [goalInfo, setGoalInfo] = useState()
    const [editGoal, setEditGoal] = useState()
    const [page, setPage] = useState('Info')

    const handleGoalChange = (e) => {
        setEditGoal({ ...editGoal, [e.target.id]: e.target.value })
    }

    const handleGoalSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/api/goal/update/${goalInfo.Goal.id}`, editGoal)
        toggleOpen()
        getGoalInfo()

    }


    const getGoalInfo = async () => {
        let response = await axios.get(`http://localhost:3001/api/user/get/${user?.id}`)
        setGoalInfo(response.data)
        setEditGoal(response.data.Goal)
    }


    useEffect(() => {
        getGoalInfo()
    }, [])

    return goalInfo && (
        <div className="mx-auto min-h-screen bg-cover" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}>
            <Nav handleLogout={handleLogout} page={page} />
            {/* <div className='flex justify-center'> <img src={ShapeShiftLogo} className="h-52 w-screen sm:rounded-b-lg sm:w-96 sm:h-48" /> </div> */}
            <div className='mx-auto px-4'>


                <div class="mx-auto max-w-lg text-center pb-6 pt-2">
                    <h2 class="text-2xl font-bold sm:text-4xl"> {goalInfo.username.split(' ')[0].charAt(0).toUpperCase() + goalInfo.username.slice(1).split(' ')[0]}'s Information and Goal</h2>
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
                        class="inline-block rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-sky-600"
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