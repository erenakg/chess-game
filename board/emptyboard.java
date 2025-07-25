public class Board {
    private char[][] board;
    private final int SIZE = 8;
    
    public Board() {
        board = new char[SIZE][SIZE];
        initializeBoard();
    }
    
    private void initializeBoard() {
        // Tüm kareleri boş olarak doldur
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                board[i][j] = '.';
            }
        }
    }
    
    public void displayBoard() {
        System.out.println("  a b c d e f g h");
        for (int i = 0; i < SIZE; i++) {
            System.out.print((8 - i) + " ");
            for (int j = 0; j < SIZE; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println((8 - i));
        }
        System.out.println("  a b c d e f g h");
    }
    
    public char getPiece(int row, int col) {
        if (row >= 0 && row < SIZE && col >= 0 && col < SIZE) {
            return board[row][col];
        }
        return ' ';
    }
    
    public boolean setPiece(int row, int col, char piece) {
        if (row >= 0 && row < SIZE && col >= 0 && col < SIZE) {
            board[row][col] = piece;
            return true;
        }
        return false;
    }
}