import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Modal } from '@mui/material';

const EditGoalForm = ({toggleOpen, open, editGoal, handleGoalChange, handleGoalSubmit }) => {



    return (

        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div class=" mt-[10%] mr-[20%] ml-[20%] rounded-lg bg-white p- shadow-lg lg:col-span-3 lg:p-4">
                <form onSubmit={handleGoalSubmit} class="space-y-4">

                    <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-4">
                        <div>
                            <label class="sr-only" for="sex">Sex</label>
                            <select
                                class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                placeholder="Age"
                                type="text"
                                id="sex"
                                onChange={handleGoalChange}
                                value={editGoal.sex}
                                required
                            >
                                <option disabled selected>Sex</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="age"
                                class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="age"
                                    placeholder="Age"
                                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    onChange={handleGoalChange}
                                    value={editGoal.age}
                                    required
                                />

                                <span
                                    class="underline absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Age
                                </span>
                            </label>
                        </div>

                        <div>
                            <label
                                for="weight"
                                class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="weight"
                                    placeholder="Weight"
                                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    onChange={handleGoalChange}
                                    value={editGoal.weight}
                                    required
                                />

                                <span
                                    class="underline absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Weight(kg)
                                </span>
                            </label>
                        </div>

                        <div>
                            <label
                                for="height"
                                class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="height"
                                    placeholder="Height"
                                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    onChange={handleGoalChange}
                                    value={editGoal.height}
                                    required
                                />

                                <span
                                    class="underline absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Height(cm)
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="sr-only" for="activity">Activity Level</label>
                        <select
                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                            placeholder="Activity Level"
                            type="text"
                            id="activity"
                            onChange={handleGoalChange}
                            value={editGoal.activity}
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
                                class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                                id="description"
                                onChange={handleGoalChange}
                                value={editGoal.description}
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


                    </div>



                    <div class="flex gap-4 justify-center mt-4">
                        <button
                            type="submit"
                            class="inline-block w-full rounded-lg bg-black px-5 py-3 bg-sky-600 font-medium text-white transition hover:bg-white hover:text-sky-600 sm:w-auto"
                        >
                            Set Goal
                        </button>
                        <button
                            onClick={toggleOpen}
                            class="inline-block w-full rounded-lg bg-black px-5 py-3 bg-sky-600 font-medium text-white transition hover:bg-white hover:text-sky-600 sm:w-auto"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

        </Modal>

    )
}

export default EditGoalForm