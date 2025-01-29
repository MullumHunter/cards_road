import React, { useState } from "react";
import Card from "./Card";

const initialcardsData = [
    { id: 1, title: "Рыцарь", description: "Храбрый воин в доспехах"},
    { id: 2, title: "Маг", description: "Мастер магии и чар"},
    { id: 3, title: "Разбойник", description: "Теневой мастер ловкости"},
];
function CardLibrary() {
    const[cards, setCards] = useState(initialcardsData);
    const [searchQuery, setSearchQuery] = useState("");

    const  sortCards = (order) => {
        const sorted = [...cards].sort((a, b) => {
            return order === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        });
        setCards(sorted);
    };

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Список карт</h2>

            <input
                type="text"
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button onClick={() => sortCards("asc")}>Сортировать A-Z</button>
            <button onClick={() => sortCards("desc")}>Сортировать Z-А</button>

            <div className="card-container">
                {filteredCards.length > 0 ?(
                    filteredCards.map((card) => (
                        <Card key={card.id} title={card.title} description={card.description}/>
                    ))
                ) : (
                    <p>Карты не найдены</p>
                )}
            </div>
        </div>
    );
}

export default CardLibrary;
