const minWeight = 10
const maxWeight = 100
let currentWeight = minWeight
let deltaWeight = 2

let currentColor = 'red';

function setup() {
  createCanvas(600, 400);
  clean();

  buttonPlus = createButton('P');
  buttonPlus.position(10, 410);
  buttonPlus.mousePressed(() => {
    if (currentWeight >= maxWeight) {
      currentWeight = maxWeight;
      console.log('Max weight reached!');
    } else {
      currentWeight = currentWeight + deltaWeight;
    }
  })

  buttonMinus = createButton('M');
  buttonMinus.position(40, 410);
  buttonMinus.mousePressed(() => {
    if (currentWeight <= minWeight) {
      currentWeight = minWeight;
      console.log('Min weight reached!');
    } else {
      currentWeight = currentWeight - deltaWeight;
    }
  })

  buttonClear = createButton('Clear');
  buttonClear.position(80, 410);
  buttonClear.mousePressed(() => {
    clean();
  })

  buttonRed = createButton('R');
  buttonRed.position(140, 410);
  buttonRed.mousePressed(() => {
    currentColor = 'red';
  })

  buttonRed = createButton('G');
  buttonRed.position(170, 410);
  buttonRed.mousePressed(() => {
    currentColor = 'green';
  })

  buttonRed = createButton('B');
  buttonRed.position(200, 410);
  buttonRed.mousePressed(() => {
    currentColor = 'blue';
  })
}

function clean() {
  background(128, 128, 128);
}

function mouseDragged() {
  stroke(currentColor);
  strokeWeight(currentWeight);
  line(pmouseX, pmouseY, mouseX, mouseY);  
}
