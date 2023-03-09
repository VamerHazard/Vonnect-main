import React, {useState} from 'react';
import './otp.css';
import {Link} from 'react-router-dom';

const CustomerRegistrationOTP = () => {

  const [number, setNumber] = useState('');
  const [limited, setLimited] = useState(false);
  
  const handleChange = (e) => {
    setNumber(e.target.value);
    console.log(number);
    if(number.length === 3){
      setLimited(true);
    } else (setLimited(false))
  }

    const handleAfterChange=(e) => {
      
    }

  return (
    <div className = 'vonnect__customerRegistration-container'>
      <div className='vonnect__customerRegistration-container__header'>
      <h1>Verify Number: </h1>
      </div>
        <div className='vonnect__customerRegistration-container__input'>
          <input value = {number} onChange={handleChange} afterChange={handleAfterChange} placeholder='OTP-Code'/>
        </div>
       
          {limited && (
           <div className='vonnect__customerRegistration-container__btn'>
              <Link to='/CustomerRegistration/:id/profileEdit'>
                <button type='button'>Verify</button>
              </Link>
          </div>
          )}
        
    </div>
  )
}

export default CustomerRegistrationOTP
