import React, { useState } from 'react'
import Editor from '../EditorPage/Editor'
import RightPanel from "../../components/RightPanel/RightPanel"
import EditorContext from '../../context/EditorContext'
import { lang as template } from '../../Data/lang';
import { executeCode } from '../../services/code.service';

const Home = () => {

  const [lang, setlang] = useState("python")
  const [code, setCode] = useState(template[lang]);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [isRunning, setRunning] = useState(false);

  const runCode = async () => {
    setRunning(true)
    const res = await executeCode({
      code,
      language: lang,
      input
    })

    setOutput(res);
    setRunning(false);
  };

  const clear = () => {
    console.log("clearing.....")
    setInput("")
    setOutput("")
  }

  return (
    <div className='h-screen w-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#030996_5%,_#01030A_70%)] flex items-center justify-between text-white'>

      {/* Left Panel */}
      <EditorContext code={code} setCode={setCode} lang={lang} setlang={setlang} runCode={runCode} input={input} setInput={setInput} isRunning={isRunning} clear={clear} />

      {/* Right Panel */}
      <RightPanel output={output} />

    </div>
  )
}

export default Home