import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-info">
            <h2 className="section-title">Let's Create <br /><span className="gradient-text">Something Great</span></h2>
            <p className="contact-desc">
              Have a project in mind? Or just want to say hi? 
              Drop me a message and let's start a conversation.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <p>vishal@example.com</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <p>India, Earth</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
