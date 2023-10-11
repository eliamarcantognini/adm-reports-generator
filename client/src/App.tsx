import React, {ButtonHTMLAttributes, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import {createTheme, NativeSelect} from "@mui/material";
import axios from 'axios';


function App() {
    const theme = createTheme()
    theme.spacing(15)
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="App">
            <script src="../swiftex/PdfTeXEngine.js"></script>
            <form>
                <InputLabel htmlFor="verbalType">Seleziona il tipo di verbale</InputLabel>
                <NativeSelect value={selectedOption || ''} onChange={handleOptionChange}>
                    <option value="Verbale">Verbale</option>
                    <option value="AWP">AWP</option>
                    <option value="VLT">VLT</option>
                    <option value="Scommesse">Scommesse</option>
                </NativeSelect>
                {
                    selectedOption === 'AWP' && (
                        <div>
                            <div>
                                <TextField id="activityName" label="Nome esercizio" variant="outlined"/>
                                <TextField id="activityAddress" label="Indirizzo esercizio" variant="outlined"/>
                                <TextField id="cod" label="Codice esercizio" variant="outlined"/>
                                <TextField id="activityType" label="Tipo di attività" variant="outlined"/>
                                <TextField id="activitySurface" label="Superficie attività" variant="outlined"/>
                                <TextField id="name" label="Nome esercente" variant="outlined"/>
                                <TextField id="cf" label="CF/PI Esercente" variant="outlined"/>
                                <TextField id="oda" label="Ordine d'accesso" variant="outlined"/>
                                <TextField id="date" label="Data verifica" variant="outlined"/>
                                <TextField id="year" label="Anno della verifica" variant="outlined"/>
                                <TextField id="verb1" label="Verbalizzante uno" variant="outlined"/>
                                <TextField id="verb2" label="Verbalizzante due" variant="outlined"/>

                            </div>
                            <Button variant="contained" color="primary" onClick={() => generateAWP()}>Genera</Button>
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

async function generateAWP() {
    const activityName = (document.getElementById('activityName') as HTMLInputElement).value;
    const activityAddress = (document.getElementById('activityAddress') as HTMLInputElement).value;
    const cod = (document.getElementById('cod') as HTMLInputElement).value;
    const activityType = (document.getElementById('activityType') as HTMLInputElement).value;
    const activitySurface = (document.getElementById('activitySurface') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const cf = (document.getElementById('cf') as HTMLInputElement).value;
    const oda = (document.getElementById('oda') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const verbalizzante1 = (document.getElementById('verb1') as HTMLInputElement).value;
    const verbalizzante2 = (document.getElementById('verb2') as HTMLInputElement).value;
    const verbale = JSON.stringify({
        "denominazioneEsercizio": activityName,
        "indirizzoEsercizio": activityAddress,
        "codiceEsercizio": cod,
        "tipoAttivita": activityType,
        "superficieAttivita": activitySurface,
        "denominazioneEsercente": name,
        "cfEsercente": cf,
        "verbalizzante1": verbalizzante1,
        "verbalizzante2": verbalizzante2,
        "ordineDiAccesso": oda,
        "annoIscrizione": year,
        "dataVerifica": date
    })

    console.log("VERBALE:\n" + verbale)
    postVerbale(verbale)


}

async function postVerbale(verbale: string) {
    try {
        const data = await axios.post('http://localhost:8000/awp', verbale,
            {
                headers:
                    {'Content-Type': 'application/json'},
            })
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.log(e);
            return e.message;
        } else {
            console.log("unexpected error ", e)
            return "unexpected error";
        }
    }
}

export default App;
