import React from 'react'
import Button from '../../Button/Button'
import { useEditorActions } from '../../../hooks/useRunCode'

const LeftFooter = () => {
    const { ClearAll } = useEditorActions();

    return (
        <footer id='leftFooter' className='h-[12vh] w-full border border-[#263ba7] rounded-md mt-2 py-2 flex items-center justify-evenly bg-black cursor-pointer'>
            <Button logo={"wand-magic-sparkles"} title={"Optimize"} info={"Improve performance"} color={"#cb37f3"} bg={"#cb37f363"} />
            <Button logo={"diagram-project"} title={"Visualizer"} info={"Understand Code"} color={"#ffba00"} bg={"#ffba0066"} />
            <Button logo={"brain"} title={"Explain"} info={"Understand Code"} color={"#3498DA"} />
            <Button logo={"microchip"} title={"AI Assistant"} info={"Understand Code"} color={"#00ff1a"} bg={"#00ff1a4f"} />
            <Button logo={"trash"} title={"Clear"} info={"Reset Editor"} color={"#ff8900"} bg={"#ff7d0069"} fn={ClearAll} />
        </footer>
    )
}

export default LeftFooter