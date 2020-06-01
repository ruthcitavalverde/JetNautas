
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Intro.
 */
function Intro() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Intro_proto = Object.create(Phaser.State.prototype);
Intro.prototype = Intro_proto;
Intro.prototype.constructor = Intro;

Intro.prototype.init = function () {
	
	this.myInit();
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Intro.prototype.preload = function () {
	
	this.load.pack('loader', 'assets/loaderSprites.json');
	
	this.myPreload();
	
};

Intro.prototype.create = function () {
	
	
	this.myCreate();
	
};

/* --- end generated code --- */
// -- user code here --
Intro.prototype.myInit = function () {
	
};

Intro.prototype.myPreload = function () {
	

	this.game.load.image('playBtn', 'assets/images/playBtn.png')
	
	

	

	
	
};


Intro.prototype.update = function () {
	
	
	
};


Intro.prototype.myCreate = function () {
	
	   mid_emitter = this.game.add.emitter(this.game.world.centerX, -32, 250);
	    mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
	    mid_emitter.maxParticleScale = 1.2;
	    mid_emitter.minParticleScale = 0.8;
	    mid_emitter.setYSpeed(50, 150);
	    mid_emitter.gravity = 0;
	    mid_emitter.width = this.game.world.width * 1.5;
	    mid_emitter.minRotation = 0;
	    mid_emitter.maxRotation = 40;

	    
	    mid_emitter.start(false, 12000, 100);
	
	cover1Move = this.game.add.tween(this.fCover1);
	cover1Move.to({y:480}, 1000, Phaser.Easing.Bounce.Out);
	cover1Move.onComplete.add(zoom1, this);
	cover1Move.start();
	    
	function zoom1(){
		
		 cover2Move = this.game.add.tween(this.fCover1.scale);
		 cover2Move.to({x: 1, y:1}, 1000, Phaser.Easing.Linear.None);
		 cover2Move.onComplete.addOnce(zoom2, this);
		 cover2Move.start();
	}
	
	 
	 function zoom2(){
		 
		 cover3Move = this.game.add.tween(this.fCover1.scale);
		 cover3Move.to({x: 1.1, y:1.1}, 1000, Phaser.Easing.Linear.None);
		 cover3Move.onComplete.addOnce(zoom1, this);
		 cover3Move.start();
	 }


	IntroMusic = this.game.add.audio('IntroMusic');
	IntroMusic.allowMultiple = false;
	IntroMusic.addMarker('IntroMusic', 0, 28.74);
	
	this.game.input.onUp.addOnce(doMusic, this);
	
	function doMusic(){
		
		 IntroMusic.play('IntroMusic');
	
	//player.sounds.fxCoin.play("coin");
	
	 this.startButton = this.game.add.button(this.game.width/2, 955.0, 'playBtn', startGame, this, 2, 1, 0);
	 this.startButton.anchor.set(0.5);
	 pigArrives = this.game.add.tween( this.startButton);
	    
	    pigArrives.to({y:this.game.height/2+300}, 1000, Phaser.Easing.Bounce.Out);
	    pigArrives.onComplete.add(firstTween, this);
	    pigArrives.start();
	}   
	    function firstTween() {

	        s = this.game.add.tween(this.startButton.scale);
	        s.to({x: 1.05, y:1.05}, 500, Phaser.Easing.Linear.None);
	        s.onComplete.addOnce(theEnd, this);
	        s.start();

	    }
	    
	    function theEnd() {
	    	
	    	
	    	  s = this.game.add.tween(this.startButton.scale);
		        s.to({x: 1, y:1}, 500, Phaser.Easing.Linear.None);
		        s.onComplete.addOnce(firstTween, this);
		        s.start();

	    }
	    
	 function startGame(){
	 		 IntroMusic.stop('IntroMusic');
		 this.game.state.start('Level3');
		 
	 }
	
};

