import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const chefServices = [
{
  type: 'Professional',
  imgSource: '',
  link: '',
  description: 'Enjoy five-star cooking from the most trained and experienced chefs in Kathmandu.'
},
{
  type: 'Homecook',
  imgSource: '',
  link: '',
  description: 'Eat the friendly neighborhood aunty\'s warm home-cooked meals.'
},
{
  type: 'Vegan',
  imgSource: '',
  link: '',
  description: 'Relish upon animal-free products that tempt even the most radical carnivores.'
}, 
{
  type: 'Vegetarian',
  imgSource: '',
  link: 'Find vegetarian-based chefs in Kathmandu.'
},
]

const Chef = () => {
  const navigate = useNavigate();
  return (
    <div className='vonnect__serviceSpecifics__container'>
      <div className='topbar'>
      <img src='' onClick={
        navigate(-1)}/>
      <h4>Select Specific Service</h4>
      </div>
      <div className='vonnect_serviceSpecifics__serviceTypes'>
       {chefServices.map((services) => (<Link to={services.link}>
          <img src={services.imgSource}/>
        </Link>))}
      </div>
    </div>
  )
}

export default Chef