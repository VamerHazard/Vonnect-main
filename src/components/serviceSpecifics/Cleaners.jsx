import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const cleanerServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/Cleaners/CleanersAvailable',
    description: 'Make your house sparkle with the most professional cleaners.'
  },
  {
    type: 'Home',
    imgSource: '',
    link: '/Cleaners/CleanersAvailable',
    description: 'Enjoy cleaning from the neighborhood sweepers.'
  },
  {
    type: 'Car Wash',
    imgSource: '',
    link: '/Cleaners/CleanersAvailable',
    description: 'Make you car shine.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/Cleaners/CleanersAvailable',
    description: 'Find vegetarian-based Cleaners in Kathmandu.'
  },
  ]

const Cleaners = () => {
  return (
  <div>
      <Service services={cleanerServices}/>
  </div>
    )
}
export default Cleaners