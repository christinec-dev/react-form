import React from 'react';
import FormInput from './components/FormInput';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      {/*Reusable form tested as sign up component*/}
      <div className='sign-up'>
        <h2>Sign Up</h2>
        <Form formInitialValues={{
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: ''
        }}>
          <FormInput label="First Name" name="firstName"/>
          <FormInput label="Last Name" name="lastName"/>   
          <FormInput label="Email Address" type="email" name="emailAddress"/>
          <FormInput label="Password" type="password" name="password"/>
          <Button>Submit</Button>
        </Form>
      </div>
  
      {/*Reusable form tested as log in component*/}
      <div className='log-in'>
        <h2>Log In</h2>
        <Form formInitialValues={{
            usename: '',
            password: ''
        }}>
          <FormInput label="Username" name="username"/>
          <FormInput label="Password" type="password" name="password"/>     
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
