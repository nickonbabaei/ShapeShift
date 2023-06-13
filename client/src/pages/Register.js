import React from 'react'
import { RegisterUser, SignInUser } from '../services/Auth'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'

const Register = ({ setUser }) => {
    let navigate = useNavigate()
    const initalState = {
        age: '',
        weight: '',
        height: '',
        activity: '',
        description: '',
        sex: ''
    }
    const [goal, setGoal] = useState(initalState)
    const [userInfo, setUserInfo] = useState()
    const [renderGoal, setRender] = useState(false)




    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formValues.email && formValues.username && formValues.password) {
            let userInfo = await RegisterUser({
                email: formValues.email,
                username: formValues.username,
                password: formValues.password
            })
            setUserInfo(userInfo)
            toggleGoal()

        } else {
            return
        }
    }

    const handleGoalChange = (e) => {
        setGoal({ ...goal, [e.target.id]: e.target.value })
    }

    const handleGoalSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/api/goal/create/${userInfo.id}`, goal)
        let payload = await SignInUser({ email: formValues.email, password: formValues.password })
        setUser(payload)
        navigate('/')
    }

    const toggleGoal = () => {
        setRender(!renderGoal)
    }

    return (
        <div>
            {renderGoal ?
                <section >
                    <div class="mx-auto h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div class="lg:col-span-2 lg:py-12">
                                <h1 className='text-2xl text-center text-sky-600 font-bold'>Lets Get Started!</h1>
                                <p class="text-center pt-10 text-lg">
                                    Before we let you in, we need to gather some information about you and your goals.
                                    Please input your current sex, age, weight and height, as well as your activity level and general goal.
                                    This will allow us to calculate your daily caloric needs to reach your desired goal
                                </p>

                            </div>

                            <div class="pb-2 rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-12">
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
                                                class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                                placeholder="Age"
                                                type="text"
                                                id="age"
                                                onChange={handleGoalChange}
                                                required
                                            />

                                        </div>

                                        <div>
                                            <label class="sr-only" for="weight">Weight</label>
                                            <input
                                                class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                                placeholder="Weight (kg)"
                                                type="text"
                                                id="weight"
                                                onChange={handleGoalChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label class="sr-only" for="height">Height</label>
                                            <input
                                                class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                                placeholder="Height (cm)"
                                                type="text"
                                                id="height"
                                                onChange={handleGoalChange}
                                                required
                                            />
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
                                    <div class="mt-4">
                                        <button
                                            type="submit"
                                            class="inline-block w-full rounded-lg bg-sky-600 border border-sky-600 px-5 py-3 font-medium text-white hover:bg-white hover:text-sky-600 sm:w-auto"
                                        >
                                            Set Goal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section >
                :
                <section class="bg-white">
                    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <aside
                            class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                        >
                            <img
                                alt="Pattern"
                                src="data:image/jpeg;base64,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"
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </aside>

                        <main
                            aria-label="Main"
                            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                        >
                            <div class="max-w-xl lg:max-w-3xl">

                                <h1
                                    class="mt-6 text-2xl text-center text-sky-600 font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                >
                                    Join The ShapeShift Community
                                </h1>

                                <p class="mt-4 leading-relaxed text-gray-500">
                                    To get started, please register by creating an account with us. Simply enter your email address and create a secure password. Once you're registered, you can start tracking your daily caloric intake and reach your health goals. Let's get started!
                                </p>

                                <form onSubmit={handleSubmit} class="mt-8 grid grid-rows-5 grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label
                                            for="email"
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600"
                                        >
                                            <input
                                                type="name"
                                                name="username"
                                                placeholder="Full name"
                                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                                value={formValues.username}
                                                onChange={handleChange}
                                                required
                                            />

                                            <span
                                                class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                            >
                                                Full name
                                            </span>
                                        </label>
                                    </div>

                                    <div class="col-span-6">
                                        <label
                                            for="email"
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-sky-600"
                                        >
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                required
                                            />

                                            <span
                                                class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                            >
                                                Email
                                            </span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label
                                            for="password"
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-sky-600"
                                        >
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                                value={formValues.password}
                                                onChange={handleChange}
                                                required
                                            />

                                            <span
                                                class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                            >
                                                Password
                                            </span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label
                                            for="confirmPassword"
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-sky-600"
                                        >
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder='Confirm password'
                                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                                value={formValues.confirmPassword}
                                                onChange={handleChange}
                                                required
                                            />

                                            <span
                                                class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                            >
                                                Confirm password
                                            </span>
                                        </label>
                                    </div>

                                    <div class="col-start-2 col-end-6 justify-center sm:flex sm:items-center sm:gap-4">

                                        <button
                                            onClick={handleSubmit}
                                            class="inline-block shrink-0 rounded-md border border-sky-600 bg-sky-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-sky-600"
                                        >
                                            Create an account
                                        </button>

                                    </div>
                                    <div class="col-start-2 col-end-6 justify-center sm:flex sm:items-center sm:gap-4">
                                        <span class="pb-6 text-sm text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <NavLink to={'/'} className="text-gray-700 underline">Sign in</NavLink>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </section>




            }
        </div>

    )
}

export default Register