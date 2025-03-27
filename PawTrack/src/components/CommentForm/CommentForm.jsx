// import { useState, useEffect } from 'react';
import * as postService from '../../services/postService';

// const CommentForm = (props) => {
//   const { postId,currentUser,handleAddComment} = props; // Get postId from props or context if available
//   const [formData, setFormData] = useState({ text: '' });

//   const handleChange = (evt) => {
//     setFormData({ ...formData, [evt.target.name]: evt.target.value });
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     if (!props.currentUser) {
//       console.error("currentUser is undefined");
//     }
//     // Add postId and author to the data being sent (assuming the author is already available)
//     const commentData = {
//       text: formData.text,
//       postId, // Sending the postId to comment on the specific post
//       author:currentUser._id, // Assuming there's a currentUser prop holding the current user's data
//     };
//     handleAddComment(commentData); // Passing the data along with postId and author to the parent component
//     setFormData({ text: '' }); // Reset the form after submission
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="text-input">Add comment:</label>
//       <textarea
//         required
//         type="text"
//         name="text"
//         id="text-input"
//         value={formData.text}
//         onChange={handleChange}
//       />
//       <button type="submit">SUBMIT COMMENT</button>
//     </form>
//   );
// };

// export default CommentForm;


import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import * as postService from '../../services/postService';


const CommentForm = ({ handleAddComment, handleEditComment, handleDeleteComment, currentUser }) => {
  const [formData, setFormData] = useState({ text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId, commentId } = useParams();
  const navigate = useNavigate();

  // Fetch existing comment when editing
  useEffect(() => {
    const fetchComment = async () => {
      setIsLoading(true);
      try {
        if (commentId) {
          const commentData = await commentService.show(postId, commentId);
          setFormData({ text: commentData.text });
        }
      } catch (err) {
        setError('Failed to load comment data!');
      } finally {
        setIsLoading(false);
      }
    };

    if (commentId) fetchComment();
  }, [postId, commentId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const commentData = { text: formData.text.trim(), postId, author: currentUser._id };

      if (commentId) {
        // Update existing comment
        await handleEditComment(commentId, commentData);
      } else {
        // Add new comment
        await handleAddComment(commentData);
      }

      setFormData({ text: '' });
      navigate(`/posts/${postId}`);
    } catch (err) {
      setError('Failed to submit the comment!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = () => {
    if (commentId) {
      handleDeleteComment(commentId);
    }
  };

  const isEditMode = Boolean(commentId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`commentForm ${isEditMode ? 'editForm' : 'newForm'}`} 
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
        {isEditMode ? 'Edit your comment:' : 'Add comment:'}
      </label>
      <textarea
        required
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
        className="form-control"
        style={{ marginBottom: "10px" }}
      />
      <div>
        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ backgroundColor: "#6a0dad", borderColor: "#6a0dad" }}
          disabled={!formData.text.trim() || isLoading}
        >
          {isEditMode ? 'UPDATE COMMENT' : 'SUBMIT COMMENT'}
        </button>

        {isEditMode && (
          <>
            <button 
              type="button" 
              onClick={handleDelete} 
              className="btn btn-danger"
              style={{ marginLeft: "10px" }}
            >
              DELETE COMMENT
            </button>

            <button 
              type="button" 
              onClick={() => navigate(`/posts/${postId}`)} 
              className="btn btn-secondary"
              style={{ marginLeft: "10px" }}
            >
              CANCEL
            </button>
          </>
        )}
      </div>

      {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default CommentForm;
