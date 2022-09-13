let randomNumber1 = Math.floor(Math.random() * 6);

if (randomNumber1 === 1) {
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice1.png";
}else if (randomNumber1 === 2) {
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice2.png";
}else if (randomNumber1 === 3) {
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice3.png";
}else if (randomNumber1 === 4) {
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice4.png";
}else if (randomNumber1 === 5) {
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice5.png";
}else{
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice6.png";
}

let randomNumber2 = Math.floor(Math.random() * 6);

if (randomNumber2 === 1) {
  let imgDice2 = document.getElementsByClassName("img2")[0];
  imgDice2.src = "images/dice1.png";
}else if (randomNumber2 === 2) {
  let imgDice2 = document.getElementsByClassName("img2")[0];
  imgDice2.src = "images/dice2.png";
}else if (randomNumber2 === 3) {
  let imgDice2 = document.getElementsByClassName("img2")[0];
  imgDice2.src = "images/dice3.png";
}else if (randomNumber2 === 4) {
  let imgDice2 = document.getElementsByClassName("img2")[0];
  imgDice2.src = "images/dice4.png";
}else if (randomNumber2 === 5) {
  let imgDice2 = document.getElementsByClassName("img2")[0];
  imgDice2.src = "images/dice5.png";
}else{
  let imgDice = document.getElementsByClassName("img1")[0];
  imgDice.src = "images/dice6.png";
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🏆"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
