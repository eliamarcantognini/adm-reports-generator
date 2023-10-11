from pydantic import BaseModel

class AWPModel(BaseModel):
    denominazioneEsercizio: str = "",
    indirizzoEsercizio: str = "",
    codiceEsercizio: str = "",
    tipoAttivita: str = "",
    superficeAttivita: str = "",
    denominazioneEsercente: str = "",
    cfEsercente: str = "",
    verbalizzante1: str = "",
    verbalizzante2: str = "",
    ordineDiAccesso: str = "",
    annoIscrizione: str = "",
    dataVerifica: str = ""