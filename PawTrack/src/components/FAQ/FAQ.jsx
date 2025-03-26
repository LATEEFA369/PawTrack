import React, { useState } from 'react';

const FAQ = () => {
  // State to store the index of the open question
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle open/close of the accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontSize: '2rem' }}>Frequently Asked Questions</h2>

      {/* FAQ Items */}
      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(0)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          How can I post a lost cat?
        </h4>
        {openIndex === 0 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            To post a lost cat, first register on the site, then go to the "Post a Lost Cat" page and add the details.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(1)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          How can I interact with the posts?
        </h4>
        {openIndex === 1 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            You can interact with the posts by leaving comments or sending direct messages to other users who posted about lost or adoptable cats.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(2)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I modify or delete a post after it's published?
        </h4>
        {openIndex === 2 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can modify or delete your post by going to your listings page and selecting the appropriate option.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(3)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          How do I know if the lost cat has been found?
        </h4>
        {openIndex === 3 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            If the lost cat is found, the user who posted the listing will update the post or add a comment confirming the cat has been found. You can also contact the poster directly.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(4)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I adopt a cat through this app?
        </h4>
        {openIndex === 4 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can browse adoptable cats on the site. Just browse through the "Explore Listings" section and choose the cats looking for a new home.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(5)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Are there any fees to use the app?
        </h4>
        {openIndex === 5 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            No, the app is free to use. You can post listings and interact with others without any fees.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(6)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I report an inappropriate or offensive post?
        </h4>
        {openIndex === 6 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can report any inappropriate content or post by contact us. It will be reviewed by the support team and necessary actions will be taken.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(7)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          How can I contact people who posted listings?
        </h4>
        {openIndex === 7 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            You can contact people who posted listings by sending direct messages through the app. Additionally, you can leave comments on their posts to follow up.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(8)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          What information should I provide when posting a lost cat ad?
        </h4>
        {openIndex === 8 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            When posting a lost cat ad, it's best to provide as much detail as possible, such as:
            <ul>
              <li>A clear picture of the cat</li>
              <li>The location where the cat was lost</li>
              <li>Distinctive features (such as colors or marks)</li>
              <li>Contact number or means of communication</li>
            </ul>
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(9)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I post more than one listing?
        </h4>
        {openIndex === 9 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can post more than one listing if you have more than one lost cat or are looking to adopt multiple cats.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(10)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          What is the purpose of feedback?
        </h4>
        {openIndex === 10 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Feedback help build trust between users. If you have had a good experience with someone on the app (such as adopting a cat or helping them find a lost cat), you can leave a positive rating for them.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(11)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I provide support or help with lost cat listings?
        </h4>
        {openIndex === 11 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can interact with lost cat listings by offering assistance, such as sharing the listings on social media or providing tips on how to find lost cats.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(12)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I see previously adopted cats?
        </h4>
        {openIndex === 12 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can access the records of ads where cats have been adopted, and each ad will be updated when a cat is adopted.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(13)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Are the ads verified?
        </h4>
        {openIndex === 13 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            We work hard to maintain the authenticity of the ads by reviewing them, but we encourage users to verify the details and contact the poster directly to ensure the information is correct.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(14)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I add my own cat to the app?
        </h4>
        {openIndex === 14 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can add your own cat if you're looking to find a home for it by posting an ad under the "Adopt Cats" section.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(15)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Is my contact information stored?
        </h4>
        {openIndex === 15 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            We respect your privacy. We do not share or sell your contact information. You can choose whether to include your phone number or email in the listing.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(16)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Is there technical support available if I have issues?
        </h4>
        {openIndex === 16 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, if you encounter any issues or have any questions, you can contact our support team via email or through the "Contact Us" section in the app.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(17)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I change the location of my listing after posting it?
        </h4>
        {openIndex === 17 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            You cannot modify the location after posting, but you can delete the listing and create a new one with an updated location.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h4 onClick={() => toggleAccordion(18)} className="faq-question" style={{ fontSize: '1.1rem' }}>
          Can I enable notifications for lost cats in my area?
        </h4>
        {openIndex === 18 && (
          <p className="faq-answer" style={{ fontSize: '0.95rem' }}>
            Yes, you can enable notifications to receive alerts when new listings for lost cats are posted in your area.
          </p>
        )}
      </div>

      {/* Contact Info Section */}
      <div className="contact-info mt-5">
        <h4 className="text-center" style={{ fontSize: '1.1rem' }}>Contact Us:</h4>
        <p className="text-center">
          <a href="mailto:support@pawtrack.com" className="btn btn-link">Support Email: support@pawtrack.com</a>
        </p>
        <p className="text-center">
          <a href="mailto:info@pawtrack.com" className="btn btn-link">Inquiries Email: info@pawtrack.com</a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;

