import React, { useContext } from 'react';
import { FormContext } from './Form';

export default function FormInput(props) {
    //allows us to pass state values via context instead of each field
    const formContext = useContext(FormContext);
    const {form, handleFormChange } = formContext;

    //props and change handlers can be customized  
    const { label, type = 'text', name } = props;

    return (
        <div className='FormInput'>
            <div className='row'>
                <div className='col-4'>
                    <label>{label}</label>
                </div>
                <div className='col-8'>
                    <input type={type} name={name} value={form[name]} onChange={handleFormChange}/>
                </div>
            </div>
        </div>
    );
}