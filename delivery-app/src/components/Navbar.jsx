import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();


  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/Login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link> {/* Corrected from link to Link */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link> {/* Corrected */}
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link> {/* Corrected */}
                </li>
                : ""}
            </ul>

            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>

                <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>


                <Link className="btn bg-white text-success mx-1" to="/SignUp">Sign Up</Link>
              </div>

              :
              <div>
                <button className="btn bg-white text-success mx-2">Cart</button>
                <button className="btn bg-white text-danger mx-2" onClick={handleLogOut}>Log Out</button>
              </div>

            }


          </div>
        </div>
      </nav>
    </div>
  );
}
