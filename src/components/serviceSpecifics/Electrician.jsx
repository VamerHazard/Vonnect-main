import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const electricianServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/ElectricianAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: '/ElectricianAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: '/ElectricianAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/ElectricianAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Electrician = () => {
  return (
  <div>
      <Service services={electricianServices}/>
  </div>
    )
}
export default Electrician