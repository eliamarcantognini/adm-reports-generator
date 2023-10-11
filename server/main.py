import io

from fastapi import FastAPI, Response, BackgroundTasks
from string import Template
from starlette.responses import FileResponse
import datetime
import os

from models.AWP import AWPModel

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Benvenuto "}


@app.post("/awp")
def awp(awpMessage: AWPModel):
    with open('templates/awp.tex', mode='r', encoding='utf-8') as file:
        template = Template(file.read())
    today = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"awp_{today}"
    tex = f"{filename}.tex"
    aux = f"pdf\\{filename}.aux"
    log = f"pdf\\{filename}.log"
    print(dict(awpMessage))
    with open(f"{tex}", mode='w', encoding='utf-8') as file:
        file.write(template.substitute(dict(awpMessage)))

    clean(tex, aux, log)

    return FileResponse(f"pdf\\{filename}.pdf", media_type='application/pdf', filename=f"{filename}.pdf")

@app.post("/vlt")
async def vlt(name: str):
    return {"message": f"Hello {name}"}

@app.post("/scommesse")
async def scommesse(name: str):
    return {"message": f"Hello {name}"}


def clean(tex: str, aux: str, log: str):
    os.system(f"pdflatex -output-directory=pdf {tex} >NUL")
    os.system(f"pdflatex -output-directory=pdf {tex} >NUL")
    os.system(f"del {log}")
    os.system(f"del {aux}")
    os.system(f"del {tex}")