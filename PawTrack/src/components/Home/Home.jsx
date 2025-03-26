import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      {/* Hero Section */}
      <div className="row mb-5 text-center" style={{ background: 'linear-gradient(135deg,rgb(210, 141, 240),rgb(210, 176, 224))', padding: '50px' }}>
        <div className="col-12 text-container">
          <h1 className="display-2 text-white mt-3 fw-bold">
            Looking to Help Lost Cats or Adopt One?
          </h1>
          <p className="lead text-white w-75 m-auto mb-4">
            PawTrack is a platform where you can help reunite lost cats with their owners or adopt a new feline friend in need of a loving home.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <Link to="/posts/new" className="btn btn-primary text-uppercase">Post a Lost Cat</Link>
            <Link to="/posts" className="btn btn-light text-uppercase">Explore Listings</Link>
          </div>
          {/* Carousel */}
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button className="active" type="button" data-bs-slide-to="0" data-bs-target="#slider" aria-label="Slide 1" aria-current="true"></button>
              <button type="button" data-bs-slide-to="1" data-bs-target="#slider" aria-label="Slide 2"></button>
              <button type="button" data-bs-slide-to="2" data-bs-target="#slider" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded-5">
              <div className="carousel-item active">
                <img src="https://example.com/lost-cat.jpg" alt="Lost Cat" className="d-block mx-auto" style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="carousel-item">
                <img src="https://example.com/adoptable-cat.jpg" alt="Adoptable Cat" className="d-block mx-auto" style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="carousel-item">
                <img src="https://example.com/happy-cat.jpg" alt="Happy Adopted Cat" className="d-block mx-auto" style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#slider">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#slider">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Supporting Lost Cats Section */}
      <div className="container mb-4">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h2 className="fw-bold">
              Supporting Lost Cats and Encouraging Adoptions
            </h2>
          </div>
        </div>

        {/* Card Section */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm">
              <img src="https://example.com/help-lost-cat.jpg" alt="Helping Lost Cats" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Help Lost Cats</h5>
                <p className="card-text">
                  If you've found a lost cat, post details to help reunite them with their owners.
                </p>
                <div className="badge bg-warning p-2 text-uppercase">
                  Lost
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm">
              <img src="https://example.com/adopt-a-cat.jpg" alt="Adopt a Cat" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Adopt a Cat</h5>
                <p className="card-text">
                  Explore cats available for adoption and give them a forever home.
                </p>
                <div className="badge bg-success p-2 text-uppercase">
                  Adoption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

