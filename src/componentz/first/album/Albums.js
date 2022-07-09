import React, {useEffect, useState} from 'react';
import {getAlbums} from "../../services/service";
import Album from "./Album";

function Albums() {
    const [albums,setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(data => setAlbums(data))
    },[]);

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
}

export default Albums;