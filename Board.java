public class Board {
    private char[][] board;
    private final int SIZE = 8;
    
    public Board() {
        board = new char[SIZE][SIZE];
        initializeBoard();
    }
    
    private void initializeBoard() {
        // Boş kareleri doldur
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                board[i][j] = '.';
            }
        }
        
        // Siyah taşları yerleştir (üst satırlar)
        board[0][0] = 'r'; board[0][7] = 'r'; // Kale
        board[0][1] = 'n'; board[0][6] = 'n'; // At
        board[0][2] = 'b'; board[0][5] = 'b'; // Fil
        board[0][3] = 'q'; // Vezir
        board[0][4] = 'k'; // Kral
        
        // Siyah piyonlar
        for (int j = 0; j < SIZE; j++) {
            board[1][j] = 'p';
        }
        
        // Beyaz taşları yerleştir (alt satırlar)
        board[7][0] = 'R'; board[7][7] = 'R'; // Kale
        board[7][1] = 'N'; board[7][6] = 'N'; // At
        board[7][2] = 'B'; board[7][5] = 'B'; // Fil
        board[7][3] = 'Q'; // Vezir
        board[7][4] = 'K'; // Kral
        
        // Beyaz piyonlar
        for (int j = 0; j < SIZE; j++) {
            board[6][j] = 'P';
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