import React, {useState} from 'react'
import Person from '../../assets/profileIcon.png'
import {Link} from 'react-router-dom'
import './profileEdit.css'

const initialValues = {
  name: "",
  email: "",
  address1: "",
  address2: "",
};

const ProfileEdit = () => {

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target; {/*object destructuring */}
    setValues({
      ...values,
      [name]: value,
    });
  };


  return (
    <div className='vonnect__profileEdit-container'>
      <div className='vonnect__profileEdit__address-billing'>
        <img src={Person}/>
        <div className='vonnect__profileEdit__inputBox'>
          <p>Full Name:</p>
           <form>
              <input value={values.name} name='name' onChange={handleInputChange} placeholder='Full Name' required/>
            </form>
       </div>
        <div className='vonnect__profileEdit__inputBox'>
          <p>Email Address:</p>
           <form>
            <input value={values.email} name='email' onChange={handleInputChange} placeholder='Email' required/>
          </form>
        </div>
        <div className='vonnect__profileEdit__inputBox'>
         <p>Default Address 1:</p>
         <form>
            <input value={values.address1} name='address1' onChange={handleInputChange} placeholder='Address One'/>
         </form>
        </div>
        <div className='vonnect__profileEdit__inputBox'>
         <p>Default Address 2:</p>
         <form>
            <input value={values.address2} name='address2' onChange={handleInputChange} placeholder='Address Two'/>
         </form>
        </div>
      </div>
      <div className='vonnect__profileEdit__submit'>
        <Link to='/home'> {/*Change so that it takes you to the right page (if u edit from profile page) */}
          <button type='submit'>Save</button>
        </Link>
      </div>
    </div>
  )
}

export default ProfileEdit