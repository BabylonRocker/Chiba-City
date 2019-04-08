var yellowRad = 71.406/2

var yellow1 = 406.203

function setup() {
  var canvas = createCanvas(windowWidth, 400);
// canvas.parent('header');
 // frameRate(30)
}


function draw() {
background(195, 38, 41);

  
  

fill(58, 21, 18);
circle(370.625, 194.749, 78.043/2);

noStroke()
fill(58, 21, 18);
circle(250.296, 194.749, 184.404/2);
  
  noStroke()  
fill(195, 217, 77)
circle(yellow1, 194.749, yellowRad);
  
fill(238, 38, 36);
circle(283.246, 194.749, 118.506/2);
  
  
fill(195, 39, 41);
circle(291.493, 194.749, 106.011/2);
  

  
textSize(30);
fill(155);
text("Jackson" ,40,200); //shadow
text("Williams",40,225); //shadow
fill(195, 217, 77);
text("Jackson",38,198);
text("Williams",38,223);
    
yellow1 = yellow1 +.6
  
if (yellow1 >= windowWidth+yellowRad){  yellow1 = -100;
}

  }
