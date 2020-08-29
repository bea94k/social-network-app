import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerNewUser } from "../../store/actions/authActions";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
      phone: null,
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

    this.props.registerUser(this.state);
  };

  render() {
    return (
      <>
        {this.props.userLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <>
            <div className="center">
              <h5>Register</h5>
              <p>
                If you already have an account,{" "}
                <Link to="/login">log in here</Link>.
              </p>
            </div>
            <div className="container row">
              <div className="col s12 m8 offset-m2 l6 offset-l3">
                <form onSubmit={this.handleSubmission}>
                  <div className="input-field">
                    <input
                      id="firstname"
                      type="text"
                      className="validate"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="firstname">First Name</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="lastname"
                      type="text"
                      className="validate"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="lastname">Last Name</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="phone"
                      type="number"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="username">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      onChange={this.handleChange}
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
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { userLoggedIn: state.auth.userLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userInfo) => dispatch(registerNewUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
