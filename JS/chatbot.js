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
        window.location.href = "quiz.html";
    } else if (userInput === "home") {
        window.location.href = "index.html";
    } else if (userInput === "inschrijven") {
        window.location.href = "inschrijf.html";
    } else if (userInput === "talenttree") {
        window.location.href = "talenttree.html";
    } else if (userInput === "chatbot") {
        window.location.href = "chatbot.html";
    } else if (userInput === "help") {
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'>U kunt de volgende commando's gebruiken: <br> - quiz <br> - home <br> - inschrijven <br> - talenttree <br> - chatbot</p>";
    } else if (userInput === "is ben gay?") {
        document.getElementById("chat-history").innerHTML = "<p class='bot-message'>Ja hij is heel erg gay</p>";
    
        
        // Als de gebruiker iets anders typt dan "quiz" of "home"
        var chatHistory = document.getElementById("chat-history");
        var chatHistoryContent = chatHistory.innerHTML;
        chatHistory.innerHTML = chatHistoryContent + "<p class='user-message'>" + userInput + "</p>";
        document.getElementById("user-input").value = "";
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}
