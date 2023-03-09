import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-header'>
        <h1 className='gradient__text'>This is the magnificent footer</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p type='button'> Req. early access NOW!!</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Crechterwoord k12 182 DK Alknjcb. All right reserved.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overson</p>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Whatever</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Crecterwoord K12 182 DK alknjkcb</p>
          <p>085-920384</p>
          <p>anemail@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
};


export default Footer
