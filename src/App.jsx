import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";

import useCountdown from "./hooks/useCountdown";

function App() {
    const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00")

    return (
        <div className="App">
            <div className="container">
                <Title title="Contagem regressiva para 2024" />
                <div className="countdown-container">
                    <Counter title="Dias" number={day} />
                    <Counter title="horas" number={hour} />
                    <Counter title="minutos" number={minute} />
                    <Counter title="segundos" number={second} />
                </div>
            </div>
        </div>
    );
}

export default App;
