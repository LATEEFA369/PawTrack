import { Link } from 'react-router-dom';
import './PostList.css'; 

const PostList = ({ posts }) => {
  return (
    <main className="d-flex flex-column align-items-center post-list-container">
      {posts.map((post) => (
        <Link
          key={post._id}
          to={`/posts/${post._id}`}
          className="post-link"
        >
          <article className="post-card">
            <h2 className="post-header">
              {post.species} is {post.status} in {post.location}
            </h2>
            <div className="post-image-container">
              <img
                src={post.img || 'https://via.placeholder.com/600x400'}
                className="post-image"
                alt={post.species}
              />
            </div>
            <p className="post-author">{post.author.username}</p>
            <p className="post-date">
              Posted on: {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default PostList;
