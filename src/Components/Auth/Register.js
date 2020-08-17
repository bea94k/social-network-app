import React from "react";
import { Link, Redirect } from "react-router-dom";
import Firebase from "firebase";

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

    console.log(this.state);

    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((resp) => {
        // create new user with email: resp.user.email and firstname:this.state.firstname etc.
        // it makes sure that if the user changes some input while createUser is running, the info saved is the freshest one - except for email and password because we take them from the moment createUser started running
        console.log(resp.user.email);
        // from the response we can get the user's ID (ID of the document created when registering)
        console.log(resp.user.uid);
        // Add a new document with a generated id.
        Firebase.firestore().collection("users").doc(resp.user.uid).set({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          phone: this.state.phone,
          email: resp.user.email,
        });
        console.log("New user account created.");
      })
      .catch((err) => {
        console.log("Error when creating new user account:", err);
      });
  };

  render() {
    return (
      <div>
        {this.props.uid ? (
          <Redirect to="/" />
        ) : (
          <div>
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
          </div>
        )}
      </div>
    );
  }
}

export default Register;
