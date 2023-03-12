import React from 'react';
import {Footbar, ServiceChoice, Topbar} from '../../components';
import './customerHome.css'

const services = [
  {pageName: 'Plumbing', 
  location: '/Plumber/PlumberServices', /* /home */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/plumbing.png'},
  {pageName: 'Cleaning', 
  location: '/Cleaners/CleanersServices', /* /logs */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/housekeeping.png'},
  {pageName: 'Painter', 
  location: '/Painter/PainterServices', /* /customerSupport */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/light-off.png'},
  {pageName: 'Gardeners', 
  location: '/Gardeners/GardenersServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/garden-shears.png'},
  {pageName: 'Grocery', 
  location: '/Grocery/GroceryServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Electrician', 
  location: '/Electrician/ElectricianServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Drivers', 
  location: '/Drivers/DriversServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/ingredients.png'},
  {pageName: 'Tutors', 
  location: '/Tutors/TutorsServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/classroom.png'},
  {pageName: 'Chef', 
  location: '/Chef/ChefServices', /* /profile */
  imgSource: 'https://img.icons8.com/nolan/96/1A6DFF/C822FF/chef-hat.png'}
]


const CustomerHome = () => {
  return (
    <div className='vonnect__customerHome-container'>
      <Topbar/>
        <div className='vonnect__customerHome__content'>
          <h4 className='gradient__text'>Services</h4>
            <div classname='vonnect__customerHome__services'>
              {services.map((object) => (<ServiceChoice rdr={object.location} imgSource={object.imgSource} serviceName={object.pageName}/>))}
            </div>
        </div>
        <div className='vonnect__customerHome__previousOrders'>
            <h4 className='gradient__text'>From Your Previous Orders:</h4>
            
        </div>
      <Footbar/>
    </div>
  )
}

export default CustomerHome;