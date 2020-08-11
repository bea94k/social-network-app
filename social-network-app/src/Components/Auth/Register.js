import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
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
          <h5>Register</h5>
          <p>
            If you already have an account, <Link to="/login">log in here</Link>
            .
          </p>
        </div>
        <div className="container row">
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <form onSubmit={this.handleSubmission}>
              <div class="input-field">
                <input
                  id="firstname"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="firstname">First Name</label>
              </div>
              <div className="input-field">
                <input
                  id="lastname"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="lastname">Last Name</label>
              </div>
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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
