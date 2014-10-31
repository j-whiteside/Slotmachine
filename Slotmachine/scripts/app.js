var canvas = document.getElementById("canvas");
var stage;
var game;
var slotMachineImage;
var resetButton;
var spinButton;
var spinButtonGrey;
var powerButton;
var bet1;
var bet5;
var bet10;
var bet50;
var bet100;
var bet500;
var bet1000;
var bet5000;
var betMax;

var betTextBox;
var jerpotTextBox;
var balanceTextBox;
var spinResultTextBox;

var reelCanvas;
var reel1;
var reel2;
var reel3;
var reel1Image;
var reel2Image;
var reel3Image;

var spinResult = [" ", " ", " "];
var outCome = [0, 0, 0];

var playerBalance = 5000;
var winnings = 0;
var winningsText = "";
var jerpot = 1000000;
var playerBet = 0;
var spinResult;
var fruits = "";
var grapes = 0;
var bananas = 0;
var oranges = 0;
var cherries = 0;
var bars = 0;
var bells = 0;
var sevens = 0;
var blanks = 0;

var startingBalance = 5000;
var totalWinnings = 0;
var totalLoss = 0;
var winNumber = 0;
var lossNumber = 0;
var jerpotWins = 0;
var turns = 0;
var finalStanding;
var winRatio = 0;

function init() {
    stage = new createjs.Stage(canvas);
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
    
    
    
    drawSlotMachine();
    
}

function handleTick() {

    stage.update();
}


function drawSlotMachine() {
    stage.removeAllChildren();
    game = new createjs.Container();
    reelCanvas = new createjs.Container();

    slotMachineImage = new createjs.Bitmap("images/slotmachine-background.png");
    slotMachineImage.scaleX = 1.5;
    slotMachineImage.scaleY = 1.7;
    slotMachineImage.y = -200;
    game.addChild(slotMachineImage);
    
    //Reset Button
    resetButton = new createjs.Bitmap("images/buttons/Reset.png");
    resetButton.x = 473;
    resetButton.y = 1074;
    resetButton.cursor = "pointer";
    game.addChild(resetButton);
    resetButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to reset the game?  \nYou will erase all your progress.")) {
            resetAll();
        }
    });

    //Pay-out Button
    payOutButton = new createjs.Bitmap("images/buttons/Pay-out-big.png");
    payOutButton.x = 440;
    payOutButton.y = 1110;
    payOutButton.cursor = "pointer";
    game.addChild(payOutButton);
    payOutButton.addEventListener("click", payOut);

    //Spin Button

    spinButton = new createjs.Bitmap("images/buttons/Spin.png");
    spinButton.x = 493;
    spinButton.y = 1023;
    spinButton.cursor = "pointer";
    spinButton.visible = false;
    game.addChild(spinButton);
    spinButton.addEventListener("click", spin);

    //Disabled Spin Button
    
    spinButtonGrey = new createjs.Bitmap("images/buttons/Spin-grey.png");
    spinButtonGrey.x = 493;
    spinButtonGrey.y = 1023;
    spinButtonGrey.cursor = "pointer";
    spinButtonGrey.visible = true;
    game.addChild(spinButtonGrey);
    

    //Creating textboxes
    betTextBox = new createjs.Text(playerBet.toString(), "30px Arial", "red");
    betTextBox.x = 340;
    betTextBox.y = 930;
    game.addChild(betTextBox);

    balanceTextBox = new createjs.Text(playerBalance.toString(), "30px Arial", "red");
    balanceTextBox.x = 340;
    balanceTextBox.y = 860;
    game.addChild(balanceTextBox);

    jerpotTextBox = new createjs.Text(jerpot.toString(), "30px Arial", "red");
    jerpotTextBox.x = 310;
    jerpotTextBox.y = 254;
    game.addChild(jerpotTextBox);

    spinResultTextBox = new createjs.Text(winningsText, "30px Arial", "red");
    spinResultTextBox.x = 235;
    spinResultTextBox.y = 790;
    game.addChild(spinResultTextBox);


    //The bet amount buttons

    //Bet1
    bet1 = new createjs.Bitmap("images/buttons/bet1.png");
    bet1.x = 178;
    bet1.y = 1025;
    bet1.cursor = "pointer";
    game.addChild(bet1);
    bet1.addEventListener("click", function () {
        playerBet = 1;
        betTextBox.text = "1";
        validateBet();
    });

        //Bet5
        bet5 = new createjs.Bitmap("images/buttons/bet5.png");
        bet5.x = 183;
        bet5.y = 1060;
        bet5.cursor = "pointer";
        game.addChild(bet5);
        bet5.addEventListener("click", function () {
            playerBet = 5;
            betTextBox.text = "5";
            validateBet();
        });
    
            //Bet10
            bet10 = new createjs.Bitmap("images/buttons/bet10.png");
            bet10.x = 188;
            bet10.y = 1095;
            bet10.cursor = "pointer";
            game.addChild(bet10);
            bet10.addEventListener("click", function () {
                playerBet = 10;
                betTextBox.text = "10";
                validateBet();
            });

    //Bet50
    bet50 = new createjs.Bitmap("images/buttons/bet50.png");
    bet50.x = 220;
    bet50.y = 1025;
    bet50.cursor = "pointer";
    game.addChild(bet50);
    bet50.addEventListener("click", function () {
        playerBet = 50;
        betTextBox.text = "50";
        validateBet();
    });

        //Bet100
        bet100 = new createjs.Bitmap("images/buttons/bet100.png");
        bet100.x = 225;
        bet100.y = 1060;
        bet100.cursor = "pointer";
        game.addChild(bet100);
        bet100.addEventListener("click", function () {
            playerBet = 100;
            betTextBox.text = "100";
            validateBet();
        });

            //Bet500
            bet500 = new createjs.Bitmap("images/buttons/bet500.png");
            bet500.x = 241;
            bet500.y = 1095;
            bet500.cursor = "pointer";
            game.addChild(bet500);
            bet500.addEventListener("click", function () {
                playerBet = 500;
                betTextBox.text = "500";
                validateBet();
            });

    //Bet1000
    bet1000 = new createjs.Bitmap("images/buttons/bet1000.png");
    bet1000.x = 273;
    bet1000.y = 1025;
    bet1000.cursor = "pointer";
    game.addChild(bet1000);
    bet1000.addEventListener("click", function () {
        playerBet = 1000;
        betTextBox.text = "1000";
        validateBet();
    });

        //Bet5000
        bet5000 = new createjs.Bitmap("images/buttons/bet5000.png");
        bet5000.x = 289;
        bet5000.y = 1060;
        bet5000.cursor = "pointer";
        game.addChild(bet5000);
        bet5000.addEventListener("click", function () {
            playerBet = 5000;
            betTextBox.text = "5000";
            validateBet();
        });

            //BetMax
            betMax = new createjs.Bitmap("images/buttons/betMax.png");
            betMax.x = 303;
            betMax.y = 1095;
            betMax.cursor = "pointer";
            game.addChild(betMax);
            betMax.addEventListener("click", function () {
                playerBet = playerBalance;
                betTextBox.text = playerBalance;
                validateBet();
            });

    drawReels("spin", "spin", "spin");

    stage.addChild(game);
    

}

