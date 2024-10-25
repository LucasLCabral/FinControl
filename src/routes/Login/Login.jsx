import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import './login.css';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Automatically close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-32 right-48 bg-green-500 text-white p-4 rounded shadow-lg transition-transform transform">
      {message}
    </div>
  );
};

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [notification, setNotification] = useState('');

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setNotification('Account Created. Now Sign In.'); // Show notification
      setFormData({ name: '', email: '', password: '' });
      // Optionally keep user on the same form
    } else {
      setNotification('Email already registered.');
    }
  };

  // Handle sign-in
  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    const user = users.find((user) => user.email === formData.email && user.password === formData.password);
    if (user) {
      setNotification('Login Successful');
      sessionStorage.setItem('user', JSON.stringify(user));
      // Navigate to the home page or perform other actions
    } else {
      setNotification('Invalid credentials');
    }
  };

  const closeNotification = () => setNotification(''); // Close notification

  return (
    <section>
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1 className='font-bold text-xl'>Create Account</h1>
            <div className="social-icons">
              <Link to="#" className='icon'><FaGooglePlusG /></Link>
              <Link to="#" className='icon'><FaFacebookF /></Link>
              <Link to="#" className='icon'><FaXTwitter /></Link>
              <Link to="#" className='icon'><FaLinkedinIn /></Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1 className='font-bold text-xl'>Sign In</h1>
            <div className="social-icons">
              <Link to="#" className='icon'><FaGooglePlusG /></Link>
              <Link to="#" className='icon'><FaFacebookF /></Link>
              <Link to="#" className='icon'><FaXTwitter /></Link>
              <Link to="#" className='icon'><FaLinkedinIn /></Link>
            </div>
            <span>or use your email for sign in</span>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
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

      {notification && <Notification message={notification} onClose={closeNotification} />}
    </section>
  );
}
