var text = [

    '<i class="bi bi-app-indicator carousel-icon"></i>' +
    '<h2>' +
        '<b>Technology for Innovators</b>' +
    '</h2>' +
    '<p>The future belongs to those who evolve.</p>',

    '<i class="bi bi-shield-check carousel-icon"></i>' +
    '<h2>' +
        '<b>We provide Security Solutions</b>' +
    '</h2>' +
    '<p>CCTV cameras Installation, Cyber security and Fire alarm installation.</p>',

    '<i class="bi bi-boxes carousel-icon"></i>' +
    '<h2>' +
        '<b>Technology Experts</b>' +
    '</h2>' +
    '<p>We provide technology solutions both in software development and networking.</p>'
  
];

var botLogo = '<br> <a href="home.html" class="arrowBegin pt-5">' +
                'visit <br>' +
                '<img src="./res/images/logos/logo-white.png" alt="botnet-logo" class="botnet-index">' +
                '<br> website' +
            '</a>';

var counter = 0;
var elem = document.getElementById("welcomeText");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter] + botLogo;
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}