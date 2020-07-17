let playerTurn = 1;

let gameBoard = (function() {
    let boardArray = ["","","",
                      "","","",
                      "","",""            
                    ];
    // return boardArray
    let TL = document.getElementById("TL")
    let TM = document.getElementById("TM")
    let TR = document.getElementById("TR")
    let ML = document.getElementById("ML")
    let MM = document.getElementById("MM")
    let MR = document.getElementById("MR")
    let BL = document.getElementById("BL")
    let BM = document.getElementById("BM")
    let BR = document.getElementById("BR")

    let squares = document.querySelectorAll('.square');

    // function playSquare(squareID, squareText){
    //     // If play 1 and square is empty => X
    //     // If player 2 and square is empty => O
    //     if (playerTurn == 1 & squareText == ""){
    //         square.innerHTML = "X"
    //     };
    //     if (playerTurn == 2 & squareText == ""){
    //         square.innerHTML = "O"
    //     };

    // };

    let render = function() {
        TL.innerHTML = boardArray[0];
        TM.innerHTML = boardArray[1];
        TR.innerHTML = boardArray[2];
        ML.innerHTML = boardArray[3];
        MM.innerHTML = boardArray[4];
        MR.innerHTML = boardArray[5];
        BL.innerHTML = boardArray[6];
        BM.innerHTML = boardArray[7];
        BR.innerHTML = boardArray[8];
        
        //logic that makes sure game is still playing?

        squares.forEach(square => square.addEventListener('click', () =>{
            //logic that makes sure game is still playing?
            console.log("square.id:", square.id)
            squareID = square.id;
            squareText = square.innerHTML;
            // playSquare(squareID, squareText)
            if (playerTurn == 1 & squareText == ""){
                console.log(playerTurn);
                square.innerHTML = "X"
                playerTurn = 2;
                console.log(playerTurn);
            } else if (playerTurn == 2 & squareText == ""){
                console.log(playerTurn);
                square.innerHTML = "O"
                playerTurn = 1;
                console.log(playerTurn);
            };
        }));

    };



    return {
        render: render
    }

})();

// console.log(gameBoard)

gameBoard.render();