import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
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
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Abhishek Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};