import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useEditorActions } from '../../../hooks/useRunCode';
import { fadeInUp } from '../../../animtion/Intro';
import "../../../assets/style/Button.scss"
import "../../../assets/style/Run.css"

const LeftNav = () => {

    useEffect(() => {
        fadeInUp();
    }, []);

    const { runCode } = useEditorActions();

    const lang = useSelector((state) => state.CodeEditor.lang);
    const code = useSelector((state) => state.CodeEditor.code);
    const isRunning = useSelector((state) => state.CodeEditor.isRunning);
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 250);
        } catch (err) {
            console.log("Copy failed");
            err
        }
    }

    return (
        <header id='leftNav' className='h-fit md:w-full w-[90%] flex items-center justify-between text-white'>
            <nav className='w-fit h-full flex items-center justify-between gap-4'>
                <button id='nav1' className='w-fit h-fit  overflow-hidden font-bold text-sm btn-flip' data-back="Language" data-front={lang}></button>
                <button id='nav2' className='w-fit h-fit  overflow-hidden font-bold text-sm btn-flip' data-back="File name" data-front="Main.py"></button>
            </nav>
            {/* <nav className={window.innerWidth < 425 && 'flex w-[90%] items-center justify-between mt-5'}> */}
            <nav>
                <button
                    id='nav3'
                    className='w-fit h-fit py-2 lg:px-5 text-md hover:scale-115 hover:font-bold hidden md:inline-block'
                    onClick={copy}
                >
                    {copied ? <i class="fa-solid fa-spinner load  mr-3 "></i> : <i class="fa-regular fa-copy mr-3 "></i>}
                    Copy
                </button>
                <button id='nav4' className='w-fit h-fit py-2 px-5 text-md hover:scale-115 hover:font-bold hidden md:inline-block'>
                    <i class="fa-solid fa-share-nodes mr-3"></i>
                    Share
                </button>
                <div
                    className='inline-block mt-[-10px]'
                    ontouchstart=""
                    id='nav5'
                    onClick={runCode}
                >
                    <div className="button flex">
                        <a href="#" className=' text-sm lg:px-5 px-2 py-2'>
                            {isRunning ? <i class="fa-solid fa-spinner load  mr-3 "></i> : <i class="fa-solid fa-play mr-3 "></i>}
                            Run
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default LeftNav
