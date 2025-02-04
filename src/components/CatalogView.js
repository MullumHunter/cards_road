import React from "react";
import Card from "./Card";

function CatalogView({ name, cards, onRemoveCatalog}) {
    return (
        <div className="catalog">
            <h3>{name}</h3>
            <div className="card-container">
                {cards && cards.length > 0 ? (
                    cards.map((card) => (
                        <Card key={card.id} title={card.title} description={card.description} />
                    ))
                ) : (
                    <p>Каталог пуст</p>
                )}
            </div>
        </div>
    );
}

export default CatalogView;
