import React, {useContext, useState} from "react";
import { CardContext } from "../context/CardContext";

function Card({ title, description, onRemove, isRemovable}) {
    const { catalogs, setCatalogs}  = useContext(CardContext);
    const [selectedCatalog, setSelectedCatalog] = useState("");

    const handleAddToCatalog = () => {
        if (!selectedCatalog || !catalogs[selectedCatalog]) return;

        setCatalogs((prevCatalogs) => ({
            ...prevCatalogs, [selectedCatalog]:[...prevCatalogs[selectedCatalog], {title, description}],
        }));
    };

    return (
        <div>
            <div className="card">
                <h2>{title}</h2>
                <p>{description}</p>
                <img src="https://placehold.jp/150x150.png" alt="Card"/>
                {isRemovable && <button onClick={onRemove} className="delete-btn">Удалить</button>}
            </div>
            <div>
                <select value={selectedCatalog} onChange={(e) => setSelectedCatalog(e.target.value)}>
                    <option value="">Выберите каталог</option>
                    {Object.keys(catalogs).map((catalogName) => (
                        <option key={catalogName} value={catalogName}>{catalogName}</option>
                    ))}
                </select>

                <button onClick={handleAddToCatalog} disabled={!selectedCatalog}>
                    Добавить в каталог
                </button>
            </div>
        </div>

);
}

export default Card;
