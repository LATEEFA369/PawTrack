import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home  from './components/Home/Home';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';


import * as authService from '../src/services/authService'; // import the authservice

export const AuthedUserContext = createContext(null);

// posts stuff
import * as postService from './services/postService';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';
import DM from './components/DirectMessage/DMForm';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };
//===================================================================================
//anything related to posts:

 
 
useEffect(() => {
  const fetchAllPosts = async () => {
    if (!user) {
      console.log("No user is currently signed in.");
      return; 
    }
    try {
      const postsData = await postService.index();
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  fetchAllPosts();
}, [user]); // we added this so when another user sign in, use effect again because another user 



//===================================================================================
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
              <Route path="/" element={<Home user={user} />} />
              <Route path="/posts" element={<PostList posts={posts} />} />
              <Route path="/posts/:postId" element={<PostDetails />} />
              <Route path="/posts" element={<PostList posts={posts} />} /> 
              <Route path="/messages" element={<DM />} />
              <Route path="/posts/new" element={<PostForm handleAddPost={handleAddPost} />} />
            </>
          ) : (
            //for visitor
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



