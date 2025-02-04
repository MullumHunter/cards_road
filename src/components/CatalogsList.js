import React, { useState, useContext} from "react";
import {CardContext} from "../context/CardContext";
import CatalogView from "./CatalogView";

function CatalogsList() {
    const { catalogs, addCatalog } = useContext(CardContext);
    const [newCatalogName, setNewCatalogName] = useState("");
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const handleCreateCatalog = () => {
        if (!newCatalogName.trim()) return;
        addCatalog(newCatalogName);
        setNewCatalogName("");
    }

    return (
        <div>
            <h2>Каталоги</h2>

            <button onClick={() => setIsCatalogOpen(!isCatalogOpen)}>
                {isCatalogOpen ? "Закрыть каталог" : "Открыть базовый каталог"}
            </button>

            {isCatalogOpen && <CatalogView name="Базовый каталог" cards={catalogs["Базовый каталог"]}/>}

            <div>
                <input
                    type="text"
                    placeholder="Введите название каталога"
                    value={newCatalogName}
                    onChange={(e) => setNewCatalogName(e.target.value)}
                />
                <button onClick={handleCreateCatalog}>Создать каталог</button>
            </div>

        </div>
    );
}

export default CatalogsList;
