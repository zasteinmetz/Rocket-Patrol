class Dialogue extends Phaser.Scene {
    constructor(firstTime = false){
        super("dialogueScene");
    }
    preload(){ 
        // load images/title sprites
        this.load.image('body', './assets/Body.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create(){
        // place starfield
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        this.body = this.add.tileSprite(0, 0, 640, 480, 'body').setOrigin(0, 0);

        // Dialogue text configuration
        let diaConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#ff4d00',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // Dialogue after one second
        this.clock = this.time.delayedCall(1000, () => {
            this.add.text(game.config.width/2, game.config.height/2 + 3 * (borderUISize + borderPadding), 'Well Mortals...', diaConfig).setOrigin(0.5);
        }, null, this);
        
        this.clock = this.time.delayedCall(2500, () => {
            this.add.text(game.config.width/2 - 2 * (borderUISize + borderPadding), game.config.height/2 + 4* (borderUISize + borderPadding), 'You are in my hand.', diaConfig).setOrigin(0.5);  
        }, null, this);

        this.clock = this.time.delayedCall(4500, () => {
            this.scene.start('trappedScene');
        }, null, this);
    }

    update(){
        this.starfield.tilePositionX -= starSpeed;
    }
}