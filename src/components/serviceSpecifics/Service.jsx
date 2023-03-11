import React from 'react'
import {Link} from 'react-router-dom'
import './serviceSpecifics.css'
import backIcon from '../../assets/back-arrow.png'

const Service = (props) => {

  return(
    <div className='vonnect__serviceSpecifics__container'>
      <div className='topbar'>
        <Link to='/home'>
          <img src={backIcon} alt='Back button'/>
        </Link>
      <h4>Select Specific Service</h4>
      </div>
      <div className='vonnect__serviceSpecifics__serviceTypes'>
       {props.services.map((array) => (
       <Link to={array.link}>
          <div className='vonnect__serviceSpecifics__serviceBlock'>
            <div className='vonnect__serviceSpecifics__top-section'>
              <h3>{array.type}</h3>
              {/*<img src={array.imgSource} alt={array.type}/>*/}
            </div>
            <p>{array.description}</p>
          </div>
        </Link>))}
      </div>
    </div>
  )
}

export default Service

/*const navigate = useNavigate();
  return (
    <div className='vonnect__serviceSpecifics__container'>
      <div className='topbar'>
      <img src='' onClick={
        navigate(-1)} alt='Back button'/>
      <h4>Select Specific Service</h4>
      </div>
      <div className='vonnect_serviceSpecifics__serviceTypes'>
       {{services}.map((array) => (
       <Link to={array.link}>
          <div>
            <h3>{array.type}</h3>
           <img src={array.imgSource} alt={array.type}/>
            <p>{array.description}</p>
          </div>
        </Link>))}
      </div>
    </div>
  )
} */