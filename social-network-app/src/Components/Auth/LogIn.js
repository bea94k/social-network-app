import React from "react";
import { Link } from "react-router-dom";

class LogIn extends React.Component() {
  render() {
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
            <form>
              <div className="input-field">
                <input id="login-username" type="email" className="validate" />
                <label for="login-username">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="login-password"
                  type="password"
                  className="validate"
                />
                <label for="login-password">Password</label>
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
  }
}

export default LogIn;
