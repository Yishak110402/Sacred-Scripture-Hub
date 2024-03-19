import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import './Hamburger.css'
export default function Navbar() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const mobileTranslate = mobileNavOpen? 0 :"-10rem"
  
  
  return (
    <>
      <nav className={styles.desktopNav}>
        <div className={styles.brand}>
          <NavLink to="/">Sacred Scripture Hub</NavLink>
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
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.mobileNav}>
        <div className={styles.brand}>
          <NavLink to="/">Sacred Scripture Hub</NavLink>
        </div>
        <div className={styles.mobileNavLinks}>
          <div onClick={()=>(setMobileNavOpen((m)=>(!m)))} className={`hamburger ${mobileNavOpen?"open":"closed"}`}>
            { !mobileNavOpen ? 
            <>
            <span></span>
            <span></span>
            <span></span>
            </>:
            <span>X</span>}
            
          </div>    
            <ul style={{transform:`translateY(${mobileTranslate})`}} onClick={()=>(setMobileNavOpen(false))}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bible">Bible</NavLink>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
