// Recuperar mensagens armazenadas no localStorage
document.addEventListener("DOMContentLoaded", function() {
    var storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
        var messagesContainer = document.getElementById("messages");
        messagesContainer.innerHTML = storedMessages;
    }
});

function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var messagesContainer = document.getElementById("messages");
        var listItem = document.createElement("li");
        listItem.textContent = message;
        messagesContainer.appendChild(listItem);

        // Salvar mensagens no localStorage
        var messages = messagesContainer.innerHTML;
        localStorage.setItem("messages", messages);

        messageInput.value = "";
    }
}
