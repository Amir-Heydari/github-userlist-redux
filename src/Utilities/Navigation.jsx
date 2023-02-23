import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div style={{ boxShadow: '0 0 10px black', margin: 20, padding: 20 , backgroundColor:'white' }}>

            <NavLink to='/' style={{ margin: '5px', }}>Home</NavLink>
            <NavLink to='/about' style={{ margin: '5px', }}>About</NavLink>
            <NavLink to='/users' style={{ margin: '5px', }}>Users</NavLink>
            <NavLink to='options' style={{ margin: '5px', }}>Options</NavLink>

        </div>
    )
}

export default Navigation
