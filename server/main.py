import datetime
import os
from string import Template

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse

from models.AWP import AWPModel
from models.Raccolta import RaccoltaModel
from models.Rivendita import RivenditaModel
from models.VLT import VLTModel

app = FastAPI(title="Generatore Di Verbali API", description="API per il Generatore Di Verbali", version="0.0.1",
              docs_url="/docs", )

# enable cors
allow_all = ['*']
app.add_middleware(
    CORSMiddleware,
    allow_origins=allow_all,
    allow_credentials=True,
    allow_methods=allow_all,
    allow_headers=allow_all
)


@app.get("/")
async def root():
    return {"message": "Benvenuto "}


@app.post("/awp", response_class=FileResponse)
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
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control_Allow-Methods": "POST",
        'Content-Disposition': f'attachment; filename={filename}.pdf',
    }
    return FileResponse(f"pdf\\{filename}.pdf", media_type='application/pdf', filename=f"{filename}.pdf",
                        headers=headers)


@app.post("/vlt", response_class=FileResponse)
async def vlt(vltMessage: VLTModel):
    with open('templates/vlt.tex', mode='r', encoding='utf-8') as file:
        template = Template(file.read())
    today = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"vlt_{today}"
    tex = f"{filename}.tex"
    aux = f"pdf\\{filename}.aux"
    log = f"pdf\\{filename}.log"
    print(dict(vltMessage))
    with open(f"{tex}", mode='w', encoding='utf-8') as file:
        file.write(template.substitute(dict(vltMessage)))
    clean(tex, aux, log)
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control_Allow-Methods": "POST",
        'Content-Disposition': f'attachment; filename={filename}.pdf',
    }
    return FileResponse(f"pdf\\{filename}.pdf", media_type='application/pdf', filename=f"{filename}.pdf",
                        headers=headers)


@app.post("/raccolta", response_class=FileResponse)
async def raccolta(raccoltaMessage: RaccoltaModel):
    with open('templates/raccolta.tex', mode='r', encoding='utf-8') as file:
        template = Template(file.read())
    today = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"raccolta_{today}"
    tex = f"{filename}.tex"
    aux = f"pdf\\{filename}.aux"
    log = f"pdf\\{filename}.log"
    print(dict(raccoltaMessage))
    with open(f"{tex}", mode='w', encoding='utf-8') as file:
        file.write(template.substitute(dict(raccoltaMessage)))
    clean(tex, aux, log)
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control_Allow-Methods": "POST",
        'Content-Disposition': f'attachment; filename={filename}.pdf',
    }
    return FileResponse(f"pdf\\{filename}.pdf", media_type='application/pdf', filename=f"{filename}.pdf",
                        headers=headers)


@app.post("/rivendita", response_class=FileResponse)
async def rivendita(rivenditaMessage: RivenditaModel):
    with open('templates/rivendita.tex', mode='r', encoding='utf-8') as file:
        template = Template(file.read())
    today = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"rivendita_{today}"
    tex = f"{filename}.tex"
    aux = f"pdf\\{filename}.aux"
    log = f"pdf\\{filename}.log"
    print(dict(rivenditaMessage))
    with open(f"{tex}", mode='w', encoding='utf-8') as file:
        file.write(template.substitute(dict(rivenditaMessage)))
    clean(tex, aux, log)
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control_Allow-Methods": "POST",
        'Content-Disposition': f'attachment; filename={filename}.pdf',
    }
    return FileResponse(f"pdf\\{filename}.pdf", media_type='application/pdf', filename=f"{filename}.pdf",
                        headers=headers)


def clean(tex: str, aux: str, log: str):
    os.system(f"pdflatex -output-directory=pdf {tex} >NUL")
    os.system(f"pdflatex -output-directory=pdf {tex} >NUL")
    os.system(f"del {log}")
    os.system(f"del {aux}")
    os.system(f"del {tex}")
