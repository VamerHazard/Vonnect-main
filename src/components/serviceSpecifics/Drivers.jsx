import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const driverServices = [
  {
    type: 'Van',
    imgSource: slack,
    link: '/DriverAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced Drivers in Kathmandu.'
  },
  {
    type: 'Truck',
    imgSource: '',
    link: '/DriverAvailable',
    description: 'Each convoy is assured to be delivered safely and on time.'
  },
  {
    type: 'Car',
    imgSource: '',
    link: '/DriverAvailable',
    description: 'Enjoy the comfort of your car with a professional chaffeur.'
  }, 
  {
    type: 'Bike',
    imgSource: '',
    link: '/DriverAvailable',
    description: 'Navigate your way across town with a motorcycle specialist.'
  },
  {
    type: 'Bus',
    imgSource: '',
    link: '',
    description: 'Go on long trips with your friends on a clean bus!'
  }
  ]

const Drivers = () => {
  return (
  <div>
      <Service services={driverServices}/>
  </div>
    )
}
export default Drivers