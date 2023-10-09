import React, {useState} from 'react';
import './App.css';

function App() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div className="App">
            <header>
                Generatore di verbali
            </header>
            <form>
                <label htmlFor="verbalType">Seleziona il tipo di verbale</label>
                <select value={selectedOption || ''} onChange={handleOptionChange}>
                    <option value="Verbale">Verbale</option>
                    <option value="AWP">AWP</option>
                    <option value="VLT">VLT</option>
                    <option value="Scommese">Scommesse</option>
                </select>
                {
                    selectedOption === 'AWP' && (
                    <div>
                    <label htmlFor="firmName">Denominazione esercizio</label>
                    <input id="firmName" type="text"/>
                    <label htmlFor="firmAddress">Indirizzo esercizio</label>
                    <input id="firmAddress" type="text"/>
                    <label htmlFor="cod">Codice esercizio</label>
                    <input id="cod" type="text"/>
                    <label htmlFor="activityType">Tipo di attività</label>
                    <input id="activityType" type="text"/>
                    <label htmlFor="surface">Superfice dell'attività</label>
                    <input id="surface" type="text"/>
                    <label htmlFor="name">Denominazione esercente</label>
                    <input id="name" type="text"/>
                    <label htmlFor="cf">Codice Fiscale Esercente</label>
                    <input id="cf" type="text"/>
                    <label htmlFor="oda">Ordine d'accesso</label>
                    <input id="oda" type="text"/>
                    <label htmlFor="year">Anno da verificare</label>
                    <input id="year" type="text"/>
                    <label htmlFor="date">Data della verifica</label>
                    <input id="date" type="text"/>
                    <label htmlFor="verb1">Verbalizzante uno</label>
                    <input id="verb1" type="text"/>
                    <label htmlFor="verb2">Verbalizzante due</label>
                    <input id="verb2" type="text"/>
                    </div>
                    )}
                {
                    selectedOption === 'VLT' && (
                        <div>
                        <p>NON IMPLEMENTATO</p>
                        </div>
                    )}
                {
                    selectedOption === 'Scommesse' && (
                        <div>
                            <p>NON IMPLEMENTATO</p>
                        </div>
                    )
                }
            </form>
        </div>
    );
}


export default App;
