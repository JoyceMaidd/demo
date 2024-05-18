import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import WorkSpace from './pages/WorkSpace'
const App = () => {

  
  return (
    <BrowserRouter>
     <header>
       <Navbar />
     </header>
     <main>
      <WorkSpace/>
     </main>
    </BrowserRouter>
  )
}

export default App