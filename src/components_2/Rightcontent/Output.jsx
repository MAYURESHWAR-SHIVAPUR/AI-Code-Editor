import React from 'react'
import { useSelector } from 'react-redux';
import { useEditorActions } from '../../hooks/useRunCode';

const Output = () => {

  const output = useSelector((state) => state.CodeEditor.output);
  const input = useSelector((state) => state.CodeEditor.input);
  const { ClearOutput, ClearInput, InputChange } = useEditorActions();
  // console.log(output)


  return (
    <main id='output' className='h-full w-full text-white  overflow-hidden border-2 border-[#486aff8f] rounded-md  '>
      <nav id='outputNav' className='h-fit flex items-center justify-between text-sm bg-[#17076C] p-3 text-[#b2b2b2]'>
        <article className='font-bold gap-3 flex itmes-center justify-between '>
          <button disabled className=''>Run</button>
          <button disabled className='text-green-300 lg:block hidden'>Successful </button>
          <button disabled className='w-fit lg:block md:hidden block'>
            <i class="fa-regular fa-clock mr-1"></i>
            0.14s
          </button>
        </article>
        <button
          className='w-fit font-bold '
          onClick={ClearOutput}
        >
          Clear
          <i class="fa-regular fa-trash-can ml-2"></i>
        </button>
      </nav>
      <section id='outputRes' className='h-[60%] w-full bg-black text-white p-3'>
        {output}
      </section>

      <section id='outputInput' className='bg-[17076C] bg-[#0B1027] px-3 overflow-hidden p-2 border-t-2 border-t-[#2D3554]'>
        <nav className='h-fit flex items-center justify-between text-sm pb-1 text-[#b2b2b2]'>
          <article className='font-bold gap-3 flex itmes-center justify-between'>
            <button disabled className=''>Input (STDIN)</button>
          </article>
          <button
            className='w-fit font-bold '
            onClick={ClearInput}
          >
            Clear
            <i class="fa-regular fa-trash-can ml-2"></i>
          </button>
        </nav>
        <textarea
          name="" id=""
          className='w-full h-[11vh] bg-black p-2 rounded-lg border-2 border-[#2D3554]'
          onChange={InputChange}
          value={input}
        ></textarea>
      </section>
    </main >
  )
}

export default Output
