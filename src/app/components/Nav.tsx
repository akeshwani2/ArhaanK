"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
  const router = useRouter()
  const [activeRoute, setActiveRoute] = useState('/')

  useEffect(() => {
    setActiveRoute(window.location.pathname)
  }, [])

  return (
    <div className='flex justify-between items-center'>

      <nav className='flex-1 flex justify-center items-center gap-8 text-xs md:text-sm tracking-tight sticky top-0 z-50 backdrop-blur-md pt-6 pb-6'>
          <Link 
            href='/' 
            className={`relative underline-link hover:text-gray-400 ${activeRoute === '/' ? 'active' : ''}`}
            onClick={() => setActiveRoute('/')}
          >
            Overview
          </Link>
          <Link 
            href='/journey' 
            className={`relative underline-link hover:text-gray-400 ${activeRoute === '/journey' ? 'active' : ''}`}
            onClick={() => setActiveRoute('/journey')}
          >
            Journey
          </Link>
          <Link 
            href='/accomplishments' 
            className={`relative underline-link hover:text-gray-400 ${activeRoute === '/accomplishments' ? 'active' : ''}`}
            onClick={() => setActiveRoute('/accomplishments')}
          >
            Accomplishments
          </Link>
          <Link 
            href='/contact' 
            className={`relative underline-link hover:text-gray-400 ${activeRoute === '/contact' ? 'active' : ''}`}
            onClick={() => setActiveRoute('/contact')}
          >
            Chat
          </Link>
      </nav>
    </div>
  )
}

export default Nav

// import Link from "next/link";
// import { Button } from "./ui/button";
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   return (
//    <header className="py-8 xl:py-12 text-white">
//     <div className="container mx-auto flex justify-between items-center">
//       {/* logo */}
//       <Link href="/">
//         <h1 className="text-4xl font-semibold">
//           Arhaan<span className="text-accent">.</span>
//         </h1>
//       </Link>


//       {/* desktop nav and hire me button*/}
//       <div className="hidden xl:flex items-center gap-8">
//         <Nav />
//         <Link href="/contact">
//           <Button>Hire me</Button>
//         </Link>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="xl:hidden">
//         <MobileNav />
//       </div>

//     </div>
//   </header>
//   );
// };

// export default Header;