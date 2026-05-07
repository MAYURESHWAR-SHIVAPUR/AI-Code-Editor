import React, { useEffect } from 'react'
import Button from '../NavButton/Button'
import logo from "../../assets/imgs/logo.png"
import { NavLink } from "react-router-dom"
import { fadeIn } from '../../animtion/Intro'

const Nav = () => {
    useEffect(() => {
        fadeIn()
    }, [])
    return (
        <header>
            <nav className='flex items-center justify-between h-fit w-screen overflow-hidden pt-2 lg:px-5'>
                <section id='Title' className='flex items-center justify-center cursor-pointer'>
                    <img className='md:h-[10vh] h-[5vh] hover:scale-115 transition-all duration-300' src={logo} alt="logo" />
                    <h1 className="font-extrabold text-white xl:text-3xl   md:text-xl text-xs">
                        {"CODEWAVE AI".split("").map((e, i) => (
                            <span
                                key={i}
                                className="hover:text-[#4EC0FF] hover:scale-110 hover:-translate-y-[50px]  "
                            >
                                {e}
                            </span>
                        ))}
                    </h1>
                </section>
                <section
                    id='input'
                    className='bg-[linear-gradient(to_bottom_right,_#201ad0_10%,_#311B92_60%,_#010566_90%)] text-white flex items-center justify-between md:gap-4 w-fit h-fit p-1 border-2 border-[#5a75b0] rounded-2xl overflow-hidden glass hover:scale-115 transition-all duration-500 md:block hidden'

                >

                    <Button title={"Home"} icon={"house-chimney"} to={"codeEditor"} />
                    <Button title={"About Us"} icon={"circle-info"} to={"About"} />
                    <Button title={"Solutions"} icon={"flask"} to={"Solutions"} />
                    <Button title={"Developer"} icon={"laptop-code"} to={"Developer"} />
                    <Button title={"Solve"} icon={"puzzle-piece"} to={'Solve'} />

                </section>
                <section id='login' className='border-2 border-[#5a75b0] font-bold px-3  py-2 rounded-md text-white md:text-lg text-xs glass hover:scale-115 transition-all duration-300'>
                    <NavLink to={"/login"}>
                        <i class="fa-regular fa-circle-user mr-2"></i>
                        {/* {window.innerWidth > 425?"Login or Register":"Login"} */}
                        Login or Register
                    </NavLink>
                </section>
            </nav>
        </header >
    )
}

export default Nav