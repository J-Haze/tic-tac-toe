let gameBoard = (function() {
    let boardArray = ["O","O","O",
                      "O","X","O",
                      "O","O","O"            
                    ];
    // return boardArray
    let TL = document.getElementById("T-L")
    let TM = document.getElementById("T-M")
    let TR = document.getElementById("T-R")
    let ML = document.getElementById("M-L")
    let MM = document.getElementById("M-M")
    let MR = document.getElementById("M-R")
    let BL = document.getElementById("B-L")
    let BM = document.getElementById("B-M")
    let BR = document.getElementById("B-R")

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
        

    };



    return {
        render: render
    }

})();

// console.log(gameBoard)

gameBoard.render();