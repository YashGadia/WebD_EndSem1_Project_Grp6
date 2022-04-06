import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import axios from 'axios';
import './SignUp.css';
import emailjs from 'emailjs-com';
import background from '../../images/sign-up.jpeg'
import img18 from '../../images/sign-up.jpeg'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));
    window.location = 'http://localhost:3000/';

    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });

    alert("Form submitted successfully!");

    // sendEmail(e);
  }

  // sendEmail(e) {
  //   e.preventDefault();
  //   emailjs.sendForm("service_tz7ww4f", "template_aavnfar", e.target, "2UpZq43vzdRGy-zqL")
  //   .then((result) => {
  //     console.log(result.text);
  //   })
  //   .catch((error) =>{ 
  //     console.log(error.text)
  //   });
  // }

  render() {
    return (
      <>
      <img src={img18} height={650} width={1350} />
        {/* <div style={{ backgroundImage: `url(${background})` }}> */}
          <div className="cont">
            {/* <image src='/images/sign-up.jpeg'/> */}
            <div className="form-div">
              <form onSubmit={this.onSubmit}>
                <div className="Sign-title">
                  Sign-Up
                </div>
                <div className="name">
                  <input
                    type="text"
                    label for="name"
                    id="name"
                    placeholder="Full Name"
                    onChange={this.changeFullName}
                    value={this.state.fullName}
                    className="form-control form-group" required
                  />
                </div>

                <div className="uname">
                  <input
                    type="text"
                    label for="uname"
                    id="uname"
                    placeholder="Username"
                    onChange={this.changeUsername}
                    value={this.state.username}
                    className="form-control form-group" required
                  />
                </div>

                {/* <div className="input-group-text" id="basic-addon1">@</div> */}
                <div className="email">
                  <input
                    type="text"
                    label for="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    className="form-control form-group" required
                  />
                </div>

                <div className="password">
                  <input
                    type="password"
                    label for="password"
                    id="pass"
                    placeholder="Password"
                    onChange={this.changePassword}
                    value={this.state.password}
                    className="form-control form-group" required
                  />
                </div>

                <div className="submit">
                  <input
                    type="submit"
                    className="btn btn-success btn-block"
                    for="success-outlined"
                    value="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        {/* </div> */}
      </>
    );
  }
}
export default SignUp;
// export default function SignUp() {
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
// }