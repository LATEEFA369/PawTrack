import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li>Welcome, {user.username}</li> 
            <li><Link to="/">Home page</Link> </li>
            <li><Link to='/posts'>Pets Posts</Link></li>
            <li><Link to='/messages'>DM</Link></li>
            <li>
              <Link to="/posts/new">Add Post</Link> 
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

