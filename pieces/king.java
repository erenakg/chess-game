package pieces;

public class King {
    private char symbol;
    private boolean isWhite;
    private int row, col;
    private boolean hasMoved; // Rok için gerekli
    
    public King(boolean isWhite, int row, int col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'K' : 'k';
        this.row = row;
        this.col = col;
        this.hasMoved = false;
    }
    
    public boolean isValidMove(int fromRow, int fromCol, int toRow, int toCol, Board board) {
        int rowDiff = Math.abs(toRow - fromRow);
        int colDiff = Math.abs(toCol - fromCol);
        
        // Kral her yöne 1 kare hareket edebilir
        if (rowDiff > 1 || colDiff > 1) {
            return false;
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
        this.hasMoved = true;
    }
    
    public boolean hasMoved() {
        return hasMoved;
    }
}