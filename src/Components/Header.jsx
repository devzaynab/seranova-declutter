
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState('');

  useEffect(() => {
    return onAuthStateChanged(auth, setCurrentUser);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    setLogoutError('');
    setLoggingOut(true);

    try {
      await signOut(auth);
      closeMenu();
    } catch {
      setLogoutError('Unable to log out. Please try again.');
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Seranova<span>Declutter</span>
        </Link>

        <button
          className="hamburger"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="header-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="header-menu"
          className={`header-menu ${menuOpen ? 'open' : ''}`}
        >
          <nav className="header-nav">
          
            <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/terms" onClick={closeMenu}>Terms</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </nav>

          <div className="header-actions">
            {currentUser === undefined ? null : currentUser ? (
              <>
                <span className="account-label" title={currentUser.email || ''}>
                  {currentUser.displayName || currentUser.email}
                </span>
                <button
                  className="logout-button"
                  type="button"
                  onClick={handleLogout}
                  disabled={loggingOut}
                >
                  {loggingOut ? 'Logging out...' : 'Log out'}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={closeMenu}>Login</Link>
                <Link
                  to="/signup"
                  className="signup-button"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
            {logoutError && (
              <span className="logout-error" role="status">
                {logoutError}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
