var SoundElement = function(config) {
	this.x = config.x;
	this.attack = config.attack;
	this.sustain = config.sustain;
	this.release = config.release;
	this.scenes=config.scenes;

	this.planeWidth = config.planeWidth;
	this.volume = config.volume;
	this.loop = config.loop;
	this.file;
	this.sound;
	this.active;

	this.startAttack = this.x;
	this.startSustain = (this.x + this.attack);
	this.startRelease = (this.x + this.attack + this.sustain);
	this.end = (this.x + this.attack + this.sustain + this.release);
	this.fadeInterval;
	this.fadeSpeed=100;
	this.fading="not";

};

SoundElement.prototype.init = function(file) {
	this.file = file;
	this.sound = createjs.SoundJS.play(this.file, SoundJS.INTERRUPT_ANY, 0, 0,
			this.loop, this.volume);
	this.sound.setVolume(0);
	this.sound.pause();
};

SoundElement.prototype.update = function(pX) {
	if(this.active){
		var plPos = pX * this.planeWidth;
		var vol = this.volume;
		if (plPos >= this.x && plPos < this.end) {
			// it's in attack
			if (plPos >= this.x && plPos < this.startSustain) {
				vol = (plPos - this.x) / this.attack;
			} else if (plPos > this.startRelease && plPos < this.end) {
				vol = 1 - ((plPos - this.startRelease) / this.release);
			}
		}else{
			vol=0;
		}
		if (this.sound.getVolume() != vol) {
			this.sound.setVolume(vol*this.volume);
			if(this.sound.volume==0)this.sound.pause();
			else if(this.sound.paused)this.sound.resume();
		}
	}

}
SoundElement.prototype.play=function(fade)
{
	if(!this.active)return;
	if(fade){
		this.fading="in";
		clearInterval(this.fadeInterval);
		//var me=this;
		this.sound.setVolume(0);
		this.fadeInterval=setInterval((function(self) {return function() {self.fadeFunction(); } } )(this),100);
	}else{
		this.sound.setVolume(this.volume);
	}
	if(this.sound.paused)this.sound.resume();
	else this.sound.play();
	//console.log("playing the music");
}
SoundElement.prototype.stop=function(){
	this.sound.stop();
}

SoundElement.prototype.pause=function(fade){
{
		if(!this.active)return;
		if(fade){
			this.fading="out";
			clearInterval(this.fadeInterval);
			//this.sound.setVolume(0);
			this.fadeInterval=setInterval((function(self) {return function() {self.fadeFunction(); } } )(this),100);
		}else{
			this.sound.pause();
		}
		//this.sound.pause();
	}
}

SoundElement.prototype.fadeFunction=function()
{
	//console.log(this.sound.getVolume());
		if(this.fading=="not"){
			clearInterval(this.fadeInterval);
		}
		var speed=(this.fading=="in")?0.07:-0.07;
		var value=this.sound.getVolume()+speed;
		
		if(value<0){
			value=0;
			this.fading="not";
			this.sound.pause();
		}else if(value>=this.volume){
			value=this.volume;
			this.fading="not";
		}
		//console.log(this.fading,speed,value);
		this.sound.setVolume(value);
}
