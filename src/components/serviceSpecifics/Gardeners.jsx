import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const gardenerServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/Gardeners/GardenersAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: '/Gardeners/GardenersAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: '/Gardeners/GardenersAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/Gardeners/GardenersAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Gardener = () => {
  return (
  <div>
      <Service services={gardenerServices}/>
  </div>
    )
}
export default Gardener