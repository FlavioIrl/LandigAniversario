AOS.init();
const dataDoEvento = new Date("Dec 03,2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diasEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = `est\xe1 vazio! Alguem j\xe1 pegou :(`;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
