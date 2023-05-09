// Get the modal
var modal = document.getElementById("myModal");

var modalList = document.getElementById("modal-ul");
var modalDesc = document.getElementById("modalOverview");

var foodPort = document.getElementById("SocialPortfolio");
var dbPort = document.getElementById("RestaurantDBPortfolio");
var posPort = document.getElementById("POSPortfolio");
var codeEarthPort = document.getElementById("CodeEarthPortfolio");
var chatPort = document.getElementById("ChatPortfolio");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

foodPort.onclick = function() {
    modalList.innerHTML =
        "<li><strong>Language: </strong>C# WPF</li>" +
        "<li><strong>Purpose: </strong>" +
        "A school project in designing UI.</li>"
    modalDesc.innerHTML = "This is a social app that combines chatting ability and scheduling ability, " +
        "written using C# and WPF, with concepts of MVVM. The app is focused on designing of UI to ensure " +
        "the customers' efficient usage of both abilities.";

    modal.style.display = "block";
}

dbPort.onclick = function() {
    modalList.innerHTML =
        "<li><strong>Language: </strong>HTML/PHP/MySQL</li>" +
        "<li><strong>Purpose: </strong>" +
        "A school project in using MySQL to connect a webpage with a database</li>"
    modalDesc.innerHTML = "This is a website that focuses on connecting actions in the website with the database " +
        "using PHP functions and MySQL. Mocking an online ordering platform, business owners can add restaurants and " +
        "corresponding menus/items to customers, while customers can choose items and order.";

    modal.style.display = "block";
}

posPort.onclick = function() {
    modalList.innerHTML =
        "<li><strong>Language: </strong>C# WPF</li>" +
        "<li><strong>Purpose: </strong>" +
        "A personal project in full stack development</li>"
    modalDesc.innerHTML = "This is a personal project that tries to combine security, UI design, and database. " +
        "The goal is to create a complete POS software for restaurants that uses encrypted JSON to save/retrieve data, " +
        "and connect with hardwares used in a POS system such as printers.";

    modal.style.display = "block";
}

codeEarthPort.onclick = function() {
    modalList.innerHTML =
        "<li><strong>Language: </strong>Unreal Engine 4.27.2</li>" +
        "<li><strong>Purpose: </strong>" +
        "A school project in creating and utilizing AI for games</li>"
    modalDesc.innerHTML = "This is a chess-like game utilizing Unreal Engine's blueprints to compete against " +
        "the AI-driven NPC. Monte Carlo Tree Search and Decision Tree are developed in order to make decisions " +
        "for the NPC, with support for fairy-chess pieces and custom-made pieces as well.";

    modal.style.display = "block";
}

chatPort.onclick = function() {
    modalList.innerHTML =
        "<li><strong>Language: </strong>Java</li>" +
        "<li><strong>Purpose: </strong>" +
        "A school project in creating a distributed system</li>"
    modalDesc.innerHTML = "This is a chatting app done in the console. Using the given server, the app is " +
        "developed in order to connect to the server and chat with other clients connected to the server.";

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
