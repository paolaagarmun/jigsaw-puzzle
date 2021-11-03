//the idea is to have 9 divs so we play in a 3x3
//based on the index we can calculate the position of the div itself
class Cell {
    //(instance of the picture puzzle, index)
    constructor(puzzle, ind) {
        
        this.index = ind;
        
        this.puzzle = puzzle;
        
        
        this.isSelected = false;
        this.blockWidth = this.puzzle.width / this.puzzle.dimmension;
        this.blockHeight = this.puzzle.height / this.puzzle.dimmension;

        this.cellElement = this.createDiv();
        //append the child divs to the parent div
        puzzle.el.appendChild(this.cellElement);

        
       // this.clicked = clicked;
    }


    createDiv() {
        //create divs
        const div = document.createElement('div');
        div.classList.add('square')

        //we need to calculate the left and top coordinates of each subdiv
        //this is to set the position of the child div
        const left = this.blockWidth * (this.index % this.puzzle.dimmension);
        const top = this.blockHeight * (Math.floor(this.index / this.puzzle.dimmension));

        //set background image
        div.style.backgroundImage= `url(${this.puzzle.imageSource})`;

        //set background size
        div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
        //set border to separate divs into the puzzle pieces
        div.style.border = '1px solid #FFF'
        //set position of divs to absolute because we always want the child elements in the same position
        div.style.position = 'absolute';

        // the width of the child div is the width of the parent div divided 
        //by the dimmension we use for the puzzle
        
        div.style.width = `${this.blockWidth}px`;
        // the height of the child div is the heigth of the parent div divided 
        //by the dimmension we use for the puzzle
      
        div.style.height = `${this.blockHeight}px`;


        div.style.backgroundPosition = `-${left}px -${top}px`;

        div.onclick = () => {
            //console.log("Click", this.index,  this.puzzle.findPosition(this.index));
            this.current = this.puzzle.findPosition(this.index);
           // div.style.border = 'red 3px solid';
            if (!this.puzzle.firstClick) {
                
                this.puzzle.firstClick = this;
                //this.puzzle.firstClickObj = this;
                this.isSelected = true;
                this.setBorderColor();
            } else {
                this.puzzle.secondClick = this;
                //this.puzzle.secondClickObj = this;
                // call swapCells Method from puzzle using firstClick.current and secondClick.current
                this.puzzle.swapCells(this.puzzle.firstClick.current, this.puzzle.secondClick.current);
                this.cellElement.classList.remove('selected');
                this.puzzle.firstClick.cellElement.classList.remove('selected');
                this.puzzle.firstClick = 0;
                this.puzzle.secondClick = 0;
                
            }
            
            
            //  console.log('first click',this.puzzle.firstClickObj )
            // console.log('second click', this.puzzle.secondClickObj)
        }

        return div;
    }

    setBorderColor() {
        
          if (document.querySelector('.square') ) {
             this.cellElement.classList.add('selected');
           }     
}
            
        
    
    

    setPosition(index) {

        const {left,top} = this.getPositionFromIndex(index);

        this.cellElement.style.left = `${left}px`
        this.cellElement.style.top = `${top}px`
    }

    getPositionFromIndex(index) {
        return {
            left: (this.blockWidth + 8) * (index % this.puzzle.dimmension),
            top: (this.blockHeight + 8) * (Math.floor(index / this.puzzle.dimmension))
        }
    }

}