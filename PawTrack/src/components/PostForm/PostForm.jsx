import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as postService from '../../services/postService';

const PostDetails = (props) => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService.show(postId);
      setPost(postData);
    };
    fetchPost();
  }, [postId]);

  if (!post)
    return (
      <main className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
          <span className="sr-only"></span>
        </div>
      </main>
    );

  return (
    <main
      className="d-flex justify-content-center align-items-start"
      style={{
        backgroundColor: '#f8f9fa',
        paddingTop: '80px',
        paddingBottom: '80px',
        minHeight: '100vh',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: '70%',
          maxWidth: '800px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(5px)',
          backgroundImage:
            'url("https://media.istockphoto.com/id/1189999060/vector/animal-paw-seamless-pattern-stock-illustration.jpg?s=612x612&w=0&k=20&c=8PcXcUSFigk0kyxYXfcQ-D6XcNUy16TQbKjNGM2i66U=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '15px',
            zIndex: -1,
          }}
        ></div>

        <h1
          className="mb-4 text-center text-gradient"
          style={{
            background: 'linear-gradient(45deg, #6a0dad, #9b4dca, #a74eae)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Post Details
        </h1>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Species:</h4>
          <p>{post.species}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Status:</h4>
          <p>{post.status}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Location:</h4>
          <p>{post.location}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Details:</h4>
          <p>{post.details}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Gender:</h4>
          <p>{post.gender}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Contact:</h4>
          <p>{post.contact}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Breed:</h4>
          <p>{post.breed || 'N/A'}</p>
        </div>

        <div className="mb-3">
          <h4 className="fw-bold text-purple">Age:</h4>
          <p>{post.age || 'N/A'}</p>
        </div>

        <div className="text-center">
          <button
            onClick={() => props.handleDeletePost(post._id)}
            className="btn btn-danger"
            style={{
              background: 'linear-gradient(45deg, #6a0dad, #9b4dca)',
              color: 'white',
            }}
          >
            Delete Post
          </button>
        </div>
      </div>
    </main>
  );
};

export default PostDetails;



