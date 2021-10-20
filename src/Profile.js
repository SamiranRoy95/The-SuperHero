import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Profile.css";


function Profile(props) {
    const{image,name,age,ceo,country,salary}=props.info;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="profile">
            <img className="logo" src={image} alt=""/>
            <h3>Name:{name}</h3>
            <h3>Age:{age}</h3>
            <h3>Ceo:{ceo}</h3>
            <h3>country:{country}</h3>
            <h3>Salary{salary}</h3>
            <button className="btn" onClick={()=>props.eventHandeler(props.info)}>
           {element} Add To Card
            </button>
            
            
        </div>
    )
}

export default Profile
