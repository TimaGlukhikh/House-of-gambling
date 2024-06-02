import React, { useState } from 'react'
import styles from './styles.module.scss'
import icon from '../../assets/Image/Icon - Planet.png'
import { useViewport } from '../../hook/useViewport'
import iconMenu from '../../assets/Image/Menu.png'
import iconCloseMenu from '../../assets/Image/CloseMenu.png'
import iconBtnLanguage from '../../assets/Image/Btn. - Language.png'

function Header() {
  const [language, setLanguage] = useState('EN')
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'RU' : 'EN'))
  }
  const { isDesktop } = useViewport()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <header className={styles.header_box}>
        {isDesktop && (
          <nav className={styles.nav}>
            <div className={styles.navWrapper}>
              <ul className={styles.navLinks}>
                <li>
                  <a href="#about-us">About us</a>
                </li>
                <li>
                  <a href="#brands">Brands</a>
                </li>
                <li>
                  <a href="#commissions">Commissions</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#contact-us">Contact us</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.langButton} onClick={toggleLanguage}>
                <img src={icon} alt="icon" className={styles.icon} /> {language}
              </button>
              <button className={styles.loginButton}>LOG IN</button>
              <button className={styles.signupButton}>SIGN UP</button>
            </div>
          </nav>
        )}
        {!isDesktop && (
          <nav className={styles.navMob}>
            <div className={styles.mobMenu}>
              <button className={styles.langButton} onClick={toggleLanguage}>
                <img
                  src={iconBtnLanguage}
                  alt="icon"
                  className={styles.iconMobLanguage}
                />
              </button>
              <button className={styles.menuButton} onClick={toggleMenu}>
                <img
                  src={isMenuOpen ? iconCloseMenu : iconMenu}
                  alt="Menu"
                  className={styles.iconMobMenu}
                />
              </button>
            </div>
            {isMenuOpen && (
              <div
                className={`${styles.mobileNav} ${
                  isMenuOpen ? styles.open : ''
                }`}
              >
                <ul className={styles.navLinksMob}>
                  <li>
                    <a href="#about-us">About us</a>
                  </li>
                  <li>
                    <a href="#brands">Brands</a>
                  </li>
                  <li>
                    <a href="#commissions">Commissions</a>
                  </li>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact us</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                  <button className={styles.loginButtonMob}>LOG IN</button>
                  <button className={styles.signupButtonMob}>SIGN UP</button>
                </ul>
                
                  
              </div>
            )}
          </nav>
        )}
      </header>
    </>
  )
}
export default Header
