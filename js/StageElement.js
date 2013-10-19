
function StageElement(config) {
	this.activeScene;
	this.config=config;
	this.scenes = [];
	for ( var i = 0; i < config.length; i++) {
		this.scenes.push(new SceneElement(config[i]));
	}
}

function StageElement_nextScene()
{
	var changes=false;
	if(this.activeScene==undefined)
	{
		this.activeScene=0;
		changes=true;
	}else if(this.activeScene<this.scenes.length)
	{
		this.activeScene++;
		changes=true;
	}
	if(changes)this.scenes[0].paint(this.activeScene);
	/*this.currentScene++;
	this.scenes[this.activeScene].updateSceneElements(this.currentScene,this.config[0]);*/
	
}

function StageElement_updateScene(p,w)
{
	this.scenes[0].update(p,w);
}

StageElement.prototype.nextScene=StageElement_nextScene;
StageElement.prototype.updateActiveScene=StageElement_updateScene;
//StageElement.prototype.currentScene=0;
// -----------------------------------------------
// -----------------------------------------------

function SceneElement(config) {
	this.config = config;
	this.staticElements=[];
	this.audioElements=[];
	this.animatedElements=[];
}


function SceneElement_paint(scene) {
	//console.log("paint "+this.config.length);
	this.scene=scene;
	//this.deleteSceneElements();
	if(this.scene==0){
		
		if(this.config.hasOwnProperty("planes"))
		{
			this.initGraphicElements();
		}
		
		if(this.config.hasOwnProperty("soundPlanes"))
		{
			this.initSoundElements();
		}
	}
	
	this.updateSceneElements();
	
}

function SceneElement_update(p)
{
	for(var ii=0; ii<this.staticElements.length;ii++)
	{
		this.staticElements[ii].updatePosition(p);
	}
	
	for(ii=0; ii<this.animatedElements.length;ii++)
	{
		this.animatedElements[ii].updatePosition(p);
	}
	
	for(ii=0; ii<this.audioElements.length;ii++)
	{
		this.audioElements[ii].update(p);
	}
}

function SceneElement_initGraphicElements()
{
	for ( var i = 0; i < this.config.planes.length; i++) {
		var plane = this.config.planes[i];
		if(plane.hasOwnProperty("staticElements"))
		{
			this.initStaticElements(plane);
		}
		if(plane.hasOwnProperty("animatedElements")){
			this.initAnimatedElements(plane,this.initStaticElements.length);
		}
	}
}

function SceneElement_initSoundElements()
{
	for(var i=0;i<this.config.soundPlanes.length;i++)
	{
		var plane=this.config.soundPlanes[i];
		for(var j=0; j<plane.soundElements.length;j++)
		{
			var elem = plane.soundElements[j];
			elem.planeWidth = plane.planeWidth-150/*+1000*/;
			elem.loop = elem.loop ? -1 : 0;
			elem.scenes=fu.configProperty("scenes",elem,"0,1,2,3");
			var sound = new SoundElement(elem);
			sound.init(elem.file);
			this.audioElements.push(sound);
		}
	}
}

function SceneElement_initStaticElements(plane)
{
	for ( var j = 0; j < plane.staticElements.length; j++) {
		var config = plane.staticElements[j];
		var elem = getStaticElementByID(config.seid);
		var resource = ResourceUtils.imageAssets[elem.image].result;

		if (typeof elem.width === "string" && elem.width.indexOf("auto") != -1) {
			var value = (elem.width.split("+").length > 1) ? parseInt(elem.width.split("+")[1]): 0;
			config.width = GraphicUtils.wwidth + value;
		} else {
			config.width = elem.width;
		}
		if (typeof elem.height === "string" && elem.height.indexOf("auto") != -1) {
			var value = (elem.height.split("+").length > 1) ? elem.height.split("+")[1] : 0;
			config.height = GraphicUtils.wheight + value;
		} else {
			config.height = elem.height;
		}
		config.planeWidth = plane.planeWidth-150/*+1000*/;
		config.module = fu.configProperty("module", elem, config.planeWidth);
		config.rotation=fu.configProperty("rotation",config,0);
		config.scale=fu.configProperty("scale",config,1);
		config.alpha=fu.configProperty("alpha",config,1);
		config.filter=fu.configProperty("filter",config,"desaturate");
		config.scenes=fu.configProperty("scenes",config,"0,1,2,3");
		/*config.onClick=fu.configProperty("onClick",config,null);
		config.onMouseOver=fu.configProperty("onMouseOver",config,null);*/
		
		
		var xx=fu.configProperty("repeatX",config,1);
		var yy=fu.configProperty("repeatY",config,1);
		
		var marginb=fu.configProperty("marginb",config,0);
		var marginr=fu.configProperty("marginr",config,0);
		
		var mmb=GraphicUtils.wheight-(config.height*config.scale)-config.y;
		for(var ii=0;ii<yy;ii++)
		{
			config.y=mmb;
			mmb-=config.height-marginb;
			var mmr=config.x-100/*+500*/;
			
			for(var jj=0; jj<xx;jj++)
			{
				config.x=mmr;
				mmr+=((config.scale*config.width)+marginr);
				
				config.id=plane.id+"_"+config.seid+"_"+ii+"_"+jj;
				
				var ss=new Element(config);
				this.staticElements.push(ss);
				ss.drawShape(resource);
				GraphicUtils.stage.addChild(ss.shape);
			}
		}
	}
}

