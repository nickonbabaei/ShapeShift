import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'


const Nav = ({ handleLogout, page }) => {
    const [open, setOpen] = useState(false)

    const handleDropDown = () => {
        setOpen(!open)
    }

    return (
        <div className="sm:mx-auto flex h-14 justify-between items-center pl-3 md:gap-8 md:px-8">

            <div className="md:hidden">
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
                    className={`flex flex-col absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 px-2 ${open ? "block" : "hidden"}`}
                >
                    <NavLink to='/' className='py-2'>Home</NavLink>
                    <NavLink to='/goalpage' className='py-2'>Details</NavLink>
                    <NavLink onClick={handleLogout} to="/" className='py-2'>Sign Out</NavLink>
                </div>
            </div>

            <div className='md:hidden pl-10'>
                <h2>{page}</h2>
            </div>
            <div className='md:hidden'>
                <img src={Logo} className='w-2/3 mx-auto' />
            </div>

            <NavLink className="hidden md:block text-sky-600 hover:text-white" to="/">
                <h1>Home</h1>
            </NavLink>
            <div className="hidden md:flex flex-1 items-center justify-between gap-6">
                <NavLink className="text-sky-600 transition hover:text-white" to='/goalpage'>
                    Details
                </NavLink>

                <NavLink
                    className="block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition border hover:bg-transparent hover:border-sky-600 hover:text-sky-600"
                    onClick={handleLogout}
                    to="/"
                >
                    Sign Out
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;