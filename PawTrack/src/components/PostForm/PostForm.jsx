import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as postService from '../../services/postService';

const PostForm = (props) => {
  const { postId } = useParams();
  const [formData, setFormData] = useState({
    species: '',
    status: 'Lost',
    location: '',
    details: '',
    gender: 'Unknown',
    contact: '',
    breed: '',
    age: 0,
  });

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService.show(postId);
      setFormData(postData);
    };
    if (postId) fetchPost();
  }, [postId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (postId) {
      props.handleUpdatePost(postId, formData);
    } else {
      props.handleAddPost(formData);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>{postId ? 'Edit Post' : 'New Post'}</h1>

        <label htmlFor="species-input">Species</label>
        <input
          required
          type="text"
          name="species"
          id="species-input"
          value={formData.species}
          onChange={handleChange}
        />

        <label htmlFor="status-input">Status</label>
        <select
          required
          name="status"
          id="status-input"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
          <option value="Adoption">Adoption</option>
        </select>

        <label htmlFor="location-input">Location</label>
        <input
          required
          type="text"
          name="location"
          id="location-input"
          value={formData.location}
          onChange={handleChange}
        />

        <label htmlFor="details-input">Details</label>
        <textarea
          required
          name="details"
          id="details-input"
          value={formData.details}
          onChange={handleChange}
        />

        <label htmlFor="gender-input">Gender</label>
        <select
          required
          name="gender"
          id="gender-input"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>

        <label htmlFor="contact-input">Contact</label>
        <input
          required
          type="text"
          name="contact"
          id="contact-input"
          value={formData.contact}
          onChange={handleChange}
        />

        <label htmlFor="breed-input">Breed</label>
        <input
          type="text"
          name="breed"
          id="breed-input"
          value={formData.breed}
          onChange={handleChange}
        />

        <label htmlFor="age-input">Age</label>
        <input
          type="number"
          name="age"
          id="age-input"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default PostForm;
