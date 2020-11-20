(()=>{"use strict";class e extends Phaser.Scene{constructor(){super({key:"game"})}preload(){this.load.image("background","images/background.jpg"),this.load.image("gameOver","images/game-over.png"),this.load.image("platform","images/platform.png")}create(){this.add.image(400,250,"background"),this.gameOverImage=this.add.image(400,250,"gameOver"),this.gameOverImage.visible=!1,this.platformImage=this.physics.add.image(400,470,"platform"),this.platformImage.body.allowGravity=!1,this.cursors=this.input.keyboard.createCursorKeys()}update(){this.cursors.left.isDown?this.platformImage.setVelocityX(-500):this.cursors.right.isDown?this.platformImage.setVelocityX(500):this.platformImage.setVelocityX(0)}}const a=e,s={type:Phaser.AUTO,width:800,height:500,scene:[a],physics:{default:"arcade",arcade:{gravity:{y:400},debug:!1}}};new Phaser.Game(s)})();