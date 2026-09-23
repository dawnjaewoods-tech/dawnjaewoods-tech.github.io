$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1350, 460, 50, 50, "pink");
createPlatform(1200, 450, 50, 50, "pink");
createPlatform(1000, 500, 50, 50, "pink");
createPlatform(650, 550, 50, 50, "pink");
createPlatform(400, 600, 50, 50, "pink");
createPlatform(300, 650, 50, 50, "pink");
createPlatform(950, 650, 50, 50, "pink");
createPlatform(800, 600, 50, 50, "pink");
createPlatform(500, 350, 50, 50, "pink");
createPlatform(300, 340, 50, 50, "pink");
    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 400);
createCollectable("diamond", 1200, 500, 0.5, 0.7);


    
    // TODO 4 - Create Cannons

createCannon("right", 300, 2000);
createCannon("right", 700, 2000);
createCannon("left", 500, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
