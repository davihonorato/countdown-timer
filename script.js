function tick(){
    let now = new Date(); // data atual
    let event = date - now.getTime(); // subtração da data do evento pela data atual

    if (event > 0){
        let days = Math.floor(event / (1000 * 60 * 60 * 24));
        let rest = Math.floor(event % (1000 * 60 * 60 * 24)); // resto
        if (days < 10) { days = "0" + days; } // caso seja menor que 10, coloca 0 na frente

        let hours = Math.floor(rest / (1000 * 60 * 60));
        rest = Math.floor(rest % (1000 * 60 * 60)); // novo resto
        if (hours < 10) { hours = "0" + hours; } // caso seja menor que 10, coloca 0 na frente

        let mins = Math.floor(rest / (1000 * 60));
        rest = Math.floor(rest % (1000 * 60)); // novo resto
        if (mins < 10) { mins = "0" + mins; } // caso seja menor que 10, coloca 0 na frente

        let secs = Math.floor(rest / (1000));
        rest = Math.floor(rest % (1000)); // novo resto
        if (secs < 10) { secs = "0" + secs; } // caso seja menor que 10, coloca 0 na frente

        const time = [days, hours, mins, secs];
        let timer = document.querySelectorAll(".timer");
        
        timer.forEach((element, index) => {
            element.innerHTML = time[index];
        });
    }
}

var currentDate = new Date().getFullYear(); // Armazena o ano atual na variável
var date = new Date(`December 25, ${currentDate} 00:00:00`).getTime(); // Natal (25 de dezembro) em milisegundos

tick()
let timing = setInterval(tick, 1000); // executa a função "tick" a cada 1s (1000ms)