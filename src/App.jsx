import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import About from './Components/About/About'
import GetToKnowMore from './Components/GetToKnowMore/GetToKnowMore'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <About/>
      <GetToKnowMore/>
    </div>
  )
}

export default App