import React, { useEffect } from 'react'
import Editor from "@monaco-editor/react";
import { lang as template } from '../../../Data/lang';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCode } from '../../../features/slice';


const CodeEditor = () => {
    const code = useSelector((state) => state.CodeEditor.code)
    const lang = useSelector((state) => state.CodeEditor.lang)
    const dispatch = useDispatch()

    useEffect(() => {
        const templates = template;
        if (templates[lang]) {
            dispatch(setCode(templates[lang]));
        }
    }, [lang, setCode]);

    return (
        <section id='codeEditor' className=' w-full bg-[#1e1e1e] rounded-lg border border-[#263ba7] py-2 mt-2'>
            <Editor
                height="61vh"
                width="full"
                language={lang}
                value={code}
                key={lang}
                onChange={(value) => dispatch(setCode(value))}
                theme="vs-dark"
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    renderLineHighlight: "none",
                    background: "black"
                }}
            />
        </section>
    )
}

export default CodeEditor