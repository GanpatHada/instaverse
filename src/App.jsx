import React, { useState } from 'react'
import Stories from './components/stories/Stories'
import Preview from './components/preview/Preview'
import { useApp } from './context/AppContext'

const App = () => {
  const {isPreviewVisible}=useApp()
  return (
    <div id='app'>
         {isPreviewVisible&&<Preview/>}
         <Stories/>
    </div>
  )
}

export default App
