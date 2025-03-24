// components/PostList/PostList.jsx
import { Link } from 'react-router-dom';
  const PostList = ({ posts }) => {
      return (
        <main>
          {posts.map((post) => (
            <Link key={post._id} to={`/posts/${post._id}`}>
              <article>
                <header>
                  <h2>{post.species}</h2>
                  <p>Status: {post.status}</p>
                  <p>Location: {post.location}</p>
                </header>
              </article>
            </Link>
          ))}
        </main>
      );
    };
    
    export default PostList;
    
  
