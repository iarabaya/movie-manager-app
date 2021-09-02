import React, { useState, useEffect } from 'react';

function Catalog() {
    const [movies, setMovies] = useState();

    useEffect(() => {
        fetch('/movies')
        .then((res)=> res.json())
        .then((data) =>{
            setMovies(data);
            console.log(movies);
        });

    }, [movies])

    return (
        <div>
            <h1>This is our movies catalog.</h1>
        </div>
    )
}

export default Catalog;
