// components/PostList/PostList.jsx
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <main
      className="d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "80px",
        paddingBottom: "80px",
        minHeight: '100vh',
      }}
    >
      {posts.map((post) => (
        <Link
          key={post._id}
          to={`/posts/${post._id}`}
          style={{
            width: '80%',
            maxWidth: '800px',
            textDecoration: 'none',
            marginBottom: '20px',
          }}
        >
          <article
            className="card shadow-lg p-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(5px)',
              borderRadius: '15px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <header>
              <h2
                className="text-center mb-3"
                style={{
                  background: 'linear-gradient(45deg, #6a0dad, #9b4dca)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {post.species}
              </h2>
              <p className="fw-bold">Status: {post.status}</p>
              <p className="fw-bold">Location: {post.location}</p>
            </header>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default PostList;

    
  
