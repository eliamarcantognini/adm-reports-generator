import React, {ButtonHTMLAttributes, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import {createTheme, NativeSelect} from "@mui/material";
import axios from 'axios';
import {formatDate} from "./Utils";

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
                                <div>
                                    <h3>DATI DELL'ESERCIZIO</h3>
                                    <TextField id="activityName" label="Nome esercizio" variant="outlined"/>
                                    <TextField id="activityAddress" label="Indirizzo esercizio" variant="outlined"/>
                                    <TextField id="cod" label="Codice esercizio" variant="outlined"/>
                                    <TextField id="activityType" label="Tipo di attività" variant="outlined"/>
                                    <TextField id="activitySurface" label="Superficie attività" variant="outlined"/>
                                    <TextField id="activityCF" label="PI attività" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELL'ESERCENTE</h3>
                                    <TextField id="name" label="Nome esercente" variant="outlined"/>
                                    <TextField id="cf" label="CF Esercente" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELLA VERIFICA</h3>
                                    <TextField id="oda" label="Ordine d'accesso" variant="outlined"/>
                                    <TextField id="date" label="Data verifica" variant="outlined"/>
                                    <TextField id="year" label="Anno della verifica" variant="outlined"/>
                                    <TextField id="verb1" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb2" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb3" label="Verbalizzante" variant="outlined"/>
                                </div>
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
    const activityCF = (document.getElementById('activityCF') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const cf = (document.getElementById('cf') as HTMLInputElement).value;
    const oda = (document.getElementById('oda') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const verbalizzante1 = (document.getElementById('verb1') as HTMLInputElement).value;
    const verbalizzante2 = (document.getElementById('verb2') as HTMLInputElement).value;
    const verbalizzante3 = (document.getElementById('verb3') as HTMLInputElement).value;
    const verbale = JSON.stringify({
        "denominazioneEsercizio": activityName.toUpperCase(),
        "indirizzoEsercizio": activityAddress,
        "codiceEsercizio": cod.toUpperCase(),
        "tipoAttivita": activityType,
        "superficieAttivita": activitySurface,
        "picfAttivita": activityCF.toUpperCase(),
        "denominazioneEsercente": name,
        "cfEsercente": cf.toUpperCase(),
        "verbalizzante1": verbalizzante1,
        "verbalizzante2": verbalizzante2,
        "verbalizzante3": verbalizzante3,
        "ordineDiAccesso": oda,
        "annoIscrizione": year,
        "dataVerifica": date
    })

    const p: HTMLParagraphElement = document.createElement('p');
    p.innerHTML = "Generazione in corso...";
    document.body.appendChild(p);
    postVerbale(verbale, "awp", p)

}

async function postVerbale(verbale: string, tipo: string, p: HTMLParagraphElement) {
    try {
        let filename = "";
        await axios.post('http://localhost:8000/' + tipo, verbale,
            {
                responseType: 'blob',
                headers:
                    {'Content-Type': 'application/json', 'Access-Control-Expose-Headers': 'Content-Disposition'},
            }).then(response => {
            const disposition = response.headers['content-disposition'];
            return response.data;
        }).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = tipo + "_" + formatDate(new Date());
            document.body.appendChild(a); // append the element to the dom
            a.click();
            a.remove();
            p.remove();// afterwards, remove the element
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
