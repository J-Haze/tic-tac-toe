let playerTurn = 1;

const delay = ms => new Promise(res => setTimeout(res, ms));

let modal = document.getElementById("modal");
let playButton = document.getElementById("playButton");
let mode = document.querySelector('input[name="playMode"]:checked').value;

let playerTwoForm = document.getElementById("playerTwoInput");

let playerRadio = document.getElementById("vsPlayer");
let computerRadio = document.getElementById("vsComputer");


computerRadio.addEventListener('click', () => {
    playerTwoForm.classList.add("computerMode");
});

playerRadio.addEventListener('click', () => {
    playerTwoForm.classList.remove("computerMode");
});

playButton.addEventListener('click', () => {
    let playerOneName = document.getElementById("playerOneInput").value;
    let playerTwoName = document.getElementById("playerTwoInput").value;
    mode = document.querySelector('input[name="playMode"]:checked').value;
    if (!playerOneName || !playerTwoName) return
    names = [playerOneName, playerTwoName];
    modal.style.display = "none";
    playGame(mode);
    });

function clearGame(){
    gameOver = false;
    let boardArray = ["","","",
                      "","","",
                      "","",""            
                    ];

    TL.innerHTML = boardArray[0]; //Top-Left Square
    TM.innerHTML = boardArray[1]; //Top-Middle Square
    TR.innerHTML = boardArray[2]; //Top-Right Square
    ML.innerHTML = boardArray[3]; //Middle-Left Square
    MM.innerHTML = boardArray[4]; //Middle-Middle Square
    MR.innerHTML = boardArray[5]; //Middle-Right Square
    BL.innerHTML = boardArray[6]; //Bottom-Left Square
    BM.innerHTML = boardArray[7]; //Bottom-Middle Square
    BR.innerHTML = boardArray[8]; //Bottom-Right Square 
}

