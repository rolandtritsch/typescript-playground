import p5 from 'p5';

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(400, 400);
    s.background(200);
    console.log('setup() done!')
  };

  s.draw = () => {
    s.fill(255, 0, 0);
    s.ellipse(s.mouseX, s.mouseY, 50, 50);
    console.log('draw() done!')
  };
};

// Initialize p5
new p5(sketch);
