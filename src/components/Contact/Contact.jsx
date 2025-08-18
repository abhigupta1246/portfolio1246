import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('');
  const form = React.useRef();

  React.useEffect(() => {
    emailjs.init('YYNHdfhu4Odo6bvZU');
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Input change:', name, value);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      console.log('Sending email with data:', formData);

      // Create template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: 'Portfolio Contact Form'
      };

      const result = await emailjs.send(
        'service_225fts3',
        'template_7nj33ku',
        templateParams,
        'YYNHdfhu4Odo6bvZU'
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
      console.log('Template parameters:', templateParams);
      console.log('Service ID:', 'service_225fts3');
      console.log('Template ID:', 'template_7nj33ku');

    try {
      console.log('Attempting to send email...');
      const result = await emailjs.send(
        'service_225fts3',
        'template_7nj33ku',
        templateParams,
        'YYNHdfhu4Odo6bvZU' // Adding public key here as well
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Failed to send email:', {
        error: error.message,
        errorObject: error,
        templateParams,
        formData,
        status: error.status,
        text: error.text
      });
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:abhishekgupta62901@gmail.com" target="_blank">Mail</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon" 
              />
              <a href="https://www.linkedin.com/in/abhishek-gupta-617724193/#main-content"
              target="_blank">
              Linkedin</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/abhigupta1246" target="_blank">Github</a>
            </li>
          </ul>
        </div>
        
        <div className={styles.rightSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>CONTACT US</h2>
            {status === 'success' && (
              <div className={styles.successMessage}>
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMessage}>
                Failed to send message. Please try again.
              </div>
            )}
            {status === 'sending' && (
              <div className={styles.sending}>
                Sending message...
              </div>
            )}

            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Mail"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Abhishek Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};