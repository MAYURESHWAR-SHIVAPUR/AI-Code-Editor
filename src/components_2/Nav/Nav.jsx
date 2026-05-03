import React from 'react'
import Button from '../NavButton/Button'
import logo from "../../assets/imgs/logo.png"

const Nav = () => {
    return (
        <header>
            <nav className='flex items-center justify-around h-fit w-screen overflow-hidden pt-2'>
                <section className='flex items-center justify-center cursor-pointer'>
                    <img className='h-[10vh] hover:scale-115' src={logo} alt="logo" />
                    <h1 className="font-extrabold text-white text-3xl">
                        {"CODEWAVE AI".split("").map((e, i) => (
                            <span
                                key={i}
                                className="hover:text-[#4EC0FF] hover:scale-115 transition-colors duration-300"
                            >
                                {e}
                            </span>
                        ))}
                    </h1>
                </section>
                <section
                    className='bg-[linear-gradient(to_bottom_right,_#201ad0_10%,_#311B92_60%,_#010566_90%)] text-white flex items-center justify-between gap-4 w-fit h-fit p-1 border-2 border-[#5a75b0] rounded-2xl overflow-hidden glass'

                >

                    <Button title={"Home"} icon={"house-chimney"} />
                    <Button title={"About Us"} icon={"circle-info"} />
                    <Button title={"Solutions"} icon={"flask"} />
                    <Button title={"Developer"} icon={"laptop-code"} />
                    <Button title={"Solve"} icon={"puzzle-piece"} />

                </section>
                <section className='border-2 border-[#5a75b0] font-bold px-3  py-2 rounded-md text-white text-lg glass'>
                    <button>
                        <i class="fa-regular fa-circle-user mr-2"></i>
                        Login or Register</button>
                </section>
            </nav>
        </header >
    )
}

export default Nav