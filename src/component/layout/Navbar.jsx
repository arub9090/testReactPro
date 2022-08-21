import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-xl bg-neutral text-yellow-400'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-4xl' />
                <Link to='/' className='text-lg text-white font-bold align-middle'>
                    {title}
                </Link>
            </div>
            
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className='btn btn-sm rounded-btn btn-ghost'>Home</Link>
                    <Link to='/about' className='btn btn-sm rounded-btn btn-ghost'>About</Link>
                </div>
            </div>    
        </div>
    </nav>
  )
}

export default Navbar


Navbar.defaultProps= {
    title: "GitHub Finder",
}

Navbar.propTypes = {
    title: PropTypes.string
}