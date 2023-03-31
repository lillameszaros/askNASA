import React from "react";
import { useState, useEffect } from "react";
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PastPhoto({ date }) {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
        console.log("itt kéne megkapni " + date)
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
            const data = await res.json();
            setPhotoData(data);
        }
    }, [date]);

    return (
        <>
            {(!photoData || date === undefined) ? (
                <div className="text-center">
                    <p>Loading..</p>
                </div>
            ) : (
                <div className="card w-50 mx-auto m-3">
                    <div class="card-header">
                        <h5>{photoData.date}</h5>
                        <div>
                            <h1>{photoData.title}</h1>
                        </div></div>
                    {photoData.media_type === "image" ? (
                        <img
                            className="m-2"
                            src={photoData.url}
                            alt={photoData.title}
                        />
                    ) : (
                        <iframe
                            className="m-2"
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                        />
                    )}
                    <div className="card-body">
                        <p className="card-text">{photoData.explanation}</p>
                    </div>
                </div>
            )}
        </>

    );
}