/* When the player clicks the spin button the game kicks off */
function spin() {

    if (playerBalance == 0) {
        if (confirm("You ran out of Money! \nDo you want to play again?")) {
            resetAll();
        }
        else {
            payOut();
        }

    }
    else {
        spinResult = Reels();
        reel1 = spinResult[0];
        reel2 = spinResult[1];
        reel3 = spinResult[2];
        drawReels(reel1, reel2, reel3);

        determineWinnings();
        turns++;
        validateBet();
    }
    

};


/* When this function is called it determines the spinResult results.
e.g. Bar - Orange - Banana */
function Reels() {


    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                spinResult[spin] = "blank";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                spinResult[spin] = "grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                spinResult[spin] = "bananas";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                spinResult[spin] = "oranges";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                spinResult[spin] = "cherries";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                spinResult[spin] = "bar";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                spinResult[spin] = "bell";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                spinResult[spin] = "seven";
                sevens++;
                break;
        }
    }
    //alert(spinResult[0] + " " + spinResult[1] + " " + spinResult[2]);
    return spinResult;
}

function drawReels(reel1, reel2, reel3) {


    reelCanvas.removeAllChildren();


    reel1Image = new createjs.Bitmap("images/" + reel1 + ".png");
    reel1Image.scaleX = 0.5;
    reel1Image.scaleY = 0.7;
    reel1Image.x = 170;
    reel1Image.y = 430;
    reelCanvas.addChild(reel1Image);

    reel2Image = new createjs.Bitmap("images/" + reel2 + ".png");
    reel2Image.scaleX = 0.5;
    reel2Image.scaleY = 0.7;
    reel2Image.x = 325;
    reel2Image.y = 430;
    reelCanvas.addChild(reel2Image);

    reel3Image = new createjs.Bitmap("images/" + reel3 + ".png");
    reel3Image.scaleX = 0.5;
    reel3Image.scaleY = 0.7;
    reel3Image.x = 480;
    reel3Image.y = 430;
    reelCanvas.addChild(reel3Image);

    game.addChild(reelCanvas);


}



