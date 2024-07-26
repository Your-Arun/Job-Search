import React from 'react'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Job from './Components/Job'
import Value from './Components/Value'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
