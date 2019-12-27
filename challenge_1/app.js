    let currentTurn = 'O';
    let ticTacTouBoard = [[1,2,3],[4,5,6],[7,8,9]];
    let done = false;
    let playingCount = 0;

    let playerX = {
        elemetRef : document.getElementById('playerX'),
        playerName: prompt('First Player') || 'Player X',
        count:0
    }
    let playerO = {
        elemetRef : document.getElementById('playerO'),
        playerName: prompt('Second Player') || 'Player O',
        count:0
    }

    playerX.elemetRef.textContent = playerX.playerName + ' : '+ playerX.count;
    playerO.elemetRef.textContent = playerO.playerName + ' : '+ playerO.count;
    
    
    function switchTurn(turn) {
        if (currentTurn === 'X') {
            currentTurn = 'O'
        }else{
            currentTurn = 'X';
        }
    }
    
     function printElement(elemet) {
        if(!done){
         let eleTurn = elemet.textContent;
            if( eleTurn !== 'X' && eleTurn !=='O' ){
                playingCount++;
                console.log(playingCount)
              switchTurn(currentTurn);
              elemet.textContent = currentTurn;
              ticTacTouBoard[elemet.id[0]][elemet.id[1]] = currentTurn;
               if(checkAll(elemet)){
                if (currentTurn === 'O') {
                    alert( `${playerO.playerName} Wonn!!` )
                    playerO.count++;
                }else{
                    alert( `${playerX.playerName} Wonn!!` )
                     playerX.count++;
                }
                  done = true;
                  playerX.elemetRef.textContent = playerX.playerName + ' : '+ playerX.count;
                  playerO.elemetRef.textContent = playerO.playerName + ' : '+ playerO.count;                  
                }
            }
        }
        
        if (playingCount >= 9 && !done) {
            alert('its a Draw \n Press Reset')
        }
    }
    
    //for testing
    document.getElementById('h').addEventListener('click',()=>{
        console.log(ticTacTouBoard);
    } )
    //for testing
    
    
    
    
    
    //CHECKING FUCNTIONS
    function checkRow(selectedElment) {
        row =  parseInt(selectedElment.id[0]);
        return ( ticTacTouBoard[row][0] === ticTacTouBoard[row][1] && ticTacTouBoard[row][1] === ticTacTouBoard[row][2]);
    }
    
    function checkColumn(selectedElment) {
        column =  parseInt(selectedElment.id[1]);
        return ( ticTacTouBoard[0][column] === ticTacTouBoard[1][column] && ticTacTouBoard[1][column] === ticTacTouBoard[2][column]);
    }
    
    function checkMajerDiagonally() {
        return ( ticTacTouBoard[0][0] === ticTacTouBoard[1][1] && ticTacTouBoard[1][1] === ticTacTouBoard[2][2]); 
    }
    
    function checkMinerDiagonally() {
        return ( ticTacTouBoard[0][2] === ticTacTouBoard[1][1] && ticTacTouBoard[1][1] === ticTacTouBoard[2][0]);
    }
    
    function checkAll(selectedElment) {
        return ( checkRow(selectedElment) || checkColumn(selectedElment) || checkMajerDiagonally() || checkMinerDiagonally());
    }

    function resetGame() {

        if(done || playingCount >= 9){

            if(playerX.count > playerO.count)
             currentTurn = 'O';
             else
             currentTurn = 'X';


             ticTacTouBoard = [[1,2,3],[4,5,6],[7,8,9]];
             done = false;
             playingCount=0;
             document.getElementById('00').textContent = 1;
             document.getElementById('01').textContent = 2;
             document.getElementById('02').textContent = 3;
             document.getElementById('10').textContent = 4;
             document.getElementById('11').textContent = 5;
             document.getElementById('12').textContent = 6;
             document.getElementById('20').textContent = 7;
             document.getElementById('21').textContent = 8;
             document.getElementById('22').textContent = 9;
        }

    }




