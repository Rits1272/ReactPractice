import React from 'react';

const Form = (props) => (
<form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='City...' />
                <input type='text' name='country' placeholder='Country...' />
                <button type='submit'>Submit</button>
             </form>

);

export default Form;