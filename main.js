// const picturePuzzle = new PicturePuzzle {
//     document.querySelector('#puzzle-wrapper', 
//     './images/Danaidae_Monarch_John_Jackman-M.jpeg', 600);

// }

const optionButtonsElement = document.getElementById('difficulty-level')
let imgDimmension = 0;

function selectPuzzleDimmension(val) {
    imgDimmension = val;
    //console.log(imgDimmension);
    document.querySelector('.diff-level').style.border = '3px solid #654321';
    return imgDimmension
}




document.querySelector('.puzzle-mat').style.visibility = 'hidden'

document.querySelector('.puzzle-completed').style.visibility = 'hidden'

document.querySelector('.start-game-btn').addEventListener('click', () => {
  document.querySelector('.start-game-btn').remove();
  document.querySelector('.puzzle-mat').style.visibility = 'visible'
  const picturePuzzle = new PicturePuzzle(
      document.querySelector('#puzzle-wrapper'),
      './images/Danaidae_Monarch_John_Jackman-M.jpeg', imgDimmension);
})

 

        
    
    
