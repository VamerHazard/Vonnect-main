import React from 'react'

const profile = () => {
  return (
    <div className='vonnect__profile-container'>
      <div className='vonnect__profile__top'>
        <img src='' alt='Profile Picture'/>
        <h4>FirstName LastName</h4>
        <Link to='/profileEdit'>
          <p>Edit Profile</p>
        </Link>
      </div>
      <div className='vonnect__profile-component'>
        <p>Profile</p>
          <h4>Switch to Company Profile</h4>
          <h4>My Favorites</h4>
          <h4>My Favorites</h4>
          <h4>Settings</h4>
      </div>
      <div className='vonnect__profile-component'>
        <p>Settings</p>
          <h4>My Favorites</h4>
          <h4>My Favorites</h4>
          <h4>My Favorites</h4>
          <h4>Settings</h4>
      </div>
      <div className='vonnect__profile-component'>
        <p>Settings</p>
          <h4>My Favorites</h4>
          <h4>My Favorites</h4>
          <h4>My Favorites</h4>
          <h4>Settings</h4>
      </div>
    </div>
  )
}

export default profile