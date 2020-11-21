class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game'})
    }

    preload() {
        this.load.image('background', 'images/background.jpg');
        this.load.image('gameOver', 'images/game-over.png');
        this.load.image('platform', 'images/platform.png');
        this.load.image('ball', 'images/ball.png');
    }

    create() {

        //adding background
        this.add.image(400, 250, 'background');

        //adding gameOver
        this.gameOverImage = this.add.image(400, 250, 'gameOver');
        this.gameOverImage.visible = false;


        //adding platform
        this.platformImage = this.physics.add.image(400, 470, 'platform');
        this.platformImage.body.allowGravity = false;
        this.cursors = this.input.keyboard.createCursorKeys();

    
        //adding ball
        this.ballImage = this.physics.add.image(400, 30, 'ball');

        //this piece of code make the platform collide with the ball,
        // but the force of the ball make the platform move
        this.physics.add.collider(this.platformImage, this.ballImage);

        // this piece of code makes the ball be lanced with the same force that it touched
        //the platform, but part of the force is lost because the platform moves
        this.ballImage.setBounce(1);

    }

    update() {

        //setting moves for the platform
        if (this.cursors.left.isDown) {
            this.platformImage.setVelocityX(-500);
        } else if (this.cursors.right.isDown) {
            this.platformImage.setVelocityX(500);
        } else {
            this.platformImage.setVelocityX(0);
        }
    }

}




export default Game;
