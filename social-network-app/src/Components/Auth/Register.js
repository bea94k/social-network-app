import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
          <form>
            <div class="input-field">
              <input id="firstname" type="text" className="validate" />
              <label for="firstname">First Name</label>
            </div>
            <div className="input-field">
              <input id="lastname" type="text" className="validate" />
              <label for="lastname">Last Name</label>
            </div>
            <div className="input-field">
              <input id="login-username" type="email" className="validate" />
              <label for="login-username">Email</label>
            </div>
            <div className="input-field">
              <input id="login-password" type="password" className="validate" />
              <label for="login-password">Password</label>
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
