import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardsData from "../data/cardsData";

function CardLibrary() {
    const [cards, setCards] = useState(() => {
        // Загружаем данные из localStorage при запуске
        const savedCards = localStorage.getItem("cards");
        return savedCards ? JSON.parse(savedCards) : cardsData;
    });
    // const [cards, setCards] = useState(cardsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); // 'asc' или 'desc'

    useEffect(() =>
        localStorage.setItem("cards", JSON.stringify(cards)),
    )

    // Фильтрация карт по названию
    const filteredCards = cards
        .filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === "asc") return a.title.localeCompare(b.title);
            else return b.title.localeCompare(a.title);
        });

    // Добавление новой карты
    const addCard = () => {
        if (newTitle.trim() === "" || newDescription.trim() === "") return;

        const newCard = {
            id: cards.length + 1,
            title: newTitle,
            description: newDescription,
        };

        setCards([...cards, newCard]);
        setNewTitle("");
        setNewDescription("");
    };

    return (
        <div>
            <h2>Список карт</h2>

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

            {/* Отображение карт */}
            <div className="card-container">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                        <Card key={card.id} title={card.title} description={card.description} />
                    ))
                ) : (
                    <p>Карты не найдены</p>
                )}
            </div>
        </div>
    );
}

export default CardLibrary;
