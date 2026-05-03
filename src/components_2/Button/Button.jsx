import React from 'react'

const Button = ({ title, info, logo, color, bg, fn="" }) => {
  return (
    <section className='h-full w-fit bg-[#17076C] rounded-md border-2 border-[0EA5E9] text-white flex items-center justify-around gap-2 p-2 hover:scale-115 transition-all transititon-300'
      style={{ background: bg, border: `2px solid ${color}` }}
      onClick={fn}
    >

      <i
        className={`fa-solid fa-${logo} text-3xl mr-2`}
        style={{ color: color }}
      ></i>

      <article className='h-full w-full flex flex-col items-center m-0'>

        <h3
          className='text-xl w-full text-start font-bold'
          style={{ color: color }}
        >
          {title}
        </h3>

        <p className='text-sm text-[#ffffffa8]'>
          {info}
        </p>

      </article>
    </section>
  )
}

export default Button