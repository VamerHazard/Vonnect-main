import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const groceryServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/Grocery/GroceryAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: '/Grocery/GroceryAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: '/Grocery/GroceryAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/Grocery/GroceryAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Grocery = () => {
  return (
  <div>
      <Service services={groceryServices}/>
  </div>
    )
}
export default Grocery