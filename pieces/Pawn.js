class Pawn {
    constructor(isWhite, row, col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'P' : 'p';
        this.row = row;
        this.col = col;
        this.hasMoved = false; // İlk hamle için gerekli
    }
    
    isValidMove(fromRow, fromCol, toRow, toCol, board) {
        const rowDiff = toRow - fromRow;
        const colDiff = Math.abs(toCol - fromCol);
        
        // Beyaz piyonlar yukarı (-), siyah piyonlar aşağı (+) hareket eder
        const direction = this.isWhite ? -1 : 1;
        
        // Düz ileri hareket
        if (colDiff === 0) {
            // 1 kare ileri
            if (rowDiff === direction) {
                return board.getPiece(toRow, toCol) === '.';
            }
            // İlk hamlede 2 kare ileri
            if (!this.hasMoved && rowDiff === 2 * direction) {
                return board.getPiece(toRow, toCol) === '.' && 
                       board.getPiece(fromRow + direction, fromCol) === '.';
            }
        }
        
        // Çapraz yeme hamlesi
        if (colDiff === 1 && rowDiff === direction) {
            const targetPiece = board.getPiece(toRow, toCol);
            if (targetPiece !== '.') {
                const targetIsWhite = targetPiece === targetPiece.toUpperCase();
                return targetIsWhite !== this.isWhite;
            }
        }
        
        return false;
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
