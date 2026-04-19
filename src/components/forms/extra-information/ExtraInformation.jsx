import React, { useState } from 'react'
function ExtraInformation({ formData, handleChange }) {

  return (
    <div className='extra-information'>

      <input type="url" placeholder='Website URL' name="website" value={formData.website} onChange={handleChange} />
      <input type="text" placeholder='Company' name="company" value={formData.company} onChange={handleChange} />

    </div>
  )
}

export default ExtraInformation
