import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'
import header from '../images/header.png'


const Nav = ({ handleLogout, page, user }) => {
    const [open, setOpen] = useState(false)

    const handleDropDown = () => {
        setOpen(!open)
    }

    return (

        <div>
            {user?.email === 'guest@gmail.com' ?
                <div className="flex h-14 justify-between items-center px-4 md:gap-8 md:px-8">
                    <div className="md:hidden pl-1">
                        <button
                            onClick={handleDropDown}
                            className="rounded bg-blur p-2 text-gray-600 transition hover:text-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div
                            id="dropdown"
                            className={`flex flex-col absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow-xl px-2 ${open ? "block" : "hidden"}`}
                        >
                            <NavLink onClick={handleLogout} to="/" className='py-2'>Sign in</NavLink>
                            <NavLink onClick={handleLogout} to="/register" className='py-2'>Register</NavLink>
                        </div>
                    </div>

                    <div className='md:hidden pl-8'>
                        <h2 className='font-medium sm:text-xl text-lg'>{page}</h2>
                    </div>
                    <div>
                        <img src={Logo} className='w-2/3 md:w-4/5 md:pt-2 mx-auto' />
                    </div>

                    <div className='hidden md:flex'>
                        <div><NavLink
                            className="hidden md:block rounded-md mr-6 bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition border hover:bg-transparent hover:border-sky-600 hover:text-sky-600"
                            onClick={handleLogout}
                            to="/"
                        >
                            Sign in
                        </NavLink></div>

                        <div>
                            <NavLink
                                className="hidden md:block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition border hover:bg-transparent hover:border-sky-600 hover:text-sky-600"
                                onClick={handleLogout}
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>

                </div>
                :
                <div className="flex h-14 justify-between items-center px-4 md:gap-8 md:px-8">
                    <div className="md:hidden pl-1">
                        <button
                            onClick={handleDropDown}
                            className="rounded bg-blur p-2 text-gray-600 transition hover:text-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div
                            id="dropdown"
                            className={`flex flex-col absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow-xl px-2 ${open ? "block" : "hidden"}`}
                        >
                            <NavLink to='/' className='py-2'>Home</NavLink>
                            <NavLink to='/goalpage' className='py-2'>Details</NavLink>
                            <NavLink onClick={handleLogout} to="/" className='py-2'>Sign Out</NavLink>
                        </div>
                    </div>

                    <div className='md:hidden pl-8'>
                        <h2 className='font-medium sm:text-xl text-lg'>{page}</h2>
                    </div>
                    <div className='md:hidden'>
                        <img src={Logo} className='w-2/3 mx-auto' />
                    </div>

                    <div className='hidden md:flex items-center'>
                        <div>
                        <img src={Logo} className='w-2/3 pr-2'/>
                        </div>
                        <NavLink className="pr-8 text-sky-600 hover:text-white pb-1" to="/">
                            <h1>Home</h1>
                        </NavLink>

                        <NavLink className="text-sky-600 transition hover:text-white pb-1" to='/goalpage'>
                            Details
                        </NavLink>
                    </div>


                    <NavLink
                        className="hidden md:block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition border hover:bg-transparent hover:border-sky-600 hover:text-sky-600"
                        onClick={handleLogout}
                        to="/"
                    >
                        Sign Out
                    </NavLink>
                </div>
            }
        </div>



    );
};

export default Nav;