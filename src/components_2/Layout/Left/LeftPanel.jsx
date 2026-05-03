import React from 'react';
import LeftNav from './LeftNav';
import CodeEditor from './CodeBlock';
import LeftFooter from './LeftFooter';

const LeftPanel = () => {
  return (
    <section id='leftPanel' className='h-full w-2/3 p-3'>
      <LeftNav />
      <CodeEditor />
      <LeftFooter />
    </section>
  )
}

export default LeftPanel
