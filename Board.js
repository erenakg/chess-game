class Board {
    constructor() {
        this.board = [];
        this.SIZE = 8;
        this.pieceImages = {
            // Beyaz taşlar (Wikipedia Chess pieces)
            'K': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
            'Q': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
            'R': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
            'B': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
            'N': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
            'P': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
            // Siyah taşlar
            'k': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
            'q': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
            'r': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
            'b': 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
            'n': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
            'p': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
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
                row += (piece === '.' ? '.' : piece) + " ";
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
                
                // Taş varsa resim ekle
                const piece = this.board[row][col];
                if (piece !== '.') {
                    const img = document.createElement('img');
                    img.src = this.pieceImages[piece];
                    img.alt = piece;
                    // Resim boyutlarını kare boyutuna göre ayarla
                    img.style.width = '55px';  // 65px karenin %85'i
                    img.style.height = '55px'; // 65px karenin %85'i
                    img.style.pointerEvents = 'none'; // Resme tıklamayı engelle
                    square.appendChild(img);
                }
                
                // Koordinat bilgisi ekle (debugging için)
                square.setAttribute('data-row', row);
                square.setAttribute('data-col', col);
                square.setAttribute('data-coord', 
                    String.fromCharCode(97 + col) + (8 - row));
                
                // Hover efekti için title ekle
                if (piece !== '.') {
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
