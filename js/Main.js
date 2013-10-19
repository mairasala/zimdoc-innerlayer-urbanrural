var imageAssets, soundAssets;
var GraphicUtils={};
var ResourceUtils={};
var fu=new FunctionUtils();
var im=new InteractiveManager();
var brightness = 0;
var contrast = 0;
var faderCounter = 0;
var windows = [];
var staticElements = [];
var soundElements = [];
var stageElements=[];
var managers = {};


function init() {
	if (window.top != window) {
		document.getElementById("header").style.display = "none";
	}

	document.getElementById("loader").className = "loader";

	var canvas = document.getElementById("testCanvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	GraphicUtils.stage = new Stage(canvas);

	// grab canvas width and height for later calculations:
	GraphicUtils.wwidth = canvas.width;
	GraphicUtils.wheight = canvas.height;
	ResourceUtils.imageAssets = {};
	ResourceUtils.soundAssets = {};

	loader = new PreloadJS();
	loader.useXHR = false;
	// XHR loading is not reliable when running locally.
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.installPlugin(createjs.SoundJS);
	loader.loadManifest(manifest);
	GraphicUtils.stage.autoClear = false;
}

function handleFileLoad(event) {
	console.log("handleFileLoad:"+event.id);
	if (event.type == "image") {
		ResourceUtils.imageAssets[event.id] = event;
	} else if (event.type == "sound") {
		ResourceUtils.soundAssets[event.id] = event;
	}
}

function handleComplete() {
	
	for(var i=0; i<stagesDB.length; i++)
	{
		var s=new StageElement(stagesDB[i].scenes);
		stageElements.push(s);
		console.log(stagesDB[i].id+" "+stagesDB[i].scenes.length);
		s.nextScene();
	}
	im.init();
	
	document.getElementById("loader").className = "";
	
	GraphicUtils.stage.enableMouseOver();

	GraphicUtils.stage.update();

	Ticker.setFPS(40);
	Ticker.addListener(window);
	
}

function tick() {
	var b = managers.keyManager.updatePosition();
	var position = managers.keyManager.xposition / GraphicUtils.wwidth;
	if(b)
	{
		for(var ii=0; ii<stageElements.length;ii++)
		{
			stageElements[ii].updateActiveScene(position);
		}
	}
	
	if (brightness > -85) {

		if (faderCounter % 10 == 0) {
			brightness--;
			contrast += 0.5;
		}
	}

	faderCounter++;
	if (brightness > -85) {

		if (faderCounter % 10 == 0) {
			brightness--;
			contrast += 0.5;
		}
	}

	GraphicUtils.stage.update();
}

function getFilter(filter) {
	//console.log(filter);
	var cm = new createjs.ColorMatrix();
	var colorFilter;
	
	switch(filter){
	case "bright":
		//console.log("bright");
		if(!im.isNight)cm.adjustColor(-40, 40, 0, 0);
		else cm.adjustColor(-95, 10, 10, 0);
		colorFilter = new createjs.ColorMatrixFilter(cm);
		break;
		
	case "desaturate":
		if(!im.isNight)cm.adjustColor(-40, 40, 0, 0);
		else cm.adjustColor(-95, -10, 0, 0);
		colorFilter = new createjs.ColorMatrixFilter(cm);
		break;
	case "grey":
		if(!im.isNight)cm.adjustColor(-80, -50, 0, 0);
		else cm.adjustColor(-90, -60, 0, 0);
		colorFilter = new createjs.ColorMatrixFilter(cm);
		break;
	case "low":
		if(!im.isNight)cm.adjustColor(-40, -30, 0, 0);
		else cm.adjustColor(-90,-60, 0, 0);
		colorFilter = new createjs.ColorMatrixFilter(cm);
		break;
	case "none":
	default:
		if(!im.isNight)cm.adjustColor(-30, 40, 20, -10);
		else cm.adjustColor(-75, 40, 20, -10);
		colorFilter = new createjs.ColorMatrixFilter(cm);
		break;
	}
	return colorFilter;
}