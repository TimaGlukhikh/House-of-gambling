import React from 'react';
import styles from './styles.module.scss';
import iconTwitter from '../../assets/Image/Socials/Twitter.png'
import iconFacebook from '../../assets/Image/Socials/Facebook.png'
import iconInstagram from '../../assets/Image/Socials/Instagram.png'
import iconLinkedin from '../../assets/Image/Socials/Linkedin.png'
import iconYoutube from '../../assets/Image/Socials/Youtube.png'
import iconTiktok from '../../assets/Image/Socials/Tiktok.png'
import iconTelegram from '../../assets/Image/Socials/Telegram.png'
import iconVkontakte from '../../assets/Image/Socials/Vkontakte.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#terms">Terms & Conditions</a>
          <a href="#cookies">Cookies</a>
          <a href="#contacts">Contacts</a>
          <a href="#careers">Careers</a>
          <a href="#brand-guide">Brand Guide</a>
        </div>
        <div className={styles.socialContent}>
          <p className={styles.socialHeader}>Our social media:</p>
        <div className={styles.socialIcons}>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={iconTwitter} alt="Twitter" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={iconInstagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={iconLinkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={iconYoutube} alt="Youtube" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={iconTiktok} alt="Tiktok" />
          </a>
          <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">
            <img src={iconTelegram} alt="Telegram" />
          </a>
          <a href="https://www.vk.com" target="_blank" rel="noopener noreferrer">
            <img src={iconVkontakte} alt="Vkontakte" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;