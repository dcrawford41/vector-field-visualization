let integrator_dropdown;
let equation_dropdown;
let equation;
let title_text;
let x_size;
let y_size;
let x_window;
let y_window;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  textAlign(LEFT);
  set_interface_options();
  drawingContext.setLineDash([5,15]);
}


function draw() {
  background(200);
  equation = equation_dropdown.value();
  let vector_field_string = 'Vector Field <' + equation + '>';
  title_text = text(vector_field_string, 0, 0, 400, 200);
  draw_grid();
}

function set_interface_options() {
  fill(0);
  integrator_dropdown = createSelect();
  integrator_dropdown.position(width - 200, height/6 + 50);
  integrator_dropdown.option('Explicit Euler');
  integrator_dropdown.option('Midpoint Method');
  integrator_dropdown.option('RK4');
  equation_dropdown = createSelect();
  let eq1_string = "x^2, y^2";
  equation_dropdown.option(eq1_string);
  equation_dropdown.position(width - 200, height/6 + 100);
  x_size = createSlider(10, 20, 10, 1);
  y_size = createSlider(10, 20, 10, 1);
  x_size.position(width - 200, height/6 + 150);
  y_size.position(width - 200, height/6 + 200);
}

function draw_grid() {
  drawingContext.setLineDash([5,15]);
  stroke(0);
  strokeWeight(2);
  x_window = x_size.value();
  y_window = y_size.value();
  for (let i = 1; i < x_window; i++) {
    drawingContext.setLineDash([5,15]);
    if (i == x_window/2) {
      drawingContext.setLineDash([0,0]);
    }
    line(width * (i/x_window), height, width * (i/x_window), 0);
  }
  for (let i = 1; i < y_window; i++) {
    drawingContext.setLineDash([5,15]);
    if (i == y_window/2) {
      drawingContext.setLineDash([0,0]);
    }
    line(0, height * (i/y_window), width, height * (i/y_window));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  integrator_dropdown.position(width - 200, height/6 + 50);
  equation_dropdown.position(width - 200, height/6 + 100);
  x_size.position(width - 200, height/6 + 150);
  y_size.position(width - 200, height/6 + 200);
}

function mouseClicked() {
  
}