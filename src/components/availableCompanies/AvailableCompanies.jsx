import React from 'react'
import './availableCompanies.css'
import Food from '../../assets/food.jpeg'
import Vonnect from '../../assets/vonnect.png'

const companies = [
  {
    name: 'Vonnect Sample0',
    location: 'Jawalakhel',
    distance: 4.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    servicesOffered: {
      'Cooking':  {
        offered: false,
        price: undefined
      },
      'Cleaning':  {
        offered: false,
        price: undefined
      },
      'Driving':  {
        offered: true,
        price: 600
      },
      'Electricity':  {
        offered: false,
        price: undefined
      },
      'Gardeners':  {
        offered: false,
        price: undefined
      },
      'Grocery': {
        offered: true,
        price: 10
      },
      'Painter':  {
        offered: false,
        price: undefined
      },
      'Plumber':  {
        offered: false,
        price: undefined
      }
    },
  },
  {
    name: 'Vonnect Sample1',
    location: 'Bhaisepati',
    distance: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    servicesOffered: {
      'Cooking': {
        offered: false,
        price: undefined
      },
      'Cleaning': {
        offered: false,
        price: undefined
      },
      'Driving': {
        offered: true,
        price: 600
      },
      'Electricity': {
        offered: false,
        price: undefined
      },
      'Gardeners': {
        offered: true,
        price: 890
      },
      'Grocery': {
        offered: true,
        price: 10
      },
      'Painter': {
        offered: false,
        price: undefined
      },
      'Plumber': {
        offered: false,
        price: undefined
      }
    },
  },
  {
    name: 'Vonnect Sample2',
    location: 'Jawalakhel',
    distance: 4.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    servicesOffered: {
      'Cooking':  {
        offered: true,
        price: 1000
      },
      'Cleaning':  {
        offered: true,
        price: 1200
      },
      'Driving': {
        offered: true,
        price: 2000
      },
      'Electricity':  {
        offered: true,
        price: 900
      },
      'Gardeners':  {
        offered: false,
        price: undefined
      },
      'Grocery': {
        offered: true,
        price: 14
      },
      'Painter':  {
        offered: false,
        price: undefined
      },
      'Plumber':  {
        offered: false,
        price: undefined
      }
    },
  },
  {
    name: 'Vonnect Sample3',
    location: 'Outer-Space',
    distance: 9.0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    servicesOffered: {
      'Cooking':  {
        offered: false,
        price: undefined
      },
      'Cleaning':  {
        offered: false,
        price: undefined
      },
      'Driving':  {
        offered: false,
        price: undefined
      },
      'Electricity':  {
        offered: false,
        price: undefined
      },
      'Gardeners':  {
        offered: false,
        price: undefined
      },
      'Grocery':  {
        offered: false,
        price: undefined
      },
      'Painter': {
        offered: true,
        price: 600
      },
      'Plumber': {
        offered: true,
        price: 1100
      }
    },
  },
  {
    name: 'Vonnect Sample4',
    location: 'Pepsi Cola',
    distance: 3.4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    servicesOffered: {
      'Cooking': {
        offered: true,
        price: 1900
      },
      'Cleaning': {
        offered: true,
        price: 1200
      },
      'Driving': {
        offered: true,
        price: 2000
      },
      'Electricity': {
        offered: true,
        price: 1000
      },
      'Gardeners':  {
        offered: false,
        price: undefined
      },
      'Grocery': {
        offered: true,
        price: 900
      },
      'Painter': {
        offered: false,
        price: undefined
      },
      'Plumber':  {
        offered: false,
        price: undefined
      }
    },
  },
  {
    name: 'Vonnect Sample5',
    location: 'Rabi Bhawan',
    distance: 2.4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    servicesOffered: {
      'Cooking': {
        offered: false,
        price: undefined
      },
      'Cleaning': {
        offered: false,
        price: undefined
      },
      'Driving': {
        offered: true,
        price: 1450
      },
      'Electricity': {
        offered: false,
        price: undefined
      },
      'Gardeners': {
        offered: false,
        price: undefined
      },
      'Grocery': {
        offered: true,
        price: 13
      },
      'Painter': {
        offered: false,
        price: undefined
      },
      'Plumber': {
        offered: false,
        price: undefined
      }
    },
  }
]

const AvailableCompanies = (props) => {
  return (
    <div>
      {companies.filter(company => (company.servicesOffered[props.service].offered == true)).map(company => ( 
        <div className='vonnect__available-company'>
          <div className='vonnect__available-company__content'>
            <div className='vonnect__available-company__header-images'>
              <img src={Food} alt={company.name}/>
              <img src={Vonnect} alt={company.name}/>
            </div>
            <h1 className='gradient__text'>{company.name}</h1>
            <h4>Price: {company.servicesOffered[props.service].price} Rs</h4>
            <p>{company.location}, {company.distance}km</p>
            <p>{company.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AvailableCompanies