function playGame(mode){
    mode = mode;
    let resetButton = document.getElementById("resetButton");
    resetButton.onclick = function() {
        clearGame();
        playGame();
        playerTurn = 1;
        turn.innerHTML = `It is ${playerOneName}'s Turn`
    };

    let playerButton = document.getElementById("playerButton");
    playerButton.onclick = function() {
        location.reload();
    };

    let gameBoard = (function() {
        let boardArray = ["","","",
                        "","","",
                        "","",""            
                        ];
        
        playerOneName = names[0];
        if (mode == "PvC"){
            playerTwoName = "Computer"
        } else{
            playerTwoName = names[1];
        }
        let turn = document.getElementById("turn");
        turn.innerHTML = `It is ${playerOneName}'s Turn`

        gameOver = false;

        let render = function() {
            let TL = document.getElementById("TL")
            let TM = document.getElementById("TM")
            let TR = document.getElementById("TR")
            let ML = document.getElementById("ML")
            let MM = document.getElementById("MM")
            let MR = document.getElementById("MR")
            let BL = document.getElementById("BL")
            let BM = document.getElementById("BM")
            let BR = document.getElementById("BR")

            let squares = document.querySelectorAll('.square'), i;

            TL.innerHTML = boardArray[0]; //Top-Left Square
            TM.innerHTML = boardArray[1]; //Top-Middle Square
            TR.innerHTML = boardArray[2]; //Top-Right Square
            ML.innerHTML = boardArray[3]; //Middle-Left Square
            MM.innerHTML = boardArray[4]; //Middle-Middle Square
            MR.innerHTML = boardArray[5]; //Middle-Right Square
            BL.innerHTML = boardArray[6]; //Bottom-Left Square
            BM.innerHTML = boardArray[7]; //Bottom-Middle Square
            BR.innerHTML = boardArray[8]; //Bottom-Right Square

            function checkResult(){
                tl = TL.innerHTML;
                tm = TM.innerHTML;
                tr = TR.innerHTML;
                ml = ML.innerHTML;
                mm = MM.innerHTML;
                mr = MR.innerHTML;
                bl = BL.innerHTML;
                bm = BM.innerHTML;
                br = BR.innerHTML;
                
                let tie = true;
                for (i=0; i < squares.length; i++){
                    if(squares[i].innerHTML == ""){
                        tie = false;
                    }
                };

                if ((tl == "X" && tm == "X" && tr == "X") || //Top Row Player 1
                (ml == "X" && mm == "X" && mr == "X") ||  //Middle Row Player 1
                (bl == "X" && bm == "X" && br == "X") || //Bottom Row Player 1
                (tl == "X" && ml == "X" && bl == "X") || //Left Column Player 1
                (tm == "X" && mm == "X" && bm == "X") || //Middle Column Player 1
                (tr == "X" && mr == "X" && br == "X") || //Right Column Player 1
                (tl == "X" && mm == "X" && br == "X") || //Top-Left to Bottom-Right Diagonal Player 1
                (bl == "X" && mm == "X" && tr == "X") //Bottom-Left to Top-Right Diagonal Player 1
                ){
                    turn.innerHTML = `${playerOneName} is the Winner!`
                    gameOver = true;
                } else if ((tl == "O" && tm == "O" && tr == "O") || //Top Row Player 2
                (ml == "O" && mm == "O" && mr == "O") ||  //Middle Row Player 2
                (bl == "O" && bm == "O" && br == "O") || //Bottom Row Player 2
                (tl == "O" && ml == "O" && bl == "O") || //Left Column Player 2
                (tm == "O" && mm == "O" && bm == "O") || //Middle Column Player 2
                (tr == "O" && mr == "O" && br == "O") || //Right Column Player 2
                (tl == "O" && mm == "O" && br == "O") || //Top-Left to Bottom-Right Diagonal Player 2
                (bl == "O" && mm == "O" && tr == "O") //Bottom-Left to Top-Right Diagonal Player 2
                ){
                    turn.innerHTML = `${playerTwoName} is the Winner!`
                    gameOver = true;
                }else if (tie == true){
                    turn.innerHTML = `The game is a tie!`
                    gameOver = true;
                };
            };   

            let aiMoving = false;
            squares.forEach(square => square.addEventListener('click', () =>{
                if (aiMoving == true) return
                if (gameOver == true) return
                squareID = square.id;
                squareText = square.innerHTML;
                if (playerTurn == 1 & squareText == ""){
                    square.innerHTML = "X";
                    console.log("check1")
                    turn.innerHTML = `It is ${playerTwoName}'s Turn`;
                    console.log("check2")
                    playerTurn = 2;
                    checkResult();

                    if (mode == "PvC" & gameOver == false){
                        aiMoving = true;
                        boardArray[0] =TL.innerHTML; //Top-Left Square
                        boardArray[1] = TM.innerHTML; //Top-Middle Square
                        boardArray[2] = TR.innerHTML; //Top-Right Square
                        boardArray[3] = ML.innerHTML; //Middle-Left Square
                        boardArray[4] = MM.innerHTML; //Middle-Middle Square
                        boardArray[5] = MR.innerHTML; //Middle-Right Square
                        boardArray[6] = BL.innerHTML; //Bottom-Left Square
                        boardArray[7] = BM.innerHTML; //Bottom-Middle Square
                        boardArray[8] = BR.innerHTML; //Bottom-Right Square
                        console.log(boardArray)
                        
                        empty = false;
                        while (empty == false){
                            rand = Math.floor((Math.random() * 8));
                            console.log("rand:", rand)
                            if (boardArray[rand] == ""){
                                const wait = Math.random() * 500 + 300;
                                setTimeout(function () {
                                    boardArray[rand] = "O";
                                    TL.innerHTML = boardArray[0]; //Top-Left Square
                                    TM.innerHTML = boardArray[1]; //Top-Middle Square
                                    TR.innerHTML = boardArray[2]; //Top-Right Square
                                    ML.innerHTML = boardArray[3]; //Middle-Left Square
                                    MM.innerHTML = boardArray[4]; //Middle-Middle Square
                                    MR.innerHTML = boardArray[5]; //Middle-Right Square
                                    BL.innerHTML = boardArray[6]; //Bottom-Left Square
                                    BM.innerHTML = boardArray[7]; //Bottom-Middle Square
                                    BR.innerHTML = boardArray[8]; //Bottom-Right Square
                                    aiMoving = false;
                                    checkResult();
                                    if (gameOver == false && mode == "PvC"){
                                        playerTurn = 1;
                                        turn.innerHTML = `It is ${playerOneName}'s Turn`
                                    }
                                }, wait);

                                console.log("BA2:", boardArray)
                                empty = true;
                            }

                    if (gameOver == false && mode == "PvP"){
                        playerTurn = 1;
                        turn.innerHTML = `It is ${playerOneName}'s Turn`
                    }
                    }
                    }

                } else if (playerTurn == 2 & squareText == "" && mode == "PvP"){
                    square.innerHTML = "O"
                    playerTurn = 1;
                    turn.innerHTML = `It is ${playerOneName}'s Turn`
                    checkResult();
                }; 

            }));
        };
        return {
            render: render
        }
    })();

    gameBoard.render();
}
