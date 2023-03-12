import React from 'react';
import {Footbar, ServiceChoice, Topbar} from '../../components';
import './customerHome.css'

const services = [
  {pageName: 'Plumbing', 
  location: '/Plumber', /* /home */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/plumbing.png'},
  {pageName: 'Cleaning', 
  location: '/Cleaners', /* /logs */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/housekeeping.png'},
  {pageName: 'Painter', 
  location: '/Painter', /* /customerSupport */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/light-off.png'},
  {pageName: 'Gardeners', 
  location: '/Gardeners', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/garden-shears.png'},
  {pageName: 'Grocery', 
  location: '/Grocery', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Electrician', 
  location: '/Electrician', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Plumber', 
  location: '/Plumber', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Tutors', 
  location: '/Tutors', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/classroom.png'},
  {pageName: 'Chef', 
  location: '/Chef/ChefServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/chef-hat.png'}
]


const CustomerHome = () => {
  return (
    <div className='vonnect__customerHome-container'>
        <div className='vonnect__customerHome__content'>
          <h4 className='gradient__text'>Services</h4>
            <div classname='vonnect__customerHome__services'>
              {services.map((object) => (<ServiceChoice rdr={object.location} imgSource={object.imgSource} serviceName={object.pageName}/>))}
            </div>
        </div>
      <Footbar/>
    </div>
  )
}

export default CustomerHome;