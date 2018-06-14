/*function runPlayerOne(){

}*/
var playerOneDice=[];
var clicks=0;
function runDiceGame1(){
/*	playerOneRollOnePics(playerOneNumbers);*/
	document.getElementById("rollButton").onclick=playerOneRoll();
	
	/*let playerTwoNumber=playerTwoRoll();*/
}
function runDiceGame2(){
	document.getElementById("rollButton2").onclick=playerTwoNumbers(playerOneDice,clicks);
	return clicks++
}
function diceRoll(diceSides){
	let result=Math.floor((Math.random()*diceSides)+1);
	return result;
}
function playerOneRoll(){
	let diceSides=5
	let playerOneLosingNumbersArray=[]
	let playerOneLosingNumber1=playerOneLosingNumbersArray.push(diceRoll(diceSides));
	/*let playerOneLosingNumber2=playerOneLosingNumbersArray.push(diceRoll(diceSides));
	for(i=0;playerOneLosingNumbersArray[0]===playerOneLosingNumbersArray[1];i++){
		let PlayerOneNewNumber=diceRoll(diceSides)
			playerOneLosingNumber2=playerOneLosingNumbersArray.splice(1,1,PlayerOneNewNumber);
		}*/
	document.getElementById("gameTextResults").innerHTML=("Player one's rolled numbers are "+playerOneLosingNumbersArray+"!  Player two now has 6 rolls of dice with increasing sides to roll the same number! The bets increase but the odds decrease. The max cash pot is $6! Have fun!");
	let x = document.getElementById("rollButton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
	return playerOneDice=(playerOneLosingNumbersArray);
	playerOneRollOnePics(playerOneDice);
	playerOneRollTwoPics(playerOneDice);
}
function playerTwoRoll(clicks){
	let diceSides=[5,6,8,10,12,20];
	let currentRoll=diceRoll(diceSides[clicks]);
	return currentRoll;
}
function playerTwoNumbers(playerOneDice,clicks){
	let playerTwoNumber=playerTwoRoll(clicks);
	if(playerTwoNumber===playerOneDice[0]){
		let bets=2+(clicks*2)
		if(bets>6){
			bets=6
		}
		document.getElementById("gameTextResults").innerHTML=("Player two rolled your losing number of:"+playerTwoNumber+"!  Player one must PAY UP:$"+bets);
		let x=document.getElementById("rollButton2");
		x.style.display="none";
	}
	else if(clicks<1){
		bets=4
		document.getElementById("gameTextResults").innerHTML=("Player one's numbers:"+playerOneDice+"!  Player two rolled a "+playerTwoNumber+"!  Player one is still in the game!  Each player must put $1 in the pot! Pot total is :$"+bets+" but player two's odds decrease each roll!");
	}
	else if(clicks<2){
		bets=6
		document.getElementById("gameTextResults").innerHTML=("Player one's numbers:"+playerOneDice+"!  Player two rolled a "+playerTwoNumber+"!  Player one is still in the game!  Each player must put $1 in the pot! Pot total is :$"+bets+" but player two's odds decrease each roll!");
	}
	else if(clicks<4){
		bets=6
		document.getElementById("gameTextResults").innerHTML=("Player one's numbers:"+playerOneDice+"!  Player two rolled a "+playerTwoNumber+"!  Player one is still in the game! Bets do not increase at this point, but odds are decreasing and there is still $6 on the table!");
	}
	else if(clicks<5){
		bets=6
		document.getElementById("gameTextResults").innerHTML=("Player one's numbers:"+playerOneDice+"!  Player two rolled a "+playerTwoNumber+"!  BONUS TIME! You get ONE of the 20-sided dice to roll a "+playerOneDice+" and win $6!");
		return clicks
	}
	else{
		document.getElementById("gameTextResults").innerHTML=("Player One is the winner! Player two failed to roll player one's number! Player two must PAY UP:$6");
		document.getElementById("rollButton2").disabled=true;
	}

}
function playerOneRollOnePics(playerOneDice){
	let firstNumber=playerOneDice[0];
	if(firstNumber===1){
		document.getElementById("playerOneRollOne").src="4sidedDice1.png"
	}
	else if (firstNumber===2){
		document.getElementById("playerOneRollOne").src="4sidedDice2.png"
	}
	else if (firstNumber===3){
		document.getElementById("playerOneRollOne").src="4sidedDice3.png"
	}
	else{
		document.getElementById("playerOneRollOne").src="4sidedDice4.png"
	}
}
/*function playerOneRollOnePics(playerOneDice){
	let secondNumber=playerOneDice[1];
	if(secondNumber===1){
		document.getElementById("playerOneRollTwo").src="4sidedDice1.png"
	}
	else if (secondNumber===2){
		document.getElementById("playerOneRollTwo").src="4sidedDice2.png"
	}
	else if (secondNumber===3){
		document.getElementById("playerOneRollTwo").src="4sidedDice3.png"
	}
	else{
		document.getElementById("playerOneRollTwo").src="4sidedDice4.png"
	}
}*/

