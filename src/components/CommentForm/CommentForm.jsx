import { useState, useEffect } from 'react';
import * as postService from '../../services/postService';

const CommentForm = (props) => {
  const { postId } = props; // Get postId from props or context if available
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Add postId and author to the data being sent (assuming the author is already available)
    const commentData = {
      text: formData.text,
      postId, // Sending the postId to comment on the specific post
      author: props.currentUser._id, // Assuming there's a currentUser prop holding the current user's data
    };
    props.handleAddComment(commentData); // Passing the data along with postId and author to the parent component
    setFormData({ text: '' }); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Add comment:</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit">SUBMIT COMMENT</button>
    </form>
  );
};

export default CommentForm;
