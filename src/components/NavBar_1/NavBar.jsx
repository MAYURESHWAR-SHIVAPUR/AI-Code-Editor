import React from 'react'
import Style from "./NavBar.module.css"
import { GlobalEditorContext } from '../../context/EditorContext';
import { useContext } from 'react';


const NavBar = () => {
  const { code, lang, setlang, runCode, input, setInput, isRunning } = useContext(GlobalEditorContext);

  const css = "hover:scale-105 transition-transform duration-200 ease-in-out";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className='h-fit w-full my-3 px-3 flex items-center justify-between cursor-pointer'>
      <select
        className="bg-transparent w-1/3 md:w-1/5 border-2 border-[#007ACC] text-white font-bold py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-[#007ACC]"
        value={lang}
        onChange={(e) => setlang(e.target.value)}
      >
        <option value="python" className="bg-black text-white">Python</option>
        <option value="javascript" className="bg-black text-white">JavaScript</option>
        <option value="cpp" className="bg-black text-white">C++</option>
        <option value="java" className="bg-black text-white">Java</option>
      </select>

      <textarea name="" id="" className='h-full w-1/3 border-2 border-white/50 rounded-md px-5 outline-none focus:ring-2 focus:ring-white' placeholder='Input if required' value={input} onChange={(e) => setInput(e.target.value)}></textarea>

      <div className='h-full w-1/2 md:w-1/3 lg:w-1/3 font-bold flex items-center justify-between'>

        <h3 onClick={handleCopy} className={css}>
          <i className="fa-regular fa-copy mr-2"></i>
          Copy
        </h3>

        {
          window.innerWidth < 780 ? <h3 className={css}><i class="fa-solid fa-file-export mr-2"></i>Output</h3> : <h3 className={css}><i class="fa-solid fa-share-nodes mr-2"></i>Share</h3>
        }

        <button
          onClick={runCode}
          disabled={isRunning}
          className={`bg-[#00FF4D] hover:shadow-[0_4px_10px_#00FF4D] text-black font-bold py-2 px-4 rounded ${css}`}>
          <i class="fa-solid fa-play mr-2"></i>Run
        </button>
      </div>

    </div>
  )
}

export default NavBar
