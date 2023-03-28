import React, {useState} from 'react'
import { Footbar } from '../../components';
import './customerSupport.css'

const CustomerSupport = () => {
  const [clicked, setClicked] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [timer, setTimer] = useState(false);

  const handleChange = () => {
    setTimeout(()=>{setTimer(false); setClicked(true); setSubmit(false)}, 4500);
}

  return (
    <div className='vonnect__customerSupport'>
      <h1>Hello. How may we help you?</h1>
      <div className='vonnect__customerSupport-content'>
      <div className='vonnect__customerSupport__Choices'>
        {clicked ? 
        <div>
           <h3 onClick={() => {setClicked(false);}}>My company is unresponsive.</h3>
           <h3 onClick={() => {setClicked(false);}}>My orders aren't being listed.</h3>
           <h3 onClick={() => {setClicked(false);}}>My account has been breached.</h3>
           <h3 onClick={() => {setClicked(false);}}>I don't know how to use the application.</h3>
           <h3 onClick={() => {setClicked(false);}}>The application is bugged.</h3>
           <h3 onClick={() => {setClicked(false);}}>My payment method is not working.</h3>
           <h3 onClick={() => {setClicked(false);}}>How do I start my own company?</h3>
           <h3 onClick={() => {setClicked(false);}}>Other. </h3>
         </div> 
            : submit !== true ?
              <div className='vonnect_customerSupport__description-container'>
                <div className='vonnect__customerSupport__description'>
                  <p>Please add a description of the required support.</p>
                  <textarea type='textarea' placeholder='description'required/>
                </div>
                <button onClick={()=>{setSubmit(true);}}>Submit</button>
              </div> : timer !== true ? 
              <div className='vonnect__customerSupport__submitted'>
                {handleChange()}
                <h3>Your message has been submitted. Please check your email for future replies.</h3>
                <p>You will be redirected back to the issue submission page.</p>
              </div>
              : <div></div>}
              
      </div>
      <Footbar/>
      </div>
    </div>
  )
}

export default CustomerSupport