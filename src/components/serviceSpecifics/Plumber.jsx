import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const plumberServices = [
  {
    type: 'Leak Fixes',
    imgSource: slack,
    link: '/Plumber/PlumberAvailable',
    description: 'Fix your leaks with a professional plumber!'
  },
  {
    type: 'Appliance Installation',
    imgSource: '',
    link: '/Plumber/PlumberAvailable',
    description: 'Install brand new appliances in your home!'
  },
  {
    type: 'House Planning',
    imgSource: '',
    link: '/Plumber/PlumberAvailable',
    description: 'Plan out your house\'s plumbing system.'
  }, 
  {
    type: 'Maintenance',
    imgSource: '',
    link: '/Plumber/PlumberAvailable',
    description: 'Fix previously applied systems.'
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