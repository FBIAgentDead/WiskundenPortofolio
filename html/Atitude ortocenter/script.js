const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(800,100,15,200,200,200);
let B = new Point(300,500,15,200,200,200);
let C = new Point(1000,500,15,200,200,200);
let AB = new Point(0,0,5,200,10,100);

let f = new LinearFunction(10,100);
let g = new LinearFunction(10,100);
let h = new LinearFunction(10,100);

let i = new LinearFunction(10,100);
let j = new LinearFunction(10,100);
let k = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();

function animate()
{
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  f.letTwoPointsDefineLine(A,B);
  i.slope = -1/f.slope;
  i.intercept = A.y - i.slope * A.x;
  AB.x = i.intersection(f).x;
  AB.y = i.intersection(f).y;
  g.letTwoPointsDefineLine(B,C);
  h.letTwoPointsDefineLine(C,A);

  f.draw(context);
  i.draw(context);
  g.draw(context);
  h.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  AB.draw();

}

animate();
