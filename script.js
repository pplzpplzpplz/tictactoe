let numClicks = 0;

// put all cells into an array
const allCellDivs = document.querySelectorAll('.cell')

// button click listener, adds x or o
allCellDivs.forEach((cell) => {
    cell.addEventListener('click', buttonPress)
    
    function buttonPress(){
      numClicks += 1;

      if (numClicks % 2 === 0){
        cell.innerHTML = 'X';
      } else { 
        cell.innerHTML = 'O';
      }
    }
})

// refresh the page
document.querySelector('.gameRestart').addEventListener('click', restartPage)

  function restartPage(){
    document.location.reload()
  }

