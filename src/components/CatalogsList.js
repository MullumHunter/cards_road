import React, { useState, useContext} from "react";
import {CardContext} from "../context/CardContext";
import CatalogView from "./CatalogView";

function CatalogsList() {
    const { catalogs, addCatalog, removeCatalog } = useContext(CardContext);
    const [newCatalogName, userCatalogName] = useState("");
    const [openCatalog, setOpenCatalog] = useState(null);

    const handleCreateCatalog = () => {
        if (!newCatalogName.trim()) return;
        addCatalog(newCatalogName);
        userCatalogName("");
    }
    const handleDeleteCatalog = () => {
        if (!newCatalogName.trim()) return;
        removeCatalog(newCatalogName);
        userCatalogName("");
    }

    return (
        <div>
            <h2>Каталоги</h2>

            <div>
                <input
                    type="text"
                    placeholder="Введите название каталога"
                    value={newCatalogName}
                    onChange={(e) => userCatalogName(e.target.value)}
                />
                <button onClick={handleCreateCatalog}>Создать каталог</button>
                <button onClick={handleDeleteCatalog}>Удалить каталог</button>
            </div>

            <div>
                {Object.keys(catalogs).map((catalogName) => (
                    <div key={catalogName}>
                        <button onClick={() => setOpenCatalog(openCatalog === catalogName ? null : catalogName)}>
                            {openCatalog === catalogName ? `Закрыть ${catalogName}` : `Открыть ${catalogName}`}
                        </button>

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
