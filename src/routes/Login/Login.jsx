import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import './login.css';

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <section>
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        <div className="form-container sign-up">
          <form>
            <h1 className='font-bold text-xl'>Create Account</h1>
            <div className="social-icons">
              <Link to="#" className='icon'><FaGooglePlusG /></Link>
              <Link to="#" className='icon'><FaFacebookF /></Link>
              <Link to="#" className='icon'><FaXTwitter /></Link>
              <Link to="#" className='icon'><FaLinkedinIn /></Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form>
            <h1 className='font-bold text-xl'>Sign In</h1>
            <div className="social-icons">
              <Link to="#" className='icon'><FaGooglePlusG /></Link>
              <Link to="#" className='icon'><FaFacebookF /></Link>
              <Link to="#" className='icon'><FaXTwitter /></Link>
              <Link to="#" className='icon'><FaLinkedinIn /></Link>
            </div>
            <span>or use your email for sign in</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className='font-bold text-xl'>Welcome Back!</h1>
              <p>Enter your personal details to access all site features</p>
              <button className="hidden-btn" id="login" onClick={handleLoginClick}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className='font-bold text-xl'>Hello, Friend!</h1>
              <p>Register with your personal details to access all site features</p>
              <button className="hidden-btn" id="register" onClick={handleRegisterClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
