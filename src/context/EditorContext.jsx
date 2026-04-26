import React from 'react'
import { createContext } from 'react';
import Editor from '../pages/EditorPage/Editor';

const EditorContextprovider = createContext();

const EditorContext = ({ code, setCode, lang, setlang, runCode, input, setInput, isRunning, clear }) => {

    return (
        <EditorContextprovider.Provider value={{ code, setCode, lang, setlang, runCode, input, setInput, isRunning, clear }}>
            <Editor />
        </EditorContextprovider.Provider>
    )
}

export default EditorContext
export { EditorContextprovider as GlobalEditorContext }