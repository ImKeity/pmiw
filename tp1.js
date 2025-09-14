//Hola buenas noches profesor te adjunto el primer tp de pmiw
//Te dejo el video explicando el código : https://youtu.be/EmhOQ6WZGQI

let cuadro;
let verificacion_color = false;
let negro = 0;
let blanco = 255;

function preload(){
  cuadro = loadImage("data/cuadro.png");
} 

function setup() {
  createCanvas (800,400); 
  background(200);
  
}

function draw() {
  dibujarRect(23, 42,42, verificacion_color);
  strokeWeight(4);
  fill(189,0,0);
  rect(568,196,55,55);
  image(cuadro,0,0,400,400); 
}

function dibujarRect( cuadradosdefondo,  lineavertical, lineahorizontal,  verificaciondecolor) { 
  push();
  noStroke();
  let tof = 0;
  let rectx=0;
  let recty=0;
  translate(400,0);
  
  for (let i = 2; i < cuadradosdefondo; i ++){ 
    push();
    if (verificaciondecolor == false) { 
      if(espar(tof)) fill(blanco); else fill(negro); 
    }
      else { 
        if(espar(tof)) fill(negro); else fill(blanco); 
      }
    tof ++;
    let tam = map(i,2,cuadradosdefondo,400,50); 
    rectx = map(i,2,cuadradosdefondo,0,170);
    recty = map(i,2,cuadradosdefondo,0,200);
    rect(rectx,recty,tam,tam);
    pop();
  }
  pop();

  push();
  noStroke();
  translate(570,0);
  for (let i = 1; i < lineavertical; i ++){ 
    push();
    if (verificaciondecolor == false) {
      if(espar(tof)) fill(blanco); else fill(negro);
    }
      else {
        if(espar(tof)) fill(negro); else fill(blanco);
      }
    tof ++;
    let tam = map(i,1,42,50,50);
    rectx = map(i,1,42,0,0);
    recty = map(i,1,42,0,400);
    rect(rectx,recty,tam,tam);
    pop();
  }
  pop();
  
  push();
  noStroke();
  translate(400,200);
  for (let i = 1; i < lineahorizontal ; i ++){ 
    push();
    if (verificaciondecolor == false) {
      if(espar(tof)) fill(negro); else fill(blanco);
    }
      else {
        if(espar(tof)) fill(blanco); else fill(negro);
      }
    tof ++;
    let tam = map(i,1,42,50,50);
    rectx = map(i,1,42,0,400);
    recty = map(i,1,42,0,0);
    rect(rectx,recty,tam,tam);
    pop();
  }
  pop();
}
function espar(num) {
  if (num % 2 == 0) return true; else return false; 
}
function mouseClicked(){ 
  if (verificacion_color == true) 
  verificacion_color = false;
  else verificacion_color = true; 
}
function keyPressed(){
  if (key == 'r'){ 
  verificacion_color = false;
  negro = 0;
  blanco = 255;
  }
}
