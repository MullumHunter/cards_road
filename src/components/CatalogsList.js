import React, { useState, useContext} from "react";
import {CardContext} from "../context/CardContext";
import CatalogView from "./CatalogView";

function CatalogsList() {
    const { catalogs } = useContext(CardContext);
    const [selectedCatalog, setSelectedCatalog] = useState(null);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    return (
        <div>
            <h2>Каталоги</h2>

            <button onClick={() => setIsCatalogOpen(!isCatalogOpen)}>
                {isCatalogOpen ? "Закрыть каталог" : "Открыть базовый каталог"}
            </button>

            {/* Отображаем выбранный каталог */}
            {isCatalogOpen && <CatalogView name="Базовый каталог" cards={catalogs["Базовый каталог"]} />}
        </div>
    );
}

export default CatalogsList;
