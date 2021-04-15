// Rocket (player) prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, player, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        this.isFiring = false;      // track rocket firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket');     // add rocket sfx
        this.p1 = player;   // sets p1 value to determine player
        // sets key values to null so they can be determined by player
        this.leftKey = null;
        this.rightKey = null;
        this.firingKey = null;
        this.determineKeys();   // determines which keys to use
    }

    update() {
       /* // p1/p2 values
        if (this.p1 = true){
            this.p1 = false;
            console.log("P1 truth now " + this.p1);
        }
        if(!this.p1) {
            console.log("P1 False");
            this.p1 = "orange";
        } */

        // left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }
            else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fired, move rocket up
        if(this.isFiring && this.y >= borderUISize * 3){
            this.y -= this.moveSpeed;          
        }
        // rest on miss
        if(this.y <= borderUISize * 3){
            this.reset();
        }
        //console.log(this.p1);
    }
    // reset rocket to ground
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

    // determines which key is which for two players
    determineKeys(){
        if(this.p1 = true){
            this.leftKey = keyLEFT;
            this.rightKey = keyRIGHT;
            this.firingKey = keyF;
        }
        else if(this.p1 = false){
            this.leftKey = null;
            this.rightKey = null;
            this.firingKey = null;
        }
    }
}