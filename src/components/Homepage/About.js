import styles from './About.module.css'
import aboutpic from '../../assets/aboutuspic.jpg'

export default function About(){
    return(
        <div className={styles.about} id='about'>
            <h1>About Sacred Scripture Hub</h1>
            <div className={styles.aboutText}>
                <img src={aboutpic}/>
                <div>
                    <p>At Sacred Scripture Hub, our mission is simple: to make the wisdom of the ages accessible to all. Founded by a team of passionate sccholars, tech enthusiasts, and spiritual seekers, our website is a labor of love dedicated to sharing the timeless teachings of the bible in a modern, user-friendly format.</p>
                    <p>With a commitment to excellence and innovation, we continually update and expand our library of sacred texts, resources, and features to meet the evolving needs of our diverse audience. Our team works tirelessly to ensure that Sacred Scripture Hub remains a trusted source of inspiration, guidance, and enlightenment for generations to come.</p>
                </div>
            </div>
        </div>
    )
}