import React from 'react';
import {CompanyRatings, Footbar, ServiceChoice, Topbar} from '../../components';
import './customerHome.css'
import logsArray from '../logs/logsArray';
import Food from '../../assets/food.jpeg'
import Vonnect from '../../assets/vonnect.png'
import companies from '../../components/availableCompanies/companies';
import { Link } from 'react-router-dom';

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
            {logsArray[0] !== undefined ? 
            <Link to={`/companyOrder/${logsArray[0].Service}/${companies.find(c => (c.name === logsArray[0].Name)).name}`}>
              <div className='vonnect__company-preview' key={`${companies.find(c => (c.name === logsArray[0].Name)).name}`}>
                <div className='vonnect__company-preview__content'>
                  <div className='vonnect__company-preview__header-images'>
                    <img src={Food} alt={companies.find(c => (c.name === logsArray[0].Name)).name}/>
                    <img src={Vonnect} alt={companies.find(c => (c.name === logsArray[0].Name)).name}/>
                  </div>
                  <h1 className='gradient__text'>{companies.find(c => (c.name === logsArray[0].Name)).name}</h1>
                  <div className='vonnect__company-preview__determinants'>
                    <h4>Price: {companies.find(c => (c.name === logsArray[0].Name)).servicesOffered[logsArray[0].Service].price} Rs</h4> 
                    <CompanyRatings value={companies.find(c => (c.name === logsArray[0].Name)).rating}/>
                  </div>
                  <p>{companies.find(c => (c.name === logsArray[0].Name)).location}, {companies.find(c => (c.name === logsArray[0].Name)).distance}km</p>
                  <p>{companies.find(c => (c.name === logsArray[0].Name)).description}</p>
            </div>
          </div>
        </Link> 
         : <div></div>}
        </div>
      <Footbar/>
    </div>
  )
}

export default CustomerHome;