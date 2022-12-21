// Unità di misura:
const msPerSecond = 1000;
const msPerMinute = msPerSecond * 60; //60000ms
const msPerHour = msPerMinute * 60; //3600000ms
const msPerDay = msPerHour * 24; //86400000ms

// ! operazioni preliminari

// recupero gli elemtni dal DOM
const daysCounter = document.getElementById('days');
const hoursCounter = document.getElementById('hours');
const minutesCounter = document.getElementById('minutes');
const secondsCounter = document.getElementById('seconds');

// recupero la data di natale
const christmasDate = new Date('2022-12-25');
const msChristmasDate = christmasDate.getTime();


// ! INSERISCO TUTTO ALL'INTERNO DI UNA FUNZIONE:
const countdown = () => {

    // data di oggi
    const now = new Date();
    const nowMs = now.getTime();

    // Quanti ms mancano a natale:
    const msLeft = msChristmasDate - nowMs;


    const daysToXmas = msLeft / msPerDay;
    const hoursToXmas = (msLeft % msPerDay) / msPerHour;
    const minutesToXmas = (msLeft % msPerHour) / msPerMinute;
    const secondsToXmas = (msLeft % msPerMinute) / msPerSecond;
    console.log(minutesToXmas)

    // stampiamo in pagina
    daysCounter.innerText = Math.floor(daysToXmas);
    hoursCounter.innerText = Math.floor(hoursToXmas);
    minutesCounter.innerText = Math.floor(minutesToXmas);
    secondsCounter.innerText = Math.floor(secondsToXmas);
}
countdown(); //Per 'eliminare' il probelma del microlag del secondo, vado a richiamare la funzione.
setInterval(countdown, msPerSecond);

