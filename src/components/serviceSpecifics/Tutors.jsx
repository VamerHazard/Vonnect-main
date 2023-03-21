import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Service from './Service'
import slack from '../../assets/slack.png'

const tutorsServices = [
  {
    type: 'Math',
    imgSource: slack,
    link: '/Tutors/TutorsAvailable',
    description: 'Learn math from a professional teacher with more than 3 years of experience.'
  },
  {
    type: 'Chemistry',
    imgSource: '',
    link: '/Tutors/TutorsAvailable',
    description: 'Learn chemistry from a professional teacher with more than 3 years of experience.'
  },
  {
    type: 'English',
    imgSource: '',
    link: '/Tutors/TutorsAvailable',
    description: 'Learn english from a professional teacher with more than 3 years of experience.'
  }, 
  {
    type: 'Physics',
    imgSource: '',
    link: '/Tutors/TutorsAvailable',
    description: 'Learn physics from a professional teacher with more than 3 years of experience.'
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