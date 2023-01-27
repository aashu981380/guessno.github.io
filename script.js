'use strict';
let randomno = parseInt(Math.random() * 10);
let score = 20;
let highscore = 0;
let again = document.querySelectorAll('button')[0];
let submit = document.querySelectorAll('button')[1];
let scoredisplay = document.querySelectorAll('p')[2];
let results = document.querySelectorAll('p')[1];
let highscoredisplay = document.querySelectorAll('p')[0];
console.log(randomno);
again.onclick = () => {
  score = 20;
  scoredisplay.textContent = `Score:${score}`;
  randomno = parseInt(Math.random() * 10);
  console.log(randomno);
};
submit.onclick = () => {
  let input = Number(document.querySelector('input').value);
  console.log(randomno);
  if (randomno == input) {
    results.textContent = 'Correct Number!';
    scoredisplay.textContent = `Score:${score}`;
    if (score > highscore) {
      highscore = score;
      highscoredisplay.textContent = `HighScore:${highscore}`;
    }
  } else if (randomno !== input) {
    score--;
    scoredisplay.textContent = `Score:${score}`;
    if (score == 0) {
      alert('Game over');
      window.location.reload();
    } else if (input > randomno) {
      results.textContent = 'Too high!';
    } else if (input < randomno) {
      results.textContent = 'Too Low!';
    }
  }
};
