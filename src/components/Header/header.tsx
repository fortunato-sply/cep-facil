import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import Navbar from '../Navbar/navbar';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkmode';
// @ts-ignore
import { Moon, Sun } from 'phosphor-react';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)!;

  const renderButton = () => {
    return isDarkMode ? <Sun /> : <Moon />
  }

  return (
    <section className={`${styles.container} ${isDarkMode ? styles.active : ''}`}>
      <div className={styles.headerbox}>
        <div className={`${styles.upside} ${isDarkMode ? styles.active : ''}`}>
          <div className={styles.logo}></div>
          <span>CEP Fácil</span>
        </div>
        <div className={`${styles.downside} ${isDarkMode ? styles.active : ''}`}>
          <Navbar />
          <div className={styles.content}>
            <div className={`${styles.links} ${isDarkMode ? styles.active : ''}`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Sobre</NavLink>
            </div>
            <button onClick={toggleDarkMode} className={styles.darkbtn}>{renderButton()}</button> 
          </div>
        </div>
      </div>
    </section>
  )
}