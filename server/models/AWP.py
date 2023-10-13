from pydantic import BaseModel

class AWPModel(BaseModel):
    denominazioneEsercizio: str = "",
    indirizzoEsercizio: str = "",
    codiceEsercizio: str = "",
    tipoAttivita: str = "",
    superficieAttivita: str = "",
    picfAttivita: str = "",
    denominazioneEsercente: str = "",
    cfEsercente: str = "",
    verbalizzante1: str = "",
    verbalizzante2: str = "",
    verbalizzante3: str = "",
    ordineDiAccesso: str = "",
    annoIscrizione: str = "",
    dataVerifica: str = ""