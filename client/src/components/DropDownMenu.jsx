import React from 'react'
import { NavLink } from 'react-router-dom'

const DropDownMenu = () => {
    return (
        <div>
            <NavLink>Info</NavLink>
           <NavLink>Sign Out</NavLink>
        </div>
    )
}

export default DropDownMenu