import React, { useState, useContext} from "react";
import {CardContext} from "../context/CardContext";
import CatalogView from "./CatalogView";

function CatalogsList() {
    const { catalogs, addCatalog } = useContext(CardContext);
    const [newCatalogName, setNewCatalogName] = useState("");
    const [openCatalog, setOpenCatalog] = useState(null); // Какой каталог открыт

    const handleCreateCatalog = () => {
        if (!newCatalogName.trim()) return;
        addCatalog(newCatalogName);
        setNewCatalogName("");
    }

    return (
        <div>
            <h2>Каталоги</h2>

            {/* Поле ввода и кнопка создания каталога */}
            <div>
                <input
                    type="text"
                    placeholder="Введите название каталога"
                    value={newCatalogName}
                    onChange={(e) => setNewCatalogName(e.target.value)}
                />
                <button onClick={handleCreateCatalog}>Создать каталог</button>
            </div>

            {/* Кнопки для всех каталогов */}
            <div>
                {Object.keys(catalogs).map((catalogName) => (
                    <div key={catalogName}>
                        <button onClick={() => setOpenCatalog(openCatalog === catalogName ? null : catalogName)}>
                            {openCatalog === catalogName ? `Закрыть ${catalogName}` : `Открыть ${catalogName}`}
                        </button>

                        {/* Отображение каталога при нажатии */}
                        {openCatalog === catalogName && (
                            <CatalogView name={catalogName} cards={catalogs[catalogName]} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatalogsList;
