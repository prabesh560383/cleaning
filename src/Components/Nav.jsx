import React from 'react'

const Nav = () => {
  return (
    <header className='w-full bg-transparent  min-h-20 flex items-center px-3' >
        <nav className=' w-4/5 m-auto px-2 flex justify-between items-center py-2'>
            <div className="logo cursor-pointer">
                logo here
            </div>
            
            <div className="nav-items list-none hidden md:flex justify-center items-center gap-7 font-normal">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </div>

            <div className="hamburger-icon cursor-pointer md:hidden">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Nav