//Generating random number for dice
var randomNumber1 = Math.floor(Math.random()*6)+1;
 
//Adding random number to image source
//For dice 1
var randomImageSrc1 = "images/dice"+randomNumber1+".png";

//Changing the image of dice 
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1);



//Now for the second dice repeat the same as above

var randomNumber2 = Math.floor(Math.random()*6)+1;


var randomImageSrc2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);


// Now Checking dice of two players if dice1 is greater than dice 2 we will display the player 1 wins
// or else Player 2 wins

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw."
}