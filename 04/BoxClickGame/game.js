var array = new Array();
var white = "<span class = \"white\"> </span>";
var red = "<span class = \"red\"> </span>";
var span = document.getElementsByTagName('span');
var rand;
var score = 0;
var level = 1;
var missCount = 0;
var tempTarget = 0;
var tempAttribute = 0;
var speed = 5000;

for(var i = 0; i < 400; i++)
{
  array[i] = white;
  document.getElementById('board').innerHTML += array[i];
}


rand = Math.floor(Math.random() * 400);
tempAttribute = span[rand].getAttribute('class')
span[rand].setAttribute('class', 'red');
tempTarget = span[rand];

var timer;
timer = setInterval(loop, speed);

function random()
{
  tempTarget.setAttribute('class', tempAttribute);

  rand = Math.floor(Math.random() * 400);
  tempAttribute = span[rand].getAttribute('class');
  span[rand].setAttribute('class', 'red');
  tempTarget = span[rand];
}

span[rand].addEventListener('click', clickEvent);

function clickEvent()
{
  score++;
  document.getElementById('score').innerHTML = score;
  clearInterval(timer);
  random();
}

timer = setInterval(loop, speed);

function loop()
{
  tempTarget.setAttribute('class', tempAttribute);

  random();
  missCount++;
  document.getElementById('miss').innerHTML = missCount;


  if(missCount >= 11)
  {
    clearInterval(timer);
    alert('Game Over');
  }

  if(score >= 15)
  {
    level++;
    document.getElementById('level').innerHTML = level;
    speed = speed - 500;
    missCount = 0;
    document.getElementById('miss').innerHTML = missCount;
    score = 0;
    document.getElementById('score').innerHTML = score;
    alert("Level : " +level);
    clearInterval(timer);
    setInterval(loop, speed);
  }
  if(level > 10)
  {
    clearInterval(timer);
    alert('Clear!');
  }
}
