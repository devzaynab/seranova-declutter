
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa6';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === '/login';

  const handleModeSwitch = (loginMode) => {
    setMessage('');
    setMessageType('');

    setUsername('');
    setEmail('');
    setPassword('');

    navigate(loginMode ? '/login' : '/signup');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage('');
    setMessageType('');

    if (!email.trim() || !password) {
      setMessage('Please enter your email and password.');
      setMessageType('error');
      return;
    }

    if (!isLogin && !username.trim()) {
      setMessage('Please enter your username.');
      setMessageType('error');
      return;
    }

    if (!isLogin && password.length < 6) {
      setMessage('Your password must contain at least 6 characters.');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
      } else {
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email.trim(),
            password
          );

        await updateProfile(userCredential.user, {
          displayName: username.trim(),
        });
      }

      setMessageType('success');
      setMessage(
        isLogin
          ? 'Login successful!'
          : 'Account created successfully!'
      );

      navigate('/');
    } catch (error) {
      console.error('Authentication error:', error);

      let errorMessage = 'Something went wrong. Please try again.';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage =
            'This email already has an account. Please log in.';
          break;

        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address.';
          break;

        case 'auth/weak-password':
          errorMessage =
            'Your password is too weak. Use at least 6 characters.';
          break;

        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          errorMessage = 'Incorrect email or password.';
          break;

        case 'auth/too-many-requests':
          errorMessage =
            'Too many attempts. Please wait a while and try again.';
          break;

        case 'auth/network-request-failed':
          errorMessage =
            'Network error. Check your internet connection.';
          break;

        default:
          errorMessage = error.message
            ? error.message.replace('Firebase: ', '')
            : errorMessage;
      }

      setMessage(errorMessage);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    setMessage('');
    setMessageType('');

    if (!email.trim()) {
      setMessage('Enter your email address first.');
      setMessageType('error');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email.trim());

      setMessage('Password reset email sent. Check your inbox.');
      setMessageType('success');
    } catch (error) {
      console.error('Password reset error:', error);

      let errorMessage = 'Unable to send the reset email. Try again.';

      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account was found with this email.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage =
          'Network error. Check your internet connection.';
      }

      setMessage(errorMessage);
      setMessageType('error');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <div className="text">
          {isLogin ? 'Login' : 'Sign Up'}
        </div>

        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          {!isLogin && (
            <div className="input">
              <FaUser className="input-icon" />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                autoComplete="username"
              />
            </div>
          )}

          <div className="input">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              autoComplete="email"
              required
            />
          </div>

          <div className="input">
            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete={
                isLogin ? 'current-password' : 'new-password'
              }
              required
            />
          </div>
        </div>

        {isLogin && (
          <div className="forgot-password">
            Forgot password?{' '}
            <span
              onClick={handlePasswordReset}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault();
                  handlePasswordReset();
                }
              }}
            >
              Click Here!
            </span>
          </div>
        )}

        {message && (
          <p
            className={`auth-message ${messageType}`}
            role="alert"
          >
            {message}
          </p>
        )}

        <div className="submit-container">
          <button
            type={isLogin ? 'button' : 'submit'}
            className={`submit ${
              !isLogin ? 'active' : 'inactive'
            }`}
            onClick={
              isLogin
                ? () => handleModeSwitch(false)
                : undefined
            }
            disabled={loading}
          >
            Sign Up
          </button>

          <button
            type={isLogin ? 'submit' : 'button'}
            className={`submit ${
              isLogin ? 'active' : 'inactive'
            }`}
            onClick={
              !isLogin
                ? () => handleModeSwitch(true)
                : undefined
            }
            disabled={loading}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;