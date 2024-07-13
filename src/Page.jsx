import React, { useState } from 'react';

function Page() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    validateEmail(value);
  };

  // Function to validate the email
  const validateEmail = (email) => {
    let errors = {};
    let emailValid = true;
    
    if (!email) {
      emailValid = false;
      errors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailValid = false;
      errors['email'] = 'Email is invalid';
    }
    
    setErrors(errors);
    return emailValid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Proceed with form submission
      console.log('Form submitted:', email);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={handleInputChange} 
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit" disabled={!email || errors.email}>Submit</button>
    </form>
  );
}

export default Page;
