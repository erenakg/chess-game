class Board {
    constructor() {
        this.board = [];
        this.SIZE = 8;
        this.initializeBoard();
    }
    
    initializeBoard() {
        // Tüm kareleri boş olarak doldur
        for (let i = 0; i < this.SIZE; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.SIZE; j++) {
                this.board[i][j] = '.';
            }
        }
    }
    
    displayBoard() {
        let boardStr = "  a b c d e f g h\n";
        for (let i = 0; i < this.SIZE; i++) {
            let row = (8 - i) + " ";
            for (let j = 0; j < this.SIZE; j++) {
                row += this.board[i][j] + " ";
            }
            row += (8 - i);
            boardStr += row + "\n";
        }
        boardStr += "  a b c d e f g h";
        return boardStr;
    }
    
    displayToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = this.displayBoard();
        }
    }
    
    getPiece(row, col) {
        if (row >= 0 && row < this.SIZE && col >= 0 && col < this.SIZE) {
            return this.board[row][col];
        }
        return ' ';
    }
    
    setPiece(row, col, piece) {
        if (row >= 0 && row < this.SIZE && col >= 0 && col < this.SIZE) {
            this.board[row][col] = piece;
            return true;
        }
        return false;
    }
}
