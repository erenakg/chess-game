class StartBoard extends Board {
    constructor() {
        super(); // Board constructor'ını çağır
        this.setupPieces(); // Sonra taşları yerleştir
    }
    
    setupPieces() {
        // Siyah taşlar (üst satırlar - 0. ve 1. satır)
        this.setPiece(0, 0, 'r'); this.setPiece(0, 7, 'r'); // Kale
        this.setPiece(0, 1, 'n'); this.setPiece(0, 6, 'n'); // At
        this.setPiece(0, 2, 'b'); this.setPiece(0, 5, 'b'); // Fil
        this.setPiece(0, 3, 'q'); // Vezir
        this.setPiece(0, 4, 'k'); // Kral
        
        // Siyah piyonlar
        for (let j = 0; j < 8; j++) {
            this.setPiece(1, j, 'p');
        }
        
        // Beyaz taşlar (alt satırlar - 6. ve 7. satır)
        this.setPiece(7, 0, 'R'); this.setPiece(7, 7, 'R'); // Kale
        this.setPiece(7, 1, 'N'); this.setPiece(7, 6, 'N'); // At
        this.setPiece(7, 2, 'B'); this.setPiece(7, 5, 'B'); // Fil
        this.setPiece(7, 3, 'Q'); // Vezir
        this.setPiece(7, 4, 'K'); // Kral
        
        // Beyaz piyonlar
        for (let j = 0; j < 8; j++) {
            this.setPiece(6, j, 'P');
        }
    }
}
