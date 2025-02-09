import react, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SignUp() {

    const [crendentials, setCrendentials] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: crendentials.name,
                email: crendentials.email,
                password: crendentials.password,
                location: crendentials.location
            })
        });
        const json = await response.json();
        console.log(json);

        if(json.success) {
            console.log('User Created Successfully');
        } else {
            console.log('User Creation Failed');
        }
    }

    const onChange = (e) => {
        setCrendentials({ ...crendentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' onChange={onChange} value={crendentials.name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={crendentials.email} name='email' onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name = 'password' onChange={onChange} value={crendentials.password}  />
                    </div>
                    <div>
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" name='location' onChange={onChange} value={crendentials.location} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-success m-3">Submit</button>
                    <Link className='btn m-3 btn-danger' to="/Login">Already a User?</Link>
                </form>
            </div>
        </>
    )
}