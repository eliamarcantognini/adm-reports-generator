from pydantic import BaseModel


class PliModel(BaseModel):
    denominazioneEsercizio: str = "",
    indirizzoEsercizio: str = "",
    picfAttivita: str = "",
    denominazioneEsercente: str = "",
    nRivendita: str = "",
    verbalizzante1: str = "",
    verbalizzante2: str = "",
    verbalizzante3: str = "",
    ordineDiAccesso: str = "",
    dataVerifica: str = "",
