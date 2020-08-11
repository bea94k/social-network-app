import React from "react";
import { Link } from "react-router-dom";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

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
            <form onSubmit={this.handleSubmission}>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="username">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="password">Password</label>
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
