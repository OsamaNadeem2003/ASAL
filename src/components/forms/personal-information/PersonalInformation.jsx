import React, { useState } from 'react'
function PersonalInformation({ formData, handleChange }) {


  return (
    <div className='personal-information'>

      <input type="text" placeholder='Full Name' name="fullName" value={formData.fullName} onChange={handleChange} />
      <input type="text" placeholder='Username' name="username" value={formData.username} onChange={handleChange} />
      <input type="email" placeholder='Email Address' name="email" value={formData.email} onChange={handleChange} />
      <input type="tel" placeholder='Phone Number' name="phone" value={formData.phone} onChange={handleChange} />


    </div>
  )
}

export default PersonalInformation
