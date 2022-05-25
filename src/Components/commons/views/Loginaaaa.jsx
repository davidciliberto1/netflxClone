import React, {useState, useEffect} from 'react';
import useForm from '../hooks/useForm';

const Login = () => {
 
    const {form, handleChange, handleSubmit} = useForm({
        user: "",
        password: ""
    });
  
    return (
      <div>
        <h1>Login</h1>
        <div>
         
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
           <form>
          <input
            type="password"
            autoComplete="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  