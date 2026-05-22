// Bingo Player App
class BingoPlayer {
    constructor() {
        this.items = [
            { name: "Soil", image: "Outputs/field/0_Soil.jpg" },
            { name: "Rats", image: "Outputs/field/1_Rats.jpg" },
            { name: "Bees", image: "Outputs/field/1_Bees.jpg" },
            { name: "Oak tree", image: "Outputs/field/2_Oak_tree.jpg" },
            { name: "Hazel", image: "Outputs/field/3_Hazel.jpg" },
            { name: "Blackthorn", image: "Outputs/field/4_Blackthorn.jpg" },
            { name: "Apple trees", image: "Outputs/field/5_Apple_trees.jpg" },
            { name: "Cocksfoot grass", image: "Outputs/field/6_Cocksfoot_grass.jpg" },
            { name: "Yorkshire fog grass", image: "Outputs/field/7_Yorkshire_fog_grass.jpg" },
            { name: "Oxeye daisy", image: "Outputs/field/8_Oxeye_daisy.jpg" },
            { name: "Ragged Robin", image: "Outputs/field/9_Ragged_Robin.jpg" },
            { name: "Knapweed", image: "Outputs/field/10_Knapweed.jpg" },
            { name: "Birdsfoot trfoil", image: "Outputs/field/11_Birdsfoot_trfoil.jpg" },
            { name: "Mycelium (fungi)", image: "Outputs/field/5_Mycelium_(fungi).jpg" },
            { name: "Yarrow", image: "Outputs/field/6_Yarrow.jpg" },
            { name: "Lettuce", image: "Outputs/field/7_Lettuce.jpg" },
            { name: "Runner beans", image: "Outputs/field/15_Runner_beans.jpg" },
            { name: "Tomatos", image: "Outputs/field/16_Tomatos.jpg" },
            { name: "Chard", image: "Outputs/field/17_Chard.jpg" },
            { name: "Chickens", image: "Outputs/field/18_Chickens.jpg" },
            { name: "Bradley Brook", image: "Outputs/field/19_Bradley_Brook_(water_course).jpg" },
            { name: "Buzzard", image: "Outputs/field/20_Buzzard.jpg" },
            { name: "Jay", image: "Outputs/field/21_Jay.jpg" },
            { name: "Green woodpecker", image: "Outputs/field/22_Green_woodpecker.jpg" },
            { name: "Pipistrelle bat", image: "Outputs/field/23_Pippestrelle_bat.jpg" },
            { name: "Daubenton bat", image: "Outputs/field/24_Daubenton_bat.jpg" },
            { name: "Cinnabar moth", image: "Outputs/field/25_Cinnabar_moth.jpg" },
            { name: "Peacock butterfly", image: "Outputs/field/26_Peacock_butterfly.jpg" },
            { name: "Willow tree", image: "Outputs/field/27_Willow_tree.jpg" },
            { name: "Elm tree", image: "Outputs/field/28_Elm_tree.jpg" },
            { name: "Hawthorn tree", image: "Outputs/field/29_Hawthorn_tree.jpg" },
            { name: "Elder tree", image: "Outputs/field/30_Elder_tree.jpg" },
            { name: "Ash tree", image: "Outputs/field/31_Ash_tree.jpg" },
            { name: "Crab apple tree", image: "Outputs/field/32_Crab_apple_tree.jpg" },
            { name: "Earth worm", image: "Outputs/field/33_Earth_worm.jpg" },
            { name: "Barn owl", image: "Outputs/field/34_Barn_owl.jpg" },
            { name: "Field mice", image: "Outputs/field/35_Field_mice.jpg" },
            { name: "European eel", image: "Outputs/field/36_European_eel.jpg" },
            { name: "Brimstone butterfly", image: "Outputs/field/37_Brimstone_butterfly.jpg" },
            { name: "Dog (Labrador)", image: "Outputs/field/38_Dog_(Labrador).jpg" },
            { name: "Humans", image: "Outputs/field/39_Humans.jpg" },
            { name: "Wasp", image: "Outputs/field/40_Wasp.jpg" },
            { name: "Stinging nettles", image: "Outputs/field/41_Stinging_nettles.jpg" },
            { name: "Painted lady butterfly", image: "Outputs/field/42_Painted_lady_butterfly.jpg" },
            { name: "Loganberries", image: "Outputs/field/43_Loganberries.jpg" },
            { name: "Blueberries", image: "Outputs/field/44_Blueberries.jpg" },
            { name: "Tayberries", image: "Outputs/field/45_Tayberries.jpg" },
            { name: "Raspberry", image: "Outputs/field/46_Raspberry.jpg" },
            { name: "Fig tree", image: "Outputs/field/47_Fig_tree.jpg" },
            { name: "Walnut", image: "Outputs/field/48_Walnut.jpg" },
            { name: "Chives", image: "Outputs/field/49_Chives.jpg" },
            { name: "Rosemary", image: "Outputs/field/50_Rosemary.jpg" },
            { name: "Curry plant", image: "Outputs/field/51_Curry_plant.jpg" },
            { name: "Rhubarb", image: "Outputs/field/52_Rhubarb.jpg" },
            { name: "Thyme", image: "Outputs/field/53_Thyme.jpg" },
            { name: "Primrose", image: "Outputs/field/54_Primrose.jpg" },
            { name: "Foxgloves", image: "Outputs/field/55_Foxgloves.jpg" },
            { name: "Sunflowers", image: "Outputs/field/56_Sunflowers.jpg" },
            { name: "Onions", image: "Outputs/field/57_Onions.jpg" },
            { name: "Daffodils", image: "Outputs/field/58_Daffodils.jpg" },
            { name: "Tulips", image: "Outputs/field/59_Tulips.jpg" },
            { name: "Roe deer", image: "Outputs/field/60_Roe_deer.jpg" },
            { name: "Muntjac", image: "Outputs/field/61_Muntjac.jpg" },
            { name: "Great tit", image: "Outputs/field/62_Great_tit.jpg" },
            { name: "Chiffchaff", image: "Outputs/field/63_Chiffchaff.jpg" },
            { name: "Robin", image: "Outputs/field/64_Robin.jpg" },
            { name: "Song thrush", image: "Outputs/field/65_Song_thrush.jpg" },
            { name: "Crow", image: "Outputs/field/67_Crow.jpg" },
            { name: "Wood pigeon", image: "Outputs/field/69_Wood_pigeon.jpg" },
            { name: "White throat", image: "Outputs/field/70_White_throat_(bird).jpg" },
            { name: "Heron", image: "Outputs/field/73_Heron.jpg" },
            { name: "Long-tailed tit", image: "Outputs/field/74_Long-tailed_tit.jpg" },
            { name: "Swallow", image: "Outputs/field/75_Swallow.jpg" }
        ];
        
        this.board = [];
        this.markedCells = new Set();
        this.init();
    }
    
