var randomNumber1=Math.ceil(Math.random()*6);

var newNumber1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",newNumber1);


var randomNumber2=Math.ceil(Math.random()*6);

var newNumber2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",newNumber2);

if(newNumber1>newNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else if(newNumber1<newNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}