/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (blanks == 0) {
        if (grapes == 3) {
            winnings = playerBet * 10;
        }
        else if (bananas == 3) {
            winnings = playerBet * 20;
        }
        else if (oranges == 3) {
            winnings = playerBet * 30;
        }
        else if (cherries == 3) {
            winnings = playerBet * 40;
        }
        else if (bars == 3) {
            winnings = playerBet * 50;
        }
        else if (bells == 3) {
            winnings = playerBet * 75;
        }
        else if (sevens == 3) {
            winnings = playerBet * 100;
        }
        else if (grapes == 2) {
            winnings = playerBet * 2;
        }
        else if (bananas == 2) {
            winnings = playerBet * 2;
        }
        else if (oranges == 2) {
            winnings = playerBet * 3;
        }
        else if (cherries == 2) {
            winnings = playerBet * 4;
        }
        else if (bars == 2) {
            winnings = playerBet * 5;
        }
        else if (bells == 2) {
            winnings = playerBet * 10;
        }
        else if (sevens == 2) {
            winnings = playerBet * 20;
        }
        else if (sevens == 1) {
            winnings = playerBet * 5;
        }
        else {
            winnings = playerBet * 1;
        }
        winNumber++;
        showWinMessage();
    }
    else {
        lossNumber++;
        showLossMessage();
    }

}


/* Utility function to show a win message and increase player money */
function showWinMessage() {
    totalWinnings += winnings;
    balanceTextBox.text = playerBalance += winnings;
    spinResultTextBox.text = "You Won: $" + winnings;
    jerpot += Math.round((0.5 * playerBet) + (0.25 * winnings));
    resetReels();
    checkjerpot();
}

/* Utility function to show a loss message and reduce player money */
function showLossMessage() {
    totalLoss += playerBet;
    balanceTextBox.text = playerBalance -= playerBet;
    spinResultTextBox.text = "You Lost!";
    jerpot += Math.round(0.5 * playerBet);
    jerpotTextBox.text = jerpot;
    resetReels();
}


/* Utility function to reset all fruit tallies */
function resetReels() {
    grapes = 0;
    bananas = 0;
    oranges = 0;
    cherries = 0;
    bars = 0;
    bells = 0;
    sevens = 0;
    blanks = 0;


}

/* Utility function to reset the player stats */
function resetAll() {
    resetReels();
    playerBalance = startingBalance;
    winnings = 0;
    jerpot = 1000000;
    playerBet = 0;
    totalWinnings = 0;
    totalLoss = 0;
    winNumber = 0;
    lossNumber = 0;
    jerpotWins = 0;
    turns = 0;
    winRatio = 0;

    drawSlotMachine();
}


/* Check to see if the player won the jerpot */
function checkjerpot() {
    /* compare two random values */
    var jerpotTry = Math.floor(Math.random() * 51 + 1);
    var jerpotWin = Math.floor(Math.random() * 51 + 1);
    if (jerpotTry == jerpotWin) {
        jerpotWins++;
        alert("You Won the $" + jerpot + " jerpot!!");
        playerBalance += jerpot;
        totalWinnings += jerpot;
        balanceTextBox.text = playerBalance;
        jerpot = 500000;
        spinResultTextBox.text = "You won the JERPOT!";
    }
    jerpotTextBox.text = jerpot;
}



/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

function payOut() {

    if ((playerBalance - startingBalance) > 1)
    {
        finalStanding = "+$" + (playerBalance - startingBalance);
    }
    else if ((playerBalance - startingBalance) == 0)
    {
        finalStanding = "Even";
    }
    else
    {
        finalStanding = "-$" + (startingBalance - playerBalance);
    }
    
    alert("Final balance: $" + playerBalance
            + "\nWins: " + winNumber
            + "\nLosses: " + lossNumber
            + "\nTotal winnings: $" + totalWinnings
            + "\nFinal standing: " + finalStanding
            + "\nTotal loss: $" + totalLoss
            + "\nJerpot wins: " + jerpotWins
            + "\n\nNumber of turns: " + turns);
    resetAll();
    
}

function validateBet() {

    
    if (playerBet > playerBalance)
    {
        spinButton.visible = false;
        spinButtonGrey.visible = true;
    }

    else if (playerBet <= playerBalance)
    {
        spinButton.visible = true;
        spinButtonGrey.visible = false;
    }

}

