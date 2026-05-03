import React from 'react'
import RightNav from "./RightNav"
import { Outlet } from "react-router-dom"
import Langs from '../../Langs/Langs'

const RightPanel = () => {
  return (
    <aside  className='h-full w-1/3'>
      <RightNav />
      <div className='w-full h-2/3 flex gap-2  p-2 border border-[#263ba7] rounded-md'>
        <Outlet />
        <section id='lang' className='h-full w-fit bg-[linear-gradient(to_bottom_right,_#17076c30_38%,_#000000)] border-2 border-[#8B98D5] rounded-lg mr-0 py-3 px-2 flex flex-col items-center justify-evenly cursor-pointer'>
          <Langs lang={"Python"} icon={"python"} />
          <Langs lang={"Javascript"} icon={"js"} />
          <Langs lang={"Java"} icon={"java"} />
          <Langs lang={"Cpp"} icon={"Cpp"} img={true} />
        </section>
      </div>
      <footer className=' border-2 border-[#0EA5E9] rounded-lg h-[21%] w-full mr-2 my-2 text-white p-3 flex items-center justify-between' >
        <section className='w-2/3 '>
          <article id='RightFooterTitle' className='flex items-center justify-between w-fit mb-4'>
            <i id='i' class="fa-solid fa-wand-magic-sparkles text-[#6958F7] mr-3 text-2xl"></i>
            <h3 id='h3' className='text-md font-bold'>AI Insight</h3>
          </article>
          <p id='RFp' className='text-xs text-[#b2b2b2]'>Great! Your code is working as expected. You are using a loop to print the pattern by increasing the number of strs in each line.</p>
        </section>
        <button id='RFbutton' className='border border-[#3A2AA6] rounded-md text-white h-fit w-fit px-3 py-2 bg-[#0F144E] font-bold'>Improve Code</button>
      </footer>
    </aside>
  )
}

export default RightPanel
