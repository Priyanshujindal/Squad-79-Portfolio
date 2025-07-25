import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PropTypes from 'prop-types';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("mgvalkyg");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending message...' });

    try {
      const formData = new FormData(e.target);
      formData.append('_replyto', 'rakshamshar@gmail.com');
      const response = await fetch('https://formspree.io/f/mgvalkyg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-0">
            <h5 className="modal-title">Contact Us</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select
                  className="form-select bg-dark text-white border-secondary"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="mentorship">Mentorship Program</option>
                  <option value="project">Project Collaboration</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control bg-dark text-white border-secondary"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {status.message && (
                <div className={`alert alert-${status.type === 'success' ? 'success' : status.type === 'error' ? 'danger' : 'info'} mb-3`}>
                  {status.message}
                </div>
              )}

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-danger" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactForm; 