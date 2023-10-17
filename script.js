const yoda = document.getElementById('yoda');
const fire = document.getElementById('fire');

document.addEventListener('keydown', function (e) {
  jump();
});

function jump() {
  if (yoda.classList != 'jump') {
    yoda.classList.add('jump');
  }
  setTimeout(function () {
    yoda.classList.remove('jump');
  }, 300);
}

const isAlive = setInterval(function () {
  let yodaTop = parseInt(window.getComputedStyle(yoda).getPropertyValue('top'));
  let fireLeft = parseInt(
    window.getComputedStyle(fire).getPropertyValue('left')
  );
  if (fireLeft < 50 && fireLeft > 0 && yodaTop >= 140) {
    alert('Game over!');
  }
}, 10);
