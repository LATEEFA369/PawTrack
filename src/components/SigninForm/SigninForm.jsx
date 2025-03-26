import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      console.log(user);
      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(5px)",
          backgroundImage: 'url("https://media.istockphoto.com/id/1189999060/vector/animal-paw-seamless-pattern-stock-illustration.jpg?s=612x612&w=0&k=20&c=8PcXcUSFigk0kyxYXfcQ-D6XcNUy16TQbKjNGM2i66U=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)", 
            borderRadius: "15px",
            zIndex: -1,
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
          Sgin In
        </h1>

        <p className="text-center text-danger">{message}</p>

        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="form-group mb-3">
            <label htmlFor="username" className="fw-bold text-purple">Username:</label>
            <input
              type="text"
              autoComplete="off"
              id="username"
              value={formData.username}
              name="username"
              onChange={handleChange}
              className="form-control rounded-3"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Input */}
          <div className="form-group mb-3">
            <label htmlFor="password" className="fw-bold text-purple">Password:</label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="form-control rounded-3"
              placeholder="Enter your password"
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center mb-3">
            <button
              type="submit"
              className="btn"
              style={{
                background: "linear-gradient(45deg, #6a0dad, #9b4dca)",
                color: "white",
                marginRight: "20px",  
              }}
            >
              Sgin In
            </button>
            <Link to="/">
              <button
                type="button"
                className="btn"
                style={{
                  background: "linear-gradient(45deg, #9b4dca, #a74eae)",
                  color: "white",
                }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SigninForm;
