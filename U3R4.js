//1
class Puzzle{
    constructor(size){
        this.size = size;
        this.board = [];
        this.emptyPosition = { row: size - 1, col: size - 1 }; 
        this.moveCount = 0; 
        this.startTime = Date.now(); 
        this.initializeBoard(); 
        this.shuffleBoard(); 

    }

    initializeBoard() {
        let value = 1;
        for (let i = 0; i < this.size; i++) {
          this.board[i] = [];
          for (let j = 0; j < this.size; j++) {
            if (i === this.size - 1 && j === this.size - 1) {
              this.board[i][j] = null;  
            } else {
              this.board[i][j] = value++;
            }
          }
        }
      }

      move(direction, countMove = true) {
        const { row, col } = this.emptyPosition;
        let newRow = row, newCol = col;
    
        if (direction === "up" && row > 0) newRow--;
        else if (direction === "down" && row < this.size - 1) newRow++;
        else if (direction === "left" && col > 0) newCol--;
        else if (direction === "right" && col < this.size - 1) newCol++;
        else return false; 
    
        this.board[row][col] = this.board[newRow][newCol];
        this.board[newRow][newCol] = null;
        this.emptyPosition = { row: newRow, col: newCol };
    
        if (countMove) this.moveCount++; 
        return true;
      }

      draw() {
        console.clear();
        console.log("Movimientos:", this.moveCount);
        this.board.forEach(row => {
          console.log(row.map(cell => (cell === null ? " " : cell)).join(" | "));
        });
      }
    
      isSolved() {
        let expectedValue = 1;
        for (let i = 0; i < this.size; i++) {
          for (let j = 0; j < this.size; j++) {
            if (i === this.size - 1 && j === this.size - 1) return true;  // Posición del espacio vacío
            if (this.board[i][j] !== expectedValue++) return false;
          }
        }
        return true;
      }
    
      getTimeElapsed() {
        return Math.floor((Date.now() - this.startTime) / 1000);
      }
    
      showStatus() {
        this.draw();
        if (this.isSolved()) {
          console.log("¡Felicidades! Has resuelto el puzzle en", this.moveCount, "movimientos.");
          console.log("Tiempo transcurrido:", this.getTimeElapsed(), "segundos.");
        } else {
          console.log("El puzzle aún no está resuelto. Sigue intentando.");
        }
      }
    }
