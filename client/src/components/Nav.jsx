import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = ({handleLogout}) => {

    return (
        <header aria-label="Site Header" className="bg-sky-100">
            <div
                className="mx-auto flex h-14 max-w-screen items-center pr-4 gap-8 sm:pr-6 lg:pr-8"
            >
                <NavLink className="pl-6 block text-sky-600 hover:text-white" to={"/"}>
                    <span className="sr-only">Home</span>
                    <h1>Dashboard</h1>
                </NavLink>

                <div className="flex flex-1 items-center justify-between gap-6">
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