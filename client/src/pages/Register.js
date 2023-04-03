import React from 'react'
import { RegisterUser, SignInUser } from '../services/Auth'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'

const Register = ({setUser}) => {
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
        let payload = await SignInUser({email: formValues.email, password: formValues.password})
        setUser(payload)
        navigate('/')
    }

    const toggleGoal = () => {
        setRender(!renderGoal)
    }

    return (
        <div>
            {renderGoal ?
                <section class="bg-gray-100" >
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
                                <form onSubmit={handleGoalSubmit} class="space-y-4">

                                    <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-4">
                                        <div>
                                            <label class="sr-only" for="sex">Sex</label>
                                            <select
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                                            class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
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
                                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </aside>

                        <main
                            aria-label="Main"
                            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                        >
                            <div class="max-w-xl lg:max-w-3xl">
                                <a class="block text-blue-600" href="/">
                                    <span class="sr-only">Home</span>
                                    <svg
                                        class="h-8 sm:h-10"
                                        viewBox="0 0 28 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>

                                <h1
                                    class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                >
                                    Welcome to Squid 🦑
                                </h1>

                                <p class="mt-4 leading-relaxed text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                    dolorum aliquam, quibusdam aperiam voluptatum.
                                </p>

                                <form onSubmit={handleSubmit} class="mt-8 grid grid-rows-5 grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label
                                            for="email"
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
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
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
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
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
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
                                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
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

                                    <div class="col-span-6 justify-center sm:flex sm:items-center sm:gap-4">

                                        <button
                                            onClick={handleSubmit}
                                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        >
                                            Create an account
                                        </button>

                                    </div>
                                    <div class="col-span-6 justify-center sm:flex sm:items-center sm:gap-4">
                                        <span class="mt-4 text-sm text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <NavLink to={'/'} class="text-gray-700 underline"> Log in</NavLink>.
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