import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as postService from '../../services/postService';

const PostForm = (props) => {
  const { postId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    species: '',
    status: 'Lost',
    location: '',
    details: '',
    gender: 'Unknown',
    contact: '',
    breed: '',
    age: 0,
    img: '', 
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
    <main
      className="d-flex justify-content-center align-items-start"
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "80px",
        paddingBottom: "80px",
        minHeight: '100vh',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "70%",
          maxWidth: "800px",
          borderRadius: "15px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // background with some transparency
          backdropFilter: "blur(5px)", // blur effect on the background
          backgroundImage: 'url("https://media.istockphoto.com/id/1189999060/vector/animal-paw-seamless-pattern-stock-illustration.jpg?s=612x612&w=0&k=20&c=8PcXcUSFigk0kyxYXfcQ-D6XcNUy16TQbKjNGM2i66U=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Additional color overlay to lighten the background
          position: "relative", // To enable overlay
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Light white overlay for better contrast
            borderRadius: "15px",
            zIndex: -1, // Ensure this overlay is behind content
          }}
        ></div>

        <h1
          className="mb-4 text-center text-gradient"
          style={{
            background: "linear-gradient(45deg, #6a0dad, #9b4dca, #a74eae)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {postId ? "Edit Post" : "New Post"}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Species Input */}
          <div className="form-group mb-3">
            <label htmlFor="species" className="fw-bold text-purple">Species</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="species"
              name="species"
              value={formData.species}
              onChange={handleChange}
              placeholder="Enter species (e.g., Dog, Cat)"
            />
          </div>

          {/* Status Dropdown */}
          <div className="form-group mb-3">
            <label htmlFor="status" className="fw-bold text-purple">Status</label>
            <select
              id="status"
              className="form-select rounded-3"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
              <option value="Adoptable">Adoptable</option>
            </select>
          </div>

          {/* Gender Dropdown */}
          <div className="form-group mb-3">
            <label htmlFor="gender" className="fw-bold text-purple">Gender</label>
            <select
              id="gender"
              className="form-select rounded-3"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>

          {/* Age Input */}
          <div className="form-group mb-3">
            <label htmlFor="age" className="fw-bold text-purple">Age</label>
            <input
              type="number"
              className="form-control rounded-3"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age (in years)"
            />
          </div>

          {/* Breed Input */}
          <div className="form-group mb-3">
            <label htmlFor="breed" className="fw-bold text-purple">Breed</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Enter breed (if known)"
            />
          </div>

          {/* Details Textarea */}
          <div className="form-group mb-3">
            <label htmlFor="details" className="fw-bold text-purple">Details</label>
            <textarea
              className="form-control rounded-3"
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Provide more details about the animal"
              rows="3"
            />
          </div>

          {/* Location Input */}
          <div className="form-group mb-3">
            <label htmlFor="location" className="fw-bold text-purple">Location</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter the location where the animal was found/lost"
            />
          </div>

          {/* Contact Input */}
          <div className="form-group mb-3">
            <label htmlFor="contact" className="fw-bold text-purple">Contact Information</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your contact info (phone, email)"
            />
          </div>

          {/* Image URL Input */}
          <div className="form-group mb-3">
            <label htmlFor="img" className="fw-bold text-purple">Image URL</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn"
              style={{ background: "linear-gradient(45deg, #6a0dad, #9b4dca)", color: "white" }}
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PostForm;
