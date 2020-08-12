import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(registerUser);
  };

  return (
    <div>
      <div className="center">
        <h5>Register</h5>
        <p>
          If you already have an account, <Link to="/login">log in here</Link>.
        </p>
      </div>
      <div className="container row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <form onSubmit={handleSubmission}>
            <div className="input-field">
              <input
                id="firstname"
                type="text"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field">
              <input
                id="lastname"
                type="text"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="username">Email</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              className="btn waves-effect waves-purple btn-large deep-purple"
              type="submit"
              name="action"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
