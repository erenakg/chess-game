class King {
    constructor(isWhite, row, col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'K' : 'k';
        this.row = row;
        this.col = col;
        this.hasMoved = false; // Rok için gerekli
    }
    
    isValidMove(fromRow, fromCol, toRow, toCol, board) {
        const rowDiff = Math.abs(toRow - fromRow);
        const colDiff = Math.abs(toCol - fromCol);
        
        // Kral her yöne 1 kare hareket edebilir
        if (rowDiff > 1 || colDiff > 1) {
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
        this.hasMoved = true;
    }
    
    hasMovedBefore() {
        return this.hasMoved;
    }
}
