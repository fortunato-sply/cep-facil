import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkmode';
import styles from './styles.module.scss';

export default function NotFoundPage() {
    const { isDarkMode } = useContext(DarkModeContext)!;
    
    return (
        <section className={`${styles.container} ${isDarkMode ? styles.thin_darkmode : ''}`}>
            <div className={styles.logo}></div>
            <h1 className={styles.nfound}>404: Not Found</h1>
        </section>
    )
}