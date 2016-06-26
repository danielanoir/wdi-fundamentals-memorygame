console.log("JS file is connected to HTML! Woo!");
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

// if(cardTwo === cardFour)
//{
//alert ("You found a match!")
//}
//else
//{
//alert ("Sorry, try again.")
//}

var gameBoard = document.getElementById("game-board");

function createBoard(cardCount)
{	for (i = 1; i <= cardCount; i++)
	{
		var newCard = document.createElement("div");
		newCard.className = "card";
		gameBoard.appendChild(newCard);
	}
}

createBoard(4);