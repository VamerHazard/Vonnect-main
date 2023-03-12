import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const tutorsServices = [
  {
    type: 'Professional',
    imgSource: slack,
    link: '/Tutors/TutorsAvailable',
    description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
  },
  {
    type: 'Homecook',
    imgSource: '',
    link: '/Tutors/TutorsAvailable',
    description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
  },
  {
    type: 'Vegan',
    imgSource: '',
    link: '/Tutors/TutorsAvailable',
    description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
  }, 
  {
    type: 'Vegetarian',
    imgSource: '',
    link: '/Tutors/TutorsAvailable',
    description: 'Find vegetarian-based chefs in Kathmandu.'
  },
  ]

const Tutors = () => {
  return (
  <div>
      <Service services={tutorsServices}/>
  </div>
    )
}
export default Tutors