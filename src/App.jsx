import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import WorkSpace from './pages/WorkSpace'
const App = () => {
  const [letter, setLetter] = React.useState("")
  return (
    <BrowserRouter>
     <header>
       <Navbar/>
     </header>
     <main className='bg-yellow-50'>
      <Routes>
        <Route path='/' element={<WorkSpace letter={letter} setLetter={setLetter}/>}/>
      </Routes>
     </main>
    </BrowserRouter>
  )
}

export default App