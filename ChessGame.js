// Ana oyun sınıfı
class ChessGame {
    constructor() {
        this.init();
    }
    
    init() {
        // Sayfa yüklendiğinde çalışacak
        document.addEventListener('DOMContentLoaded', () => {
            this.startGame();
        });
    }
    
    startGame() {
        // Boş tahta ile başla
        const emptyBoard = new Board();
        console.log("Boş Tahta:");
        console.log(emptyBoard.displayBoard());
        emptyBoard.displayToElement('empty-board');
        
        console.log("\n" + "=".repeat(30) + "\n");
        
        // Taşlarla dolu tahta
        const gameBoard = new StartBoard();
        console.log("Başlangıç Tahtası:");
        console.log(gameBoard.displayBoard());
        gameBoard.displayToElement('start-board');
        
        // Test: Bir piyonu hareket ettir
        this.testPieceMovement(gameBoard);
    }
    
    testPieceMovement(board) {
        console.log("\n--- Test: Piyonu hareket ettir ---");
        
        // Beyaz piyon (6,4) pozisyonundan (4,4) pozisyonuna hareket ettir
        const pawn = new Pawn(true, 6, 4);
        
        // Hareket geçerli mi test et
        const isValid = pawn.isValidMove(6, 4, 4, 4, board);
        console.log(`Piyon hareketi (e2-e4) geçerli mi: ${isValid}`);
        
        if (isValid) {
            board.setPiece(6, 4, '.'); // Eski pozisyonu temizle
            board.setPiece(4, 4, 'P'); // Yeni pozisyona yerleştir
            console.log("\nHareket sonrası tahta:");
            console.log(board.displayBoard());
        }
    }
}

// Oyunu başlat
const game = new ChessGame();
