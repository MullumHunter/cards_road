import React, { createContext, useState, useEffect } from "react";
import cardsData from "../data/cardsData"; // Начальные данные

export const CardContext = createContext(); // Создаём контекст

export function CardProvider({ children }) {
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem("cards");
        return savedCards ? JSON.parse(savedCards) : cardsData;
    });

    const [catalogs, setCatalogs] = useState(() => {
        const savedCatalogs = localStorage.getItem("catalogs");
        const parsedCatalogs = savedCatalogs ? JSON.parse(savedCatalogs) : null;

        return parsedCatalogs && parsedCatalogs["Базовый каталог"]
            ? parsedCatalogs
            : { "Базовый каталог": [...cardsData] };
    });

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        localStorage.setItem("catalogs", JSON.stringify(catalogs));
    }, [catalogs]);

    const addCatalog = (name) => {
        if (!name.trim() || catalogs[name]) return;
        setCatalogs((prev) => ({ ...prev, [name]: [] }));
    };

    const removeCatalog = (name) => {
        if (name === "Базовый каталог") return;
        setCatalogs((prev) => {
            const newCatalogs = { ...prev };
            delete newCatalogs[name];
            return newCatalogs;
        });
    };

    return (
        <CardContext.Provider value={{ cards, setCards, catalogs, addCatalog, removeCatalog }}>
            {children}
        </CardContext.Provider>
    );
}
