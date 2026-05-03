import React from 'react'
import { useDispatch } from 'react-redux'
import { setLang } from '../../features/slice'

const Langs = ({ lang, icon, img = false }) => {
    const dispatch = useDispatch()
    return (
        <article
            className='flex flex-col items-center hover:scale-115'
            onClick={() => dispatch(setLang(lang))}
        >
            {!img && <i class={`fa-brands fa-${icon} text-[#8B98D5] text-5xl`}></i>}
            {img && <p className='text-[#8B98D5] text-4xl text-center font-extrabold'>C++</p>}
            <p className='text-[#c7c7c7] text-sm text-center font-bold'>{lang}</p>
            <img src="" alt="" />
        </article>
    )
}

export default Langs
