import { useEffect, useState } from "react"
import styles from './OpenChapter.module.css'

export default function OpenChapter({selectedBook, chapter, setChapter}){
    // key = 0216d83a85msh35ee9015109206dp134af1jsnf6f532063f02
    const [wholeChapter, setWholeChapter] = useState([])
    const [loading, setLoading] = useState(false)
    const [verse, setVerse] = useState('');
    const [error, setError] = useState("")
    useEffect(function(){
        async function getVerses(){
            try{
            setLoading(true)
            const res = await fetch(`https://bible-api.com/${selectedBook} ${chapter}?translation=kjv`)
            if(!res.ok) throw new Error("Error Fetching Data")
            const data = await res.json()
            if(!data.verses) throw new Error("Error Fetching Data")
            setWholeChapter(data.verses)
            setLoading(false)
            }catch(err){
                setError(err.message)
                setLoading(false)
                console.log(err.message);
            }
        }   
        getVerses()
     },[chapter])

     useEffect(function(){
        setChapter(1)
     },[selectedBook])

    return(
        <div style={{position:"relative" , overflowY:"scroll",height:"88vh", padding:"2rem 1rem", paddingBottom:"0rem", backgroundColor:"#015E87" }}>
           {loading && !error && <Loader/>}
           {error!=="" && <Error error={error}/>}

            { !loading && !error &&
                wholeChapter.map((verse, i)=>(
                    <p  key={`${selectedBook}${verse.text}`} className={styles.verse}> <span>{i+1}</span> {verse.text}</p>
                ))
            }
             
        </div>
    )
}

function Loader(){
    return(<div style={{width:"80vw", height:"89vh"}}><div className="loader"></div></div>)
}
function Error(error){
    return<div>{error}</div>
}