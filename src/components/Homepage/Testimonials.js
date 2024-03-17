import { useState } from 'react';
import styles from './Testimonials.module.css'

export default function Testimonials(){

    const testimonials = [
        {
            name: "Michael Stevens",
            text: "Sacred Scripture Hub has been a transformative force in my life. As someone who was once disconnected from my faith, this platform has served as a guiding light, leading me back to the teachings of the Bible. The depth of resources available is astounding, providing me with not only access to scripture but also profound insights and interpretations that have deepened my understanding of God's word."
        },
        {
            name: "Laura Williams",
            text: "Discovering Sacred Scripture Hub has been nothing short of a divine intervention in my spiritual journey. In a world cluttered with distractions, this website has provided me with a sanctuary where I can immerse myself in the wisdom of the Bible. The clarity of the interface and the richness of content have made it my constant companion, guiding me through both the familiar passages and the less explored realms of scripture."
        },
        {
            name: "Pastor David Larson",
            text: "In my role as a pastor, I am constantly seeking tools to enrich the spiritual lives of my congregation. Sacred Scripture Hub has become an indispensable resource in this endeavor. Its comprehensive collection of Bible translations, commentaries, and study guides empowers me to deliver sermons that resonate deeply with my community. I am grateful for the profound impact this platform has had on our collective journey of faith."
        },
        {
            name: "Sarah Henderson",
            text: "As a busy professional, finding time for spiritual nourishment can be challenging. However, Sacred Scripture Hub has made it effortless for me to stay connected to my faith amidst my hectic schedule. With its intuitive search features and curated content, I can delve into scripture whenever and wherever I please. It has truly become my digital sanctuary, nurturing my soul and guiding me through life's ups and downs."
        },
        {
            name: "Daniel Mitchell",
            text: "I've been on a quest to deepen my understanding of the Bible for years, and Sacred Scripture Hub has been an invaluable companion on this journey. The wealth of resources available on this platform is staggering, ranging from historical context to theological analyses. Whether I'm exploring familiar passages or delving into lesser-known texts, I always come away with a newfound appreciation for the richness of scripture."
        },
        {
            name: "Rachel Garcia",
            text: "Sacred Scripture Hub has revolutionized the way I approach Bible study. Gone are the days of flipping through dusty tomes in search of answers. With just a few clicks, I can access a treasure trove of knowledge that enhances my understanding of scripture. The interactive features and engaging discussions foster a sense of community, making my study sessions not only informative but also deeply enriching."
        },
        {
            name: "Pastor Mark Collins",
            text: "As a shepherd of my flock, it's crucial for me to lead by example and deepen my own understanding of the Bible. Sacred Scripture Hub has become my trusted companion in this endeavor, offering me a wealth of resources to aid in my personal study. Whether I'm preparing sermons or seeking personal revelation, this platform never fails to provide me with fresh insights and perspectives."
        },
        {
            name: "Rebecca Thompson",
            text: "Sacred Scripture Hub has become an integral part of my daily routine. Each morning, I start my day by immersing myself in the timeless wisdom of the Bible through this platform. The curated readings, thought-provoking commentaries, and inspiring devotionals set the tone for my day, grounding me in faith and providing me with the strength to navigate life's challenges with grace and resilience."
        },
        {
            name: "Matthew Bennett",
            text: "The depth and breadth of resources available on Sacred Scripture Hub are truly awe-inspiring. As someone who has dedicated their life to studying the Bible, I am continually impressed by the wealth of knowledge contained within this platform. Whether I'm conducting scholarly research or seeking personal edification, I know that I can always rely on Sacred Scripture Hub to provide me with the insights I seek."
        },
        {
            name: "Jennifer Knight",
            text: "Sacred Scripture Hub has breathed new life into my spiritual journey. Through its diverse array of resources, I have been able to explore the teachings of the Bible in ways I never thought possible. The interactive nature of the platform fosters a sense of community, allowing me to engage with fellow believers and glean wisdom from their perspectives. It has truly become my digital sanctuary, a place where I can nurture my faith and grow in communion with others."
        },
        {
            name: "James Davidson",
            text: "I have been a fervent advocate for Sacred Scripture Hub ever since I first stumbled upon it. Its intuitive interface and comprehensive content have made it my go-to resource for all things related to the Bible. Whether I'm conducting personal study or leading group discussions, I know that I can always rely on Sacred Scripture Hub to provide me with the resources I need to deepen my understanding of scripture and enrich my spiritual life."
        },
        {
            name: "Emma Lewis",
            text: "Sacred Scripture Hub holds a special place in my heart as a beacon of hope and inspiration in the digital age. Its commitment to spreading the message of God's love and wisdom is evident in every aspect of its platform. From the meticulously curated content to the supportive community of believers, Sacred Scripture Hub embodies the timeless values of faith, compassion, and unity. I am deeply grateful for the profound impact it has had on my spiritual journey."
        },
        {
            name: "Johnathan Bell",
            text: "I have been searching for a reliable online resource to deepen my understanding of the Bible, and Sacred Scripture Hub exceeds all expectations. Its user-friendly interface makes navigation a breeze, while the wealth of curated content ensures that every visit is both enriching and inspiring. Whether I'm conducting personal study or seeking guidance on a specific topic, I can always count on Sacred Scripture Hub to provide me with the insights I need to grow in my faith."
        },
        {
            name: "Sophia Roberts",
            text: "Sacred Scripture Hub has become an indispensable tool in my journey of spiritual growth. Its vast array of resources, ranging from Bible study guides to theological articles, has enabled me to explore the depths of scripture in ways I never thought possible. The platform's interactive features, such as discussion forums and live events, have also allowed me to connect with like-minded individuals and engage in meaningful conversations about faith. I am deeply grateful for the impact that Sacred Scripture Hub has had on my life and faith journey."
        },
        {
            name: "David Nguyen",
            text: "As someone who has always been passionate about delving deeper into the teachings of the Bible, Sacred Scripture Hub has been an invaluable resource. The platform's user-friendly interface and extensive library of resources have made it easy for me to explore different translations, commentaries, and interpretations of scripture. Whether I'm studying alone or engaging in group discussions, Sacred Scripture Hub has provided me with the tools and insights I need to grow in my faith and understanding of God's word."
        },
        {
            name: "Amanda Carter",
            text: "Sacred Scripture Hub has played a pivotal role in my spiritual journey, providing me with the resources and support I need to deepen my understanding of the Bible. The platform's diverse range of content, including articles, videos, and study guides, has enabled me to explore scripture from various perspectives and gain new insights into its timeless truths. Whether I'm looking for inspiration, guidance, or simply a deeper connection to my faith, Sacred Scripture Hub has never failed to deliver."
        },
        {
            name: "Ryan Thompson",
            text: "Discovering Sacred Scripture Hub has been a true blessing in my life. As someone who has always been curious about the teachings of the Bible, this platform has provided me with the tools and resources I need to explore scripture in depth. The platform's user-friendly interface and comprehensive collection of resources have made it easy for me to engage with scripture on a daily basis, deepening my understanding and strengthening my faith in the process. I am truly grateful for the impact that Sacred Scripture Hub has had on my spiritual journey."
        },
        {
            name: "Olivia Martinez",
            text: "Sacred Scripture Hub has become my go-to resource for all things related to the Bible. Whether I'm looking for a specific passage, seeking guidance on a particular topic, or simply exploring scripture for inspiration, this platform has everything I need. The depth of resources available is truly impressive, and I am constantly amazed by the wealth of knowledge and insight that Sacred Scripture Hub has to offer. I am grateful for the impact that this platform has had on my spiritual growth and understanding of the Bible."
        },
        {
            name: "Nathan Lewis",
            text: "Sacred Scripture Hub has become an invaluable resource in my journey of faith. The platform's extensive collection of resources, including Bible study guides, commentaries, and theological articles, has enabled me to deepen my understanding of scripture and grow in my relationship with God. The interactive features, such as discussion forums and live events, have also allowed me to connect with other believers and engage in meaningful conversations about faith. I am truly grateful for the impact that Sacred Scripture Hub has had on my life and spiritual journey."
        },
        {
            name: "Grace Johnson",
            text: "Sacred Scripture Hub has been a game-changer in my spiritual life. As someone who has always been passionate about studying the Bible, this platform has provided me with the tools and resources I need to explore scripture in depth. Whether I'm looking for a specific passage, seeking guidance on a particular topic, or simply looking for inspiration, Sacred Scripture Hub has everything I need. The platform's user-friendly interface and comprehensive collection of resources have made it easy for me to engage with scripture on a daily basis, deepening my understanding and strengthening my faith in the process."
        },
        {
            name: "Jonathan White",
            text: "Sacred Scripture Hub has become an essential part of my daily routine. Whether I'm starting my day with a devotional, studying scripture during my lunch break, or unwinding with a reflection in the evening, this platform has everything I need to nourish my soul and deepen my relationship with God. The platform's extensive collection of resources, including Bible study guides, commentaries, and theological articles, has enabled me to explore scripture in depth and gain new insights into its timeless truths."
        },
        {
            name: "Elizabeth Brown",
            text: "Discovering Sacred Scripture Hub has been a true blessing in my life. As someone who has always been passionate about studying the Bible, this platform has provided me with the tools and resources I need to explore scripture in depth. Whether I'm looking for a specific passage, seeking guidance on a particular topic, or simply looking for inspiration, Sacred Scripture Hub has everything I need. The platform's user-friendly interface and comprehensive collection of resources have made it easy for me to engage with scripture on a daily basis, deepening my understanding and strengthening my faith in the process."
        },
        {
            name: "Joshua Robinson",
            text: "Sacred Scripture Hub has become an invaluable resource in my journey of faith. The platform's extensive collection of resources, including Bible study guides, commentaries, and theological articles, has enabled me to deepen my understanding of scripture and grow in my relationship with God. The interactive features, such as discussion forums and live events, have also allowed me to connect with other believers and engage in meaningful conversations about faith. I am truly grateful for the impact that Sacred Scripture Hub has had on my life and spiritual journey."
        },
        {
            name: "Madison Stewart",
            text: "Sacred Scripture Hub has been a game-changer in my spiritual life. As someone who has always been passionate about studying the Bible, this platform has provided me with the tools and resources I need to explore scripture in depth. Whether I'm looking for a specific passage, seeking guidance on a particular topic, or simply looking for inspiration, Sacred Scripture Hub has everything I need. The platform's user-friendly interface and comprehensive collection of resources have made it easy for me to engage with scripture on a daily basis, deepening my understanding and strengthening my faith in the process."
        },
        {
            name: "Christopher Hill",
            text: "Discovering Sacred Scripture Hub has been a true blessing in my life. As someone who has always been passionate about studying the Bible, this platform has provided me with the tools and resources I need to explore scripture in depth. Whether I'm looking for a specific passage, seeking guidance on a particular topic, or simply looking for inspiration, Sacred Scripture Hub has everything I need. The platform's user-friendly interface and comprehensive collection of resources have made it easy for me to engage with scripture on a daily basis, deepening my understanding and strengthening my faith in the process."
        }
    ];

    const [activeTab, setActiveTab] = useState(0)
    
    function handleRight(){
        if(activeTab == testimonials.length - 1){return}
        setActiveTab((t)=>(t+1))
    }

    function handleLeft(){
        if(activeTab == 0){return}
        setActiveTab((t) => (t - 1))
    }


    return(
        <div className={styles.testimonials}>
            <h1>Testimonials</h1>
            <div>
                <button onClick={handleLeft} className={styles.leftArrow}>{"<"}</button>
                <p>{`"${testimonials[activeTab].text}"`}</p>
                <h3>{testimonials[activeTab].name}</h3>
                <button onClick={handleRight} className={styles.rightArrow}>{">"}</button>
                <span>{activeTab + 1} / {testimonials.length}</span>
            </div>
        </div>
    )
}