import React from 'react';
import {Footbar, ServiceChoice, Topbar} from '../../components';
import './customerHome.css'

const services = [
  {pageName: 'plumbing', 
  location: '/home', /* /home */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/plumbing.png'},
  {pageName: 'yup', 
  location: '', /* /logs */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/electrical.png'},
  {pageName: 'Electricity', 
  location: '', /* /customerSupport */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/roller-brush.png'},
  {pageName: 'Smn else', 
  location: '', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Smn else', 
  location: '', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Smn else', 
  location: '', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Smn else', 
  location: '', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Smn else', 
  location: '', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Smn else', 
  location: '', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'}
]


const CustomerHome = () => {
  return (
    
    <div className='vonnect__customerHome-container'>
      <Topbar/>
        <div className='vonnect__customerHome__content'>
          <h4>Services</h4>
            <div classname='vonnect__customerHome__services'>
              {services.map((object) => (<ServiceChoice rdr={object.location} imgSource={object.imgSource} serviceName={object.pageName}/>))}
            </div>
        </div>
      <Footbar/>
    </div>
  )
}

export default CustomerHome;