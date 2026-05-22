// Nature Bingo Caller App
class BingoCaller {
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
            { name: "Bradley Brook (water course)", image: "Outputs/field/19_Bradley_Brook_(water_course).jpg" },
            { name: "Buzzard", image: "Outputs/field/20_Buzzard.jpg" },
            { name: "Jay", image: "Outputs/field/21_Jay.jpg" },
            { name: "Green woodpecker", image: "Outputs/field/22_Green_woodpecker.jpg" },
            { name: "Pippestrelle bat", image: "Outputs/field/23_Pippestrelle_bat.jpg" },
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
            { name: "Chiff chaff", image: "Outputs/field/66_Chiff_chaff.jpg" },
            { name: "Crow", image: "Outputs/field/67_Crow.jpg" },
            { name: "Wood pigeon", image: "Outputs/field/69_Wood_pigeon.jpg" },
            { name: "White throat (bird)", image: "Outputs/field/70_White_throat_(bird).jpg" },
            { name: "Heron", image: "Outputs/field/73_Heron.jpg" },
            { name: "Long-tailed tit", image: "Outputs/field/74_Long-tailed_tit.jpg" },
            { name: "Swallow", image: "Outputs/field/75_Swallow.jpg" }
        ];

        this.remainingItems = [...this.items];
        this.calledItems = [];
        this.currentItem = null;
        this.isCollapsed = false;

        this.init();
    }

    init() {
        // Get DOM elements
        this.elements = {
            callNextBtn: document.getElementById('callNextBtn'),
            resetBtn: document.getElementById('resetBtn'),
            currentItemContainer: document.getElementById('currentItemContainer'),
            currentItemCard: document.getElementById('currentItemCard'),
            itemNumber: document.getElementById('itemNumber'),
            itemImage: document.getElementById('itemImage'),
            itemName: document.getElementById('itemName'),
            calledCount: document.getElementById('calledCount'),
            remainingCount: document.getElementById('remainingCount'),
            calledItemsGrid: document.getElementById('calledItemsGrid'),
            toggleCalledBtn: document.getElementById('toggleCalledBtn'),
            toggleIcon: document.getElementById('toggleIcon')
        };

        // Attach event listeners
        this.elements.callNextBtn.addEventListener('click', () => this.callNextItem());
        this.elements.resetBtn.addEventListener('click', () => this.reset());
        this.elements.toggleCalledBtn.addEventListener('click', () => this.toggleCalledItems());

        // Initialize stats
        this.updateStats();

        // Add keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if (this.remainingItems.length > 0) {
                    this.callNextItem();
                }
            } else if (e.key === 'r' || e.key === 'R') {
                this.reset();
            }
        });
    }

    callNextItem() {
        if (this.remainingItems.length === 0) {
            this.showCompletionMessage();
            return;
        }

        // Get random item from remaining items
        const randomIndex = Math.floor(Math.random() * this.remainingItems.length);
        this.currentItem = this.remainingItems.splice(randomIndex, 1)[0];
        this.calledItems.push(this.currentItem);

        // Update display
        this.displayCurrentItem();
        this.updateStats();
        this.updateCalledItemsDisplay();

        // Disable button if no more items
        if (this.remainingItems.length === 0) {
            this.elements.callNextBtn.disabled = true;
        }
    }

    displayCurrentItem() {
        // Hide welcome message, show card
        this.elements.currentItemContainer.querySelector('.welcome-message').style.display = 'none';
        this.elements.currentItemCard.style.display = 'block';

        // Update card content
        this.elements.itemNumber.textContent = `#${this.calledItems.length}`;
        this.elements.itemImage.src = this.currentItem.image;
        this.elements.itemImage.alt = this.currentItem.name;
        this.elements.itemName.textContent = this.currentItem.name;

        // Trigger animation
        this.elements.currentItemCard.style.animation = 'none';
        setTimeout(() => {
            this.elements.currentItemCard.style.animation = 'slideIn 0.4s ease-out';
        }, 10);
    }

    updateStats() {
        this.elements.calledCount.textContent = this.calledItems.length;
        this.elements.remainingCount.textContent = this.remainingItems.length;
    }

    updateCalledItemsDisplay() {
        // Add the latest called item to the grid
        const itemElement = document.createElement('div');
        itemElement.className = 'called-item';
        itemElement.innerHTML = `
            <img src="${this.currentItem.image}" alt="${this.currentItem.name}">
            <div>${this.currentItem.name}</div>
        `;
        this.elements.calledItemsGrid.insertBefore(itemElement, this.elements.calledItemsGrid.firstChild);
    }

    toggleCalledItems() {
        this.isCollapsed = !this.isCollapsed;
        this.elements.calledItemsGrid.classList.toggle('collapsed', this.isCollapsed);
        this.elements.toggleIcon.textContent = this.isCollapsed ? '▶' : '▼';
    }

    showCompletionMessage() {
        this.elements.currentItemContainer.querySelector('.welcome-message').innerHTML = `
            <div class="icon">🎉</div>
            <h2>All Items Called!</h2>
            <p>You've called all ${this.items.length} nature items.</p>
            <p style="margin-top: 16px; color: var(--text-tertiary);">Press Reset to start over</p>
        `;
        this.elements.currentItemContainer.querySelector('.welcome-message').style.display = 'block';
        this.elements.currentItemCard.style.display = 'none';
    }

    reset() {
        if (this.calledItems.length === 0) {
            return;
        }

        if (confirm('Are you sure you want to reset? This will clear all called items.')) {
            // Reset state
            this.remainingItems = [...this.items];
            this.calledItems = [];
            this.currentItem = null;

            // Reset UI
            this.elements.currentItemContainer.querySelector('.welcome-message').innerHTML = `
                <div class="icon">🎲</div>
                <h2>Ready to Start!</h2>
                <p>Press "Call Next Item" to begin</p>
            `;
            this.elements.currentItemContainer.querySelector('.welcome-message').style.display = 'block';
            this.elements.currentItemCard.style.display = 'none';
            this.elements.calledItemsGrid.innerHTML = '';
            this.elements.callNextBtn.disabled = false;

            // Update stats
            this.updateStats();

            // Reset collapse state
            this.isCollapsed = false;
            this.elements.calledItemsGrid.classList.remove('collapsed');
            this.elements.toggleIcon.textContent = '▼';
        }
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BingoCaller();
});
