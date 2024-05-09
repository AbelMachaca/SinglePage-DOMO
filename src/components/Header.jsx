import React, { useEffect, useState } from 'react'

function Header () {
  const [navbarShrink, setNavbarShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarShrink(false)
      } else {
        setNavbarShrink(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div>
        {/* Navigation */}
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navbarShrink ? 'navbar-shrink' : ''}`} id='mainNav' data-bs-spy='scroll'>
          <div className='container px-4 px-lg-5'>
            <a className='navbar-brand' href='#page-top'><img src='https://www.domo.com.ar/domo2022/images/logo-domo.svg' width='120px' alt='logo de DOMO' /></a>
            <button className='navbar-toggler navbar-toggler-right' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
              Menu <i className='fas fa-bars' />
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
                <li className='nav-item'><a className='nav-link' href='#projects'>Projects</a></li>
                <li className='nav-item'><a className='nav-link' href='#signup'>Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Masthead */}
        <header className='masthead'>
          <div className='container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center'>
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <h1 className='mx-auto my-0 text-uppercase'>Domo</h1>
                <h2 className='text-white-50 mx-auto mt-2 mb-5'>We create solutions and experiences that attract and engage.</h2>
                <a className='btn btn-primary' href='#about'>Get Started</a>
              </div>
            </div>
          </div>
        </header>
      </div>

    </>
  )
}

export default Header
