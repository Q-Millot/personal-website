let angle = 0;
let L = 40;
let centerPos = [200,200];
let Lthruster = [CenterPos[0] - L * cos (angle),
                CenterPos[1] - L * sin (angle)];
let Rthruster = [CenterPos[0] + L * cos(angle),
                  CenterPos[1] + L * sin(angle)];
let F1 = [0,20];
let F2 = [0,20];
let target = [mouseX,mouseY];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(220);
  let Lthruster = [centerPos[0] - L * cos (angle),
                  centerPos[1] - L * sin (angle)];
  let Rthruster = [centerPos[0] + L * cos(angle),
                   centerPos[1] + L * sin(angle)];
  let F1 = [0,-20];
  let F2 = [0,-20];
  let target = [mouseX,mouseY];  
  
  strokeWeight(1);
  
  line(Lthruster[0],Lthruster[1],Rthruster[0],Rthruster[1]);
  circle(centerPos[0],centerPos[1],15,15);
  circle(Lthruster[0],Lthruster[1],
         10,10);
  circle(Rthruster[0],Rthruster[1],
         10,10);
  
  circle(target[0],target[1],10,10)
  line(centerPos[0],centerPos[1],target[0],target[1])
  
  strokeWeight(2);
  line(Lthruster[0],Lthruster[1],
       Lthruster[0] + F1[0],Lthruster[1] + F1[1]);
  line(Rthruster[0],Rthruster[1],
       Rthruster[0] + F2[0],Rthruster[1] + F2[1]);

}

function mousePressed() {
  angle = angle +0.1;
}