import React from 'react';
import LeftNav from './LeftNav';
import CodeEditor from './CodeBlock';
import LeftFooter from './LeftFooter';

const LeftPanel = () => {
  return (
    <section id='leftPanel' className='h-full md:w-2/3 w-full md:p-3'>
      <LeftNav />
      <CodeEditor />
      <LeftFooter />
    </section>
  )
}

export default LeftPanel
