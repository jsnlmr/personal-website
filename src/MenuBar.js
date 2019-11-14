import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return(
    <div id='menu'>
      <div id='logo'>Jason Lamar Campbell</div>
      <div id='link-list'>
        <div className='link'>
          <Link to='/about'>About</Link>
        </div>
        <div className='link'>
          <Link to='/projects'>Projects</Link>
        </div>
        <div  className='link'>
          <Link to='/blog'>Blog</Link>
        </div>
        <div  className='link'>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
