import React from 'react';
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logoo.png'
import bg from '../images/bg.jpeg'


const Login = ({ setUser }) => {

    const [formValues, setFormValues] = useState({ email: '', password: '' })

    let navigate = useNavigate()

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
            email: '',
            password: ''
        })
        setUser(payload)
        navigate('/')
    }

    return (
        <div className="mx-auto min-h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="px-6 pb-16 pt-4 lg:px-8 mx-auto max-w-lg">

                <img src={logo} className='w-28 sm:w-32 pb-8 mx-auto mt-6' />
                <h1 className="text-center text-sky-600 text-3xl sm:text-5xl sm:pt-8 sm:pb-12">
                    Sign in to <span className='text-white'>Shape</span>Shift
                </h1>
                <form onSubmit={handleSubmit} className="bg-white mt-6 mb-0 space-y-4 rounded-lg shadow-2xl px-4 pb-8 pt-4">
                    <p className="mx-auto pb-4 max-w-md text-center text-gray-500">
                        Sign in to continue tracking your daily caloric and macro intake. Let's keep making progress towards your goals!
                    </p>

                    <div>
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

                    <div>
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

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-sky-600 border border-sky-600 px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-sky-600"
                    >
                        Sign in
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        No account? <NavLink className="underline font-bold hover:text-sky-600" to={'/register'}>Sign up</NavLink> or <NavLink className="underline font-bold hover:text-sky-600" to={'/register'}>continue as guest</NavLink>
                    </p>
                    
                </form>
            </div>
        </div>
    );
};



export default Login;