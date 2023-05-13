// Get the io
var foodPort = document.getElementById("SocialPortfolio");
var dbPort = document.getElementById("RestaurantDBPortfolio");
var posPort = document.getElementById("POSPortfolio");
var codeEarthPort = document.getElementById("CodeEarthPortfolio");
var chatPort = document.getElementById("ChatPortfolio");

foodPort.onclick = function() {
    window.location.href = "portfolio-details.html?p=food";
}

dbPort.onclick = function() {
    window.location.href = "portfolio-details.html?p=db";
}

posPort.onclick = function() {
    window.location.href = "portfolio-details.html?p=pos";
}

codeEarthPort.onclick = function() {
    window.location.href = "portfolio-details.html?p=earth";
}

chatPort.onclick = function() {
    window.location.href = "portfolio-details.html?p=chat";
}
