var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(21,20,10,10);
ball.shapeColor="gold";
var laserbeam1 = createSprite(330,250,10,250);
laserbeam1.shapeColor="red";
var laserbeam2= createSprite(50,200,10,200);
laserbeam2.shapeColor="red";
var laserbeam3= createSprite(190,200,10,350);
laserbeam3.shapeColor="red";
var diamond=createSprite(360,25,20,20);
diamond.shapeColor="blue";

laserbeam1.velocityY=10;
  
  laserbeam2.velocityY=8;
  
  laserbeam3.velocityY=-5;



function draw() {
  background("green");
  ball.velocityY = 0;
  
  
  ball.velocityX = 0;
  
   if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  
  if(keyDown(DOWN_ARROW)) {
    ball.velocityX= 0;
    ball.velocityY= 2;
  }
  
  if(keyDown(LEFT_ARROW)) {
    ball.velocityX=-3;
    ball.velocityY=0;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    ball.velocityX=3;
    ball.velocityY=0;
  }
  
  
  
 
  
  
  
  
 
  drawSprites();
  
  
  
   if(ball.isTouching(laserbeam1) ||ball.isTouching(laserbeam2) ||ball.isTouching(laserbeam3)){
   ball.velocityX=0;
   ball.velocityY=0;
   background("red");
   laserbeam1.velocityY=0;
   laserbeam2.velocityY=0;
   laserbeam3.velocityY=0;
  text("ALARM ACTIVATED",200,200);
  
  }
  
  createEdgeSprites();
  ball.bounceOff(edges);
  
  laserbeam1.bounceOff(edges);
  laserbeam2.bounceOff(edges);
  laserbeam3.bounceOff(edges);
  
  
  
  
  
  
  
  
  
  
  
  
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
