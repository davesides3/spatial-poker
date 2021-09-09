// ZzFX - Zuper Zmall Zound Zynth - Micro Edition
// MIT License - Copyright 2019 Frank Force
// https://github.com/KilledByAPixel/ZzFX

// This is a tiny build of zzfx with only a zzfx function to play sounds.
// You can use zzfxV to set volume.
// Feel free to minify it further for your own needs!

'use strict';let zzfx,zzfxV,zzfxX

// ZzFXMicro - Zuper Zmall Zound Zynth - v1.1.8 ~ 884 bytes minified
zzfxV=1    // volume
zzfx=       // play sound
(p=1,k=.05,b=220,e=0,r=0,t=.1,q=0,D=1,u=0,y=0,v=0,z=0,l=0,E=0,A=0,F=0,c=0,w=1,m=0,B=0)=>{let
M=Math,R=44100,d=2*M.PI,G=u*=500*d/R/R,C=b*=(1-k+2*k*M.random(k=[]))*d/R,g=0,H=0,a=0,n=1,I=0
,J=0,f=0,x,h;e=R*e+9;m*=R;r*=R;t*=R;c*=R;y*=500*d/R**3;A*=d/R;v*=d/R;z*=R;l=R*l|0;for(h=e+m+
r+t+c|0;a<h;k[a++]=f)++J%(100*F|0)||(f=q?1<q?2<q?3<q?M.sin((g%d)**3):M.max(M.min(M.tan(g),1)
,-1):1-(2*g/d%2+2)%2:1-4*M.abs(M.round(g/d)-g/d):M.sin(g),f=(l?1-B+B*M.sin(d*a/l):1)*(0<f?1:
-1)*M.abs(f)**D*p*zzfxV*(a<e?a/e:a<e+m?1-(a-e)/m*(1-w):a<e+m+r?w:a<h-c?(h-a-c)/t*w:0),f=c?f/
2+(c>a?0:(a<h-c?1:(h-a)/c)*k[a-c|0]/2):f),x=(b+=u+=y)*M.cos(A*H++),g+=x-x*E*(1-1E9*(M.sin(a)
+1)%2),n&&++n>z&&(b+=v,C+=v,n=0),!l||++I%l||(b=C,u=G,n=n||1);p=zzfxX.createBuffer(1,h,R);p.
getChannelData(0).set(k);b=zzfxX.createBufferSource();b.buffer=p;b.connect(zzfxX.destination
);b.start();return b};zzfxX=new (window.AudioContext/*||webkitAudioContext*/) // audio context

const uni_back = "🂠";
const uni_cards = [
  "🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂭","🂮",
  "🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂽","🂾",
  "🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃍","🃎",
  "🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃝","🃞"
];

const uni_jokers = ["🃏", "🂿", "🃟"]; // black, red, white

const card_faces = [
  14,2,3,4,5,6,7,8,9,10,11,12,13,
  14,2,3,4,5,6,7,8,9,10,11,12,13,
  14,2,3,4,5,6,7,8,9,10,11,12,13,
  14,2,3,4,5,6,7,8,9,10,11,12,13
];

const card_suits = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,1,1,1,1,1,1,1,1,1,1,1,1,
  2,2,2,2,2,2,2,2,2,2,2,2,2,
  3,3,3,3,3,3,3,3,3,3,3,3,3
];

// const colors = [
//   "black",
//   "red",
//   "black",
//   "red",
//   "black",
//   "green",
//   "black",
//   "black",
//   "black"
// ];
const card_suit_name = ["spades", "hearts", "diamonds", "clubs"];

const c_ace_spades = 0;
const c_ace_hearts = 13;
const c_ace_diamonds = 26;
const c_ace_clubs = 39;

const hand_max_cards = 5;
const board_max_x = 12;
const board_max_y = 6;
const boardBackground = "lightgreen";
const myBackground = "lightcyan";
const opBackground = "goldenrod";
const trayBackground = "lightgrey";
const pileBackground = "lightgray";

const handGrid = document.getElementById("hand");
const opHandGrid = document.getElementById("op_hand");
const boardGrid = document.getElementById("board");

var cardMode = "Night (m)";

