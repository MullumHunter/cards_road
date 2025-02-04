import React, { useState, useContext} from "react";
import {CardContext} from "../context/CardContext";
import CatalogView from "./CatalogView";

function CatalogsList() {
    const { catalogs } = useContext(CardContext);
    const [selectedCatalog, setSelectedCatalog] = useState(null);

    return (
        <div>
            <h2>Каталоги</h2>

            {/* Кнопка для открытия базового каталога */}
            <button onClick={() => setSelectedCatalog("Базовый каталог")}>
                Открыть базовый каталог
            </button>

            {/* Отображаем выбранный каталог */}
            {selectedCatalog && (
                <CatalogView name={selectedCatalog} cards={catalogs[selectedCatalog]} />
            )}
        </div>
    );
}

export  default CatalogsList;
