import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = ({handleLogout}) => {

    return (
        <header aria-label="Site Header" className="bg-sky-100">
            <div
                className="mx-auto flex h-14 max-w-screen items-center gap-8 px-4 sm:pr-6 lg:px-4"
            >
                <NavLink className="pl-6 block text-sky-600 hover:text-gray-500/75" to={"/"}>
                    <span className="sr-only">Home</span>
                    <h1>Dashboard</h1>
                    
                    

                    
                </NavLink>

                <div className="flex flex-1 items-center justify-end gap-6">
                    <nav aria-label="Site Nav">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <NavLink className="text-sky-600 transition hover:text-gray-500/75" to='goalpage'>
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

                        {/* <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Nav;