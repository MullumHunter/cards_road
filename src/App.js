import React from "react";
import { CardProvider} from "./context/CardContext";
import CardLibrary from "./components/CardLibrary";

function App() {
    return (
        <CardProvider>
            <h1>Библиотека карт</h1>
            <CardLibrary />
        </CardProvider>
    );
}

export default App;
