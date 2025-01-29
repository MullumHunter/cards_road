import React from "react";
import Card from "./Card";

const cardsData = [
    { id: 1, title: "Рыцарь", description: "Храбрый воин в доспехах"},
    { id: 2, title: "Маг", description: "Мастер магии и чар"},
    { id: 3, title: "Разбойник", description: "Теневой мастер ловкости"},
];
function CardLibrary() {
    return (
        <div>
            <h2>Список карт</h2>
            <div className="card-container">
                {cardsData.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
}

export default CardLibrary;
