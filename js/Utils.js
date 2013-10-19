var InteractiveManager = function() {
	this.crackClickedElements = [];
	this.hoverHuts=[];
	this.hoverHutsAnim=[];
	this.hoverHutsStatis=[];
	this.crackClics = 5;
	this.crackElement;
	this.churchSound;
	this.churchSound2;
	this.radioSound;
	this.radioAnimation=[];
	this.hoverChurchElements=[];
	this.hoverChurchElementsAnimated=[];
	this.farmElementsAnimated=[];
	this.fire;
	this.cityVideo;
	//this.cityVideo2;
	this.citySound;
	this.cityWorkers=[];
	this.isNight=false;
	

	this.init = function() {
		this.crackElement = stageElements[0].scenes[0]
				.getElementById("static", "planeGround_cracks_0_0");
		
		var scene=stageElements[2].scenes[0];
		var scene2=stageElements[1].scenes[0];
		
		this.hoverHuts=scene.staticElements.filter(function(element, index, array){
			return ((element.id.indexOf("hut")!=-1 && element.id.indexOf("hutHover")==-1)||element.id.indexOf("cow")!=-1||element.id.indexOf("goat")!=-1);
		});
		this.hoverHutsAnim=scene.animatedElements.filter(function(element, index, array){
			return element.id.indexOf("tax")!=-1;
		});
		
		this.hoverHutsStatis=scene.staticElements.filter(function(element, index, array){
			return element.id.indexOf("hutHover")!=-1;
		});
		
		this.hoverChurchElements=scene.staticElements.filter(function(element, index, array){
			return element.id.indexOf("churchHover")!=-1;
		});
		
		this.farmElementsAnimated=scene.animatedElements.filter(function(element, index, array){
			return (element.id.indexOf("maise")!=-1||element.id.indexOf("tobaco")!=-1);
		});
		
		this.cityWorkers=scene2.animatedElements.filter(function(element, index, array){
			return (element.id.indexOf("servent")!=-1);
		});
		this.fire=scene.getElementById("animated","planeHill_fire_0_0");
		
		this.hoverChurchElementsAnimated=[{id:"cecilAnim",anim:"slideshow",stage:0}];
		
		this.churchSound=new SoundElement({id:"chant1",x:0,attack:0,sustain:1500,release:800,volume:1,loop:false});
		this.churchSound.active=true;
		this.churchSound.init("cecil");
		
		this.churchSound2=new SoundElement({id:"chant2",x:0,attack:0,sustain:1500,release:800,volume:1,loop:false});
		this.churchSound2.active=true;
		this.churchSound2.init("zanuSong");
		
		this.radioSound=new SoundElement({id:"radio",x:0,attack:0,sustain:1500,release:800,volume:1,loop:false});
		this.radioSound.init("radio");
		this.radioSound.active=true;
		
		this.citySound =new SoundElement({id:"smithAudio",x:0,attack:0,sustain:1500,release:800,volume:1,loop:false});
		this.citySound.init("smithAudio");
		this.citySound.active=true;
		
		this.radioAnimation=scene.animatedElements.filter(function(element, index, array){
			return element.id.indexOf("aroundFire")!=-1;
		});

		var introVideo =  document.getElementById("pioneers");
	//	var introVideo2=document.getElementById("smith");
		this.cityVideo =  new Bitmap (introVideo);
		//this.cityVideo2=new Bitmap(introVideo2);
	/*	this.cityVideo2.alpha=*/this.cityVideo.alpha=0;
		//this.cityVideo.scaleX=this.cityVideo.scaleY=3;
		this.cityVideo.scaleX=this.cityVideo.scaleY=5;
		//this.cityVideo2.scaleX=this.cityVideo2.scaleY=0.9;
		GraphicUtils.stage.addChildAt (this.cityVideo,2);
		//GraphicUtils.stage.addChildAt (this.cityVideo2,2);
	}
	this.crack = function(ob, par) {
		var id = par[0];
		//if (this.crackClickedElements.indexOf(id) == -1) {
			//this.crackClickedElements.push(id);
			this.crackElement.shape.alpha += 1 / this.crackClics;
			
			var frame=Math.ceil(this.crackElement.shape.alpha*2);
			if (this.crackElement.shape.alpha >=1) {
				this.crackElement.shape.alpha=1;
				this.isNight=true;
				this.updateFilter();
				return;
			}
			console.log("-----------------"+frame);
			
			for(var i=0; i<this.farmElementsAnimated.length;i++)
			{
				var n=(i%2==0)?frame:frame+3;
				
				var e=this.farmElementsAnimated[i];
				e.changeAnimation(n,false);
				
			}
		//}
	}
	this.hoverHut=function(ob,par)
	{
		console.log(par);
		var a,a2,filter;
		if(par[0]=="over"){
			a=0;
			a2=1;
			filter="grey";
		}else{
			a=1;
			a2=0;
			filter=undefined;
		}
		
		for(var i=0; i<this.hoverHutsStatis.length;i++)
		{
			this.hoverHutsStatis[i].shape.alpha=a2;
		}
		for(i=0; i<this.hoverHuts.length;i++)
		{
			if(this.hoverHuts[i].id.indexOf("hut")==-1){
				//this.hoverHuts[i].shape.alpha=a;
			}
		}
		
		var elems=stageElements[2].scenes[0].staticElements;
		for(var i=0;i<elems.length;i++)
		{
			if(this.hoverHutsStatis.indexOf(elems[i])==-1 &&this.hoverHuts.indexOf(elems[i]==-1)){
				elems[i].updateFilter(filter);
			}
			//else elems[i].updateFilter(schoolFilter);
		}
		
	}
	
	this.hoverChurch=function(ob,event)
	{
		var frame=0;
		var alphaHover,filter,schoolFilter,exercise,sound,animatedElems;
		if(!this.isNight)
		{
			exercise =stageElements[0].scenes[0].getElementById("static", "planeSky_cecilExercise_0_0");
			animatedElems=this.hoverChurchElementsAnimated;
			sound=this.churchSound;
		}else{
			exercise =stageElements[0].scenes[0].getElementById("static", "planeSky_zanuReducation_0_0");
			sound=this.churchSound2;
			animatedElems=[];
		}
		if(event=="over"){
			sound.play(false);
			alphaHover=0.6;
				
			filter="grey";
			schoolFilter=undefined;
				
		}else{
			sound.pause(false);
			alphaHover=0;
				
			filter=undefined;
			schoolFilter="bright";
		}
			
		exercise.shape.alpha=alphaHover;
		var elems=stageElements[2].scenes[0].staticElements;
		for(var i=0;i<elems.length;i++)
		{
			if(elems[i]!=ob)elems[i].updateFilter(filter);
			else elems[i].updateFilter(schoolFilter);
		}
			
		for(var i=0;i<animatedElems.length;i++)
		{
			var a=this.hoverChurchElementsAnimated[i];
			var scene=stageElements[a.stage].scenes[0];
			if(event=="over"){
				frame=a.anim;
			}
			var n=scene.animatedElements.filter(function(element, index, array){
				return element.id.indexOf(a.id)!=-1;
			});
			n[0].changeAnimation(frame,(frame!=0));
				
		}
	}
	
	this.hoverCity=function(ob,params)
	{
		console.log("hoverCity: "+this.isNight);
		if(this.isNight){
			//var scene=;
		//	var adds=stageElements[1].scenes[0].getElementById("static","planeCity_cityAdds_0_0");
		//	adds.shape.alpha=1;
			//adds.shape.alpha=(params[0]=="over")?1:0;
			
		}else{
		//var scene=stageElements[1].scenes[0];
		//var city=scene.getElementById("static","planeCity_city_0_0");
		var animation,filter,cityFilter;
		if(params[0]=="over")
		{
			this.cityVideo.x=0;
			this.cityVideo.y=-50;
			this.cityVideo.alpha=0.7;
			var introVideo =  document.getElementById("pioneers");
			animation="serve";
			introVideo.play();
			filter="grey";
			cityFilter="bright";
			
		}else{
			 document.getElementById("pioneers").pause();
			 this.cityVideo.alpha=0;
			 animation="walk";
			 filter=undefined;
			 cityFilter=undefined;
		}
		for(var i=0; i<this.cityWorkers.length;i++)
		{
			this.cityWorkers[i].changeAnimation(animation,true);
		}
		}
	}
	
	this.hoverHouse=function(ob, params)
	{
		if(this.isNight)
		{
			if(params[0]=="over")
			{
				this.citySound.play(false);
				/*this.cityVideo2.x=0;
				this.cityVideo2.y=-50;
				this.cityVideo2.alpha=0.7;
				var introVideo =  document.getElementById("smith");
				introVideo.play();*/

			}else{
				this.citySound.pause(false);
				/* document.getElementById("smith").pause();
				 this.cityVideo2.alpha=0;*/
			}
		}
	}
	
	this.updateFilter=function(){
		
		for(var j=0;j<stageElements.length;j++)
		{
			stageElements[j].nextScene();
		}
			
	}
	
	this.hoverRadio=function(ob,params)
	{
		var frame;
		if(params[0]=="over"){
			//playSound
			this.radioSound.play(false);
			frame=0;
		}else{
			this.radioSound.pause(false);
			frame="talk";
			//stopSound
		}
		
		for(var i=0; i<this.radioAnimation.length;i++)
		{
			this.radioAnimation[i].changeAnimation(frame,(params[0]!="over"));
		}
	}
}



var FunctionUtils = function() {

	this.configProperty = function(property, object, defaultValue) {

		if (object.hasOwnProperty(property)) {
			return object[property];
		} else {
			return defaultValue;
		}
	}
}