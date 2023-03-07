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
    '<p>The future belongs to those who evolve.</p>',
  "Welcome Friend!", 
  "Karibu Rafiki!", 
  "!Ù…Ø±Ø­Ø¨Ø§ ØµØ¯ÙŠÙ‚Ù‰"
];
var counter = 0;
var elem = document.getElementById("welcomeText");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}