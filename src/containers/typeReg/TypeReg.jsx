import React/*, {useNavigate}*/ from 'react';
import './typeReg.css';
import {Link} from 'react-router-dom';

const typeReg = () => {
  return (
    <div>
      <div className='typeReg__container section__padding'>
        <div className='typeReg__container__header'>
          <h1>What are you?</h1>
        </div>
        <div className='typeReg__container__btn'>
          <Link to='/CustomerRegistration'>
           <button className = 'typeReg__container__btn' type='button'>Customer</button>
          </Link>
          <Link to='/CompanyRegistration'>
          <button type='button' className = 'typeReg__container__btn' onClick=''>Company</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default typeReg
