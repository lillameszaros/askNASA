import React from "react";
import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {

    const [photoData, setPhotoData] = useState(null);


    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setPhotoData(data);
            console.log(data);

        }
    }, []);
    if (!photoData) return <div></div>;
    return (
        <div className="card w-50 border-secondary mb-3 d-flex mx-auto m-3">
            <div className="card-header">
                <h1 className="card-title">{photoData.title}</h1>
                <h5>{photoData.date}</h5>
            </div>
            <div className="m-3">
                {photoData.media_type === "image" ? (
                    <img
                        src={photoData.url} alt={photoData.title}
                        style={{ maxWidth: '100%' }} />
                ) : (
                    <iframe
                        style={{ maxWidth: '100%' }}
                        title="space-video"
                        src={photoData.url}
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="Photo"
                    />
                )}
            </div>
            <div className="">
                <div className="card-body">
                    <p className="card-text">{photoData.explanation}</p>
                </div>
            </div>
        </div>

    );
}