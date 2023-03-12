import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './availableCompanies.css'
import companies from './companies.jsx'
import backIcon from '../../assets/back-arrow.png'
import Food from '../../assets/food.jpeg'
import Vonnect from '../../assets/vonnect.png'
import CompanyRatings from '../companyRatings/CompanyRatings'
import Checkmark from '../../assets/checkmark.png'

const AvailableCompanies = (props) => {
  const [input, setInput] = useState('');
  const [companions, setCompanions] = useState([...companies]);
  
  const [button, setButton] = useState(true);
  const[menu, setMenu] = useState(false);
  const [priceTag, setPriceTag] = useState(true);
  const [ratingTag, setRatingTag] = useState(false);
  const [distanceTag, setDistanceTag] = useState(false);

  const getReorderedArray = (input) => {
    if (!input) {
      return companions;
    }
    const companyIndex = companions.findIndex((company) => company.name === input);
    if (companyIndex === -1) {
      return companions;
    }
    const reorderedArray = [
      companions[companyIndex],
      ...companions.slice(0, companyIndex),
      ...companions.slice(companyIndex + 1),
    ];
    return reorderedArray;
  };

  const reorderedArray = getReorderedArray(input);

  return (
    <div>
      {/*Inputs: */}
      <div className='vonnect__available-company__searchBar'>
        <Link to='/home'>
          <img src={backIcon} alt='Back button'/>
        </Link>
        <input type='text' onChange={(e) => (setInput(e.target.value))} placeholder='Search Company Name' maxLength={100}/> 
        {button ? (<button type='button' onClick={() => {setMenu(!menu); setButton(!button)}}>Sort By ↓</button>) : <button type='button' onClick={() => {setMenu(!menu); setButton(!button)}}>Sort By ↑</button>}
      </div>
      {menu ? (
          <div className='vonnect__available-company-tags'>
            <button onClick={()=>{setPriceTag(!priceTag); setDistanceTag(false); setRatingTag(false)}}>Price {priceTag ? (<img src={Checkmark}/>) : <div/>}</button> 
            <button onClick={()=>{setPriceTag(false); setDistanceTag(!distanceTag); setRatingTag(false)}}>Rating {distanceTag ? (<img src={Checkmark}/>) : <div/>}</button>
            <button onClick={()=>{setPriceTag(false); setDistanceTag(false); setRatingTag(!ratingTag)}}>Distance {ratingTag ? (<img src={Checkmark}/>) : <div/>}</button>
          </div>): <div></div>}
      <h4>{input}</h4>
      {reorderedArray.filter(company => (company.servicesOffered[props.service].offered === true)).map(company => ( 
        <div className='vonnect__available-company'>
          <div className='vonnect__available-company__content'>
            <div className='vonnect__available-company__header-images'>
              <img src={Food} alt={company.name}/>
              <img src={Vonnect} alt={company.name}/>
            </div>
            <h1 className='gradient__text'>{company.name}</h1>
            <div className='vonnect__available-company__determinants'>
              <h4>Price: {company.servicesOffered[props.service].price} Rs</h4> 
              <CompanyRatings value={company.rating}/>
            </div>
            <p>{company.location}, {company.distance}km</p>
            <p>{company.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AvailableCompanies
