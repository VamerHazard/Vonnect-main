import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const plumberServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/PlumbersAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: '/PlumbersAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: '/PlumbersAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/PlumbersAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Plumber = () => {
  return (
  <div>
      <Service services={plumberServices}/>
  </div>
    )
}
export default Plumber