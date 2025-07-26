package pieces;

public class Queen {
    private char symbol;
    private boolean isWhite;
    private int row, col;
    
    public Queen(boolean isWhite, int row, int col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'Q' : 'q';
        this.row = row;
        this.col = col;
    }
    
    public boolean isValidMove(int fromRow, int fromCol, int toRow, int toCol, Board board) {
        // Vezir hem kale gibi (dikey/yatay) hem fil gibi (çapraz) hareket eder
        int rowDiff = Math.abs(toRow - fromRow);
        int colDiff = Math.abs(toCol - fromCol);
        
        // Dikey, yatay veya çapraz hareket kontrolü
        boolean isValidDirection = (fromRow == toRow) || (fromCol == toCol) || (rowDiff == colDiff);
        
        if (!isValidDirection) {
            return false;
        }
        
        // Yol temiz mi kontrol et
        return isPathClear(fromRow, fromCol, toRow, toCol, board);
    }
    
    private boolean isPathClear(int fromRow, int fromCol, int toRow, int toCol, Board board) {
        int rowDirection = 0;
        int colDirection = 0;
        
        if (toRow > fromRow) rowDirection = 1;
        else if (toRow < fromRow) rowDirection = -1;
        
        if (toCol > fromCol) colDirection = 1;
        else if (toCol < fromCol) colDirection = -1;
        
        int currentRow = fromRow + rowDirection;
        int currentCol = fromCol + colDirection;
        
        while (currentRow != toRow || currentCol != toCol) {
            if (board.getPiece(currentRow, currentCol) != '.') {
                return false; // Yolda taş var
            }
            currentRow += rowDirection;
            currentCol += colDirection;
        }
        
        // Hedef kareyi kontrol et
        char targetPiece = board.getPiece(toRow, toCol);
        if (targetPiece == '.') {
            return true; // Boş kare
        }
        
        // Rakip taşı mı?
        boolean targetIsWhite = Character.isUpperCase(targetPiece);
        return targetIsWhite != this.isWhite;
    }
    
    public char getSymbol() {
        return symbol;
    }
    
    public boolean isWhite() {
        return isWhite;
    }
    
    public int getRow() {
        return row;
    }
    
    public int getCol() {
        return col;
    }
    
    public void setPosition(int row, int col) {
        this.row = row;
        this.col = col;
    }
}