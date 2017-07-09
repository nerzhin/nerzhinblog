/* to-dos */
/* 1. вынести стили клеток в отдельные переменные (модуль?), чтобы можно было менять в одном месте, а не в функциях */
/* 2. добавить другие клетки */
/* 3. добавить клетку финиш */
/* 4. шмотки/монстры */
/* 5. логика у монстров */
/* 6. резиновый лабиринт, мобайл ферст */
/* 7. аглифай + минимизация файлов ксс/джс */
/* 8. разбить на отдельные файлы, в главном всё объявить */
/* 9. переписать на реакт/вью */

const mainElem = document.querySelector('main');
var rowCounter = 1;
var colCounter = 0;

/*floor*/
function createFloor(parent) {
  
  if (colCounter === 10) {
    colCounter = 1;
    rowCounter++;
  } else {
    colCounter++;
  };

  let floorTile = document.createElement('div');
  floorTile.className = 'floor-tile';
  floorTile.dataset.row = rowCounter;
  floorTile.dataset.col = colCounter;
  parent.appendChild(floorTile);
};

/*wall*/
function createWall(parent) {
  
  if (colCounter === 10) {
    colCounter = 1;
    rowCounter++;
  } else {
    colCounter++;
  };

  let wallTile = document.createElement('div');
  wallTile.className = 'wall-tile';
  wallTile.dataset.row = rowCounter;
  wallTile.dataset.col = colCounter;
  parent.appendChild(wallTile);
};

/*creating maze*/
/* написать так, чтобы лабиринт можно было ввести одной строчкой, а он потом автоматически разбивается на массивы-строки */
const maze = [
  [0,0,0,1,1,0,0,1,1,0],
  [1,1,1,0,1,1,0,1,1,0],
  [0,1,0,1,0,0,1,1,1,0],
  [1,1,0,0,1,1,0,1,1,0],
  [0,1,0,1,0,1,0,1,1,0],
  [1,1,1,0,0,0,1,1,1,0],
  [0,0,0,1,1,0,1,1,1,0],
  [1,0,1,0,1,0,0,1,1,0],
  [0,1,1,1,1,0,0,1,1,0],
  [1,0,0,0,1,1,0,1,1,0]
];

/*constructing maze*/
maze.map(function(arr) {
  arr.map(function(id) {

    if (id === 0) {
      createFloor(mainElem);
    } else if (id === 1) {
      createWall(mainElem);
    } else {
      console.log('ERROR!!');
    };

  })
});

/* player */
const playerIcon = document.createElement('section');
playerIcon.className = 'player-icon';
playerIcon.style.width = '5px';
playerIcon.style.height = '5px';
playerIcon.style.borderRadius = '50%';
playerIcon.style.backgroundColor = 'yellow';

/*start position*/
const startPoint = document.querySelectorAll('div')[0];
startPoint.appendChild(playerIcon); 

/* creating list of Tiles */

let elemList = [];
document.querySelectorAll('div').forEach(function(item,i,arr) {
  elemList.push({
    id: item.className,
    coordinates: {
      row: Number(item.dataset.row),
      col: Number(item.dataset.col)
    },
    elem: item    
  });
})

/* event listeners */
/* повесить лисенеры на клавиатуру тоже */
  /*buttons*/
  const topBtn = document.querySelector('#topBtn');
  const downBtn = document.querySelector('#downBtn');
  const leftBtn = document.querySelector('#leftBtn');
  const rightBtn = document.querySelector('#rightBtn');

topBtn.addEventListener('click', goUp);
downBtn.addEventListener('click', goDown);
leftBtn.addEventListener('click', goLeft);
rightBtn.addEventListener('click', goRight);

/* moving functions */

function goUp() {
  let startPosRow = Number(document.querySelector('.player-icon').parentNode.dataset.row);
  let startPosCol = Number(document.querySelector('.player-icon').parentNode.dataset.col);
  let nextPosRow = Number(startPosRow - 1);
  let nextPosCol = Number(startPosCol);

  elemList.forEach(function(item,i,arr){
    if (item.coordinates.row == nextPosRow && item.coordinates.col == nextPosCol) {
      (item.id == 'floor-tile') ? item.elem.appendChild(playerIcon) : console.log('you cant go there!!');
    }
  });
};

function goDown() {
  let startPosRow = Number(document.querySelector('.player-icon').parentNode.dataset.row);
  let startPosCol = Number(document.querySelector('.player-icon').parentNode.dataset.col);
  let nextPosRow = Number(startPosRow + 1);
  let nextPosCol = Number(startPosCol);

  elemList.forEach(function(item,i,arr){
    if (item.coordinates.row == nextPosRow && item.coordinates.col == nextPosCol) {
      (item.id == 'floor-tile') ? item.elem.appendChild(playerIcon) : console.log('you cant go there!!');
    }
  });
};

function goLeft() {
  let startPosRow = Number(document.querySelector('.player-icon').parentNode.dataset.row);
  let startPosCol = Number(document.querySelector('.player-icon').parentNode.dataset.col);
  let nextPosRow = Number(startPosRow);
  let nextPosCol = Number(startPosCol - 1);

  elemList.forEach(function(item,i,arr){
    if (item.coordinates.row == nextPosRow && item.coordinates.col == nextPosCol) {
      (item.id == 'floor-tile') ? item.elem.appendChild(playerIcon) : console.log('you cant go there!!');
    }
  });
};

function goRight() {
  let startPosRow = Number(document.querySelector('.player-icon').parentNode.dataset.row);
  let startPosCol = Number(document.querySelector('.player-icon').parentNode.dataset.col);
  let nextPosRow = Number(startPosRow);
  let nextPosCol = Number(startPosCol + 1);

  elemList.forEach(function(item,i,arr){
    if (item.coordinates.row == nextPosRow && item.coordinates.col == nextPosCol) {
      (item.id == 'floor-tile') ? item.elem.appendChild(playerIcon) : console.log('you cant go there!!');
    }
  });
};