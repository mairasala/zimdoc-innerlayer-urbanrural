var assets;
var stage;
var w, h;
var sky, grant, ground, hill, hill2;
var brightness = 0;
var contrast = 0;
var faderCounter = 0;
var windows = [];
var mask;
var plane1Houses=[];

function init() {
	if (window.top != window) {
		document.getElementById("header").style.display = "none";
	}

	document.getElementById("loader").className = "loader";

	var canvas = document.getElementById("testCanvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	stage = new Stage(canvas);

	spriteSheet = {
		"animations" : {
			"arm" : [ 0, 3, "arm", 10 ]
		},
		"images" : [ "img/figure_sprite.png" ],
		"frames" : {
			"regX" : 0,
			"height" : 219,
			"count" : 4,
			"regY" : 0,
			"width" : 150
		}
	};

	var ss = new SpriteSheet(spriteSheet);
	grant = new BitmapAnimation(ss);

	// Set up looping
	// ss.getAnimation("arm").next = "arm";
	grant.gotoAndPlay("arm");

	// Position the Grant sprite
	grant.x = -200;

	// grant.scaleX = grant.scaleY = 0.8;

	// grab canvas width and height for later calculations:
	w = canvas.width;
	h = canvas.height;
	grant.y = h - 240;
	assets = [];

	manifest = [ {
		src : "img/figure_sprite.png",
		id : "grant"
	}, {
		src : "img/sky_.jpg",
		id : "sky"
	}, {
		src : "img/house.png",
		id : "hill2"
	}, {
		src : "img/floor_r.jpg",
		id : "ground"
	}, {
		src : "img/pole.png",
		id : "pole"
	} ];

	loader = new PreloadJS();
	loader.useXHR = false;
	// XHR loading is not reliable when running locally.
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
	stage.autoClear = false;
}

function handleFileLoad(event) {
	assets.push(event);
	console.log("handleFileLoad:" + event.id)
}

function handleComplete() {
	console.log("handleComplete:" + assets.length);
	for ( var i = 0; i < assets.length; i++) {
		var item = assets[i];
		// loader.getResult(id);
		var id = item.id;
		var result = item.result;

		if (item.type == PreloadJS.IMAGE) {
			var bmp = new Bitmap(result);
		}

		switch (id) {
		case "sky":
			sky=new Element({x:0,y:0,width:2172,height:window.innerHeight,scale:1,planeWidth:2172});
			sky.drawShape(result);
			break;
		case "ground":
			ground = new Shape();
			var g = ground.graphics;
			g.beginBitmapFill(result);
			g.drawRect(0, 0, w + 330, 127);
			ground.y = h - 127;
			ground.filters = [ getFilter() ];
			ground.cache(0, 0, w + 330, 127);
			break;
		
		case "hill2":
			var ob={x:0,y:(h-280),width:547,height:300,scale:1,planeWidth:3334};
			hill2=new Element(ob);
			hill2.drawShape(result);
			var ww=274;
			var hh=150;
			var ss=50;
			var scale;
			for(var j=0; j<5;j++)
			{
				scale=0.6;
				//var ob={x:(162*j)+150,y:(h-320),width:274,height:150,scale:0.6,planeWidth:3334};
				var ob={x:((ww+ss)*scale*j)+40,y:(h-330),width:ww,height:hh,scale:scale,planeWidth:3334};
				var house=new Element(ob);
				house.drawShape(result);
				plane1Houses.push(house);
				
			}
			
			for(var j=0; j<3;j++)
			{
				scale=1;
				//var ob={x:324*j+50,y:(h-270),width:274,height:150,scale:1,planeWidth:3334};
				var ob={x:((ww+ss)*scale*j)+(ss*scale),y:(h-270),width:ww,height:hh,scale:scale,planeWidth:3334};
				var house=new Element(ob);
				house.drawShape(result);
				plane1Houses.push(house);
				
			}
			
			break;
			
		case "pole":
			for(var j=1; j<3;j++)
			{
				var ob={x:(324*j)-20,y:(h-350),width:93,height:261,scale:1,planeWidth:3334};
				var house=new Element(ob);
				house.drawShape(result);
				plane1Houses.push(house);
				console.log(ob.x);
			}
			break;
		}
	}

	document.getElementById("loader").className = "";

	if (grant == null) {
		// console.log("Can not play. Grant sprite was not loaded.");
		return;
	}
	stage.enableMouseOver();

	// stage.addChild(sky, ground, hill, hill2, grant);
	stage.addChild(sky.shape, ground);
	for(var j=0;j<plane1Houses.length;j++)
	{
		stage.addChild(plane1Houses[j].shape);
	}
	stage.addChild(grant);
	/*stage.addChild(plane1Houses[0].shape,grant);
	stage.addChild(plane1Houses[1].shape,grant);
	stage.addChild(plane1Houses[2].shape,grant);*/
	//stage.onMouseDown = stageMouseDown;
	//stage.onMouseUp = stageMouseUp;
	/*grant.onMouseOver = handleMouse;
	grant.onMouseOut = handleMouse;
	grant.onClick = openVideoWindows;*/

	stage.update();

	Ticker.setFPS(40);
	Ticker.addListener(window);

}

function openVideoWindows(e) {
	for ( var i = 0; i < 3; i++) {
		var strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=yes,width=100,height=100,left="
				+ (i * 50) + ",top=" + (i * 50);
		var w = window.open("", "mywindow" + i, strWindowFeatures);
		// myPopup = window.createPopup();
		w.blur();
		windows.push(w);
		// windows.push(jQuery.popunder(''));
	}
	window.focus();
	setTimeout(loadVideo, 2000);
}

function loadVideo() {
	windows[0].location.href = 'video.html';
	windows[0].resizeTo(320, 240);
	windows[0].focus();
	// window.focus();
}

function handleMouse(evt) {
	switch (evt.type) {
	case "onMouseOver":
		evt.target.alpha = 0.5;
		break;

	case "onMouseOut":
		evt.target.alpha = 1;
		break;
	}
}

function stageMouseDown() {
	// grant.gotoAndPlay("arm");
	mask = new Shape();
	mask.x = 100;
	mask.y = h / 2;
	mask.graphics.beginStroke("#FF0").setStrokeStyle(5)
			.arc(stage.mouseX - hill2.x, stage.mouseY - hill2.y, 100, 0,
					Math.PI * 2);
	console.log(mask.x + " " + mask.y);
	hill2.mask = mask;
}

function stageMouseUp() {
	hill2.mask = null;
}

function tick() {
	var skyW = 2172;
	var cityW = 3334;
	var floorW = 7000;
	var outside = w + 20;

	if (sky != undefined && hill2 != undefined && ground != undefined
			&& grant != undefined) {
		// var position = grant.x+runningRate;
		// grant.x = (position >= outside) ? -200 : position;

		// console.log(stage.mouseX);
		var porcentPosition = stage.mouseX / w;
		sky.move(porcentPosition,w);
		/*plane1Houses[0].move(porcentPosition,w);
		plane1Houses[1].move(porcentPosition,w);
		plane1Houses[2].move(porcentPosition,w);*/
		//hill2.move(porcentPosition,w);
		for(var jj=0;jj<plane1Houses.length;jj++)
		{
			plane1Houses[jj].move(porcentPosition,w);
		}
		//hill2.x = -(cityW - w) * porcentPosition;
		grant.x = 200;

		// console.log(sky.width);
		ground.x = -((cityW - w) * porcentPosition) % 330;
		faderCounter++;
		if (brightness > -85) {

			if (faderCounter % 10 == 0) {
				brightness--;
				contrast += 0.5;

			}
			if (faderCounter % 10 == 2) {
				sky.updateFilter();
				// sky.cache(0,0, skyW, h);
			}
			if (faderCounter % 10 == 4) {
				// hill2.updateCache();
				// hill2.filters=[getFilter()];
				// hill2.cache(0,0,cityW,563);
			}
			if (faderCounter % 10 == 6) {
				ground.updateCache();
				ground.filters = [ getFilter() ];
				// ground.cache(0,0,w+330,127);
			}

		}
	}

	stage.update();
}

function getFilter() {
	var cm = new createjs.ColorMatrix();
	cm.adjustColor(brightness, contrast, 0, 0);
	var colorFilter = new createjs.ColorMatrixFilter(cm);
	return colorFilter;
}