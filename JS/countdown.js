// ontleent van w3schools.com
// Stel de datum en tijd in voor de aftelling
var countdownDate = new Date("26 januari 2024 15:00:00").getTime();

// Werk de aftelling elke 1 seconde bij
var countdown = setInterval(function() {
    // Haal de huidige datum en tijd op
    var now = new Date().getTime();

    // Bereken de resterende tijd
    var distance = countdownDate - now;

    // Bereken dagen, uren, minuten en seconden
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Toon de aftelling
    document.getElementById("countdown").innerHTML = days + "d " + hours + "u " + minutes + "m " + seconds + "s ";

    // Als de aftelling is afgelopen, toon een bericht
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Aftelling is afgelopen!";
    }
}, 1000);