class Knight {
    constructor(isWhite, row, col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'N' : 'n';
        this.row = row;
        this.col = col;
    }
    
    isValidMove(fromRow, fromCol, toRow, toCol, board) {
        const rowDiff = Math.abs(toRow - fromRow);
        const colDiff = Math.abs(toCol - fromCol);
        
        // At L şeklinde hareket eder: 2+1 veya 1+2
        if (!((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2))) {
            return false;
        }
        
        // Hedef kareyi kontrol et
        const targetPiece = board.getPiece(toRow, toCol);
        if (targetPiece === '.') {
            return true; // Boş kare
        }
        
        // Rakip taşı mı?
        const targetIsWhite = targetPiece === targetPiece.toUpperCase();
        return targetIsWhite !== this.isWhite;
    }
    
    getSymbol() {
        return this.symbol;
    }
    
    isWhitePiece() {
        return this.isWhite;
    }
    
    getRow() {
        return this.row;
    }
    
    getCol() {
        return this.col;
    }
    
    setPosition(row, col) {
        this.row = row;
        this.col = col;
    }
}
