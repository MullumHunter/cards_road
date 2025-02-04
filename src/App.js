import React from "react";
import { CardProvider} from "./context/CardContext";
import CardLibrary from "./components/CardLibrary";
import CatalogsList from "./components/CatalogsList";

function App() {
    return (
        <CardProvider>
            <h1>Библиотека карт</h1>
            <CardLibrary />
            <CatalogsList/>
        </CardProvider>
    );
}

export default App;
