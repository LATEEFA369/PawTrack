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
            <li>Welcome, {user.username}</li> {/* عنصر منفصل */}
            <li>
              <Link to="/">Dashboard</Link> {/* عنصر منفصل */}
            </li>
            <li>
              <Link to="/posts/new">New Post</Link> {/* عنصر منفصل */}
            </li>
            <li>
              <Link to="" onClick={handleSignout}>
                Sign Out
              </Link> {/* عنصر منفصل */}
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
