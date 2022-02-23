const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;



function flipCard(e) {
  let clickedCard = e.target;

  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
  }

  let cardOneImg = cardOne.querySelector("img").src,
    cardTwoImg = cardTwo.querySelector("img").src;
  matchCards(cardOneImg, cardTwoImg);
}



function matchCards(img1, img2) {
  if (img1 === img2) {
    // return console.log("Karşılaştırıldı.");
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }

  setTimeout(() => {
    cardOne.classList.add("random");
    cardTwo.classList.add("random");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("random", "flip");
    cardTwo.classList.remove("random", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}


cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
