public class StartBoard extends Board {
    
    public StartBoard() {
        super(); // Board constructor'ını çağır (boş tahta oluştur)
        setupPieces(); // Sonra taşları yerleştir
    }
    
    private void setupPieces() {
        // Siyah taşlar (üst satırlar - 0. ve 1. satır)
        setPiece(0, 0, 'r'); setPiece(0, 7, 'r'); // Kale
        setPiece(0, 1, 'n'); setPiece(0, 6, 'n'); // At
        setPiece(0, 2, 'b'); setPiece(0, 5, 'b'); // Fil
        setPiece(0, 3, 'q'); // Vezir
        setPiece(0, 4, 'k'); // Kral
        
        // Siyah piyonlar
        for (int j = 0; j < 8; j++) {
            setPiece(1, j, 'p');
        }
        
        // Beyaz taşlar (alt satırlar - 6. ve 7. satır)
        setPiece(7, 0, 'R'); setPiece(7, 7, 'R'); // Kale
        setPiece(7, 1, 'N'); setPiece(7, 6, 'N'); // At
        setPiece(7, 2, 'B'); setPiece(7, 5, 'B'); // Fil
        setPiece(7, 3, 'Q'); // Vezir
        setPiece(7, 4, 'K'); // Kral
        
        // Beyaz piyonlar
        for (int j = 0; j < 8; j++) {
            setPiece(6, j, 'P');
        }
    }
}