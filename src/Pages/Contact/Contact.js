import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="dashboard-nav mh-100 col-2">
            <Navbar />
          </div>
          </div>
          <div className="App col-6" >
            <div
              style={{
                backgroundColor: "#eaf9ff",
                maxHeight: "100%",
                overflowY: "scroll",
              }}
              className="dashboard-main mh-100 col-10"
            >
              <form
                id="contact-form"
                className="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    id="email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    placeholder="Leave us your message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </div>
                <div className="submit-button">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
              <div className="Contacts">
                <h3>Contact us through:</h3>
                <h3>Email : oscarokumu47@gmail.com</h3>
              </div>
            </div>
          </div>
        
      </>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
export default App;
