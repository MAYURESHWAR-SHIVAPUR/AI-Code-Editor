import React from 'react'

const NavItems = ({ link, icon, text }) => {
    return (
        <a
            href={link}
            className='text-[#d2d2d2] font-bold border-2 border-transparent lg:px-5 py-1 rounded-2xl
                     hover:bg-[#00006c]  hover:border-[#3434b1]  transition-colors duration-300 ease-in-out
                     md:text-sm lg:text-lg text-[10px] px-2 4xl:text-3xl 4xl:py-5 
                     '>
            <i class={icon + " md:mr-4 md:text-[#3434b1] text-base lg:text-lg text-white 4xl:text-3xl"}></i>
            {window.innerWidth < 768 ? "" : text}
        </a>
    )
}

export default NavItems
