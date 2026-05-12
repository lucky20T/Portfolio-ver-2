import React from 'react';

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn">
          ✕
        </button>
        <div className="contact-card glass-card" style={{margin: 0, boxShadow: '0 0 50px rgba(0,0,0,0.5)'}}>
          <div className="contact-info">
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
          
          <form 
            className="contact-form" 
            action="https://formsubmit.co/vishalchakradhari2025@gmail.com" 
            method="POST"
          >
            {/* Disable FormSubmit captcha for smoother UX */}
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
