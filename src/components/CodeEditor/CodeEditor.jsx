import React, { useEffect, useContext } from 'react'
import Editor from "@monaco-editor/react";
import { lang as template } from '../../Data/lang';
import { GlobalEditorContext } from '../../context/EditorContext';

const CodeEditor = () => {

    const { code, setCode, lang } = useContext(GlobalEditorContext);

    useEffect(() => {
        const templates = template;
        if (templates[lang]) {
            setCode(templates[lang]);
        }
    }, [lang, setCode]);

    return (
        <Editor
            height={window.innerWidth > 780 ? "65vh" : "80vh"}
            width="100vw"
            language={lang}
            value={code}
            key={lang}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
            options={{
                minimap: { enabled: false },
                fontSize: 14,
                scrollBeyondLastLine: false,
                renderLineHighlight: "none",
                background: "black"
            }}
        />
    )
}

export default CodeEditor