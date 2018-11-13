'use strict';
var yourDeck = []
var hisDeck = []

var yourCard
var hisCard

var yourCardValue
var hisCardValue

var yourCardNumber
var hisCardNumber

var deck = []

shuffleAndDeal()

function shuffleAndDeal(){

  //shuffle


  deck.push("<img src= '2club.png'>")
  deck.push("<img src= '2heart.png'>")
  deck.push("<img src= '2diamond.png'>")
  deck.push("<img src= '2spade.png'>")
  deck.push("<img src= '3club.png'>")
  deck.push("<img src= '3heart.png'>")
  deck.push("<img src= '3diamond.png'>")
  deck.push("<img src= '3spade.png'>")
  deck.push("<img src= '4club.png'>")
  deck.push("<img src= '4heart.png'>")
  deck.push("<img src= '4diamond.png'>")
  deck.push("<img src= '4spade.png'>")
  deck.push("<img src= '5club.png'>")
  deck.push("<img src= '5heart.png'>")
  deck.push("<img src= '5diamond.png'>")
  deck.push("<img src= '5spade.png'>")
  deck.push("<img src= '6club.png'>")
  deck.push("<img src= '6heart.png'>")
  deck.push("<img src= '6diamond.png'>")
  deck.push("<img src= '6spade.png'>")
  deck.push("<img src= '7club.png'>")
  deck.push("<img src= '7heart.png'>")
  deck.push("<img src= '7diamond.png'>")
  deck.push("<img src= '7spade.png'>")
  deck.push("<img src= '8club.png'>")
  deck.push("<img src= '8heart.png'>")
  deck.push("<img src= '8diamond.png'>")
  deck.push("<img src= '8spade.png'>")
  deck.push("<img src= '9club.png'>")
  deck.push("<img src= '9heart.png'>")
  deck.push("<img src= '9diamond.png'>")
  deck.push("<img src= '9spade.png'>")
  deck.push("<img src= '10club.png'>")
  deck.push("<img src= '10heart.png'>")
  deck.push("<img src= '10diamond.png'>")
  deck.push("<img src= '10spade.png'>")
  deck.push("<img src= 'jackclub.png'>")
  deck.push("<img src= 'jackspade.png'>")
  deck.push("<img src= 'jackheart.png'>")
  deck.push("<img src= 'jackdiamond.png'>")
  deck.push("<img src= 'queenclub.png'>")
  deck.push("<img src= 'queenheart.png'>")
  deck.push("<img src= 'queenspade.png'>")
  deck.push("<img src= 'queendiamond.png'>")
  deck.push("<img src= 'kingclub.png'>")
  deck.push("<img src= 'kingdiamond.jpeg'>")
  deck.push("<img src= 'kingheart.png'>")
  deck.push("<img src= 'kingspade.jpeg'>")
  deck.push("<img src= 'aceclub.png'>")
  deck.push("<img src= 'acediamond.png'>")
  deck.push("<img src= 'acespade.png'>")
  deck.push("<img src= 'aceheart.png'>")

  //deal

  for (var i = 0; i < (deck.length / 2); i++) {
    var num = Math.floor(Math.random() * deck.length)
    yourDeck.push(deck[num])
  }
  for (var i = 0; i < (deck.length / 2); i++) {
    var num = Math.floor(Math.random() * deck.length)
    hisDeck.push(deck[num])
  }
}


