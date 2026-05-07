import React, { useEffect, useRef } from 'react'
import TextComponent from '../../components_2/3D Text/Text'
import Nav from '../../components_2/Nav/Nav'
import { H2fadeInUp } from '../../animtion/Intro'
import "../../animtion/animation.css"

const Landing = () => {
  const headings1 = useRef();
  const headings2 = useRef();
  const headings3 = useRef();
  const button = useRef();

  useEffect(() => {
    H2fadeInUp(button.current, headings3.current, headings2.current, headings1.current,);
  }, []);

  return (
    <div className='h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,_#030996_5%,_#01030A_70%)] overflow-hidden'>
      <Nav />

      <h2
        ref={headings1}
        className='text-white font-extrabold lg:text-5xl text-center lg:mt-15 mt-13 md:text-4xl md:mt-8 text-3xl 4xl:text-8xl 4xl:mt-15'
      >
        AI-driven coding for the next generation
      </h2>

      <h2
        ref={headings2}
        className='text-white font-extrabold lg:text-5xl text-center mt-4 md:text-4xl text-3xl 4xl:text-8xl'
      >
        of <span className='text-[00006c]  tet-blue-300 text-[#4EC0FF] [ -webkit-text-stroke:2px_white ]'>developers</span>
      </h2>

      <p
        ref={headings3}
        className='text-gray-400 text-center lg:text-lg md:text-md mt-5 text-xs px-5 4xl:text-3xl 4xl:mt-10'
      >
        Transform how you write, optimize, and understand code
      </p>

      <button
        ref={button}
        className='bg-white text-black font-bold py-2 px-4 rounded-md relative left-1/2 translate-x-[-50%] mt-5 border-2 border-transparent
         hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-colors duration-300 ease-in-out 4xl:text-3xl 4xl:py-5 4xl:px-10'
        onClick={() => window.location.href = '/codeEditor'}
      >
        Get Started for Free Early Access  --&gt;
      </button>
      <div className=' w-full flex items-center justify-center show'>

      </div>
      <TextComponent />
    </div>
  )
}

export default Landing
// bg-[linear-gradient(to_bottom,#030996_10%,#01030A_50%)]