public class Knight {
    private char symbol;
    private boolean isWhite;
    private int row, col;
    
    public Knight(boolean isWhite, int row, int col) {
        this.isWhite = isWhite;
        this.symbol = isWhite ? 'N' : 'n';
        this.row = row;
        this.col = col;
    }
    
    public boolean isValidMove(int fromRow, int fromCol, int toRow, int toCol, Board board) {
        int rowDiff = Math.abs(toRow - fromRow);
        int colDiff = Math.abs(toCol - fromCol);
        
        // At L şeklinde hareket eder: 2+1 veya 1+2
        if (!((rowDiff == 2 && colDiff == 1) || (rowDiff == 1 && colDiff == 2))) {
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
    }
}