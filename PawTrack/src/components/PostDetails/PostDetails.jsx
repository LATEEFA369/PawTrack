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
  const [newImageUrl, setNewImageUrl] = useState("");

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

  const handleUpdateImage = async () => {
    try {
      const updatedPost = await postService.updateImage(postId, newImageUrl);
      setPost(updatedPost);
      setNewImageUrl("");
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  const handleDeleteImage = async () => {
    try {
      const updatedPost = await postService.deleteImage(postId);
      setPost(updatedPost);
    } catch (error) {
      console.error('Error deleting image:', error);
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
          <div className="card shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px', padding: '20px' }}>
            <div className="card-body">
              <h1 className="card-title" style={{ background: 'linear-gradient(45deg, #6a0dad, #9b4dca)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                Species: {post.species}
              </h1>

              {post.author && <p><strong>Posted by:</strong> {post.author.username}</p>}
              <p><strong>Status:</strong> {post.status}</p>
              <p><strong>Location:</strong> {post.location}</p>
              <p><strong>Details:</strong> {post.details}</p>
              <p><strong>Gender:</strong> {post.gender}</p>
              <p><strong>Contact:</strong> {post.contact}</p>

              {post.author && user && post.author._id === user._id && (
                <div className="mt-3">
                  <Link to={`/posts/${post._id}/edit`} className="btn btn-primary" style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}>Edit</Link>
                  <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad', marginLeft: '10px' }}>Delete</button>
                </div>
              )}
            </div>
          </div>
          <Link to="/posts" className="btn btn-primary mt-3" style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}>Back to Posts</Link>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="post-image">
            {post.img && (
              <div>
                <img src={post.img} alt="Post Image" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                {post.author && user && post.author._id === user._id }
              </div>
            )}

            {!post.img && post.author && user && post.author._id === user._id && (
              <div className="mt-3">
                <input type="text" className="form-control" placeholder="Enter new image URL" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} />
                <button onClick={handleUpdateImage} className="btn btn-primary" style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}>Update Image</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px', padding: '20px' }}>
            <div className="card-body">
              <h2>Comments</h2>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title">Leave a Comment</h4>
                  <CommentForm handleAddComment={handleAddComment} />
                </div>
              </div>

              {post.comments.length === 0 && <p>There are no comments yet.</p>}
              {post.comments.map((comment) => (
                <div key={comment._id} className="comment-container mb-4">
                  <div className="card shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px', padding: '15px' }}>
                    <div className="card-body">
                      <p><strong>{comment.author.username}</strong> posted on {new Date(comment.createdAt).toLocaleDateString()}</p>
                      <p>{comment.text}</p>
                      {comment.author._id === user._id && (
                        <button onClick={() => handleDeleteComment(comment._id)} className="btn btn-primary btn-sm" style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}>Delete</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostDetails;


