import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = ({ handleLogout }) => {

    return (
        <header aria-label="Site Header" className="bg-sky-100 sm:border-b-2 sm:border-white">
            <div
                className="sm:mx-auto flex h-14 max-w-screen-xl items-center px-2 gap-8 sm:pr-6 lg:pr-8"
            >
                <div className="sm:hidden">
                    <button
                        className="rounded bg-sky-100 p-2 text-gray-600 transition hover:text-gray-600/75"
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
                    <div className=''>

                    </div>
                </div>

                <NavLink className="hidden sm:block pl-6 text-sky-600 hover:text-white" to={"/"}>
                    <h1>Dashboard</h1>
                </NavLink>

                <div className="hidden sm:flex flex-1 items-center justify-between gap-6">
                    <nav aria-label="Site Nav">
                        <ul className="flex items-center gap-6">
                            <li>
                                <NavLink className="text-sky-600 transition hover:text-white" to='goalpage'>
                                    Info/Goal
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <NavLink
                                className="block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-sky-600"
                                onClick={handleLogout}
                                to={"/"}
                            >
                                Sign Out
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Nav;