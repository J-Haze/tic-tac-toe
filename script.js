let playerTurn = 1;

let gameBoard = (function() {
    let boardArray = ["","","",
                      "","","",
                      "","",""            
                    ];
    // return boardArray
    // let TL = document.getElementById("TL")
    // let TM = document.getElementById("TM")
    // let TR = document.getElementById("TR")
    // let ML = document.getElementById("ML")
    // let MM = document.getElementById("MM")
    // let MR = document.getElementById("MR")
    // let BL = document.getElementById("BL")
    // let BM = document.getElementById("BM")
    // let BR = document.getElementById("BR")

    // let squares = document.querySelectorAll('.square');

    //make the playSquare into a function?

    //check after the click to make sure it isn't a win or tie.
    //Winning cases: Top Row, Mid Row, Bot Row, Left Col, Mid Col, Right Col, T-B Diag, B-T Diag
    //Tie: if all squares are full, and there isn't a winner

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
        
        //logic that makes sure game is still playing?

        //check after the click to make sure it isn't a win or tie.
        //Winning cases: Top Row, Mid Row, Bot Row, Left Col, Mid Col, Right Col, T-B Diag, B-T Diag
        //Tie: if all squares are full, and there isn't a winner

        //Checks for a Winner or a Tie
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
                console.log("Player 1 Wins!")
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
                console.log("Player 2 Wins!")
                gameOver = true;
            }else if (tie == true){
                console.log("Tie!")
            };
        };   

        squares.forEach(square => square.addEventListener('click', () =>{
            //logic that makes sure game is still playing?
            // console.log("square.id:", square.id)
            squareID = square.id;
            squareText = square.innerHTML;
            if (playerTurn == 1 & squareText == ""){
                // console.log(playerTurn);
                square.innerHTML = "X"
                playerTurn = 2;
                // console.log(playerTurn);
            } else if (playerTurn == 2 & squareText == ""){
                // console.log(playerTurn);
                square.innerHTML = "O"
                playerTurn = 1;
                // console.log(playerTurn);
            };
            checkResult();
        }));

    };



    return {
        render: render
    }

})();

function getNames() {
    // playerOneName = prompt("Enter Player 1 Name:", "Player 1")
    // playerTwoName = prompt("Enter Player 2 Name:", "Player 2")
    playerOneName = "Player 1"
    playerTwoName = "Player 2"
    playerOneScore = 1;
    playerTwoScore = 3;
};

function displayDisplay(){
    let oneName = document.getElementById("playerOneName")
    let twoName = document.getElementById("playerTwoName")
    // let oneScore = document.getElementById("playerOneScore")
    // let twoScore = document.getElementById("playerTwoScore")

    oneName.innerHTML = playerOneName;
    twoName.innerHTML = playerTwoName;
    // oneScore.innerHTML = playerOneScore;
    // twoScore.innerHTML = playerTwoScore;

};

//playGame();
getNames();
displayDisplay();
gameBoard.render();