import React from 'react'
import vonnectLogo from '../../assets/vonnectLogo.png'
import './topbar.css'

const Topbar = () => {
  return (
    <div className='vonnectLogo__topbar-container'>
      <img src={vonnectLogo} alt='logoPlaceholder'/>
    </div>
  )
}

export default Topbar