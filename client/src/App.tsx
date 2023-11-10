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
                    <option value="Punto di raccolta">Punto di raccolta</option>
                    <option value="Rivendita">Rivendita</option>
                    <option value="Patentino">Patentino</option>
                    <option value="PLI">PLI</option>
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
                            <Button variant="contained" color="primary" onClick={() => generateVLT()}>Genera</Button>
                        </div>
                    )}
                {
                    selectedOption === 'Punto di raccolta' && (
                        <div>
                            <div>
                                <div>
                                    <h3>DATI DELL'ESERCIZIO</h3>
                                    <TextField id="activityName" label="Nome esercizio" variant="outlined"/>
                                    <TextField id="activityAddress" label="Indirizzo esercizio" variant="outlined"/>
                                    <TextField id="activityCF" label="PI/CF attività" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DEL PUNTO</h3>
                                    <TextField id="nPuntoRaccolta" label="Num. punto raccolta" variant="outlined"/>
                                    <TextField id="nConcessione" label="Num. concessione" variant="outlined"/>
                                    <TextField id="nomeConcessionario" label="Nome concessionario" variant="outlined"/>
                                    <TextField id="titoloAutorizzatorio" label="Titolo autorizzatorio" variant="outlined"/>
                                    <TextField id="dataTitoloAutorizzatorio" label="Data tit. autorizz."
                                               variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELLA VERIFICA</h3>
                                    <TextField id="dataInizioScommesse" label="Data inizio scommesse" variant="outlined"/>
                                    <TextField id="dataFineScommesse" label="Data fine scommesse" variant="outlined"/>
                                    <TextField id="bigliettiAnnullati" label="Biglietti annullati" variant="outlined"/>
                                    <TextField id="bigliettiPagati" label="Biglietti pagati" variant="outlined"/>
                                    <TextField id="bigliettiRimborsati" label="Biglietti rimborsati" variant="outlined"/>
                                    <TextField id="oda" label="Ordine d'accesso" variant="outlined"/>
                                    <TextField id="date" label="Data verifica" variant="outlined"/>
                                    <TextField id="verb1" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb2" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb3" label="Verbalizzante" variant="outlined"/>
                                </div>
                            </div>
                            <Button variant="contained" color="primary"
                                    onClick={() => generatePuntoRaccolta()}>Genera</Button>
                        </div>
                    )
                }

                {
                    selectedOption === 'Scommesse' && (
                        <div>
                            <p>NON IMPLEMENTATO</p>
                        </div>
                    )
                }


                {
                    selectedOption === 'Rivendita' && (
                        <div>
                            <div>
                                <div>
                                    <h3>DATI DELL'ESERCIZIO</h3>
                                    <TextField id="activityName" label="Nome esercizio" variant="outlined"/>
                                    <TextField id="activityAddress" label="Indirizzo esercizio" variant="outlined"/>
                                    <TextField id="comuneEsercizio" label="Comune esercizio" variant="outlined"/>
                                    <TextField id="activityCF" label="PI/CF attività" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELLA RIVENDITA</h3>
                                    <TextField id="denominazioneEsercente" label="Titolare rivendita" variant="outlined"/>
                                    <TextField id="nRivendita" label="Num. rivendita" variant="outlined"/>
                                    <TextField id="nLotto" label="Num. ricevitoria lotto" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELLA VERIFICA</h3>
                                    <TextField id="ods" label="Ordine di servizio" variant="outlined"/>
                                    <TextField id="date" label="Data verifica" variant="outlined"/>
                                    <TextField id="verb1" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb2" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb3" label="Verbalizzante" variant="outlined"/>
                                </div>
                            </div>
                            <Button variant="contained" color="primary" onClick={() => generateRivendita()}>Genera</Button>
                        </div>
                    )
                }


                {
                    selectedOption === 'Patentino' && (
                        <div>
                            <div>
                                <div>
                                    <h3>DATI DELL'ESERCIZIO</h3>
                                    <TextField id="activityName" label="Nome esercizio" variant="outlined"/>
                                    <TextField id="activityAddress" label="Indirizzo esercizio" variant="outlined"/>
                                    <TextField id="comuneEsercizio" label="Comune esercizio" variant="outlined"/>
                                    <TextField id="activityCF" label="PI/CF attività" variant="outlined"/>
                                    <TextField id="denominazioneEsercente" label="Nome esercente" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELLA RIVENDITA E DEL PATENTINO</h3>
                                    <TextField id="nRivendita" label="Num. rivendita" variant="outlined"/>
                                    <TextField id="localitaRivendita" label="Comune rivendita" variant="outlined"/>
                                    <TextField id="nPatentino" label="Num. patentino" variant="outlined"/>
                                    <TextField id="localitaPatentino" label="Comune patentino" variant="outlined"/>
                                </div>
                                <div>
                                    <h3>DATI DELLA VERIFICA</h3>
                                    <TextField id="oda" label="Ordine di accesso" variant="outlined"/>
                                    <TextField id="date" label="Data verifica" variant="outlined"/>
                                    <TextField id="verb1" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb2" label="Verbalizzante" variant="outlined"/>
                                    <TextField id="verb3" label="Verbalizzante" variant="outlined"/>
                                </div>
                            </div>
                            <Button variant="contained" color="primary" onClick={() => generatePatentino()}>Genera</Button>
                        </div>
                    )
                }


                {
                    selectedOption === 'PLI' && (
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

    postVerbale(verbale, "awp")

}

async function generateVLT() {
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

    postVerbale(verbale, "vlt")

}

async function generatePuntoRaccolta() {
    const activityName = (document.getElementById('activityName') as HTMLInputElement).value;
    const activityAddress = (document.getElementById('activityAddress') as HTMLInputElement).value;
    const activityCF = (document.getElementById('activityCF') as HTMLInputElement).value;
    const nPuntoRaccolta = (document.getElementById('nPuntoRaccolta') as HTMLInputElement).value;
    const nConcessione = (document.getElementById('nConcessione') as HTMLInputElement).value;
    const nomeConcessionario = (document.getElementById('nomeConcessionario') as HTMLInputElement).value;
    const titoloAutorizzatorio = (document.getElementById('titoloAutorizzatorio') as HTMLInputElement).value;
    const dataTitoloAutorizzatorio = (document.getElementById('dataTitoloAutorizzatorio') as HTMLInputElement).value;
    const dataInizioScommesse = (document.getElementById('dataInizioScommesse') as HTMLInputElement).value;
    const dataFineScommesse = (document.getElementById('dataFineScommesse') as HTMLInputElement).value;
    const bigliettiAnnullati = (document.getElementById('bigliettiAnnullati') as HTMLInputElement).value;
    const bigliettiPagati = (document.getElementById('bigliettiPagati') as HTMLInputElement).value;
    const bigliettiRimborsati = (document.getElementById('bigliettiRimborsati') as HTMLInputElement).value;
    const oda = (document.getElementById('oda') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const verbalizzante1 = (document.getElementById('verb1') as HTMLInputElement).value;
    const verbalizzante2 = (document.getElementById('verb2') as HTMLInputElement).value;
    const verbalizzante3 = (document.getElementById('verb3') as HTMLInputElement).value;
    const verbale = JSON.stringify({
        "denominazioneEsercizio": activityName.toUpperCase(),
        "indirizzoEsercizio": activityAddress,
        "picfAttivita": activityCF.toUpperCase(),
        "nPuntoRaccolta": (nPuntoRaccolta.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nPuntoRaccolta,
        "nConcessione": (nConcessione.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nConcessione,
        "nomeConcessionario": (nomeConcessionario.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nomeConcessionario,
        "titoloAutorizzatorio": titoloAutorizzatorio,
        "dataTitoloAutorizzatorio": (dataTitoloAutorizzatorio.length === 0) ? "\\_\\_\\_\\_/\\_\\_\\_\\_/\\_\\_\\_\\_\\_\\_\\_\\_" : dataTitoloAutorizzatorio,
        "dataInizioScommesse": (dataInizioScommesse.length === 0) ? "\\_\\_\\_/\\_\\_\\_/\\_\\_\\_\\_\\_\\_" : dataInizioScommesse,
        "dataFineScommesse": (dataFineScommesse.length === 0) ? "\\_\\_\\_/\\_\\_\\_/\\_\\_\\_\\_\\_\\_" : dataFineScommesse,
        "bigliettiPagati": bigliettiPagati,
        "bigliettiAnnullati": bigliettiAnnullati,
        "bigliettiRimborsati": bigliettiRimborsati,
        "verbalizzante1": verbalizzante1,
        "verbalizzante2": verbalizzante2,
        "verbalizzante3": verbalizzante3,
        "ordineDiAccesso": oda,
        "dataVerifica": (date.length === 0) ? "\\_\\_\\_\\_/\\_\\_\\_\\_/\\_\\_\\_\\_\\_\\_\\_\\_" : date,
    });

    postVerbale(verbale, "rivendita");

}

async function generateRivendita() {
    const activityName = (document.getElementById('activityName') as HTMLInputElement).value;
    const activityAddress = (document.getElementById('activityAddress') as HTMLInputElement).value;
    const comuneEsercizio = (document.getElementById('comuneEsercizio') as HTMLInputElement).value;
    const activityCF = (document.getElementById('activityCF') as HTMLInputElement).value;
    const denominazioneEsercente = (document.getElementById('denominazioneEsercente') as HTMLInputElement).value;
    const nRivendita = (document.getElementById('nRivendita') as HTMLInputElement).value;
    const nLotto = (document.getElementById('nLotto') as HTMLInputElement).value;
    const ods = (document.getElementById('ods') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const verbalizzante1 = (document.getElementById('verb1') as HTMLInputElement).value;
    const verbalizzante2 = (document.getElementById('verb2') as HTMLInputElement).value;
    const verbalizzante3 = (document.getElementById('verb3') as HTMLInputElement).value;
    const verbale = JSON.stringify({
        "denominazioneEsercizio": activityName.toUpperCase(),
        "indirizzoEsercizio": activityAddress,
        "comuneEsercizio": (comuneEsercizio.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : comuneEsercizio,
        "picfAttivita": activityCF.toUpperCase(),
        "denominazioneEsercente": denominazioneEsercente,
        "nRivendita": (nRivendita.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nRivendita,
        "nLotto": (nLotto.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nLotto,
        "verbalizzante1": verbalizzante1,
        "verbalizzante2": verbalizzante2,
        "verbalizzante3": verbalizzante3,
        "ordineDiServizio": ods,
        "dataVerifica": (date.length === 0) ? "\\_\\_\\_\\_/\\_\\_\\_\\_/\\_\\_\\_\\_\\_\\_\\_\\_" : date,
    });

    postVerbale(verbale, "rivendita");
}

async function generatePatentino() {
    const activityName = (document.getElementById('activityName') as HTMLInputElement).value;
    const activityAddress = (document.getElementById('activityAddress') as HTMLInputElement).value;
    const localitaRivendita = (document.getElementById('localitaRivendita') as HTMLInputElement).value;
    const localitaPatentino = (document.getElementById('localitaPatentino') as HTMLInputElement).value;
    const activityCF = (document.getElementById('activityCF') as HTMLInputElement).value;
    const denominazioneEsercente = (document.getElementById('denominazioneEsercente') as HTMLInputElement).value;
    const nRivendita = (document.getElementById('nRivendita') as HTMLInputElement).value;
    const nPatentino = (document.getElementById('nPatentino') as HTMLInputElement).value;
    const oda = (document.getElementById('oda') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const verbalizzante1 = (document.getElementById('verb1') as HTMLInputElement).value;
    const verbalizzante2 = (document.getElementById('verb2') as HTMLInputElement).value;
    const verbalizzante3 = (document.getElementById('verb3') as HTMLInputElement).value;
    const verbale = JSON.stringify({
        "denominazioneEsercizio": activityName.toUpperCase(),
        "indirizzoEsercizio": activityAddress,
        "localitaRivendita": (localitaRivendita.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : localitaRivendita,
        "localitaPatentino": (localitaPatentino.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : localitaPatentino,
        "picfAttivita": activityCF.toUpperCase(),
        "denominazioneEsercente": denominazioneEsercente,
        "nRivendita": (nRivendita.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nRivendita,
        "nPatentino": (nPatentino.length === 0) ? "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_" : nPatentino,
        "verbalizzante1": verbalizzante1,
        "verbalizzante2": verbalizzante2,
        "verbalizzante3": verbalizzante3,
        "ordineDiAccesso": oda,
        "dataVerifica": (date.length === 0) ? "\\_\\_\\_\\_/\\_\\_\\_\\_/\\_\\_\\_\\_\\_\\_\\_\\_" : date,
    });

    postVerbale(verbale, "patentino");
}

async function generatePLI() {

}


async function postVerbale(verbale: string, tipo: string) {
    try {
        const p: HTMLParagraphElement = document.createElement('p');
        p.className = "text-center"
        p.innerHTML = "Generazione in corso...";
        (document.getElementById('root') as HTMLDivElement).appendChild(p);
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
