var bg;

function preload(){
    bg = loadImage("https://images3.persgroep.net/rcs/pDCTCuxNq3RMGE1bspT-zbQM2e8/diocontent/70425715/_crop/1/37/856/484/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bg)
}