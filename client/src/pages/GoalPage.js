import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const GoalPage = ({ user }) => {
    const [goalInfo, setGoalInfo] = useState(null)

    const getGoalInfo = async () => {
        let response = await axios.get(`http://localhost:3001/api/user/get/${user?.id}`)
        setGoalInfo(response.data)
    }

    useEffect(() => {
        getGoalInfo()
    }, [])






    return goalInfo && (
        <section class="bg-gray-900 text-white">
            <div
                class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-3xl font-bold sm:text-4xl"> {goalInfo.username.split(' ')[0]}'s Information and Goal</h2>

                    <p class="mt-4 text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                    >
                        <h2 class="mt-4 text-xl font-bold text-white">Activity Level</h2>

                        <p class="mt-1 text-sm text-gray-300">
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
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/services/digital-campaigns"
                    >

                        <h2 class="mt-4 text-xl font-bold text-white">Body Goal</h2>

                        <p class="mt-1 text-sm text-gray-300">
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
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >

                        <h2 class="mt-4 text-xl font-bold text-white">{goalInfo.Goal.age} years old</h2>

                        {/* <p class="mt-1 text-sm text-gray-300">

                        </p> */}
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 lg:row-start-3"

                    >


                        <h2 class="mt-4 text-xl font-bold text-white">{goalInfo.Goal.height} centimeters tall</h2>

                        <p class="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 lg:row-start-3"

                    >

                        <h2 class="mt-4 text-xl font-bold text-white">Weighing in at {goalInfo.Goal.weight} kilograms</h2>

                        <p class="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 lg:row-start-3"
                    >
                        <h2 class="mt-4 text-xl font-bold text-white">{goalInfo.Goal.sex.charAt(0).toUpperCase() + goalInfo.Goal.sex.slice(1)}</h2>

                        <p class="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>
                    <a
                        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 lg:row-start-2 lg:col-start-2"
                    >

                        <h2 class="mt-4 text-xl font-bold text-white">Based on your goal, you need {goalInfo.Goal.calories} calories per day</h2>
                    </a>
                </div>

                <div class="mt-12 text-center">
                    <a
                        href="#"
                        class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Edit Info
                    </a>
                </div>
            </div>
        </section>

    )
}

export default GoalPage