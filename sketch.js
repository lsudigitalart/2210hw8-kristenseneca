var r = 0;

function setup() {
  createCanvas(1000,700);
  background(204,255,255);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40)
  {
      var color = int( random(0,102,204));
      var scalar = random(0.25,5.0);
      arrow(i,110,color,scalar);
    }
}

function draw() {

  }


  function keyPressed() {

    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 400);
    arrow(mouseX, mouseY, 700);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 400);
    arrow(mouseX, mouseY, 400);
    arrow(mouseX, mouseY, 400);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 700);
    arrow(mouseX, mouseY, 400);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 100);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 100);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 200);
    arrow(mouseX, mouseY, 300);
    arrow(mouseX, mouseY, 600);
    arrow(mouseX, mouseY, 700);
    arrow(mouseX, mouseY, 200);

}




    function arrow(x,y,g,s) {

      rotate(r);
      r +=.01
      translate(random(500), random(800));
      scale(1*2);


      beginShape();
      vertex(20, 20);
      vertex(40, 20);
      vertex(40, 40);
      vertex(60, 40);
      vertex(60, 60);
      vertex(20, 60);
      endShape(CLOSE);
    }
