import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass-card" data-aos="fade-up">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
            <h2 className="section-title">Let's Create <br /><span className="gradient-text">Something Great</span></h2>
            <p className="contact-desc">
              Have a project in mind? Or just want to say hi? 
              Drop me a message and let's start a conversation.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <p>vishalchakradhari2025@gmail.com</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <p>+91 9174218274</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()} data-aos="fade-left" data-aos-delay="200">
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
