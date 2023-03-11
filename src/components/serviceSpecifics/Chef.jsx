import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const chefServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: 'ChefAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: 'ChefAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: 'ChefAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: 'ChefAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Chef = () => {
  return (
  <div>
      <Service services={chefServices}/>
  </div>
    )
}
export default Chef