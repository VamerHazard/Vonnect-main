import React from 'react'
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.png';
import logsIcon from '../../assets/logIcon.png';
import customerSupportIcon from '../../assets/customerSupportIcon.png';
import profileIcon from '../../assets/profileIcon.png';
import './footbar.css';


const items = [
  {pageName: 'home', 
  location: '/home', /* /home */
  imgSource: homeIcon},
  {pageName: 'logs', 
  location: '', /* /logs */
  imgSource: logsIcon},
  {pageName: 'customerSupport', 
  location: '', /* /customerSupport */
  imgSource: customerSupportIcon},
  {pageName: 'profile', 
  location: '', /* /profile */
  imgSource: profileIcon}
]

const FootbarComponent = ({rdr, imgSource, objectName}) => {
  return (<>
  <Link to={rdr}>
    <div className='individual__component'>
      <img src={imgSource} alt={objectName}/>
      <p>{objectName}</p>
    </div>
  </Link>
  </>)
}

const Footbar = () => {

  return (
    <div className='vonnect__footbarContainer'>
    {items.map((object) => (<FootbarComponent rdr={object.location} imgSource={object.imgSource} objectName={object.pageName}/>))}
    </div>
  )
}

export default Footbar