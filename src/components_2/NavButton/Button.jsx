import React from 'react'
import "../../assets/style/NavButton.scss"

const Button = ({ title, icon }) => {
    return (
        <>
            <button
                className=' font-bold text-sm text-[#c8c9d2] border border-transparent hover-border hover:border- hover:bg-[#3949AB] px-2 py-2 rounded-xl hover:glass hover:shadow-[0_4px_10px_rgba(15,14,54,0.6)]'
            >
                <i className={`fa-solid fa-${icon} mr-3`}></i>
                {title}
            </button>
        </>
    )
}

//  btn btn-white btn-animate
export default Button