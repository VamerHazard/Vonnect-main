import React from 'react'
import { CompanyRatings, Footbar, ServiceChoice } from '../../components'
import LogsArray from './logsArray.jsx'
import './logs.css'
import Food from '../../assets/food.jpeg'
import { Link } from 'react-router-dom'

const Logs = () => {
  return (
      <div className='vonnect__logs-container'>
        <div className='vonnect__logs__content'>
          <div className='vonnect__logs__topbar gradient__text'>
            <h4>LOGS</h4>
          </div>
            <div classname='vonnect__logs__services'>
              { LogsArray !== [] ? 
              LogsArray.map((object) => 
              (<div className='vonnect__logs__log'>
                <p>{object.Date}</p>
              <div className='vonnect__logs__log-header'>
                <h3>{object.Name}</h3>
                <CompanyRatings value={object.Value}/>
                <p>{object.Service}</p>
              </div>
              <div className='vonnect__logs__log-price'>
                <h4>Price: {object.Price}</h4>
              </div>
              <div className='vonnect__logs__re-quest'>
                <Link to={`/companyOrder/${object.Service}/${object.Name}`}>
                  <button>Order Again</button>
                </Link>
              </div>
            </div>)) : 0}
            </div>
        </div>
      <Footbar/>
    </div>
  )
}

export default Logs

{/* rdr={''} imgSource={Food} serviceName={object.Name} /> */}
{/* */}