var cards = [];
var board = [];
var hand = [];
var op_hand = [];
var pile = [];
var pileCount = 0;
var trayItem;
var pileItem;
var pileCountItem;
var handRankItem;
var opHandRankItem;
var boardItem;
var handItem;
var opHandItem;
var cardModeItem;
var prevKey = -1;

let tray = -1;

let myCard = { x: 0, y: 0 };
let opCard = { x: board_max_x - 1, y: board_max_y - 1 };

const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  k1: 49,
  k2: 50,
  k3: 51,
  k4: 52,
  k5: 53,
  kt: 84,
  km: 77,
};

function playCardSound() {
  zzfx(...[,,,,,.01,,2,,,,,,2]);
  // for (let i = 0; i < 5; i++) {
  //   zzfx(...[,,,,,.01,,2,,,,,,2]);
  // }
}

function createText(txt) {
  let span = document.createElement("span");
  span.innerHTML = "<span>" + txt + "</span>";
  return span;
}

function createCard(num) {
  let span = document.createElement("span");
  let opFace = opHandCard(0);
  let plotCard = uni_back;
  let cardInMyHand = hand.includes(num);
  let trayCard = tray;
  let pileCard = pile[pile.length - 1];
  let plotColor = "black";
  if (cardInMyHand || num === opFace || num === pileCard || num === trayCard || cardMode === "Day (m)") {
    plotCard = uni_cards[num];
  }
  if (cardMode === "Twilight (m)" || cardMode === "Day (m)") {
    plotColor = cardColor(num);
  }
  
  span.innerHTML =
    '<span style="color:' +
    plotColor +
    '";">' +
    plotCard +
    "</span>";
  return span;
}

function cardColor(num) {
  if (num >= c_ace_hearts && num < c_ace_clubs) {
    return "darkred";
  }
  return "black";
}

function cardName(num) {
  let t = "";
  let n = num % 13;

  if (n === 0) {
    t = "ace of ";
  } else if (n < 10) {
    t = n + 1 + " of ";
  } else {
    switch (n) {
      case 10:
        t = "Jack of ";
        break;
      case 11:
        t = "Queen of ";
        break;
      case 12:
        t = "King of ";
        break;
      default:
        t = "Unknown of ";
    }
  }

  let suit = parseInt(num / 13);
  t = t + card_suit_name[suit];
  console.log("num = " + num + ", n = " + n + ", t = " + t);
  return t;
}

