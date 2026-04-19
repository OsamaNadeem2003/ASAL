import React, { useState } from 'react'
function AddressInformation({ formData, handleChange }) {

  return (

    <div className='address-information'>

      <input type="text" placeholder='Address' name="address" value={formData.address} onChange={handleChange} />


    </div>
  )
}

export default AddressInformation
