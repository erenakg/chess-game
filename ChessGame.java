import board.*;

public class ChessGame {
    public static void main(String[] args) {
        // Boş tahta ile başla
        Board emptyBoard = new Board();
        System.out.println("Boş Tahta:");
        emptyBoard.displayBoard();
        
        System.out.println("\n" + "=".repeat(30) + "\n");
        
        // Taşlarla dolu tahta
        StartBoard gameBoard = new StartBoard();
        System.out.println("Başlangıç Tahtası:");
        gameBoard.displayBoard();
    }
}