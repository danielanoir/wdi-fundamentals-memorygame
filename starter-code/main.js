console.log("JS file is connected to HTML! Woo!");
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

var cards = ["queen","queen","king","king"];

var cardsInPlay = [];

var gameBoard = document.getElementById("game-board");

function isTwoCards()
{
	// Every time a card is clicked:
	cardsInPlay.push(this.getAttribute('data-card'));
// do other stuff like change image
	
	// When the SECOND card is clicked:
	if (cardsInPlay.length === 2)
	{   
		// When they match:
		if (cardsInPlay[0] === cardsInPlay[1])
		{	alert ("You found a match!");
		}
		else
		{	alert ("Sorry, try again.");
		}
	    cardsInPlay = [];
	}
}

function createBoard()
{	for (i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
			if (cards[i] === "king") 
			{
				cardElement.innerHTML = '<img src="card_king.png" alt="King of Clubs" />';
			}

			else if (cards[i] === "queen")
			{
				cardElement.innerHTML = '<img src="card_queen.png" alt="Queen of Clubs" />';
			
			}
			else
			{
				cardElement.innerHTML = '<img src="card_back.png" alt="Back of Card" />'; 
			}
		gameBoard.appendChild(cardElement);
	}
}

createBoard();

