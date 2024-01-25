 /* document.getElementById("send-button").addEventListener("click", function() {
    sendMessage();
}); */

 document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}); 

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput === "quiz") {
        //window.location.href = "quiz.html";
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'> met deze link kunt u naar de" + "<a href='quiz.html' class='bot-link'>" + " quiz" + "</a>" + "</p>";
    } else if (userInput === "home") {
        //window.location.href = "index.html";
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'> met deze link kunt u naar de" + "<a href='index.html' class='bot-link'>" + " home pagina" + "</a>" + "</p>";
    } else if (userInput === "inschrijven") {
        //window.location.href = "inschrijf.html";
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'> met deze link kunt u naar de" + "<a href='inschrijf.html' class='bot-link'>" + " inschrijving" + "</a>" + "</p>";
    } else if (userInput === "talenttree") {
        //window.location.href = "talenttree.html";
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'> met deze link kunt u naar de" + "<a href='talenttree.html' class='bot-link'>" + " talenttree" + "</a>" + "</p>";
    } else if (userInput === "chatbot") {
        //window.location.href = "chatbot.html";
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'> met deze link kunt u naar de" + "<a href='chatbot.html' class='bot-link'>" + " chatbot" + "</a>" + "</p>";
    } else if (userInput === "help") {
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'>U kunt de volgende commando's gebruiken: <br> - quiz <br> - home <br> - inschrijven <br> - talenttree <br> - chatbot</p>";
    } else if (userInput === "") {
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'></p>";
    } else if (userInput === "quiz antwoorden") {
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'>De quiz antwoorden zijn als volgt: <br> - A <br> - C <br> - A <br> - A <br> - A</p>";
    
    
        
        // Als de gebruiker iets anders typt dan "quiz" of "home"
        var chatHistory = document.getElementById("chat-history");
        var chatHistoryContent = chatHistory.innerHTML;
        chatHistory.innerHTML = chatHistoryContent + "<p class='user-message'>" + userInput + "</p>";
        document.getElementById("user-input").value = "";
        chatHistory.scrollTop = chatHistory.scrollHei
    }
}
