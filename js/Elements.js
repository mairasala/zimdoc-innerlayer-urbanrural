
function Element(config) {
	this.id=config.id;
	this.x = config.x;
	this.y = config.y;
	this.width = config.width;
	this.height = config.height;
	this.scale = config.scale;
	this.alpha=config.alpha;
	this.rotation = config.rotation;
	this.planeWidth = config.planeWidth;
	this.module = config.module;
	this.onClick=config.onClick;
	this.onMouseOver=config.onMouseOver;
	this.onMouseOut=config.onMouseOut;
	this.filter=config.filter;
	this.scenes=config.scenes;
};
function Element_DrawShape(bitmapdata) {
	this.shape = new Shape(new Graphics().beginBitmapFill(bitmapdata).drawRect(
			0, 0, this.width, this.height));
	this.shape.x = this.x;
	this.shape.y = this.y;
	this.shape.scaleX = this.shape.scaleY = this.scale;
	//this.shape.filters = [ getFilter() ];
	
	this.shape.cache(0, 0, this.width, this.height);
	this.shape.rotation = this.rotation;
	this.shape.alpha=this.alpha;
	//this.shape.filters = [getFilter(this.filter)];
	this.shape.updateCache();
	//console.log(this.id.indexOf("sky"));
	if(this.id.indexOf("sky")==-1){
		//console.log(this.id+" here");
		this.shape.filters = [getFilter(this.filter)];
		this.shape.updateCache();
	}else{
		//console.log(this.id+" here");
		this.shape.filters = [getFilter(this.filter)];
		this.shape.updateCache();
	}
	//console.log(this.shape.filters);
	
	//this.shape.parentElement=this;
	var me=this;
	if(this.onClick){
		
		this.shape.onClick=function()
		{
			var params=me.onClick.split(",");
			var func=params.shift();
			
			var st="im."+func+"(me,params)";
			var a=eval(st);
		}
	}
	
	if(this.onMouseOver){
		this.shape.onMouseOver=function()
		{
			document.body.style.cursor='pointer';
			var params=me.onMouseOver.split(",");
			var func=params.shift();
			
			var st="im."+func+"(me,params)";
			
			var a=eval(st);
		}
	}
	
	if(this.onMouseOut){
		this.shape.onMouseOut=function()
		{
			document.body.style.cursor='default';
			var params=me.onMouseOut.split(",");
			var func=params.shift();
			
			var st="im."+func+"(me,params)";
			
			var a=eval(st);
		}
	}
};
function Element_updatePosition(porcentajeX) {
	this.shape.x = ((-(this.planeWidth - GraphicUtils.wwidth) * porcentajeX) + this.x)
			% this.module;
	/*if(this.id.indexOf("planeHouseFront")!=-1){
		console.log(this.id+" __px:"+porcentajeX+" __pW:"+this.planeWidth+" //form x:"+this.shape.x);
	}*/
};

function Element_updateFilter(filter) {
	this.shape.updateCache();
	if(filter==undefined)filter=this.filter;
	this.shape.filters = [ getFilter(filter) ];
	this.shape.updateCache();
};

Element.prototype.updatePosition = Element_updatePosition;
Element.prototype.updateFilter = Element_updateFilter;
Element.prototype.drawShape = Element_DrawShape;

// ____________________________________________________________________________
// ____________________________________________________________________________

function AnimatedElement(config) {
	
	this.id=config.id;
	this.flip=config.flip;
	this.x = config.x;
	this.y = config.y;
	this.scale = config.scale;
	this.alpha=config.alpha;
	this.rotation = config.rotation;
	this.planeWidth = config.planeWidth;
	this.animBitmap;
	this.spriteSheet;
	this.onClick=config.onClick;
	this.onMouseOver=config.onMouseOver;
	this.onMouseOut=config.onMouseOut;
	this.filter=config.filter;
	console.log(config);
	this.scenes=config.scenes;
}

function AnimateElement_DrawBitmap(spritesheetConfig) {
	this.spriteConfig = spritesheetConfig;
	this.spriteSheet = new SpriteSheet(spritesheetConfig);
	if(this.flip)SpriteSheetUtils.addFlippedFrames(this.spriteSheet, true, false, false);
	
	//document.getElementById("testCanvas2").appendChild(this.spriteSheet._images[0]);
	this.animBitmap = new BitmapAnimation(this.spriteSheet);
	var r = Math.round(Math.random()
			* this.spriteSheet.getNumFrames(this.spriteConfig.defAnimation));
	// console.log(r);
	if(this.spriteConfig.defAnimation){
		this.animBitmap.gotoAndPlay(this.spriteConfig.defAnimation);
	}else{
		this.animBitmap.gotoAndStop(0);
	}
	// this.animBitmap.currentAnimationFrame=r;
	this.animBitmap.rotation = this.rotation;

	this.animBitmap.x = this.x;
	this.animBitmap.y = this.y;
	this.animBitmap.scaleX = this.animBitmap.scaleY = this.scale;
	this.animBitmap.alpha=this.alpha;
	this.animBitmap.filters=[getFilter(this.filter)];
	
	var me=this;
	if(this.onClick){
		
		this.animBitmap.onClick=function()
		{
			var params=me.onClick.split(",");
			var func=params.shift();
			
			var st="im."+func+"(me,params)";
			var a=eval(st);
		}
	}
	if(this.onMouseOver){
		this.animBitmap.onMouseOver=function()
		{
			var params=me.onMouseOver.split(",");
			var func=params.shift();
			
			var st="im."+func+"(me,params)";
			var a=eval(st);
		}
	}
	if(this.onMouseOut){
		
		this.animBitmap.onMouseOut=function()
		{
			
			var params=me.onMouseOut.split(",");
			var func=params.shift();
			
			var st="im."+func+"(me,params)";
			
			var a=eval(st);
		}
	}
}

function AnimateElement_UpdatePosition(porcentajeX) {
	this.animBitmap.x = ((-(this.planeWidth - GraphicUtils.wwidth) * porcentajeX) + this.x);
	/*if(this.id.indexOf("planeHouseFront")!=-1){
		//console.log(this.id+" __px:"+porcentajeX+" __pW:"+this.planeWidth+" //form x:"+this.shape.x);
		console.log(this.id+" __px:"+porcentajeX+" __pW:"+this.planeWidth+" //x:"+this.animBitmap.x);
	}*/
	
}

function AnimateElement_changeAnimation(animation,animated) {
	if(animated){
		this.animBitmap.gotoAndPlay(animation);
	}else{
		this.animBitmap.gotoAndStop(animation);
	}
	//console.log(animation+" "+animated);
}

AnimatedElement.prototype.drawBitmap = AnimateElement_DrawBitmap;
AnimatedElement.prototype.updatePosition = AnimateElement_UpdatePosition;
AnimatedElement.prototype.changeAnimation=AnimateElement_changeAnimation;
