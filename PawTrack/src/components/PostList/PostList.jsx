// components/PostList/PostList.jsx

const PostList = ({ posts }) => {
    return (
      <div>
        <h2>All Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PostList;
  