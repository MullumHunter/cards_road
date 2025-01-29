import React, { useState } from "react";
import Card from "./Card";

const initialcardsData = [
    { id: 1, title: "Рыцарь", description: "Храбрый воин в доспехах"},
    { id: 2, title: "Маг", description: "Мастер магии и чар"},
    { id: 3, title: "Разбойник", description: "Теневой мастер ловкости"},
];
function CardLibrary() {
    const[cards, setCards] = useState(initialcardsData);

    const  sortCards = (order) => {
        const sorted = [...cards].sort((a, b) => {
            return order === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        });
        setCards(sorted);
    };

    return (
        <div>
            <h2>Список карт</h2>

            <button onClick={() => sortCards("asc")}>Сортировать A-Z</button>
            <button onClick={() => sortCards("desc")}>Сортировать Z-А</button>

            <div className="card-container">
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description}/>
                ))}
            </div>
        </div>
    );
}

export default CardLibrary;
