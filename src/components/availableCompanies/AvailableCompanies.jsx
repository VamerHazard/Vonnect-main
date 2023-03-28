import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './availableCompanies.css'
import companies from './companies.jsx'
import backIcon from '../../assets/back-arrow.webp'
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

  const sortByTag = (tag) => {
      let sortedCompanies = [...companions]; // make a copy of the original array
      if (tag === 'price') {
        sortedCompanies.sort((a, b) => a.servicesOffered[props.service][tag] - b.servicesOffered[props.service][tag]);
      } else if (tag === 'distance') {
        sortedCompanies.sort((a, b) => a[tag] - b[tag]);
      } else {
        sortedCompanies.sort((a, b) => b[tag] - a[tag]);
      }
      setCompanions(sortedCompanies);
  }    

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
            <button onClick={()=>{setPriceTag(!priceTag); setDistanceTag(false); setRatingTag(false); sortByTag('price');}}>Price {priceTag ? (<img src={Checkmark} alt='Check'/>) : <div/>}</button> 
            <button onClick={()=>{setPriceTag(false); setDistanceTag(!distanceTag); setRatingTag(false); sortByTag('distance');}}>Distance {distanceTag ? (<img src={Checkmark} alt='Check'/>) : <div/>}</button>
            <button onClick={()=>{setPriceTag(false); setDistanceTag(false); setRatingTag(!ratingTag); sortByTag('rating');}}>Rating {ratingTag ? (<img src={Checkmark} alt='Check'/>) : <div/>}</button>
          </div>): <div></div>}
      <h4>{input}</h4>
      {reorderedArray.filter(company => (company.servicesOffered[props.service].offered === true)).map(company => ( 
       <Link to={`/companyOrder/${props.service}/${company.name}`}>
        <div className='vonnect__available-company' key={`${company.name}`}>
          <div className='vonnect__available-company__content'>
              <div className='vonnect__available-company__header-images'>
               <img src={company.servicesOffered[props.service].picture} alt={company.name}/>
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
        </Link> 
      ))}
    </div>
  )
}

export default AvailableCompanies
