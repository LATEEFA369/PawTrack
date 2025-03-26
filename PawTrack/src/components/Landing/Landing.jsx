import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main>
      <div className="hero bg-light pt-7" style={{ background: 'linear-gradient(135deg,rgb(194, 158, 216),rgb(198, 169, 219))', padding: '50px 0' }}>
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <div className="image-container mb-5 px-4 text-center">
                <img
                  src="https://media.istockphoto.com/id/1470993851/vector/animal-love-symbol-paw-print-with-heart-isolated-vector.jpg?s=612x612&w=0&k=20&c=biJo8ubD7nEFwuxaucKqg8dXB2W2JFORIGsU8AiYbWU="
                  alt="Blog Image"
                  className="img-fluid rounded-lg"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  Put Your Paw in and Help a Pet Find a Home!
                </h1>
                <p className="lead text-white" style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
                  Join PawTrack today and become a hero for pets in need. Your paw is all it takes to make a difference!
                </p>
                <div className="form-container text-center">
                  <Link to="/signup">
                    <button
                      className="btn btn-lg text-white"
                      style={{
                        background: 'linear-gradient(135deg,rgb(100, 84, 110),rgb(173, 142, 196))',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '8px',
                        fontSize: '1.2rem',
                      }}
                    >
                      Join the PawTrack Family
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      

      <div className="container mt-5">
        <div className="row gy-4">
          <div className="col-md-4 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdxWtyAZaUt2gbHZp4-saDtmKcTxC4WkzpQ&s"
              alt="Lost Cat"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "I was lost for weeks, but thanks to PawTrack, I found my way back home! Thank you to the kind souls who helped me reconnect with my family."
            </p>
            <p className="fw-bold">Mittens - Lost </p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tufAaKKwOaVIhi8GvniazZG9osLgQfGKQQ&s"
              alt="Adopted Cat"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "I was abandoned on the streets, but now I have a warm home with a loving family, all thanks to PawTrack's amazing community!"
            </p>
            <p className="fw-bold">Whiskers - Adopted </p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Reunited Cat"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "After being lost for months, I’m finally back with my owner, and I couldn’t be happier! PawTrack brought us together again."
            </p>
            <p className="fw-bold">Tommy - Reunited </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
