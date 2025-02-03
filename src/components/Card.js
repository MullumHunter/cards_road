import React from "react";

function Card({ title, description, onRemove, isRemovable}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src="https://placehold.jp/150x150.png" alt="Card"/>
            {isRemovable && <button onClick={onRemove} className="delete-btn">Удалить</button> }
        </div>
    );
}

export default Card;
