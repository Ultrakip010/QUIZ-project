// ontleent van w3schools.com
// Stel de datum en tijd in voor de aftelling
var countdownDate2 = new Date("1 may 2024 00:00:00").getTime();

// Werk de aftelling elke 1 seconde bij
var countdown2 = setInterval(function () {
    // Haal de huidige datum en tijd op
    var now = new Date().getTime();

    // Bereken de resterende tijd
    var distance = countdownDate2 - now;

    // Als de aftelling is afgelopen, toon een bericht en stop de update
    if (distance < 0) {
        clearInterval(countdown2);
        document.getElementById("countdown2").innerHTML = "Aftelling is afgelopen!";
        return;
    }

    // Bereken dagen, uren, minuten en seconden
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Toon de aftelling
    document.getElementById("countdown2").innerHTML = days + "d " + hours + "u " + minutes + "m " + seconds + "s ";
}, 1000);