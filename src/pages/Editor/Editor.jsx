import React, { useEffect, useRef } from 'react'
import NavBar from '../../components_2/NavBar/NavBar'
import RightPanel from '../../components_2/Layout/Right/RightPanel'
import LeftPanel from '../../components_2/Layout/Left/LeftPanel'
import { panelAnimation } from "../../animtion/Home"

const Editor = () => {

    const panel = useRef(null)

    useEffect(()=>{
        panelAnimation()
    },[])

    return (
        <main className='h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#007ACC_0%,_#030996_15%,_#01030A_60%)]'>
            <NavBar />
            <main id='panel' ref={panel} className='h-[87vh] w-[98vw] md:overflow-hidden overflow-scroll m-5 md:border-2 md:border-[#2f3c82] rounded-md glassBlue md:flex items-center justify-center'>
                <LeftPanel />
                <RightPanel />
            </main>

        </main>
    )
}

export default Editor
