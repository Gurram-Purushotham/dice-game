

var randomNumber1=Math.floor(Math.random()*6+1);

var randomImageSource="images/dice"+randomNumber1+".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



//same process for 2nd dice

var randomNumber2=Math.floor(Math.random()*6+1);

var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="&#128681Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! &#128681";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

document.querySelector("btn").location.reload


























/*
if(randomNumber1===1){
    document.querySelector("img").setAttribute("src","./images/dice1.png");
}
if(randomNumber1===2){
    document.querySelector("img").setAttribute("src","./images/dice2.png");
}
if(randomNumber1===3){
    document.querySelector("img").setAttribute("src","./images/dice3.png");
}
if(randomNumber1===4){
    document.querySelector("img").setAttribute("src","./images/dice4.png");
}
if(randomNumber1===5){
    document.querySelector("img").setAttribute("src","./images/dice5.png");
}
if(randomNumber1===6){
    document.querySelector("img").setAttribute("src","./images/dice6.png");
}*/