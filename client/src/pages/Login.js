import React from 'react';
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logoo.png'


const Login = ({ setUser, updateUser }) => {

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
    //     <div className="h-screen bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${LoginPhoto})` }}>
    //   <div className='flex flex-col max-w-md justify-center mx-auto w-full bg-slate-800 bg-opacity-80'>
    //     <h1 className='text-white text-3xl my-20'>Login</h1>
    //     <form onSubmit={handleSubmit} className='flex flex-col mx-auto'>
    //       <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formValues.email} className='my-4 bg-transparent border-b-2 text-white outline-none' required />
    //       <input type='password' placeholder='Password' onChange={handleChange} name='password' value={formValues.password} className='my-4 bg-transparent border-b-2 text-white outline-none' required />
    //       <div className='flex flex-col text-white my-20'>
    //         <button className="mb-5 text-black bg-white hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">Login</button>
    //         <Link to='/register'>
    //           <p>Dont have an account?</p><button className=''>Sign up here</button>
    //         </Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>


        <div className="mx-auto min-h-screen bg-cover" style={{backgroundImage: 'url("data:image/jpeg;base64,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")'}}>
            <div className="px-6 pb-16 pt-4 lg:px-8 mx-auto max-w-lg">
                
            <img src={logo} className='w-32 pb-8 mx-auto md:mt-6'/>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white md:mt-6 mb-0 space-y-4 rounded-lg shadow-2xl px-4 pb-8 pt-4"
                >
                    
                    <h1 className="text-center text-2xl font-bold text-sky-600 sm:text-3xl">
                        Hi, Welcome Back!
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Sign in to continue tracking your daily caloric and macro intake. Let's keep making progress towards your goals!
                    </p>
                    <p className="text-center text-sky-600 text-lg font-medium">Sign in to your account</p>

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
                        No account?
                        <NavLink className="underline" to={'/register'}>Sign up</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};



export default Login;