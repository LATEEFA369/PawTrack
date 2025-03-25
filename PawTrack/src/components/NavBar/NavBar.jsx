import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <nav
      className="navbar navbar-expand-lg px-4"
      style={{ backgroundColor: '#f5e8ff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* شعار أو اسم الموقع */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: '#6a0dad', fontSize: '1.7rem' }}
        >
          PawTrack
        </Link>

        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-flex gap-4">
            <li className="nav-item">
              <Link className="nav-link" style={linkStyle} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={linkStyle} to="/posts">
                Pets Posts
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" style={linkStyle} to="/messages">
                    DM
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={linkStyle} to="/posts/new">
                    Add Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={linkStyle}
                    to=""
                    onClick={handleSignout}
                  >
                    Sign Out
                  </Link>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" style={linkStyle} to="/signin">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={linkStyle} to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>

          {user && (
            <span
              className="ms-4"
              style={{
                color: '#6a0dad',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              Welcome, {user.username}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

// CSS-in-JS لتنسيق الروابط
const linkStyle = {
  fontSize: '1.1rem',
  fontWeight: '500',
  color: '#4b0082',
  transition: 'color 0.3s ease',
};

export default NavBar;

