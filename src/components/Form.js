import React, {useState} from 'react';

export const FormContext = React.createContext({
    form: {},
    handleFormChange: () => {}
});

export default function Form(props) {
    const { children } = props;

    //will allow us to retreive values of the form
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    });

    //change handler to update form state
   const handleFormChange = (evt) => {
        const { name, value } = evt.target;

        //clones form for modification
        const updatedForm = {
        ...form,
        [name]: value
        };

        //get original form value and replace it with updated version
        updatedForm[evt.target.name] = evt.target.value;

        //logs the change for debugging
        console.log('Form changed: ', updatedForm);

        //updates form
        setForm(updatedForm)
  }

  return (
    <FormContext.Provider value={{
        form, 
        handleFormChange
    }}>
        {children}
    </FormContext.Provider>
  );
}
