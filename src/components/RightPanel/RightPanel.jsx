import React from 'react'
import { css } from "../../Data/css"

const RightPanel = ({ output }) => {

  return (
    <div className='h-[80%] mt-10 w-[38%] border-3 mr-5 rounded-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-between hidden lg:flex overflow-hidden'>
      <div className='h-full w-6/8'>
        <h3 className={`text-2xl font-bold p-5 ${css}`}>Output</h3>
        <div className='h-full w-full pl-5'>
          {/* <p> */}
          <pre className='text-sm'>{output}</pre>
          {/* </p> */}
        </div>
      </div>
      <div className='h-full w-2/8 bg-[#0EA5E9]'>

      </div>
    </div>
  )
}

export default RightPanel
