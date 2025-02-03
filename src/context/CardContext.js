import React, { createContext, useState, useEffect } from "react";
import cardsData from "../data/cardsData"; // Начальные данные

export const CardContext = createContext(); // Создаём контекст

export function CardProvider({ children }) {
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem("cards");
        return savedCards ? JSON.parse(savedCards) : cardsData;
    });

    // Автоматически сохраняем в localStorage при изменении
    useEffect(() => {
        const savedCards = localStorage.getItem("cards");
        if (!savedCards) {
            localStorage.setItem("cards", JSON.stringify(cards));
        }
    }, []);

    return (
        <CardContext.Provider value={{cards, setCards}}>
            {children} {/* Доступ к данным для всех компонентов */}
        </CardContext.Provider>
    );
}
