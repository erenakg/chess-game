class Rook {
    constructor(isWhite, row, col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'R' : 'r';
        this.row = row;
        this.col = col;
    }
    
    isValidMove(fromRow, fromCol, toRow, toCol, board) {
        // Kale dikey veya yatay hareket eder
        if (fromRow !== toRow && fromCol !== toCol) {
            return false;
        }
        
        // Yol temiz mi kontrol et
        return this.isPathClear(fromRow, fromCol, toRow, toCol, board);
    }
    
    isPathClear(fromRow, fromCol, toRow, toCol, board) {
        let rowDirection = 0;
        let colDirection = 0;
        
        if (toRow > fromRow) rowDirection = 1;
        else if (toRow < fromRow) rowDirection = -1;
        
        if (toCol > fromCol) colDirection = 1;
        else if (toCol < fromCol) colDirection = -1;
        
        let currentRow = fromRow + rowDirection;
        let currentCol = fromCol + colDirection;
        
        while (currentRow !== toRow || currentCol !== toCol) {
            if (board.getPiece(currentRow, currentCol) !== '.') {
                return false; // Yolda taş var
            }
            currentRow += rowDirection;
            currentCol += colDirection;
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
