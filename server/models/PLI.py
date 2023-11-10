from pydantic import BaseModel


class PliModel(BaseModel):
    denominazioneEsercizio: str = "",
    indirizzoEsercizio: str = "",
    picfAttivita: str = "",
    verbalizzante1: str = "",
    verbalizzante2: str = "",
    verbalizzante3: str = "",
    dataVerifica: str = "",
    ordineDiAccesso: str = "",
    denominazioneEsercente: str = "",
    nRivendita: str = "",
