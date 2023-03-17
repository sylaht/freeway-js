let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
//carro
let xCarro = 600;

function preload() {
  imagemDaEstrada = loadImage("/src/assets/images/estrada.png");
  imagemDoAtor = loadImage("/src/assets/images/ator-1.png")
  imagemCarro = loadImage("/src/assets/images/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
}

function mostraAtor(){
  image(imagemDoAtor, 100, 366, 30, 30)
}

function mostraCarro() {
  image(imagemCarro, xCarro, 40, 50, 40)
}

function movimentaCarro(){
  xCarro = xCarro - 2;
}