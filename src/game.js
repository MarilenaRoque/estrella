class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game'})
    }

    preload() {
        this.load.image('background', 'images/background.jpg');
        this.load.image('gameOver', 'images/game-over.png');
        this.load.image('platform', 'images/platform.png')
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
    }

    update() {
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
