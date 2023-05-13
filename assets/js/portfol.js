// Get the io
var title = document.getElementById('portfol-title');
var lang = document.getElementById('portfol-lang');
var purpose = document.getElementById('portfol-purpose');
var link = document.getElementById('portfol-github');
var description = document.getElementById('portfol-description');
var swiper = document.getElementById('portfol-swiper');
var image = document.getElementById('portfol-img');
var img1 = document.getElementById('portfol-img1');
var img2 = document.getElementById('portfol-img2');
var img3 = document.getElementById('portfol-img3');

const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get('p');

function loadportfolio() {
    if (pageParam === 'food') {
        title.textContent = 'Food Meetup Application';
        image.src = 'assets/img/portfolio/portfolio-social.jpg';
        image.srcset = 'assets/img/portfolio/portfolio-social.jpg';
        lang.textContent = 'WPF with C#';
        purpose.textContent = 'A school project in designing UI';
        link.href = '';
        link.textContent = '';

        description.textContent =
            'This is a social app that combines chatting ability and scheduling ability, ' +
            'written using C# and WPF, with concepts of MVVM. The app is focused on designing of UI to ensure ' +
            'the customers\' efficient usage of both abilities.';
    }
    else if (pageParam === 'db') {
        title.textContent = 'Restaurant Ordering Website';
        image.src = 'assets/img/portfolio/portfolio-db.jpg';
        image.srcset = 'assets/img/portfolio/portfolio-db.jpg';
        lang.textContent = 'HTML/PHP/MySQL';
        purpose.textContent = 'A school project in using MySQL to connect a webpage with a database';
        link.href = '';
        link.textContent = '';

        description.textContent =
            'This is a website that focuses on connecting actions in the website with the database ' +
            'using PHP functions and MySQL. Mocking an online ordering platform, business owners can add restaurants and ' +
            'corresponding menus/items to customers, while customers can choose items and order.';
    }
    else if (pageParam === 'pos') {
        title.textContent = 'POS Application';
        image.src = 'assets/img/portfolio/portfolio-pos.jpg';
        image.srcset = 'assets/img/portfolio/portfolio-pos.jpg';
        lang.textContent = 'WPF with C#';
        purpose.textContent = 'A personal project in full stack development';
        link.href = '';
        link.textContent = '';

        description.textContent =
            'This is an ongoing personal project that tries to combine security, UI design, and database. ' +
            'The goal is to create a complete POS software for restaurants that uses encrypted JSON to save/retrieve data, ' +
            'and connect with hardwares used in a POS system such as printers.';
    }
    else if (pageParam === 'earth') {
        title.textContent = 'Codename Earth';
        image.src = 'assets/img/portfolio/portfolio-codeearth.jpg';
        image.srcset = 'assets/img/portfolio/portfolio-codeearth.jpg';
        lang.textContent = 'Unreal Engine 4.27.2';
        purpose.textContent = 'A school project in creating and utilizing AI for games';
        link.href = '';
        link.textContent = '';

        description.textContent =
            'This is a chess-like game utilizing Unreal Engine\'s blueprints to compete against ' +
            'the AI-driven NPC. Monte Carlo Tree Search and Decision Tree are developed in order to make decisions ' +
            'for the NPC, with support for fairy-chess pieces and custom-made pieces as well.';
    }
    else if (pageParam === 'chat') {
        title.textContent = 'Chatting Application';
        image.src = 'assets/img/portfolio/portfolio-chat.jpg';
        image.srcset = 'assets/img/portfolio/portfolio-chat.jpg';
        lang.textContent = 'Java';
        purpose.textContent = 'A school project in creating a distributed system';
        link.href = '';
        link.textContent = '';

        description.textContent =
            'This is a chatting app in which multiple clients may chat using the console window. ' +
            'Using the given server, the app is developed in order to connect to the server ' +
            'and connect with other clients in the server in order to communicate with each other.';
    }
    else {
        // nothing
    }
}
