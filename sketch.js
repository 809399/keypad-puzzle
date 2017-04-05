var x = 270;
var y = 94;

var access = 0;

var lock;
var order;
var value1 = 10;
var value2 = 10;
var value3 = 10;
var value4 = 10;

function preload()
{
  leftarrow = loadImage('https://dl.dropbox.com/s/qa8segk14hy91q5/leftarrow.png');
  
  rightarrow = loadImage('https://dl.dropbox.com/s/o0gthz4bg8yr6q2/rightarrow.png');
  
  keypad = loadImage('https://dl.dropbox.com/s/c8ibbfe9r272wfz/keypad.png');
}

function setup()
{
  createCanvas(800,600);
  canvas = 2;
//  mute = 1.0;
  lock = 0;
}

function draw()
{
  background(255,255,255);

  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
  navigation();
  
  compare(9,7,4,8);
}

function navigation()
{
  var x = 20;
  var y = 520;

  image(leftarrow,x,y,70,70);

  if (lock == 0 && mouseX > x && mouseX < x+70 && mouseY > y && mouseY < y+70 && mouseIsPressed == true)
  {
    if (canvas == 1)
    {
      canvas = 2;
    }
    else if (canvas == 2)
    {
      canvas = 1;
    }
  }
  
  image(rightarrow,x+80*8,y,70,70);
  
  if (lock == 0 && mouseX > x+80*8 && mouseX < x+80*8+70 && mouseY > y && mouseY < y+70 && mouseIsPressed == true)
  {
    if (canvas == 1)
    {
      canvas = 2;
    }
    else if (canvas == 2)
    {
      canvas = 1;
    }
  }
}

function compare(a,b,c,d)
{
  if (value1 == a && value2 == b && value3 == c && value4 == d)
  {
    access = 1;
  }
}

function canvas1()
{
  background(160,170,180);
  
  itemGrid();
}

function canvas2()
{
  if (access == 1 && mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+78*3 && mouseY < y+78*3+51 && mouseIsPressed == true)
  {
    text("UNLOCKED",50,100);
  }
  
  if (access == 0 && mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+78*3 && mouseY < y+78*3+51 && mouseIsPressed == true)
  {
    text("INCORRECT",50,100);
  }
  
  itemGrid();
  image(keypad,200,25,350,456);
  
  text(""+order+"",20,20);
  
  if (value1 < 10)
  {
    text(""+value1+"",50,50);
  }
  if (value2 < 10)
  {
    text(""+value2+"",70,50);
  }
  if (value3 < 10)
  {
    text(""+value3+"",90,50);
  }
  if (value4 < 10)
  {
    text(""+value4+"",110,50);
  }
  
  if (value1 == 10)
  {
    order = 1;
  }
  else if (value1 < 10 && value2 == 10)
  {
    order = 2;
  }
  else if (value2 < 10 && value3 == 10)
  {
    order = 3;
  }
  else if (value3 < 10 && value4 == 10)
  {
    order = 4;
  }
  else if (value4 < 10)
  {
    order = 5;
  }
  
  // 9748
  
  // black boxes over numbers
  // key1
  if (mouseX > x && mouseX < x+51 && mouseY > y && mouseY < y+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x,y,51,51);
    
    lock = 1;
  }
  
  // key2
  if (mouseX > x+82 && mouseX < x+82+52 && mouseY > y && mouseY < y+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+82,y,52,51);
    
    lock = 1;
  }
  
  // key3
  if (mouseX > x+83*2 && mouseX < x+83*2+51 && mouseY > y && mouseY < y+51 && mouseIsPressed == true)
  { 
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+83*2,y,51,51);
    
    lock = 1;
  }
  
  // key4
  if (mouseX > x-2 && mouseX < x+52 && mouseY > y+80 && mouseY < y+80+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x-3,y+80,54,51);
    
    lock = 1;
  }
  
  // key5
  if (mouseX > x+82 && mouseX < x+82+53 && mouseY > y+80 && mouseY < y+80+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+81,y+80,53,51);
    
    lock = 1;
  }
  
  // key6
  if (mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+80 && mouseY < y+80+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+82*2,y+80,53,51);
    
    lock = 1;
  }
  
  // key7
  if (mouseX > x-2 && mouseX < x+54 && mouseY > y+79*2 && mouseY < y+79*2+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x-3,y+79*2,54,51);
    
    lock = 1;
  }
  
  // key8
  if (mouseX > x+81 && mouseX < x+81+53 && mouseY > y+79*2 && mouseY < y+79*2+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+81,y+79*2,53,51);
    
    lock = 1;
  }
  
  // key9
  if (mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+79*2 && mouseY < y+79*2+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+82*2,y+79*2,53,51);
    
    lock = 1;
  }
  
  // key*
  if (mouseX > x-2 && mouseX < x+54 && mouseY > y+78*3 && mouseY < y+78*3+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x-3,y+78*3,54,51);
    
    lock = 1;
  }
  
  // key0
  if (mouseX > x+81 && mouseX < x+81+53 && mouseY > y+78*3 && mouseY < y+78*3+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+81,y+78*3,53,51);
    
    lock = 1;
  }
  
  
  // key#
  if (mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+78*3 && mouseY < y+78*3+51 && mouseIsPressed == true)
  {
    fill(0,0,0);
    stroke(0,0,0);
    rect(x+82*2,y+78*3,53,52);
    
    lock = 1;
  }

}

