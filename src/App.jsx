import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import WorkSpace from './pages/WorkSpace'
import LetterGenerate from './pages/LetterGenerate'
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
        <Route path='/generatedletter' element={<LetterGenerate letter={letter}/>}/>
      </Routes>
     </main>
    </BrowserRouter>
  )
}

export default App