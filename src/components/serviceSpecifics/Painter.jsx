import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const painterServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/Painter/PainterAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: '/Painter/PainterAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: '/Painter/PainterAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/Painter/PainterAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Painter = () => {
  return (
  <div>
      <Service services={painterServices}/>
  </div>
    )
}
export default Painter