function itemGrid()
{
  // background for item grid
  fill(50,50,50);
  rect(10,510,800-20,600-20);

  // black boxes
  fill(125,125,125);
  rect(20+80,520,70,70);

  fill(125,125,125);
  rect(20+80*2,520,70,70);
  
  fill(125,125,125);
  rect(20+80*3,520,70,70);
  
  fill(125,125,125);
  rect(20+80*4,520,70,70);
  
  fill(125,125,125);
  rect(20+80*5,520,70,70);
  
  fill(125,125,125);
  rect(20+80*6,520,70,70);
  
  fill(125,125,125);
  rect(20+80*7,520,70,70);
}

function mouseReleased()
{
  if (mouseX > x && mouseX < x+51 && mouseY > y && mouseY < y+51 && lock == 1)
  {
    lock = 0;
    
    if (order == 1)
    {
      value1 = 1;
    }
    else if (order == 2)
    {
      value2 = 1;
    }
    else if (order == 3)
    {
      value3 = 1;
    }
    else if (order == 4)
    {
      value4 = 1;
    }
  }
  
  if (mouseX > x+82 && mouseX < x+82+52 && mouseY > y && mouseY < y+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 2;
    }
    else if (order == 2)
    {
      value2 = 2;
    }
    else if (order == 3)
    {
      value3 = 2;
    }
    else if (order == 4)
    {
      value4 = 2;
    }
  }
  
    if (mouseX > x+83*2 && mouseX < x+83*2+51 && mouseY > y && mouseY < y+51 && lock == 1)
    { 
      lock = 0;

      if (order == 1)
      {
        value1 = 3;
      }
      else if (order == 2)
      {
        value2 = 3;
      }
      else if (order == 3)
      {
        value3 = 3;
      }
      else if (order == 4)
      {
        value4 = 3;
      }
    }
  
  if (mouseX > x-2 && mouseX < x+52 && mouseY > y+80 && mouseY < y+80+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 4;
    }
    else if (order == 2)
    {
      value2 = 4;
    }
    else if (order == 3)
    {
      value3 = 4;
    }
    else if (order == 4)
    {
      value4 = 4;
    }
  }
  
  if (mouseX > x+82 && mouseX < x+82+53 && mouseY > y+80 && mouseY < y+80+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 5;
    }
    else if (order == 2)
    {
      value2 = 5;
    }
    else if (order == 3)
    {
      value3 = 5;
    }
    else if (order == 4)
    {
      value4 = 5;
    }
  }
  
  if (mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+80 && mouseY < y+80+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 6;
    }
    else if (order == 2)
    {
      value2 = 6;
    }
    else if (order == 3)
    {
      value3 = 6;
    }
    else if (order == 4)
    {
      value4 = 6;
    }
  }
  
  if (mouseX > x-2 && mouseX < x+54 && mouseY > y+79*2 && mouseY < y+79*2+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 7;
    }
    else if (order == 2)
    {
      value2 = 7;
    }
    else if (order == 3)
    {
      value3 = 7;
    }
    else if (order == 4)
    {
      value4 = 7;
    }
  }
  
  if (mouseX > x+81 && mouseX < x+81+53 && mouseY > y+79*2 && mouseY < y+79*2+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 8;
    }
    else if (order == 2)
    {
      value2 = 8;
    }
    else if (order == 3)
    {
      value3 = 8;
    }
    else if (order == 4)
    {
      value4 = 8;
    }
  }
  
  if (mouseX > x+82*2 && mouseX < x+82*2+53 && mouseY > y+79*2 && mouseY < y+79*2+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 9;
    }
    else if (order == 2)
    {
      value2 = 9;
    }
    else if (order == 3)
    {
      value3 = 9;
    }
    else if (order == 4)
    {
      value4 = 9;
    }
  }
  
  if (mouseX > x+81 && mouseX < x+81+53 && mouseY > y+78*3 && mouseY < y+78*3+51 && lock == 1)
  {
    lock = 0;

    if (order == 1)
    {
      value1 = 0;
    }
    else if (order == 2)
    {
      value2 = 0;
    }
    else if (order == 3)
    {
      value3 = 0;
    }
    else if (order == 4)
    {
      value4 = 0;
    }
  }
}