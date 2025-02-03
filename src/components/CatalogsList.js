import React, { useState, useContext} from "react";
import {CardContext} from "../context/CardContext";
import CatalogView from "./CatalogView";

function CatalogsList() {
    const  { catalogs, addCatalog, removeCatalog } = useContext(CardContext);
    const [newCatalogName, setNewCatalogName] = useState("");

    return (
        <div>
            <h2>Каталоги</h2>
            <input
                type="text"
                placeholder="Название нового каталога"
                value={newCatalogName}
                onChange={(e) => setNewCatalogName(e.target.value)}
            />
            <button onClick={() => {addCatalog(newCatalogName);
                setNewCatalogName("");
            }}>
                Добавить каталог
            </button>

            <div>
                {Object.keys(catalogs).map((catalogName) => (
                    <CatalogView
                        key={catalogName}
                        name={catalogName}
                        cards={catalogs[catalogName]}
                        onRemoveCatalog={removeCatalog}
                    />

                ))}
            </div>
        </div>
    );
}

export  default CatalogsList;
