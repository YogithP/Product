x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_triangle = "";
draw_square = "";
draw_pentagon = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
      if(content =="circle" || content =="Circle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle "; 
        draw_circle = "set";
      }
      if(content =="rectangle" || content =="Rectangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle "; 
        draw_rect = "set";
      }
      if(content =="triangle" || content =="Triangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing triangle "; 
        draw_triangle = "set";
      }
      if(content =="square" || content =="Square")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square "; 
        draw_square = "set";
      }
      if(content =="pentagon" || content =="Pentagon")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing pentagon "; 
        draw_pentagon = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_rect == "set")
  {
    radius = Math.floor(Math.random() * 100);
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Rectangle is drawn ";
    draw_rect = "";
  }

  if(draw_triangle == "set")
  {
    triangle(x, y, x + 50, y + 50, x + 100, y);
    document.getElementById("status").innerHTML = "Triangle is drawn ";
    draw_triangle = "";
  }

  if(draw_square == "set")
  {
    rect(x, y, 50, 50);
    document.getElementById("status").innerHTML = "Square is drawn ";
    draw_square = "";
  }

  if(draw_pentagon == "set")
  {
    pentagon(x, y, 50);
    document.getElementById("status").innerHTML = "Pentagon is drawn ";
    draw_pentagon = "";
  }
}


function pentagon(x, y, radius) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI * i / 5;
    let xPos = x + cos(angle) * radius;
    let yPos = y + sin(angle) * radius;
    vertex(xPos, yPos);
  }
  endShape(CLOSE);
}
