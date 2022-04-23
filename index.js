var num1 = Math.floor(Math.random()*6) + 1;

if(num1===1)
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
else if(num1==2)
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
else if(num1==3)
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
else if(num1==4)
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
else if(num1==5)
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
else
    document.querySelector(".img1").setAttribute("src","images/dice6.png");


var num2 = Math.floor(Math.random()*6) + 1;

if(num2===1)
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
else if(num2==2)
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
else if(num2==3)
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
else if(num2==4)
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
else if(num2==5)
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
else
    document.querySelector(".img2").setAttribute("src","images/dice6.png");


if(num1>num2){
    document.getElementById("win").textContent="Player 1 Wins!";
}
else if(num1 == num2)
    document.getElementById("win").textContent="Draw Match!";
else
    document.getElementById("win").textContent="Player 2 Wins!";
