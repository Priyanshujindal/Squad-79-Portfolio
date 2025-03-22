import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/images/contact-hero.jpg"
                alt="Contact Hero"
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead mb-4">Get in touch with us to learn more about our programs and opportunities.</p>
              <p className="mb-4">We're here to help you start your journey in tech education.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <i className="bi bi-geo-alt display-4 text-danger mb-3"></i>
                <h3 className="h5">Address</h3>
                <p className="text-muted">
                  123 Tech Street<br />
                  Silicon Valley, CA 94025<br />
                  United States
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="bi bi-telephone display-4 text-danger mb-3"></i>
                <h3 className="h5">Phone</h3>
                <p className="text-muted">
                  +1 (555) 123-4567<br />
                  +1 (555) 987-6543
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="bi bi-envelope display-4 text-danger mb-3"></i>
                <h3 className="h5">Email</h3>
                <p className="text-muted">
                  info@kalvium.com<br />
                  support@kalvium.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.123456789!2d-122.123456!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA3JzM0LjQiTiAxMjLCsDA3JzM0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  title="Location Map"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 