// Randomize array in-place using Durstenfeld shuffle algorithm
// https://stackoverflow.com/a/12646864
function shuffleDeck() {
  // initialize the card deck
  for (let c = 0; c < uni_cards.length; c++) {
    cards[c] = c;
  }
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

function boardCard(x, y) {
  if (x < 0 || x > board_max_x - 1 || y < 0 || y > board_max_y - 1) {
    return -1;
  } else {
    return board[board_max_x * y + x];
  }
}

function handCard(c) {
  return hand[c];
}

function opHandCard(c) {
  return op_hand[c];
}

function boardInit() {
  for (let x = 0; x < board_max_x; x++) {
    for (let y = 0; y < board_max_y; y++) {
      board[board_max_x * y + x] = -1;
    }
  }
}

function handShadeCell(c, color) {
  let handItem = document.querySelector(".card-grid-item-hand-" + c + "-0");
  handItem.style.background = color;
  
}

function boardShadeCell(id, x, y, color) {
  switch (id) {
    case "board":
      boardItem = document.querySelector(".card-grid-item-board-" + x + "-" + y);
      boardItem.style.background = color;
      break;
    case "hand":
      let handItem = document.querySelector(".card-grid-item-hand-" + x + "-0");
      handItem.style.background = color;
      break;
    case "op_hand":
      let opHandItem = document.querySelector(".card-grid-item-op_hand-" + x + "-0");
      opHandItem.style.background = color;
      break;
    default:
      console.log("bad id in boardShadeCell");
      break;
  }
}

function boardSetCard(x, y, num) {
  boardItem = document.querySelector(".card-grid-item-board-" + x + "-" + y);
  if (boardCard(x, y) > -1) {
    if (num > -1) {
      boardItem.replaceChild(createCard(num), boardItem.childNodes[0]);
    } else {
      boardItem.removeChild(boardItem.childNodes[0]);
    }
  } else if (num > -1) {
    boardItem.appendChild(createCard(num));
  }
  board[board_max_x * y + x] = num;
}

function opHandSetCard(c, num) {
  console.log("c in opHandSetCard = " + c);
  opHandItem = document.querySelector(".card-grid-item-op_hand-" + c + "-0");
  let curCard = opHandCard(c);
  op_hand[c] = num;
  if (curCard > -1) {
    opHandItem.removeChild(opHandItem.childNodes[0]);
  }
  if (num > -1) {
    opHandItem.appendChild(createCard(num));
  }
}

function opHandOpenCard() {
  for (let c = 0; c < hand_max_cards; c++) {
    if (op_hand[c] === -1) {
      return c;
    }
  }
  return -1;
}

function handSetCard(c, num) {
  handItem = document.querySelector(".card-grid-item-hand-" + c + "-0");
  let curCard = handCard(c);
  hand[c] = num;
  if (curCard > -1) {
    handItem.removeChild(handItem.childNodes[0]);
  }
  if (num > -1) {
    handItem.appendChild(createCard(num));
  }
}

function handOpenCard() {
  for (let c = 0; c < hand_max_cards; c++) {
    if (hand[c] === -1) {
      return c;
    }
  }
  return -1;
}

function setTray(num) {
  // let trayItem = document.querySelector(".card-grid-item tray");
  // let trayItem = document.getElementById("tray");
  let curTray = tray;
  tray = num;
  if (curTray === -1) {
    if (num > -1) {
      trayItem.appendChild(createCard(num));
    }
  } else {
    if (num > -1) {
      setPile(curTray);
      trayItem.replaceChild(createCard(num), trayItem.childNodes[0]);
    } else {
      trayItem.removeChild(trayItem.childNodes[0]);
    }
  }
}

function clearTray() {
  tray = -1;
}

function setPile(num) {
  // let pileItem = document.getElementById("pile");
  // let pileCountItem = document.getElementById("pile_count");
  if (pileCount > 0) {
    pileItem.replaceChild(createCard(num), pileItem.childNodes[0]);
  } else {
    pileItem.appendChild(createCard(num));
  }
  pileCount++;
  pile.push(num);
  pileCountItem.replaceChildren(createText("Pile = " + pileCount));
}

function clearPile() {
  pile = [];
}

function setHandRank() {
  let { rank, value } = rankHand(hand, "my");
  let rName = rankName(rank, value);
  if (handRankItem.childNodes[0]) {
    handRankItem.replaceChild(createText(rName), handRankItem.childNodes[0]);
  } else {
    handRankItem.appendChild(createText(rName));
  }
}

function setOpHandRank() {
  let { rank, value } = rankHand(op_hand, "op");
  let rName = rankName(rank, value);
  if (opHandRankItem.childNodes[0]) {
    opHandRankItem.replaceChild(
      createText(rName),
      opHandRankItem.childNodes[0]
    );
  } else {
    opHandRankItem.appendChild(createText(rName));
  }
}

function setCardMode(cardModeIn) {
  cardMode = cardModeIn;
  if (cardModeItem.childNodes[0]) {
    cardModeItem.replaceChild(createText(cardMode), cardModeItem.childNodes[0]);
  } else {
    cardModeItem.appendChild(createText(cardMode));
  }
  replotCardGrid(handGrid, "hand", hand_max_cards + 2, 1);
  replotCardGrid(opHandGrid, "op_hand", hand_max_cards, 1);
  replotCardGrid(boardGrid, "board", board_max_x, board_max_y);
}

function rankName(rankNum, highCard) {
  console.log("rankNum = ", rankNum);
  switch (rankNum) {
    case 9:
      return "Straight Flush";
    case 8:
      return "Four of a Kind";
    case 7:
      return "Full House";
    case 6:
      return "Flush";
    case 5:
      return "Straight";
    case 4:
      return "Three of a Kind";
    case 3:
      return "Two Pair";
    case 2:
      return "A Pair";
    case 1:
      return "High Card (" + highCard + ")";
    case 0:
      return "No Rank";
    default:
      return "unexpected " + rankNum;
  }
}

// https://dev.to/miketalbot/real-world-javascript-map-reduce-solving-the-poker-hand-problem-3eie
// adapted to different arrays - uses more modern JavaScript
function rankHand(cardArray, id) {
  let c_faces = [];
  let c_suits = [];
  for (let i = 0; i < hand_max_cards; i++) {
    if (cardArray[i] === -1) {
      c_faces[i] = -1;
      c_suits[i] = -1;
    } else {
      c_faces[i] = card_faces[cardArray[i]];
      c_suits[i] = card_suits[cardArray[i]];
    }
  }

  console.log(id + " cardArray = " + cardArray);
  console.log(id + " c_faces before sort = " + c_faces);

  c_faces = c_faces.sort(function(a, b) {
    return b - a;
  });
  c_suits = c_suits.sort(function(a, b) {
    return b - a;
  });

  if (c_faces.includes(-1)) {
    return { rank: 0, value: 0 };
  }

  console.log(id + " c_faces = " + c_faces);
  console.log(id + " c_suits = " + c_suits);

  const counts = c_faces.reduce(count, {});
  const duplicates = Object.values(counts).reduce(count, {});
  const flush = c_suits[0] === c_suits[hand_max_cards - 1];
  const first = c_faces[0];
  const straight = c_faces.every((f, index) => first - f === index);

  console.log(id + " c_faces = " + c_faces);
  console.log(id + " c_suits = " + c_suits);
  console.log(id + " counts = " + JSON.stringify(counts));
  console.log(id + " duplicates = " + JSON.stringify(duplicates));
  console.log(id + " flush = " + flush);
  console.log(id + " first = " + first);
  console.log(id + " straight = " + straight);

  let rank =
    (flush && straight && 9) ||
    (duplicates[4] && 8) ||
    (duplicates[3] && duplicates[2] && 7) ||
    (flush && 6) ||
    (straight && 5) ||
    (duplicates[3] && 4) ||
    (duplicates[2] > 1 && 3) ||
    (duplicates[2] && 2) ||
    1;

  return { rank: rank, value: c_faces[hand_max_cards - 1] };

  function byCountFirst(a, b) {
    //Counts are in reverse order - bigger is better
    const countDiff = counts[b] - counts[a];
    if (countDiff) return countDiff; // If counts don't match return
    return b > a ? -1 : b === a ? 0 : 1;
  }

  function count(c, a) {
    c[a] = (c[a] || 0) + 1;
    return c;
  }
}


function resultString() {
  let myFinal = rankHand(hand, "my");
  let opFinal = rankHand(op_hand, "op");
  console.log("myFinal rank " + myFinal.rank + "(" + myFinal.value + ") and " +
              "opFinal rank " + opFinal.rank + "(" + opFinal.value + ")");
  
  if (myFinal.rank > opFinal.rank) {
    return (
      "You win! " +
      rankName(myFinal.rank, myFinal.value) +
      " beats " +
      rankName(opFinal.rank, opFinal.value) +
      "."
    );
  } else if (opFinal.rank > myFinal.rank) {
    return (
      "You lose. " +
      rankName(opFinal.rank, opFinal.value) +
      " beats " +
      rankName(myFinal.rank, myFinal.value) +
      "."
    );
  } else {
    return ("Draw... " + rankName(myFinal.rank, myFinal.value) + ".");
  }
}

// create card grid

function makeCardGrid(whichGrid, id, x_cols, y_rows) {
  whichGrid.style.setProperty("--grid-rows", y_rows);
  whichGrid.style.setProperty("--grid-cols", x_cols);

  let cardsToPlace = cards.length;
  let totalCells = y_rows * x_cols - 2;
  let cellsDone = 0;

  console.log("cardsToPlace = " + cardsToPlace);

  let num = -1;
  for (let y = 0; y < y_rows; y++) {
    for (let x = 0; x < x_cols; x++) {
      let cell = document.createElement("div");
      cellsDone++;
      switch (id) {
        case "board":
          // upper left and lower right are not populated
          // because that's where player and opponent start
          // if (((x > 0) || (y > 0)) && ((x < board_max_x - 1) || (y < board_max_y - 1))) {
          if (
            (x === 0 && y === 0) ||
            (x === board_max_x - 1 && y === board_max_y - 1)
          ) {
            num = -1;
          } else {
            //            if (x > 0 || y > 0 || (x < board_max_x - 1) || (y < board_max_y - 1)) {
            // this makes sure all cards are on the board,
            // but throws in a blank periodically
            if (
              totalCells - cellsDone < cardsToPlace - 1 ||
              Math.floor(Math.random() * 9) < 6
            ) {
              if (cardsToPlace > 0) {
                num = cards[cardsToPlace - 1];
                cardsToPlace--;
              } else {
                num = -1;
              }
            } else {
              num = -1;
            }
            console.log("num to place on board = " + num);
          }
          whichGrid.appendChild(cell).className =
            "card-grid-item card-grid-item-board-" + x + "-" + y;
          console.log(num + " at (" + x + "," + y + ")");
          boardSetCard(x, y, num);
          boardShadeCell(id, x, y, boardBackground);
          break;
        case "hand":
          whichGrid.appendChild(cell).className =
            "card-grid-item card-grid-item-hand-" + x + "-" + y;
          console.log("hand grid num = " + num);
          handSetCard(x, num);
          boardShadeCell(id, x, 0, myBackground);
          break;
        case "op_hand":
          whichGrid.appendChild(cell).className =
            "card-grid-item card-grid-item-op_hand-" + x + "-" + y;
          console.log("ophand grid num = " + num);
          opHandSetCard(x, num);
          boardShadeCell(id, x, 0, opBackground);
          break;
      }
    }
  }
}

function replotCardGrid(whichGrid, id, x_cols, y_rows) {
  // whichGrid.style.setProperty("--grid-rows", y_rows);
  // whichGrid.style.setProperty("--grid-cols", x_cols);

  for (let y = 0; y < y_rows; y++) {
    for (let x = 0; x < x_cols; x++) {
      let cell = document.createElement("div");
      switch (id) {
        case "board":
          boardSetCard(x, y, boardCard(x, y));
          break;
        case "hand":
          handSetCard(x, handCard(x));
          break;
        case "op_hand":
          opHandSetCard(x, opHandCard(x));
          break;
      }
    }
  }
}

function bestHand(inHand, cardToTry, direction) {
  console.log("bestHand add card " + cardToTry + "?");
  // if no card to try or hand has fewer than max cards don't rank
  if (cardToTry === -1 || inHand.includes(-1)) {
    return {rank: -1, slot: -1, dir: direction};
  }
  let currentRank = rankHand(inHand, "cr").rank;
  let tryHandResults = [];
  let highestRank = currentRank;
  let highestSlot = -1;
  for (let i = 0; i < hand_max_cards; i++) {
    let tryHand = [...inHand];
    tryHand[i] = cardToTry;
    // TODO have AI consider high card, not just rank
    let tryRank = rankHand(tryHand, "try" + i).rank;
    if (tryRank > highestRank) {
      highestSlot = i;
      highestRank = tryRank;
    }
  }
  return { rank: highestRank, slot: highestSlot, dir: direction };
}

function opMove() {
  boardSetCard(opCard.x, opCard.y, -1);
  boardShadeCell("board", opCard.x, opCard.y, boardBackground);

  let currentCard = boardCard(opCard.x, opCard.y);
  
  let replaceCardSlot = opHandOpenCard();
  
  let cardLeft = boardCard(opCard.x - 1, opCard.y);
  let cardRight = boardCard(opCard.x + 1, opCard.y);
  let cardUp = boardCard(opCard.x, opCard.y - 1);
  let cardDown = boardCard(opCard.x, opCard.y + 1);

  let handLeft = bestHand(op_hand, cardLeft, "left");
  let handRight = bestHand(op_hand, cardRight, "right");
  let handUp = bestHand(op_hand, cardUp, "up");
  let handDown = bestHand(op_hand, cardDown, "down");
  let handResults = [handLeft, handRight, handUp, handDown];
  let bestMove = handResults.sort(function(a, b) {return b.rank - a.rank;});
  
  console.log("replaceCardSlot = " + replaceCardSlot);
  console.log("bestMove = " + JSON.stringify(bestMove));
  
  // console.log("cardUp = " + cardUp + " cardDown = " + cardDown + " cardLeft = " + cardLeft + " cardRight = " + cardRight);

  let moveRandom = true;
  let moveDirection;
  
  // if no adjacent card then move random direction
  
  if (bestMove[0].rank > 0) {
    console.log("there is a best move");
    moveRandom = false;
    replaceCardSlot = bestMove[0].slot;
    moveDirection = bestMove[0].dir;
    switch (moveDirection) {
      case "left":
        opCard.x--;
        break;
      case "right":
        opCard.x++;
        break;
      case "up":
        opCard.y--;
        break;
      case "down":
        opCard.y++;
        break;
    }
  }
  
  if (moveRandom) {
    // move randomly, but favor moving to card if one is adjacent

    let noAdjCards = (cardLeft + cardRight + cardUp + cardDown === -4);
    let opMoved = false;
    while (opMoved === false) {
      let opMoveDir = Math.floor(Math.random() * 4);
      switch (opMoveDir) {
        case 0:
          if (opCard.y > 0 && (cardUp > -1 || noAdjCards)) {
            opCard.y--;
            opMoved = true;
          }
          break;
        case 1:
          if (opCard.x > 0 && (cardLeft > -1 || noAdjCards)) {
            opCard.x--;
            opMoved = true;
          }
          break;
        case 2:
          if (opCard.y < board_max_y - 1 && (cardDown > -1 || noAdjCards)) {
            opCard.y++;
            opMoved = true;
          }
          break;
        case 3:
          if (opCard.x < board_max_x - 1 && (cardRight > -1 || noAdjCards)) {
            opCard.x++;
            opMoved = true;
          }
          break;
      }
    }
  }

  currentCard = boardCard(opCard.x, opCard.y);
  console.log("B myCard = (" + opCard.x + "," + opCard.y + ")" + ", card = " + currentCard + " " + cardName(currentCard));

  // if trying to pick up opponent (my) card then check for victory
  if (currentCard === handCard(0)) {
    setCardMode("Day (m)");
    alert(resultString());
    location.reload();
  }

  console.log("op card resolve: currentCard = " + currentCard + ", replaceCardSlot = " + replaceCardSlot);

  if (currentCard > -1) {
    if (opHandCard(replaceCardSlot) > -1) {
      // if (Math.floor(Math.random() * 9) < 5) {
      //   console.log("DISCARD " + cardName(opHandCard(replaceCardSlot)) + " KEEP " + cardName(currentCard));
      setPile(opHandCard(replaceCardSlot));
      opHandSetCard(replaceCardSlot, currentCard);
    } else if (replaceCardSlot > -1) {
      opHandSetCard(replaceCardSlot, currentCard);
      setPile(currentCard);
    } else {
      setPile(currentCard);
    }
  }
  boardSetCard(opCard.x, opCard.y, opHandCard(0));
  boardShadeCell("board", opCard.x, opCard.y, opBackground);
  setOpHandRank();
}

function handleKey(e) {
  let curX = myCard.x;
  let curY = myCard.y;
  let moveKey = false;
  let curKey = e.keyCode;
  switch (curKey) {
    case keys.kt:
      if (tray > -1) {
        setPile(tray);
        setTray(-1);
      }
      prevKey = -1;
      break;
    case keys.km:
      if (cardMode === "Night (m)") {
        setCardMode("Twilight (m)");
      } else if (cardMode === "Twilight (m)") {
        setCardMode("Day (m)");
      } else if (cardMode === "Day (m)") {
        setCardMode("Night (m)");
      }
      break;
    case keys.k1:
    case keys.k2:
    case keys.k3:
    case keys.k4:
    case keys.k5:
      let handCardSlot = curKey - keys.k1;
      if (tray > -1) {
        let currentHandCard = handCard(handCardSlot);
        console.log("handCardSlot = " + handCardSlot + ", tray = " + cardName(tray) + ", currentHandCard = " + cardName(currentHandCard));
        if (currentHandCard > -1) {
          setPile(currentHandCard);
        }
        handSetCard(handCardSlot, tray);
        setTray(-1);
      } else if (prevKey != -1) {
        let prevCardSlot = prevKey - keys.k1;
        let curCard = handCard(handCardSlot);
        let prevCard = handCard(prevCardSlot);
        console.log("swap " + prevCardSlot + " with " + handCardSlot);
        handSetCard(handCardSlot, prevCard);
        handSetCard(prevCardSlot, curCard);
        prevKey = -1;
      } else {
        prevKey = curKey;
      }
      break;
    case keys.left:
      if (myCard.x > 0) {
        myCard.x--;
      }
      moveKey = true;
      prevKey = -1;
      break;
    case keys.up:
      if (myCard.y > 0) {
        myCard.y--;
      }
      moveKey = true;
      prevKey = -1;
      break;
    case keys.right:
      if (myCard.x < board_max_x - 1) {
        myCard.x++;
      }
      moveKey = true;
      prevKey = -1;
      break;
    case keys.down:
      if (myCard.y < board_max_y - 1) {
        myCard.y++;
      }
      moveKey = true;
      prevKey = -1;
      break;
  }

  if (moveKey) {
    boardSetCard(curX, curY, -1);
    boardShadeCell("board", curX, curY, boardBackground);
    let currentCard = boardCard(myCard.x, myCard.y);
    if (currentCard > -1) {
      if (currentCard === opHandCard(0)) {
        setCardMode("Day (m)");
        alert(resultString());
        location.reload();
      } else {
        let handCardSlot = handOpenCard();
        console.log("handCardSlot = " + handCardSlot);
        if (handCardSlot === -1) {
          setTray(currentCard);
        } else {
          handSetCard(handCardSlot, currentCard);
        }
      }
    }
    boardSetCard(myCard.x, myCard.y, handCard(0));
    boardShadeCell("board", myCard.x, myCard.y, myBackground);
    setHandRank();
    opMove();
  } else {
    boardSetCard(myCard.x, myCard.y, handCard(0));
    setHandRank();
  }
  playCardSound();
}

pileCountItem = document.getElementById("pile_count");
handRankItem = document.getElementById("hand_rank");
opHandRankItem = document.getElementById("op_hand_rank");
cardModeItem = document.getElementById("card_mode");

makeCardGrid(handGrid, "hand", hand_max_cards + 2, 1);
makeCardGrid(opHandGrid, "op_hand", hand_max_cards, 1);
trayItem = document.querySelector(".card-grid-item-hand-5-0");
pileItem = document.querySelector(".card-grid-item-hand-6-0");
shuffleDeck();
setCardMode("Night (m)");
handSetCard(0, cards.pop());
opHandSetCard(0, cards.pop());

// for (let i = 0; i < hand_max_cards; i++) {
//   boardShadeCell("hand", i, 0, myBackground);
// }
// for (let i = 0; i < hand_max_cards; i++) {
//   boardShadeCell("op_hand", i, 0, opBackground);
// }
boardShadeCell("hand", hand_max_cards, 0, trayBackground);
boardShadeCell("hand", hand_max_cards + 1, 0, pileBackground);
boardInit();
makeCardGrid(boardGrid, "board", board_max_x, board_max_y);
boardSetCard(myCard.x, myCard.y, handCard(0));
boardShadeCell("board", myCard.x, myCard.y, myBackground);
boardSetCard(opCard.x, opCard.y, opHandCard(0));
boardShadeCell("board", opCard.x, opCard.y, opBackground);

console.log(
  "opHandCard(0) = " +
    opHandCard(0) +
    ", boardCard(" +
    opCard.x +
    "," +
    opCard.y +
    ") = " +
    boardCard(opCard.x, opCard.y)
);


// let firstGridItem = document.querySelector(".card-grid-item-board-" + 0 + "-" + 0);
// firstGridItem.appendChild(handCard(0));

console.log(
  "myCard = (" +
    myCard.x +
    "," +
    myCard.y +
    ")" +
    ", card = " +
    boardCard(myCard.x, myCard.y) +
    " " +
    cardName(boardCard(myCard.x, myCard.y))
);

console.log(
  "opCard = (" +
    opCard.x +
    "," +
    opCard.y +
    ")" +
    ", card = " +
    boardCard(opCard.x, opCard.y) +
    " " +
    cardName(boardCard(opCard.x, opCard.y))
);

window.addEventListener("keydown", handleKey);