function attack(){
  if (document.getElementById("yourCard").innerHTML == ""){
  yourCardNumber = Math.floor(Math.random() * yourDeck.length);
  hisCardNumber = Math.floor(Math.random() * hisDeck.length);

  yourCard = yourDeck[yourCardNumber]
  hisCard = hisDeck[hisCardNumber]

  document.getElementById("yourCard").innerHTML = yourCard
  document.getElementById("hisCard").innerHTML = hisCard

  switch (yourCard) {
    case "<img src= 'aceclub.png'>"||"<img src= 'acediamond.png'>"||"<img src= 'aceheart.png'>"||"<img src= 'acespade.png'>":
      yourCardValue = 13
      break;
    case "<img src= 'kingclub.png'>"||"<img src= 'kingdiamond.jpeg'>"||"<img src= 'kingheart.png'>"||"<img src= 'kingspade.jpeg'>":
      yourCardValue = 12
      break;
    case "<img src= 'queenclub.png'>"||"<img src= 'queendiamond.png'>"||"<img src= 'queenheart.png'>"||"<img src= 'queenspade.png'>":
      yourCardValue = 11
      break;
    case "<img src= 'jackclub.png'>"||"<img src= 'jackdiamond.png'>"||"<img src= 'jackheart.png'>"||"<img src= 'jackspade.png'>":
      yourCardValue = 10
      break;
    case "<img src= '10club.png'>"||"<img src= '10diamond.png'>"||"<img src= '10heart.png'>"||"<img src= '10spade.png'>":
      yourCardValue = 9
      break;
    case "<img src= '9club.png'>"||"<img src= '9diamond.png'>"||"<img src= '9heart.png'>"||"<img src= '9spade.png'>":
      yourCardValue = 8
      break;
    case "<img src= '8club.png'>"||"<img src= '8diamond.png'>"||"<img src= '8heart.png'>"||"<img src= '8spade.png'>":
      yourCardValue = 7
      break;
    case "<img src= '7club.png'>"||"<img src= '7diamond.png'>"||"<img src= '7heart.png'>"||"<img src= '7spade.png'>":
      yourCardValue = 6
      break;
    case "<img src= '6club.png'>"||"<img src= '6diamond.png'>"||"<img src= '6heart.png'>"||"<img src= '6spade.png'>":
      yourCardValue = 5
      break;
    case "<img src= '5club.png'>"||"<img src= '5diamond.png'>"||"<img src= '5heart.png'>"||"<img src= '5spade.png'>":
      yourCardValue = 4
      break;
    case "<img src= '4club.png'>"||"<img src= '4diamond.png'>"||"<img src= '4heart.png'>"||"<img src= '4spade.png'>":
      yourCardValue = 3
      break;
    case "<img src= '3club.png'>"||"<img src= '3diamond.png'>"||"<img src= '3heart.png'>"||"<img src= '3spade.png'>":
      yourCardValue = 2
      break;
    case "<img src= '2club.png'>"||"<img src= '2diamond.png'>"||"<img src= '2heart.png'>"||"<img src= '2spade.png'>":
      yourCardValue = 1
      break;
    default:

  }
  switch (hisCard) {
    case "<img src= 'aceclub.png'>"||"<img src= 'acediamond.png'>"||"<img src= 'aceheart.png'>"||"<img src= 'acespade.png'>":
      hisCardValue = 13
      break;
    case "<img src= 'kingclub.png'>"||"<img src= 'kingdiamond.jpeg'>"||"<img src= 'kingheart.png'>"||"<img src= 'kingspade.jpeg'>":
      hisCardValue = 12
      break;
    case "<img src= 'queenclub.png'>"||"<img src= 'queendiamond.png'>"||"<img src= 'queenheart.png'>"||"<img src= 'queenspade.png'>":
      hisCardValue = 11
      break;
    case "<img src= 'jackclub.png'>"||"<img src= 'jackdiamond.png'>"||"<img src= 'jackheart.png'>"||"<img src= 'jackspade.png'>":
      hisCardValue = 10
      break;
    case "<img src= '10club.png'>"||"<img src= '10diamond.png'>"||"<img src= '10heart.png'>"||"<img src= '10spade.png'>":
      hisCardValue = 9
      break;
    case "<img src= '9club.png'>"||"<img src= '9diamond.png'>"||"<img src= '9heart.png'>"||"<img src= '9spade.png'>":
      hisCardValue = 8
      break;
    case "<img src= '8club.png'>"||"<img src= '8diamond.png'>"||"<img src= '8heart.png'>"||"<img src= '8spade.png'>":
      hisCardValue = 7
      break;
    case "<img src= '7club.png'>"||"<img src= '7diamond.png'>"||"<img src= '7heart.png'>"||"<img src= '7spade.png'>":
      hisCardValue = 6
      break;
    case "<img src= '6club.png'>"||"<img src= '6diamond.png'>"||"<img src= '6heart.png'>"||"<img src= '6spade.png'>":
      hisCardValue = 5
      break;
    case "<img src= '5club.png'>"||"<img src= '5diamond.png'>"||"<img src= '5heart.png'>"||"<img src= '5spade.png'>":
      hisCardValue = 4
      break;
    case "<img src= '4club.png'>"||"<img src= '4diamond.png'>"||"<img src= '4heart.png'>"||"<img src= '4spade.png'>":
      hisCardValue = 3
      break;
    case "<img src= '3club.png'>"||"<img src= '3diamond.png'>"||"<img src= '3heart.png'>"||"<img src= '3spade.png'>":
      hisCardValue = 2
      break;
    case "<img src= '2club.png'>"||"<img src= '2diamond.png'>"||"<img src= '2heart.png'>"||"<img src= '2spade.png'>":
      hisCardValue = 1
      break;
    default:

  }


  if (yourCardValue > hisCardValue){
    document.getElementById("hisDeck").innerHTML = hisDeck.length
    hisDeck.splice((hisCardnumber - 1), 1);
  }
  else if (yourCardValue < hisCardValue){
    document.getElementById("yourDeck").innerHTML = yourDeck.length
    yourDeck.splice((yourCardnumber - 1), 1);
  }
  else {
    return
  }

  }

  else{
    document.getElementById("yourCard").innerHTML = ""
    document.getElementById("hisCard").innerHTML = ""
  }
}
