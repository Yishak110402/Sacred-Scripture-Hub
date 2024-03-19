import styles from './NewspaperSubscription.module.css'
import formbgpic from '../../assets/openbible.jpg'
import { useState } from 'react';

export default function NewspaperSubscription(){
    const [sub, setSub] = useState({
        fName: "",
        lName:"",
        email: ""
    })
    const [showVerification, setShowVerification] = useState(false)

    function handleSubscription(e){
        e.preventDefault();
        setShowVerification(true)
    }

    return(
        <div style={{backgroundImage:`url(${formbgpic})`}} className={styles.newspaperForm}>
            <h1>Subscribe to our weekly newsletter to get well informed in new found literature related to the bible</h1>
            <form onSubmit={(e)=>(handleSubscription(e))}>
            <input value={sub.fName} onChange={(e)=>{
                setSub((s)=>({...s,fName:e.target.value}))
            }} required type="text" placeholder="First Name" />    
            <input value={sub.lName} onChange={(e)=>{
                setSub((s)=>({...s,lName:e.target.value}))
            }} required type="text" placeholder="Last Name" />    
            <input value={sub.email} onChange={(e)=>{
                setSub((s)=>({...s, email: e.target.value}))
            }} required type="email" placeholder="E-mail" />   
            <button>Subscribe</button> 
            </form>
            {
                showVerification && <Verification setSub={setSub} sub={sub} setShowVerification={setShowVerification}/>
            }
        </div>
    )
}

function Verification({sub, setShowVerification, setSub}){
    return(
        <div className={styles.verification}>
            <div>
                <h1>Dear {sub.fName} {sub.lName}, you have successfully subscribed to our weekly newspaper.</h1>
                <h3>You will receive a confirmational email delivered to your email {sub.email}</h3>
                <button onClick={()=>{
                    setShowVerification(false)
                    setSub((s)=>({...s,fName:"",lName:"",email:""}))
                }}>Okay</button>
            </div>
        </div>
    )
}