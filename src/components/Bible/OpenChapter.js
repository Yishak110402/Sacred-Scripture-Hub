import { useEffect, useState } from "react"
import styles from './OpenChapter.module.css'

export default function OpenChapter({selectedBook, chapter, setChapter}){
    const [wholeChapter, setWholeChapter] = useState([])
    const [loading, setLoading] = useState(false)
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

     useEffect(function(){
        async function getRandom(){
            const res = await fetch("https://bible-api.com/?random=verse")
            const data = await res.json()
            console.log(data);
        }
        getRandom()
     },[])


    return(
        <div style={{position:"relative" , width:"100%", overflowY:"scroll",height:"90vh", padding:"2rem 1rem", paddingBottom:"0rem", backgroundColor:"#015E87" }}>
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
    return(<div className="loader"></div>)
}
function Error(error){
    return<div>{error}</div>
}