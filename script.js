let ghost = document.querySelector('#ghostTesting');
let player = document.querySelector("#player");
let ghost2 = document.querySelector("#blinky");
let ghost3 = document.querySelector("#inky");
let ghost4 = document.querySelector("#Clyde");
let ghost5 = document.querySelector("#pinky")


ghost.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost2.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost3.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost4.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost5.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});
