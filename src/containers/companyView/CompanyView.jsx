import React, {useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import companies from '../../components/availableCompanies/companies.jsx'
import './companyView.css'
import CompanyRatings from '../../components/companyRatings/CompanyRatings'
import Person from '../../assets/profileIcon.png'
import EstimatePrice from '../../components/estimatePrice/EstimatePrice.jsx'
import logsArray from '../logs/logsArray.jsx'
import Cook from '../../assets/cook.jpeg'
import LocationIcon from '../../assets/location.png'
import backArrow from '../../assets/back-arrow.webp'

const CompanyView = (props) => {
  const { service, companyName } = useParams();
  const company = companies.find(c => (c.name === companyName)); //used for literally everything else
  const serviceDetails = company.servicesOffered[service]; //all service specific: so price and offered

  const [description, setDescription] = useState(true);

  const navigate = useNavigate();

  const current = new Date();
  const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
  const date = `${time} On ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className='vonnect__companyView-container'>
      <div className='vonnect__companyView-backarrow'>
        <img onClick={() => (navigate(-1))} src={backArrow} alt='back'/>
      </div>
      <div className='vonnect__companyView__header-images'>
        <img src={serviceDetails.picture} alt='Company View header Banner'/> {/*changing this */}
        <img src={Cook} alt='Company View Header Profile'/>
      </div>
      <div className='vonnect__companyView__header-description'>
        <h1>{company.name}</h1>
        <div className='vonnect__companyView__header-description-info'>
          <p>Service: {service}</p>
          <CompanyRatings value={company.rating}/>
        </div>
        <div className='vonnect__companyView__distance'>
          <img src={LocationIcon} alt='locationIcon'/>
          <p>{company.distance} km</p>
        </div>
      </div>
      <div className='vonnect__companyView__determinant'>
        <div className='vonnect__companyView__determinant-btn'>
          <button  onClick={() => {setDescription(true)}}>Description</button>
          <button  onClick={() => {setDescription(false)}}>Ratings</button>
        </div>
        {description ? <div className='vonnect__companyView__sampleRating-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ut velit vel pulvinar. Phasellus sit amet faucibus dolor. Suspendisse nec nunc egestas ipsum tincidunt fermentum. Mauris viverra quam dignissim blandit viverra. Nulla eget erat ac enim egestas finibus. Integer varius nibh id felis mattis ultricies. Etiam congue dui leo, sed venenatis tellus imperdiet vitae. Aenean ultrices risus a sollicitudin laoreet. Etiam pretium dui id enim convallis, eu viverra sapien porta. Donec eget dui non nisi auctor elementum. Nunc sed nulla ut est placerat cursus.</p></div>
        : <div className='vonnect__companyView__sampleRating'>
          <div className='vonnect__companyView__person'>
            <div className='vonnect__companyView__sampleRating-personDetails'>
              <img src={Person} alt='profile image'/>
              <h3>Samya Dawadi</h3>
              </div>
              <div>
              <CompanyRatings value={3.2}/>
             </div>
          </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ut velit vel pulvinar. Phasellus sit amet faucibus dolor. Suspendisse nec nunc egestas ipsum tincidunt fermentum. Mauris viverra quam dignissim blandit viverra. Nulla eget erat ac enim egestas finibus. Integer varius nibh id felis mattis ultricies. Etiam congue dui leo, sed venenatis tellus imperdiet vitae. Aenean ultrices risus a sollicitudin laoreet. Etiam pretium dui id enim convallis, eu viverra sapien porta. Donec eget dui non nisi auctor elementum. Nunc sed nulla ut est placerat cursus.</p>
          </div>}
      </div>
      <div className='vonnect__companyView__order'>
        <EstimatePrice companyFee={serviceDetails.price} distanceFee={company.distance * 10}/>
        <Link to='/logs'>
          <button onClick={() => {logsArray.unshift({Name: companyName, Service: service, Price: Math.ceil(serviceDetails.price * 1.1 + company.distance * 10), Date: date, Value: company.rating}); console.log(date)}}>Order</button>
        </Link>
      </div>
    </div>
  )
}

export default CompanyView