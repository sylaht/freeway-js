//ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function showActor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeMover()){
      yAtor += 3;
    }
  }
}

function checkCollision(){
  const diameter = 15;
  const xHitbox = xAtor + diameter;
  const yHitbox = yAtor + diameter;

  // collideRectCircle(x1, y1 width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xHitbox, yHitbox, diameter)
    if (colisao){
      colidiu();
      somColisao.play();
      if(pontosMaiorZero()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function includePoints(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function scorePoints() {
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    colidiu();
  } 
}

function pontosMaiorZero(){
  return meusPontos > 0
}

function podeMover(){
  return yAtor < 366;
}
