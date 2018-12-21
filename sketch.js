function setup(){
    createCanvas(600, 600);
     
}

function draw(){
    background("#ea4127");
    noStroke();
    fill("#ffffff");
    text("Attention, please.", 200, 300);
    fill("#ead026");
    ellipse(mouseX,mouseY,150,150);
    fill("#cc4ae0");
    var inverseX = width-mouseX;
    var inverseY = height-mouseY;
    rect(inverseX, 250, inverseY, 250 );   
  
}


