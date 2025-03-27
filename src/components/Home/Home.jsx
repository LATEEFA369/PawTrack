import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      {/* Hero Section */}
      <div className="row mb-5 text-center hero-section">
        <div className="col-12 text-container">
          <h1 className="display-2 text-white mt-3 fw-bold hero-header">
            Join Us in Giving Lost Cats a Second Chance
          </h1>
          <section>
          <p className="lead text-white w-75 m-auto mb-4 hero-description">
            PawTrack is more than just a platform. It’s a community of people committed to helping reunite lost cats with their owners or provide loving homes for adoptable felines.
          </p>
          <p className="motivational-text">
            Your small act of kindness can make a huge difference in the life of a cat. Let’s help them find their way home.
          </p>
          </section>
          {/* Static Images Section */}
          <div className="row mb-4 image-container">
            <div className="col-md-6 image-card">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Cat Image 1" 
                className="image" 
              />
            </div>
            <div className="col-md-6 image-card">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_l5sWD-UZyZLFwSoQbN_j0GfHUbGlDLtMw&s"
                className="image" 
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
