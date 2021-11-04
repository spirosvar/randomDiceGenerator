//set a new random image for 1st image
let randNum1 = Math.floor(Math.random()*6) + 1;

let randomImg1 = "images/dice" + randNum1 + ".png";

var image1 = document.querySelectorAll[0];

image1.setAttribute("src", randomImg1)


//same for the 2nd image
let randNum2 = Math.floor(Math.random()*6) + 1;

let randomImg2 = "images/dice" + randNum2 + ".png";

var image2 = document.querySelectorAll[1];

image2.setAttribute("src", randomImg2);


//checks for a winner!
if(randNum1 > randNum2){
        
    document.querySelector("h1").innerHTML = "Player1 wins";

}else if(randNum1 < randNum2){

    document.querySelector("h1").innerHTML = "Player2 wins";    
}else{

    document.querySelector("h1").innerHTML = "DRAW";
}
