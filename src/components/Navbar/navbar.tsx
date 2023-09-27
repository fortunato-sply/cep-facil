import { NavLink, Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useContext, useEffect, useState } from 'react';
// @ts-ignore
import { Moon, Sun } from 'phosphor-react';
import { DarkModeContext } from '../../context/darkmode';

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)!;
  const [isActive, setIsActive] = useState(false);

  const renderLinks = () => {
      return (
        <div className={styles.links}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>Sobre</NavLink>
        </div>
      )
  }

  const renderButton = () => {
    return isDarkMode ? <Sun /> : <Moon />
  }
  
  return (
    <div className={`${styles.phone_sidebar} ${isDarkMode ? styles.darkmode : ''}`}>
      <div onClick={() => setIsActive(!isActive)} className={`${styles.hamburger} ${isActive ? `${styles.active}` : ''} ${isDarkMode ? styles.darkmode : ''}`} id='hamburger'>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={`${styles.content} ${isActive ? `${styles.active}` : ''} ${isDarkMode ? styles.darkmode : ''}`}>
        {renderLinks()}
      </div>
      <button onClick={toggleDarkMode} className={styles.darkbtn}>{renderButton()}</button> 
    </div>
  )
}