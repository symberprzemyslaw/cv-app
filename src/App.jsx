import React, { useState } from 'react';

function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} type="text" />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    firstName: '',
    secondName: '',
    telNumber: '',
    email: '',
    location: ''
  });

  const handleInputChange = (fieldName, value) => {
    setState(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  return (
    <div>
      <Input
        label="First Name"
        value={state.firstName}
        onChange={e => handleInputChange('firstName', e.target.value)}
      />
      <Input
        label="Last Name"
        value={state.secondName}
        onChange={e => handleInputChange('secondName', e.target.value)}
      />
      <Input
        label="Telephone Number"
        value={state.telNumber}
        onChange={e => handleInputChange('telNumber', e.target.value)}
      />
      <Input
        label="Email"
        value={state.email}
        onChange={e => handleInputChange('email', e.target.value)}
      />
      <Input
        label="Location"
        value={state.location}
        onChange={e => handleInputChange('location', e.target.value)}
      />
    </div>
  );
}

export default App;

