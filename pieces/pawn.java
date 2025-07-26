package pieces;

public class Pawn {
    private char symbol;
    private boolean isWhite;
    private int row, col;
    private boolean hasMoved; // İlk hamle için gerekli
    
    public Pawn(boolean isWhite, int row, int col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'P' : 'p';
        this.row = row;
        this.col = col;
        this.hasMoved = false;
    }
    
    public boolean isValidMove(int fromRow, int fromCol, int toRow, int toCol, Board board) {
        int rowDiff = toRow - fromRow;
        int colDiff = Math.abs(toCol - fromCol);
        
        // Beyaz piyonlar yukarı (-), siyah piyonlar aşağı (+) hareket eder
        int direction = isWhite ? -1 : 1;
        
        // Düz ileri hareket
        if (colDiff == 0) {
            // 1 kare ileri
            if (rowDiff == direction) {
                return board.getPiece(toRow, toCol) == '.';
            }
            // İlk hamlede 2 kare ileri
            if (!hasMoved && rowDiff == 2 * direction) {
                return board.getPiece(toRow, toCol) == '.' && 
                       board.getPiece(fromRow + direction, fromCol) == '.';
            }
        }
        
        // Çapraz yeme hamlesi
        if (colDiff == 1 && rowDiff == direction) {
            char targetPiece = board.getPiece(toRow, toCol);
            if (targetPiece != '.') {
                boolean targetIsWhite = Character.isUpperCase(targetPiece);
                return targetIsWhite != this.isWhite;
            }
        }
        
        return false;
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