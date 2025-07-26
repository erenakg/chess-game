class Board {
    constructor() {
        this.board = [];
        this.SIZE = 8;
        this.pieceSymbols = {
            // Beyaz taşlar
            'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
            // Siyah taşlar
            'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟',
            // Boş kare
            '.': ''
        };
        this.initializeBoard();
    }
    
    initializeBoard() {
        // Tüm kareleri boş olarak doldur
        for (let i = 0; i < this.SIZE; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.SIZE; j++) {
                this.board[i][j] = '.';
            }
        }
    }
    
    displayBoard() {
        let boardStr = "  a b c d e f g h\n";
        for (let i = 0; i < this.SIZE; i++) {
            let row = (8 - i) + " ";
            for (let j = 0; j < this.SIZE; j++) {
                const piece = this.board[i][j];
                const symbol = this.pieceSymbols[piece] || piece;
                row += symbol + " ";
            }
            row += (8 - i);
            boardStr += row + "\n";
        }
        boardStr += "  a b c d e f g h";
        return boardStr;
    }
    
    displayToElement(elementId) {
        const boardElement = document.getElementById(elementId);
        if (!boardElement) return;
        
        // Mevcut içeriği temizle
        boardElement.innerHTML = '';
        
        // 8x8 kare oluştur
        for (let row = 0; row < this.SIZE; row++) {
            for (let col = 0; col < this.SIZE; col++) {
                const square = document.createElement('div');
                square.className = 'square';
                
                // Kare rengini belirle (satranç tahtası deseni)
                const isWhiteSquare = (row + col) % 2 === 0;
                square.classList.add(isWhiteSquare ? 'white-square' : 'black-square');
                
                // Taş varsa ekle
                const piece = this.board[row][col];
                const symbol = this.pieceSymbols[piece] || '';
                square.textContent = symbol;
                
                // Koordinat bilgisi ekle (debugging için)
                square.setAttribute('data-row', row);
                square.setAttribute('data-col', col);
                square.setAttribute('data-coord', 
                    String.fromCharCode(97 + col) + (8 - row));
                
                // Hover efekti için title ekle
                if (symbol) {
                    const pieceName = this.getPieceName(piece);
                    const color = piece === piece.toLowerCase() ? 'Siyah' : 'Beyaz';
                    square.title = `${color} ${pieceName} (${square.getAttribute('data-coord')})`;
                }
                
                boardElement.appendChild(square);
            }
        }
    }
    
    getPieceName(piece) {
        const names = {
            'k': 'Kral', 'K': 'Kral',
            'q': 'Vezir', 'Q': 'Vezir',  
            'r': 'Kale', 'R': 'Kale',
            'b': 'Fil', 'B': 'Fil',
            'n': 'At', 'N': 'At',
            'p': 'Piyon', 'P': 'Piyon'
        };
        return names[piece] || '';
    }
    
    getPiece(row, col) {
        if (row >= 0 && row < this.SIZE && col >= 0 && col < this.SIZE) {
            return this.board[row][col];
        }
        return ' ';
    }
    
    setPiece(row, col, piece) {
        if (row >= 0 && row < this.SIZE && col >= 0 && col < this.SIZE) {
            this.board[row][col] = piece;
            return true;
        }
        return false;
    }
}
