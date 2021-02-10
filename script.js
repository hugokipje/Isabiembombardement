var bg;
var mode;
let button;
let bestaatNogNietAl = true;
let button_lvl1;

function preload(){
    bg = loadImage("https://images3.persgroep.net/rcs/pDCTCuxNq3RMGE1bspT-zbQM2e8/diocontent/70425715/_crop/1/37/856/484/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8");
    plaatje1 = loadImage("https://images-na.ssl-images-amazon.com/images/I/71Hn4qqsY%2BL._AC_SL1000_.jpg")
}

function setup() {
  mode=0
  createCanvas(800,800);
}


function draw() {
  clear();

  if (mode==0) {
    background(plaatje1);
    text('Isa-biem-bombardement',400,300);
    fill('rgb(200,150,250)');
    text('Click to start',400,400);
    textAlign(CENTER);
    textSize(50);
    textFont("Times");
  }

  else if (mode==1) {
    
    background(51);
    if(bestaatNogNietAl){
      button_lvl1 = createButton('Level 1');
      button_lvl1.size(200,100);
      button_lvl1.position(200,400);
      button_lvl1.mousePressed(lvl1);
      bestaatNogNietAl = false;
    }
  }
  else if (mode==2){
    removeElements(button_lvl1);    
    background(bg);
  }
}

function mousePressed() {
  if (mode==0){
    mode=1;
  }
}

function lvl1(){
  mode=2;
}

function clearCanvas() {
    rect(0, 0, canvas.width, canvas.height);
    background(bgcolor);
}