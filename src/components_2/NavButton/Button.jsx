import React from 'react'
import "../../assets/style/NavButton.scss"

const Button = ({ title, icon, to }) => {
    function navigate() {
        if (to === "Developer") {
            window.open("https://animate-with-mayur.netlify.app/")
        } else {
            window.location.href = to
        }

    }
    return (
        <>
            <button
                onClick={navigate}
                className=' font-bold text-sm text-[#c8c9d2] border border-transparent hover-border hover:border- hover:bg-[#3949AB] md:px-2 md:py-2 p-1 rounded-xl hover:glass hover:shadow-[0_4px_10px_rgba(15,14,54,0.6)]'
            >
                <i className={`fa-solid fa-${icon} md:mr-3 md:text-md text-sm`}></i>
                {window.innerWidth > 768 ? title : ""}
            </button>
        </>
    )
}

//  btn btn-white btn-animate
export default Button