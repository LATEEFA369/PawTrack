import { useState, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import PostList from './components/PostList/PostList'; // استيراد مكون PostList
import * as authService from '../src/services/authService'; // import the authservice

export const AuthedUserContext = createContext(null);

// posts stuff
import * as postService from './services/postService';
import PostForm from './components/PostForm/PostForm';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const handleAddPost = async (formData) => {
    try {
      const newPost = await postService.create(formData);
      const newPostList = [newPost, ...posts];
      setPosts(newPostList);
      navigate('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/posts" element={<PostList posts={posts} />} /> {/* هذا هو المسار المضاف */}
              <Route path="/posts/new" element={<PostForm handleAddPost={handleAddPost} />} />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;