function SceneElement_initAnimatedElements(plane,initialPoint)
{
	
	for ( var j = 0; j < plane.animatedElements.length; j++) {
		var config = plane.animatedElements[j];
		var elem = getAnimatedElementByID(config.aeid);
		var resource = ResourceUtils.imageAssets[elem.image].result;
		var ob={};
		ob.scenes=fu.configProperty("scenes",config,"0,1,2,3");
		
		ob.planeWidth=plane.planeWidth-150/*+1000*/;
		ob.alpha=fu.configProperty("alpha",config,1);
		ob.scale=fu.configProperty("scale",config,1);
		ob.rotation=fu.configProperty("rotation",config,0);
		ob.filter=fu.configProperty("filter",config,"desaturate");
		
		elem.defAnimation=config.defAnimation;
		
		var xx=fu.configProperty("repeatX",config,1);
		var yy=fu.configProperty("repeatY",config,1);
		
		var marginb=fu.configProperty("marginb",config,0);
		var marginr=fu.configProperty("marginr",config,0);
		ob.flip=fu.configProperty("flip",config,false);
		ob.onClick=fu.configProperty("onClick",config,null);
		ob.onMouseOver=fu.configProperty("onMouseOver",config,null);
		ob.onMouseOut=fu.configProperty("onMouseOut",config,null);
		
		
		var mmb=GraphicUtils.wheight-(elem.frames.height*config.scale)-config.y;
		//console.log(GraphicUtils.wheight,(elem.frames.height*config.scale),config.y);
		
		for(var ii=0;ii<yy;ii++)
		{
			ob.y=mmb;
			mmb-=(elem.frames.height*config.scale)-marginb;
			var mmr=config.x-100/*+500*/;
			
			for(var jj=0; jj<xx;jj++)
			{
				ob.x=mmr;
				mmr+=((config.scale*elem.frames.width)+marginr);
				ob.id=plane.id+"_"+config.aeid+"_"+ii+"_"+jj;
				var aa=new AnimatedElement(ob);
				elem.images=[resource];
				aa.drawBitmap(elem);
				this.animatedElements.push(aa);
				//console.log("addingElementAt"+initialPoint);
				
				GraphicUtils.stage.addChild(aa.animBitmap);
				initialPoint++;
			}
		}
	}
}

function SceneElement_getElementById(type,id)
{
	//console.log(type,id,(type=="animated"));
	var a=[];
	if(type=="static"){
		a=this.staticElements.filter(function(element, index, array){
			return element.id==id;
		});
	}else if(type=="animated")
	{
		a=this.animatedElements.filter(function(element, index, array){
			
			return element.id==id;
		});
	}
	if(a.length>0) return a[0];
	else return null;
}

function SceneElement_updateSceneElements()
{
	for(var i=0; i<this.staticElements.length;i++)
	{
		var elem=this.staticElements[i];
		if( elem.scenes.indexOf(this.scene.toString())==-1){
			//GraphicUtils.stage.removeChild(elem.shape);
			//ar.slice(i,i+1);
			elem.shape.visible=false;
		}else{
			elem.shape.visible=true;
			elem.updateFilter();
		}
	}
	//ar=this.animatedElements;
	for(var i=0; i<this.animatedElements.length;i++)
	{
		var elem=this.animatedElements[i];
		if(elem.scenes.indexOf(this.scene.toString())==-1){
			//console.log(GraphicUtils.stage.removeChild(elem.animBitmap));
			//ar.slice(i,i+1);
			elem.animBitmap.visible=false;
		}else{
			elem.animBitmap.visible=true;
		//	elem.updateFilter();
		}
	}
	var position = managers.keyManager.xposition / GraphicUtils.wwidth;
	for(var i=0; i<this.audioElements.length;i++)
	{
		var elem=this.audioElements[i];
		if(elem.scenes.indexOf(this.scene.toString())==-1){
			//console.log(GraphicUtils.stage.removeChild(elem.animBitmap));
			//ar.slice(i,i+1);
			elem.pause(true);
			elem.active=false;
		}else{
			elem.active=true;
			elem.update(position);
		//	elem.updateFilter();
		}
	}
	
}

SceneElement.prototype.paint = SceneElement_paint;
SceneElement.prototype.initGraphicElements=SceneElement_initGraphicElements;
SceneElement.prototype.initStaticElements=SceneElement_initStaticElements;
SceneElement.prototype.initAnimatedElements=SceneElement_initAnimatedElements;
SceneElement.prototype.initSoundElements=SceneElement_initSoundElements;
SceneElement.prototype.getElementById=SceneElement_getElementById;
SceneElement.prototype.updateSceneElements=SceneElement_updateSceneElements;
SceneElement.prototype.update=SceneElement_update;