import React from 'react';

function RickMorty(props) {
const {id,name,status,species,gender,image} = props;
    return (
        <div className={'rick_div'}>
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>status: {status}</h4>
            <h4>species: {species}</h4>
            <h4>gender: {gender}</h4>
            <img src={image} alt="img"/>
        </div>
    );
}

export default RickMorty;