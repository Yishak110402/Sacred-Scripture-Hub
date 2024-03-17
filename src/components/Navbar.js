import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.desktopNav}>
            <div className={styles.brand}>
                <NavLink to='/'>Sacred Scripture Hub</NavLink>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bible">Bible</NavLink>
                    </li>
                    <li>
                        <a href='#about'>About Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}