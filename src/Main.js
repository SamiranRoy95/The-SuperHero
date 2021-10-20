import React,{useState,useEffect} from 'react';
import "./Main.css";
import Profile from "./Profile";
import Card from "./Card";


function Main() {
    const [infos,setInfos]=useState([]);
    const [card,setCard]=useState([]);

    useEffect(()=>{
        fetch("./data.JSON")
        .then(res=>res.json())
        .then(data=>setInfos(data))
    },[])

    const eventHandeler=(info)=>{
const newCard=[...card,info];
setCard(newCard);
    }

    return (
        <div className="main__component">
            <div className="profile__container">
                {
 infos.map(info=><Profile info={info}
    key={info.key}
    eventHandeler={eventHandeler}
 
 />)

                }
           
            </div>
            <div className="card__component">
            <Card card={card}/>
            </div>
            
        </div>
    )
}

export default Main
