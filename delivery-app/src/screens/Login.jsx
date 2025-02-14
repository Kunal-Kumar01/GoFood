import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [crendentials, setCrendentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/Login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: crendentials.email,
        password: crendentials.password
      })
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('authToken', json.authToken);
      console.log(localStorage.getItem('authToken'));

      navigate('/');
    } else {
      console.log('User Creation Failed');
    }
  }

  const onChange = (e) => {
    setCrendentials({ ...crendentials, [e.target.name]: e.target.value });
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={crendentials.email} name='email' onChange={onChange} />
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" name = 'password' onChange={onChange} value={crendentials.password}  />
                          </div>
                          <button type="submit" className="btn btn-success m-3">Submit</button>
                          <Link className='btn m-3 btn-danger' to="/SignUp">Make new Account</Link>

                      </form>
    </div>
  )
}
