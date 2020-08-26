import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logUserIn } from "../../store/actions/authActions";

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
    this.props.logIn({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <>
        {this.props.user.uid ? (
          <Redirect to="/" />
        ) : (
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
                    Log in
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => dispatch(logUserIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
