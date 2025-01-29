import React from "react";

function Card({ title, description }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src="https://placehold.jp/150x150.png" alt="Card"/>
        </div>
    );
}

export default Card;
