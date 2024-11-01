import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Notification from '../../components/Notification/Notification'; // Import the Notification component
import Loading from '../../components/Loading/Loading'; // Import your Loading component
import './login.css';

export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState(''); // State for notification type
  const [loading, setLoading] = useState(false); // New loading state

  const toTitleCase = (str) => {
    return str
      .toLowerCase() // Convert the entire string to lowercase
      .split(' ') // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a string
  };

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Convert the name to title case
    const formattedName = toTitleCase(formData.name);
    
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, name: formattedName }), // Use the formatted name
    });

    if (response.ok) {
      setNotification('Account Created. Now Sign In.'); // Show notification
      setFormData({ name: '', email: '', password: '' });
    } else {
      setNotification('Email already registered.');
      setNotificationType('error'); // Set notification type to error
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
      sessionStorage.setItem('user', JSON.stringify(user)); // Store user object
      setNotificationType('success'); // Set notification type to success
      setLoading(true); // Set loading to true

      // Wait for 2 seconds before navigating
      setTimeout(() => {
        navigate('/dashboard'); // Redirect to dashboard
        setLoading(false); // Reset loading after navigating
      }, 2000);
    } else {
      setNotification('Invalid credentials');
      setNotificationType('error'); // Set notification type to error
    }
  };

  const closeNotification = () => {
    setNotification('');
    setNotificationType(''); // Reset notification type
  };

  return (
    <section className='login'>
      {loading ? (
        <Loading /> // Show loading screen when loading is true
      ) : (
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
      )}

      {notification && <Notification message={notification} onClose={closeNotification} type={notificationType} />}
    </section>
  );
}
