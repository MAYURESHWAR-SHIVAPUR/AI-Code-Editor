import React, { useEffect, useRef } from 'react'
import { fadeInUp } from '../../animtion/Intro'
import logo from "../../assets/imgs/logo.png"

const NavBar = () => {
    const name = useRef("")
    const input = useRef("")
    const profile = useRef("")

    useEffect(() => {
        fadeInUp(name.current, input.current, profile.current)
    }, [])

    return (
        <nav className='h-[8vh] w-screen flex items-center justify-between p-2 text-white'>
            <section ref={name} className='w-fit h-full flex items-center justify-around md:gap-2'>
                <img src={logo} alt="Logo" className='h-full ' />
                <article>
                    <h1 className='md:text-2xl font-extrabold'>CODEWAVE AI</h1>
                    <p className='ms:text-xs text-[10px] text-gray-400'>Your AI-Powered Coding Companion</p>
                </article>
            </section>
            <form action="" ref={input} className='h-full w-1/3 border-2 border-[#5a75b0] rounded-md flex items-center justify-center px-5 md:block hidden'>
                <i class="fa-solid fa-magnifying-glass text-[#5a75b0]"></i>
                <input type="text" className='h-full w-full pl-3 border-none outline-none' />
            </form>
            <section ref={profile} className='w-fit h-full flex items-center justify-around gap-2'>
                <i src="" alt="" className=' fa-regular fa-circle-user md:text-2xl'></i>
                <p className='font-bold lg:text-2xl text-xs'>MAYURESHWAR</p>
            </section>
        </nav>
    )
}

export default NavBar
