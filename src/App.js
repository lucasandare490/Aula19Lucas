import React, { useState, useEffect } from "react";

// Primeiro exemplo: Alterar título da aba do navegador
function ChangeTitle() {
    const [title, setTitle] = useState("Título Inicial");

    useEffect(() => {
        document.title = title; // Atualiza o título da aba do navegador
    }, [title]);

    return (
        <div>
            <h2>Exemplo 1: Alterar Título</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o novo título"
            />
        </div>
    );
}

// Segundo exemplo: Temporizador
function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Limpeza do temporizador
    }, []);

    return (
        <div>
            <h2>Exemplo 2: Temporizador</h2>
            <p>Contador: {count}</p>
        </div>
    );
}

// Componente principal que exibe os exemplos
function App() {
    return (
        <div>
            <h1>Exemplos do useEffect</h1>
            <ChangeTitle />
            <Timer />
        </div>
    );
}

export default App;
