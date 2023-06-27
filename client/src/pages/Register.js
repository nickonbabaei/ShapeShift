import React from 'react'
import { RegisterUser, SignInUser } from '../services/Auth'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import logo from '../images/logoo.png'
import bg from '../images/bg.jpeg'

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
                <section class="pt-4 px-6 pb-16 mx-auto min-h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
                    <div class="flex flex-col max-w-lg mx-auto">
                        <div class="py-12">
                            <h1 className='sm:text-5xl text-3xl text-center text-sky-600'>Lets Get Started!</h1>
                            <p class="text-center text-gray-500 pt-6 sm:pt-10 sm:text-xl text-md mx-auto">
                                Before we let you in, we need to gather information about you and your goals.
                                This will allow us to calculate your daily caloric needs in order to reach your desired goal
                            </p>
                        </div>

                        <div class="rounded-lg bg-white pb-8 px-4 pt-4 shadow-2xl">
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
                                <div class='flex justify-center'>
                                    <button
                                        type="submit"
                                        class="w-full rounded-lg bg-sky-600 border border-sky-600 px-5 py-3 font-medium text-white hover:bg-white hover:text-sky-600 sm:w-2/5"
                                    >
                                        Set Goal
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section >
                :
                <section class="pt-4 px-6 pb-16 mx-auto min-h-screen bg-cover" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}>
                    <img src={logo} className='w-28 sm:w-32 pb-8 mx-auto mt-6' />
                    <h1 class="text-2xl text-center text-sky-600 text-gray-900 sm:text-5xl text-3xl pb-6 sm:pt-8 sm:pb-16">
                        Join <span class='text-white'>Shape</span>Shift
                    </h1>
                    <div class="mx-auto max-w-lg px-4 py-4 bg-white rounded-lg shadow-2xl sm:px-6">
                        <p class="leading-relaxed text-gray-500 text-center pb-4">
                            Once registered, start tracking your daily caloric and macro intake in order to reach your health goals. Let's get started!
                        </p>
                        <form onSubmit={handleSubmit} class="mt-4 grid grid-rows-5 grid-cols-6 gap-6">
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

                            <div class="col-start-2 col-end-6 justify-center flex items-center sm:gap-4">

                                <button
                                    onClick={handleSubmit}
                                    class="shrink-0 rounded-md border border-sky-600 bg-sky-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-sky-600"
                                >
                                    Create an account
                                </button>

                            </div>
                            <div class="col-start-2 col-end-6 justify-center flex items-center sm:gap-4">
                                <span class="pb-6 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <NavLink to={'/'} className="text-gray-700 underline">Sign in</NavLink>
                                </span>
                            </div>
                        </form>
                    </div>
                </section>
            }
        </div>

    )
}

export default Register