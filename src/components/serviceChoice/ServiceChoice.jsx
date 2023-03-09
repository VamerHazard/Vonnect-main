import React from 'react'
import { Link } from 'react-router-dom'
import './serviceChoice.css'

const ServiceChoice = ({rdr, imgSource, serviceName}) => {
  return (
    <Link to={rdr}>
        <div className='vonnect__serviceChoice-container'>
          <div className='vonnect__serviceChoice__component'>
           <button><img src={imgSource} alt={serviceName}/>
           <p>{serviceName}</p>
           </button>
          </div>
        </div>
    </Link>
  )
}

export default ServiceChoice