    init() {
        this.generateBoard();
        this.renderBoard();
        this.attachEventListeners();
    }
    
    generateBoard() {
        // Shuffle items and take 25 for a 5x5 board
        const shuffled = [...this.items].sort(() => Math.random() - 0.5);
        this.board = shuffled.slice(0, 25);
        this.markedCells.clear();
    }
    
    renderBoard() {
        const boardElement = document.getElementById('bingoBoard');
        boardElement.innerHTML = '';
        
        this.board.forEach((item, index) => {
            const cell = document.createElement('div');
            cell.className = 'bingo-cell';
            cell.dataset.index = index;
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.className = 'cell-image';
            
            const name = document.createElement('div');
            name.className = 'cell-name';
            name.textContent = item.name;
            
            cell.appendChild(img);
            cell.appendChild(name);
            boardElement.appendChild(cell);
        });
        
        this.updateStats();
    }
    
    attachEventListeners() {
        const boardElement = document.getElementById('bingoBoard');
        boardElement.addEventListener('click', (e) => {
            const cell = e.target.closest('.bingo-cell');
            if (cell) {
                this.toggleCell(cell);
            }
        });
        
        document.getElementById('newBoardBtn').addEventListener('click', () => {
            this.generateBoard();
            this.renderBoard();
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.hideModal();
            this.generateBoard();
            this.renderBoard();
        });
    }
    
    toggleCell(cell) {
        const index = parseInt(cell.dataset.index);
        
        if (this.markedCells.has(index)) {
            this.markedCells.delete(index);
            cell.classList.remove('marked');
        } else {
            this.markedCells.add(index);
            cell.classList.add('marked');
            
            // Check for bingo after marking
            setTimeout(() => {
                if (this.checkBingo()) {
                    this.showBingo();
                }
            }, 300);
        }
        
        this.updateStats();
    }
    
    checkBingo() {
        const marked = Array.from(this.markedCells);
        
        // Check rows
        for (let row = 0; row < 5; row++) {
            const rowIndices = [row * 5, row * 5 + 1, row * 5 + 2, row * 5 + 3, row * 5 + 4];
            if (rowIndices.every(i => marked.includes(i))) {
                return true;
            }
        }
        
        // Check columns
        for (let col = 0; col < 5; col++) {
            const colIndices = [col, col + 5, col + 10, col + 15, col + 20];
            if (colIndices.every(i => marked.includes(i))) {
                return true;
            }
        }
        
        // Check diagonals
        const diagonal1 = [0, 6, 12, 18, 24];
        const diagonal2 = [4, 8, 12, 16, 20];
        
        if (diagonal1.every(i => marked.includes(i)) || diagonal2.every(i => marked.includes(i))) {
            return true;
        }
        
        return false;
    }
    
    showBingo() {
        const modal = document.getElementById('bingoModal');
        modal.classList.add('show');
    }
    
    hideModal() {
        const modal = document.getElementById('bingoModal');
        modal.classList.remove('show');
    }
    
    updateStats() {
        document.getElementById('markedCount').textContent = this.markedCells.size;
        document.getElementById('remainingCount').textContent = 25 - this.markedCells.size;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new BingoPlayer();
});
