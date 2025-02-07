import React, {useState, useContext} from "react";
import Card from "./Card";
import { CardContext} from "../context/CardContext";
import cardsData from "../data/cardsData";

function CardLibrary() {
    const {cards, setCards} = useContext(CardContext);
    // const [cards, setCards] = useState(cardsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); // 'asc' или 'desc'

    const filteredCards = cards
        .filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === "asc") return a.title.localeCompare(b.title);
            else return b.title.localeCompare(a.title);
        });

    const addCard = () => {
        if (newTitle.trim() === "" || newDescription.trim() === "") return;

        const newCard = {
            id: cards.length + 1,
            title: newTitle,
            description: newDescription,
        };

        setNewTitle("");
        setNewDescription("");
        setCards([...cards, newCard]);
    };

    const removeCard = (id) => {
        const isInitialCard = cardsData.some((card) => card.id === id);
        if (isInitialCard) return;
        setCards(cards.filter((card) => card.id !== id));
    };

    return (
        <div>
            <h2>Базовый каталог</h2>

            {/* Поле поиска */}
            <input
                type="text"
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Кнопки сортировки */}
            <div>
                <button onClick={() => setSortOrder("asc")}>Сортировать A-Z</button>
                <button onClick={() => setSortOrder("desc")}>Сортировать Z-A</button>
            </div>

            {/* Форма добавления карт */}
            <h3>Добавить новую карту</h3>
            <input
                type="text"
                placeholder="Название карты"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Описание карты"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={addCard}>Добавить</button>
            <div className="card-container">
                {filteredCards.map((card) => (
                    <Card key={card.id}
                          title={card.title}
                          description={card.description}
                          onRemove={() => removeCard(card.id)}
                          isRemovable={!cardsData.some((c) => c.id === card.id)}
                    />
                ))}
            </div>

        </div>
    );
}

export default CardLibrary;
