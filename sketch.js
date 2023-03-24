function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  showActor();
  showCar();
  moveCars();
  moveActor();
  currentPosition();
  checkCollision();
  includePoints();
  scorePoints();
}