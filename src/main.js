//Game Configuration
let config = {
    type: Phaser.CANVAS,
    width : 640,
    height: 480,
    scene: [ Menu, Dialogue, Trapped, Mockery, Demonstration, Encouragement,  Play]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;
let starSpeed = 4;

// reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT;

// set highScore to 0
let highScore = 0;

// set firstTime to false to order cutscences
let firstTime = false;