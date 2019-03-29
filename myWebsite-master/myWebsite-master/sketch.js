
var yellow1 = 105.41
var yellow2 = 296.31
var yellow1RAD = 131.2/2
var yellow2RAD = 173.44/2
var dark1 = 199.945
var dark2 = 324.708
var dark1RAD = 337.729/2
var dark2RAD = 274.802/2
function 
setup() 
{ createCanvas(500, 500); } 
function draw() 
  { background(195,34,39);
   noStroke(); 
   //YELLOWS
 fill(195,217,77); 
   circle(yellow1,158.63,yellow1RAD); 
   circle(yellow2,408.4,yellow2RAD); 
  //DARKS
 fill (58,21,18); 
   circle(327.773,dark1,dark1RAD); 
   circle(139.068,dark2,dark2RAD); 
 fill(238,38,36); 
   circle(233.876,220.322,225.248/2); 
 fill(196,36,48); 
   circle(215.784,227.61,181.324/2); 
 fill (58,21,18); 
   circle(225.357,224.231,162.178/2); 
yellow1 = yellow1 -1
yellow2 = yellow2 +1
dark1 = dark1 -1
dark2 = dark2 +1 
if (yellow1 <= 0-yellow1RAD){  yellow1 = 600;
}
if (yellow2 >=500+yellow2RAD){yellow2 = -100;
}  
if (dark1 <= 0-dark1RAD){  dark1 = 700;
}
if (dark2 >=500+dark2RAD){dark2 = -200;
}
  
   
 }    