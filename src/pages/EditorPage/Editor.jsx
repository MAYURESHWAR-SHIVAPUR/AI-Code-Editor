import NavBar from '../../components/NavBar_1/NavBar'
import AppName from '../../components/AppName/AppName';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { useContext } from 'react';
import { GlobalEditorContext } from '../../context/EditorContext';

const Editor = () => {

  const { clear } = useContext(GlobalEditorContext)

  const css = "hover:scale-105 transition-transform duration-200 ease-in-out";


  return (

    <div className='h-screen lg:w-2/3 w-full overflow-hidden bg-gradient-to-b from-black to-[#007ACC] md:bg-none text-white '>
      <AppName />
      {window.innerWidth < 780 && <hr />}
      <div className='h-fit lg:w-[90%] w-full lg:ml-4  lg:border-2  bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden'>
        <NavBar />
        <hr />
        <CodeEditor />
        <div className='h-fit w-full hidden lg:flex bg-[#007ACC] text-white font-bold py-2 px-4 text-center flex items-center justify-between'>
          <div className='w-1/3 lg:w-1/2 flex items-center justify-around'>
            <button className={css}>
              <i class="fa-regular fa-circle-question mr-2"></i>
              Decode
            </button>
            <button className={css}>
              <i class="fa-solid fa-arrow-trend-up mr-2"></i>
              Refine
            </button>
            <button className={css}>
              <i class="fa-brands fa-usb mr-2"></i>
              Recall
            </button>
          </div>
          <div className='w-1/3 flex items-start justify-end mr-5 text-2xl text-orange-500 '>
            <button className={css} onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor