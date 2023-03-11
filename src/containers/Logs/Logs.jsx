import React from 'react'

const Logs = () => {
  return (
      <div className='vonnect__logs-container'>
      <h4></h4>
        <div className='vonnect__logs__content'>
          <h4 className='gradient__text'>Services</h4>
            <div classname='vonnect__logs__services'>
              {services.map((object) => (<ServiceChoice rdr={object.location} imgSource={object.imgSource} serviceName={object.pageName}/>))}
            </div>
        </div>
      <Footbar/>
    </div>
  )
}

export default Logs