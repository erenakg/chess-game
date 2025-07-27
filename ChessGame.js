// Ana oyun sınıfı
class ChessGame {
    constructor() {
        this.gameBoard = null;
        this.selectedSquare = null;
        this.selectedPiece = null;
        this.currentPlayer = 'white'; // 'white' veya 'black'
        this.pieceObjects = new Map(); // Piece object'lerini sakla
        this.init();
    }
    
    init() {
        // Sayfa yüklendiğinde çalışacak
        document.addEventListener('DOMContentLoaded', () => {
            this.startGame();
        });
    }
    
    startGame() {
        // Oyun tahtasını başlangıç pozisyonuyla oluştur
        this.gameBoard = new StartBoard();
        console.log("Satranç Oyunu Başladı!");
        console.log(this.gameBoard.displayBoard());
        this.gameBoard.displayToElement('game-board');
        
        // Kare tıklama olaylarını ekle
        this.addClickEvents();
        this.updateTurnDisplay();
    }
    
    addClickEvents() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('click', (e) => {
                // currentTarget kullan, target değil
                const row = parseInt(e.currentTarget.getAttribute('data-row'));
                const col = parseInt(e.currentTarget.getAttribute('data-col'));
                this.handleSquareClick(row, col);
            });
        });
    }
    
    handleSquareClick(row, col) {
        const piece = this.gameBoard.getPiece(row, col);
        
        // Eğer bir taş seçili değilse
        if (!this.selectedSquare) {
            // Boş kareye tıklandıysa hiçbir şey yapma
            if (piece === '.') return;
            
            // Yanlış renkteki taşa tıklandıysa hiçbir şey yapma
            const isWhitePiece = piece === piece.toUpperCase();
            if ((this.currentPlayer === 'white' && !isWhitePiece) || 
                (this.currentPlayer === 'black' && isWhitePiece)) {
                console.log("Sıranız değil!");
                return;
            }
            
            // Taşı seç
            this.selectSquare(row, col, piece);
        } else {
            // Bir taş zaten seçili, hamle yapmaya çalış
            this.attemptMove(row, col);
        }
    }
    
    selectSquare(row, col, piece) {
        this.selectedSquare = {row, col};
        this.selectedPiece = piece;
        
        // Seçili kareyi görsel olarak belirgin yap
        this.highlightSquare(row, col, true);
        
        console.log(`${piece} taşı seçildi: ${String.fromCharCode(97 + col)}${8 - row}`);
    }
    
    attemptMove(toRow, toCol) {
        const fromRow = this.selectedSquare.row;
        const fromCol = this.selectedSquare.col;
        const piece = this.selectedPiece;
        
        // Aynı kareye tıklandıysa seçimi kaldır
        if (fromRow === toRow && fromCol === toCol) {
            this.clearSelection();
            return;
        }
        
        // Hareket geçerli mi kontrol et
        const pieceObj = this.createPieceObject(piece, fromRow, fromCol);
        const isValidMove = pieceObj.isValidMove(fromRow, fromCol, toRow, toCol, this.gameBoard);
        
        if (isValidMove) {
            // Hamleyi yap
            this.makeMove(fromRow, fromCol, toRow, toCol);
        } else {
            console.log("Geçersiz hamle!");
            this.clearSelection();
        }
    }
    
    createPieceObject(piece, row, col) {
        const isWhite = piece === piece.toUpperCase();
        
        switch(piece.toLowerCase()) {
            case 'p': return new Pawn(isWhite, row, col);
            case 'r': return new Rook(isWhite, row, col);
            case 'n': return new Knight(isWhite, row, col);
            case 'b': return new Bishop(isWhite, row, col);
            case 'q': return new Queen(isWhite, row, col);
            case 'k': return new King(isWhite, row, col);
            default: return null;
        }
    }
    
    makeMove(fromRow, fromCol, toRow, toCol) {
        const piece = this.gameBoard.getPiece(fromRow, fromCol);
        const targetPiece = this.gameBoard.getPiece(toRow, toCol);
        
        // Hareket bilgisini göster
        const from = String.fromCharCode(97 + fromCol) + (8 - fromRow);
        const to = String.fromCharCode(97 + toCol) + (8 - toRow);
        
        if (targetPiece !== '.') {
            console.log(`${piece} ${from}'den ${to}'ya hareket etti ve ${targetPiece}'yi yedi`);
        } else {
            console.log(`${piece} ${from}'den ${to}'ya hareket etti`);
        }
        
        // Piece object'i güncelle
        const pieceKey = `${fromRow}-${fromCol}`;
        let pieceObj = this.pieceObjects.get(pieceKey);
        
        if (!pieceObj) {
            pieceObj = this.createPieceObject(piece, fromRow, fromCol);
        }
        
        // Pozisyonu güncelle
        pieceObj.setPosition(toRow, toCol);
        
        // Pawn ve King için hasMoved'i güncelle
        if (pieceObj.markAsMoved) {
            pieceObj.markAsMoved();
        }
        
        // Map'i güncelle
        this.pieceObjects.delete(pieceKey);
        this.pieceObjects.set(`${toRow}-${toCol}`, pieceObj);
        
        // Tahtayı güncelle
        this.gameBoard.setPiece(fromRow, fromCol, '.');
        this.gameBoard.setPiece(toRow, toCol, piece);
        
        // Görsel tahtayı güncelle
        this.gameBoard.displayToElement('game-board');
        this.addClickEvents(); // Event listener'ları yeniden ekle
        
        // Sırayı değiştir
        this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
        this.updateTurnDisplay();
        
        // Seçimi temizle
        this.clearSelection();
        
        // Konsola güncel tahtayı yazdır
        console.log("\nGüncel Tahta:");
        console.log(this.gameBoard.displayBoard());
    }
    
    clearSelection() {
        if (this.selectedSquare) {
            this.highlightSquare(this.selectedSquare.row, this.selectedSquare.col, false);
        }
        this.selectedSquare = null;
        this.selectedPiece = null;
    }
    
    highlightSquare(row, col, highlight) {
        const squares = document.querySelectorAll('.square');
        const squareIndex = row * 8 + col;
        const square = squares[squareIndex];
        
        if (highlight) {
            square.classList.add('selected');
        } else {
            square.classList.remove('selected');
        }
    }
    
    updateTurnDisplay() {
        const title = document.querySelector('.title');
        const playerText = this.currentPlayer === 'white' ? 'Beyaz' : 'Siyah';
        title.textContent = `♟️ Satranç Oyunu - ${playerText} Oyuncunun Sırası ♟️`;
    }
}

// Oyunu başlat
const game = new ChessGame();