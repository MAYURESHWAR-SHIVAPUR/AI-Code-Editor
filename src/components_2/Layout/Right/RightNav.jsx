import React from 'react'
import { NavLink } from 'react-router-dom'


const RightNav = () => {
    const basecss = 'w-fit h-fit py-2 px-2 text-md hover:scale-115 font-regular'
    const Selectedcss = 'w-fit h-fit py-2 px-2  text-md font-bold'

    return (
        <header id='rightNav' className='h-fit w-2/3 py-1 bg-[#0C112A] rounded-md mt-2'>
            <nav className='flex items-center justify-between text-white'>
                <NavLink id='nav1' className={({ isActive }) => isActive ? Selectedcss : basecss} to="/codeEditor">
                    <i class="fa-solid fa-square-poll-vertical mr-2"></i>
                    OUTPUT
                </NavLink>
                <NavLink id='nav2' className={({ isActive }) => isActive ? Selectedcss : basecss} to="/codeEditor/Explain">
                    <i class="fa-solid fa-brain mr-2"></i>
                    Explain
                </NavLink>
                <NavLink id='nav3' className={({ isActive }) => isActive ? Selectedcss : basecss} to="/codeEditor/Visualization">
                    <i class="fa-solid fa-diagram-project mr-2"></i>
                    Visualization
                </NavLink>
            </nav>
        </header>
    )
}

export default RightNav
