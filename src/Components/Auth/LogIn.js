import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [loginUser, setLoginUser] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(loginUser);
  };

  return (
    <div>
      <div className="center">
        <h5>Log In</h5>
        <p>
          If you don't have an account yet,{" "}
          <Link to="/register">register here</Link>.
        </p>
      </div>
      <div className="container row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <form onSubmit={handleSubmission}>
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
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
