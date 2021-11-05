// const picturePuzzle = new PicturePuzzle {
//     document.querySelector('#puzzle-wrapper', 
//     './images/Danaidae_Monarch_John_Jackman-M.jpeg', 600);

// }

//const optionButtonsElement = document.getElementById('difficulty-level')
let imgDimmension = 0;

function selectPuzzleDimmension(val) {
    imgDimmension = val;
    console.log("HERE", imgDimmension); 
    // switch or if
    switch (val) {
      case "3":
        document.getElementsByClassName('diff-level')[0].style.border = '3px solid #654321';
        document.getElementsByClassName('diff-level')[1].style.border = '2px solid lightgoldenrodyellow';
        document.getElementsByClassName('diff-level')[2].style.border = '2px solid lightgoldenrodyellow';
        break;
      case "5":
        document.getElementsByClassName('diff-level')[1].style.border = '3px solid #654321';
        document.getElementsByClassName('diff-level')[0].style.border = '2px solid lightgoldenrodyellow';
        document.getElementsByClassName('diff-level')[2].style.border = '2px solid lightgoldenrodyellow';
        break;
      case "10":
        document.getElementsByClassName('diff-level')[2].style.border = '3px solid #654321';
        document.getElementsByClassName('diff-level')[0].style.border = '2px solid lightgoldenrodyellow';
        document.getElementsByClassName('diff-level')[1].style.border = '2px solid lightgoldenrodyellow';
    }

    return imgDimmension
}

let imgPuzzle = "";
function selectPuzzleImg(val) {
  switch (val) {
    case "butterfly":
      document.getElementsByClassName('puzzle-img-val')[0].style.border = '3px solid #654321';
      document.getElementsByClassName('puzzle-img-val')[1].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[2].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[3].style.border = '2px solid lightgoldenrodyellow';
      imgPuzzle = "./images/Danaidae_Monarch_John_Jackman-M.jpeg"
      let imgButterfly = document.createElement('img');
      imgButterfly.src = './images/Danaidae_Monarch_John_Jackman-M.jpeg'
        document.getElementById('reference-img').appendChild(imgButterfly);
        imgButterfly.className = "imagebutterly";
      break;
    case "miami":
      document.getElementsByClassName('puzzle-img-val')[1].style.border = '3px solid #654321';
      document.getElementsByClassName('puzzle-img-val')[0].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[2].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[3].style.border = '2px solid lightgoldenrodyellow';
      imgPuzzle = "./images/miami-skyline.jpeg"
      let imgMiami = document.createElement('img');
        imgMiami.src = "./images/miami-skyline.jpeg"
        document.getElementById('reference-img').appendChild(imgMiami);
        imgMiami.className = "imagemiami";
      break;
    case "groovy":
      document.getElementsByClassName('puzzle-img-val')[2].style.border = '3px solid #654321';
      document.getElementsByClassName('puzzle-img-val')[0].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[1].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[3].style.border = '2px solid lightgoldenrodyellow';
      imgPuzzle = "./images/360_F_295930180_KQhEnaNiRfevy3YKK6fzDVWilHrkixwt.jpeg"
      let imgGroove = document.createElement('img');
        imgGroove.src = './images/360_F_295930180_KQhEnaNiRfevy3YKK6fzDVWilHrkixwt.jpeg'
        document.getElementById('reference-img').appendChild(imgGroove);
        imgGroove.className = "imagegroovy";
      break;
    case "dance":
      document.getElementsByClassName('puzzle-img-val')[3].style.border = '3px solid #654321';
      document.getElementsByClassName('puzzle-img-val')[0].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[1].style.border = '2px solid lightgoldenrodyellow';
      document.getElementsByClassName('puzzle-img-val')[2].style.border = '2px solid lightgoldenrodyellow';
      imgPuzzle = "./images/dance.gif"
      let imgDance = document.createElement('img');
        imgDance.src = './images/dance.gif';
        document.getElementById('reference-img').appendChild(imgDance);
        imgDance.className = "imagedance";
        break;
  }

  return imgPuzzle
}



document.querySelector('.num-of-clicks-div').style.visibility = 'hidden'

document.querySelector('.puzzle-mat').style.visibility = 'hidden'

document.querySelector('.puzzle-completed').style.visibility = 'hidden'

document.querySelector('#reference-img').style.visibility = 'hidden'


document.querySelector('.start-game-btn').addEventListener('click', () => {
  document.querySelector('.start-game-btn').remove();
  document.querySelector('.puzzle-mat').style.visibility = 'visible'
  document.querySelector('.start-container').remove();
  document.querySelector('.instructions').remove();
  document.querySelector('#reference-img').style.visibility = 'visible'
  const picturePuzzle = new PicturePuzzle(document.querySelector('#puzzle-wrapper'),imgPuzzle, imgDimmension);})

 

        
    
    
