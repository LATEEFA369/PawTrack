import * as postService from '../../services/postService';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import CommentForm from '../CommentForm/CommentForm';


const PostDetails = (props) => {
  const nav = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const user = useContext(AuthedUserContext);
  const { currentUser } = props; 

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService.show(postId);
      setPost(postData);
    };
    fetchPost();
  }, [postId]);

  const handleAddComment = async (commentFormData) => {
    const newComment = await postService.createComment(postId, commentFormData);
    setPost({ ...post, comments: [...post.comments, newComment] });
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await postService.deleteComment(postId, commentId);
      setPost((prevPost) => ({
        ...prevPost,
        comments: prevPost.comments.filter((comment) => comment._id !== commentId),
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const confirmDeletePost = () => {
    props.handleDeletePost(post._id);
    setShowModal(false);
  };

  if (!post)
    return (
      <main className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
          <span className="sr-only"></span>
        </div>
      </main>
    );

  return (
    <main className="container mx-auto p-4">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="card shadow-lg" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <div className="card-body">
              <h1 className="card-title" style={{
                background: 'linear-gradient(45deg, #6a0dad, #9b4dca)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}>
                Species: {post.species}
              </h1>
              <p><strong>Status:</strong> {post.status}</p>
              <p><strong>Location:</strong> {post.location}</p>
              <p><strong>Details:</strong> {post.details}</p>
              <p><strong>Gender:</strong> {post.gender}</p>
              <p><strong>Contact:</strong> {post.contact}</p>
              <p><strong>Breed:</strong> {post.breed || 'N/A'}</p>
              <p><strong>Age:</strong> {post.age || 'N/A'}</p>

              {post.author && user && post.author._id === user._id && (
                <div className="mt-3">
                  <Link to={`/posts/${post._id}/edit`} className="btn btn-secondary" style={{ marginRight: '10px' }}>Edit</Link>
                  <button onClick={() => setShowModal(true)} className="btn btn-danger">Delete</button>
                </div>
              )}
            </div>
          </div>
          <Link to="/posts" className="btn btn-primary mt-3">Back to Posts</Link>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="card shadow-lg" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <div className="card-body">
              <h2>Comments</h2>

              <div className="card mb-3" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(5px)',
                borderRadius: '15px',
                padding: '20px',
              }}>
                <div className="card-body">
                  <h4 className="card-title">Leave a Comment</h4>
                  <CommentForm currentUser={currentUser} postId={postId} handleAddComment={handleAddComment} />
                  {/* <CommentForm handleAddComment={handleAddComment} /> */}
                </div>
              </div>

              {post.comments.length === 0 && <p>There are no comments yet.</p>}

              {post.comments.map((comment) => (
                <div key={comment._id} className="comment-container mb-4">
                  <div className="card shadow-sm" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '15px',
                    padding: '15px',
                  }}>
                    <div className="card-body">
                      <header>
                        <p className="mb-1">
                          <strong>{comment.author.username}</strong> posted on{' '}
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                      </header>
                      <p>{comment.text}</p>
                      {comment.author._id === user._id && (
                        <button
                          onClick={() => handleDeleteComment(comment._id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this post? This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmDeletePost}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PostDetails;
