class PicturePuzzle {
    constructor (el, imageSource, dimmension) {
        this.firstClick;
        this.secondClick;

        //parentElement => the whole image
        this.parentElement = el;
        //dimension of the puzzle (3x3)
        this.dimmension = dimmension;
        //imageSource => the source of the img
        this.imageSource = imageSource;
        //width => width of the entire image??? *****
        this.width = 700;
        this.cells = [];
        this.counter = 0;

        //once we have the measurements of the img create the canvas
        this.init();

        //get img width and heigth
        const img = new Image();
        img.onload = () => {
            console.log(img.width, img.height);
            /*
                * this.heigth       img.height
                *-------------  = -------------
                * this.width        img.width
            */
           this.height = this.width * img.height / img.width;
           this.el.style.width = `${this.width}px` ;
           this.el.style.height = `${this.height}px` ;
         
           this.setup();
        };
        img.src = this.imageSource;
    

        
    }

    init() {
        //single sub-divs
        this.el = this.createWrapper();
        //sub-divs are appended to the parent div
        this.parentElement.appendChild(this.el);
    
    }

    // swapCells
    swapCells(i,j) {
        
        this.cells[i].setPosition(j,i);
        this.cells[j].setPosition(i);
        [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
        
        this.counter ++;

        if (this.thePuzzleIsAssembled()) {
            console.log('puzzle assembled')
            console.log('num of clicks', this.counter)
            
            setTimeout(() => {
                this.youDidItView();
            }, 1000);
            
        } 
        //console.log(this.cells)
    }

    youDidItView() {
        let paragraph = document.getElementById("num-of-clicks");
        paragraph.textContent += `You completed the puzzle in ${this.counter} clicks`; 
        document.body.style.backgroundImage = "url('./images/Screen Shot 2021-11-03 at 8.46.51 PM.png')";
        document.querySelector('.puzzle-completed').style.visibility = 'visible'
        document.querySelector('.num-of-clicks-div').style.visibility = 'visible';
    }

    thePuzzleIsAssembled() {
        for(let i=0; i<this.cells.length; i++) {
            if(i !== this.cells[i].index) {
                return false
            }
        }
        return true
    }

    // showFinalImage() {
    //     let img = document.createElement('img');
    //     img.src = './images/26be0be164a62db8e7259a7211b9da48-you-did-it-lettering-quote.png'
    //     document.getElementById('body').appendChild(img);
    //     img.className = "image-congrats";
    // }
    

    //creates main div 
    createWrapper() {
        const div = document.createElement('div');

        div.style.position = 'relative';
        //this can be changed later
        div.style.margin = '0 auto';
        return div;
    }

    //create the sub-divs of the game
    setup() {
        
        //create cells
        //we need 9 indexes, that come from the dimension of the grid
        //********* I have a different condition */
        for (let i =0; i < this.dimmension * this.dimmension ; i++) {
            this.cells.push(new Cell(this,i))
        }
        
        this.shuffle();
       // console.log(this.cells)
    }

    shuffle() {
        let currentIndex = this.cells.length
        let randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [this.cells[currentIndex], this.cells[randomIndex]] = [this.cells[randomIndex], this.cells[currentIndex]];
            this.cells[currentIndex].setPosition(currentIndex);
            this.cells[randomIndex].setPosition(randomIndex);
        }
      }

      //we want to find the position of the index that was selected
      //this returns the # position that the current puzzle piece is 
    findPosition(ind) {
        return this.cells.findIndex(cell => cell.index === ind)
    }

    difficultyChoice () {
        let choices = document.getElementsByTagName('select');
        let choice = choices.value;
        if (choice.value === 1) {
            this.dimmension = 3
        } 
        if (choice.value === 2) {
            this.dimmension = 5
        }
        if (choice.value === 3) {
            this.dimmension = 8
        }
        console.log(choice);

    }
    
}



