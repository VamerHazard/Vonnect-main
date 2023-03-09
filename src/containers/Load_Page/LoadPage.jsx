import React from 'react'
import Load from '../../components/loading/Load.jsx';
import './loadPage.css'


const LoadPage = () => {
  return (
    <div className = 'vonnect_loadpage'>
        <div className='vonnect_loadpage_logo'>
          <h1 className='gradient__text'>V</h1>
        </div>
        <div className = 'vonnect__loadpage_load'>
          <Load/>
        </div>
        <div className='vonnect_loadpage_logo'>
          <h1 className='gradient__text'>nnect</h1>
      </div>
    </div>
  )
}

export default LoadPage;
