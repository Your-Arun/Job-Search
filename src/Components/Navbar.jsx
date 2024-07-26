import React from 'react'

function Navbar() {
  return (
    <div>
     <div className="navbar flex justify-between items-center mt-[30px]">
        <div className="logo">
            <h1 className='text-[30px] text-blue-600
             '><strong>Job</strong>Search</h1>
        </div>
        <div className="menulist flex gap-8">
            <li>
                Jobs
            </li>
              <li>Companies</li>
              <li>Blog</li>

            <li>About</li>
            <li>Contact Us</li>
           
            <li>Login</li>
            <li>Register</li>
            </div>
            
     </div>
    </div>
  )
}

export default Navbar
