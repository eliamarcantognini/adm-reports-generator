from pydantic import BaseModel


class RaccoltaModel(BaseModel):
    denominazioneEsercizio: str = "",
    indirizzoEsercizio: str = "",
    picfAttivita: str = "",
    nPuntoRaccolta: str = "",
    nConcessione: str = "",
    nomeConcessionario: str = "",
    titoloAutorizzatorio: str = "",
    dataTitoloAutorizzatorio: str = "",
    dataInizioScommesse: str = "",
    dataFineScommesse: str = "",
    bigliettiPagati: str = "",
    bigliettiAnnullati: str = "",
    bigliettiRimborsati: str = "",
    verbalizzante1: str = "",
    verbalizzante2: str = "",
    verbalizzante3: str = "",
    ordineDiAccesso: str = "",
    dataVerifica: str = ""
