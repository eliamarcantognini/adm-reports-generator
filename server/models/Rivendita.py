from pydantic import BaseModel


class RivenditaModel(BaseModel):
    denominazioneEsercizio: str = "",
    indirizzoEsercizio: str = "",
    picfAttivita: str = "",
    verbalizzante1: str = "",
    verbalizzante2: str = "",
    verbalizzante3: str = "",
    dataVerifica: str = "",
    ordineDiServizio: str = "",
    denominazioneEsercente: str = "",
    nRivendita: str = "",
    nLotto: str = "",
    comuneEsercizio: str = "",
