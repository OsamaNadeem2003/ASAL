import React, { useState } from 'react';
import PersonalInformation from '../personal-information/PersonalInformation';
import AddressInformation from '../address-information/AddressInformation';
import ExtraInformation from '../extra-information/ExtraInformation';

function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    company: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='signup-form'>
      <form onSubmit={handleSubmit}>
        <PersonalInformation formData={formData} handleChange={handleChange} />
        <AddressInformation formData={formData} handleChange={handleChange} />
        <ExtraInformation formData={formData} handleChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default SignupForm
