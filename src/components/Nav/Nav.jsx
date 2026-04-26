import React, { useEffect, useRef } from 'react'
import { glassmorphism } from '../../Data/css'
import NavItems from '../NavItems/NavItems'
import { fadeInUp } from '../../animtion/NavBar'

const Nav = () => {
    const navRef = useRef(null);
    const headingRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        fadeInUp(headingRef.current, navRef.current, buttonRef.current);
    }, []);

    return (
        <div id='Nav' className='h-fit w-full bg-transparent px-3 py-2 flex items-center justify-between'>
            <h1 ref={headingRef} className='text-white lg:text-2xl font-bold md:text-md 4xl:text-4xl'>CODENOVA AI</h1>
            <div ref={navRef} className={`w-fit h-fit ${glassmorphism} flex items-center justify-between p-1 md:gap-2 rounded-2xl text-white 4xl:mt-5   overflow-hidden`}>
                <NavItems link="/codeEditor" icon="fa-solid fa-house-chimney" text="HOME" />
                <NavItems link="/editor" icon="fa-solid fa-puzzle-piece" text="SOLUTIONS" />
                <NavItems link="/editor" icon="fa-brands fa-dev" text="DEVELOPER" />
                <NavItems link="/editor" icon="fa-solid fa-diagram-project" text="PROJECTS" />
            </div>
            <button
                ref={buttonRef}
                className={`
                    ${glassmorphism} text-white text-lg   md:mr-5 md:px-6 md:py-3 rounded-md 
                    hover:bg-[#00006c] hover:font-bold hover:border-[#3434b1]  transition-colors duration-300  ease-in-out
                    md:text-sm lg:text-lg text-[10px] py-2 px-2 font-bold 4xl:text-3xl 4xl:py-5 4xl:px-10
                    `}>
                SIGN IN
            </button>
        </div>

    )
}

// background: #00006c;
// border: 2px solid #3434b1;

export default Nav
