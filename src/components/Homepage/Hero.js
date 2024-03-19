import styles from './Hero.module.css'
import herobgpic from '../../assets/herobgpic.jpg'
import { Link } from 'react-router-dom'

export default function Hero(){

     return(
    <div style={{backgroundImage:`url(${herobgpic})`}} className={styles.hero} >
       <div className={`${styles.heroText}`}>
            <h1>Discover the Sacred Scripture at our Hub</h1>
            <p>Improve your knowledge of the word of God by reading the bible and getting random bible quotes</p>
            <Link to="/bible">Start Reading</Link>
       </div>
     </div>)
}