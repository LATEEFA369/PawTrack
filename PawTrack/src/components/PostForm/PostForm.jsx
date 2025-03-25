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
    <div className="container py-5">
      <div className="card" style={{ maxWidth: '450px', width: '100%' }}>
        <div className="card-body">
          <form className="row g-3" onSubmit={handleSubmit}>
            {/* Species Input */}
            <div className="col-md-6">
              <label htmlFor="species" className="form-label">Species</label>
              <input
                type="text"
                className="form-control"
                id="species"
                name="species"
                value={formData.species}
                onChange={handleChange}
                placeholder="Enter species (e.g., Dog, Cat)"
              />
            </div>

            {/* Status Dropdown */}
            <div className="col-md-6">
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
                <option value="Adoption">Adoption</option>
              </select>
            </div>

            {/* Gender Input (on first row) */}
            <div className="col-12">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                id="gender"
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>

            {/* Age and Species on the same row */}
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age (in years)"
              />
            </div>

            {/* Breed Input */}
            <div className="col-md-6">
              <label htmlFor="breed" className="form-label">Breed</label>
              <input
                type="text"
                className="form-control"
                id="breed"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter breed (if known)"
              />
            </div>

            {/* Details Textarea */}
            <div className="col-12">
              <label htmlFor="details" className="form-label">Details</label>
              <textarea
                className="form-control"
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Provide more details about the animal"
                rows="3"
              />
            </div>

            {/* Location Input */}
            <div className="col-12">
              <label htmlFor="location" className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the location where the animal was found/lost"
              />
            </div>

            {/* Contact Info Input */}
            <div className="col-12">
              <label htmlFor="contact" className="form-label">Contact Information</label>
              <input
                type="text"
                className="form-control"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Your contact info (phone, email)"
              />
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">Submit Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;


