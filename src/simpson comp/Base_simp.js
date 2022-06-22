import React from "react";
function Base_simp (props) {
    const {name,surname,age,info,image} = props
    return (
        <div>
            <h2>{name} {surname} - {age}</h2>
            <p>{info}</p>
            <img src={image} alt="img"/>
        </div>
    )
}

export default Base_simp;
