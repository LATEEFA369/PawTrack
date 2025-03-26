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
        {/*  logo or name */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#6a0dad', fontSize: '1.7rem' }}>
          PawTrack
        </Link>

        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-flex gap-4">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/posts">
                Pets Posts
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/messages">
                    DM
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/posts/new">
                    Add Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="" onClick={handleSignout}>
                    Sign Out
                  </Link>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/signin">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>

          {user && (
            <span className="ms-4 welcome-text">
              Welcome, {user.username}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

