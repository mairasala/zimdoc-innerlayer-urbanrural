var manifest=[ {src:"img/cecil_exercise.png",id:"cecilExercise"},
               {src :"media/music.ogg", id:"cecil"},
               {src :"media/radio.ogg", id:"radio"},
               {src :"media/ST_Zimbabwe_song_cut.oggvorbis.ogg", id:"zanuSong"},
			   {src :"media/smith_.ogg", id:"smithAudio"},
               {src :"img/figure_sprite.png",id : "urbanLady"}, 
               {src :"img/sky_.jpg",id :"sky"}, 
               {src :"img/house.png",id :"house"}, 
               {src :"img/floor.jpg",id :"floor"},
               /*{src :"img/roadB.png",id :"roadB"},*/
               {src :"img/pole.png",id :"pole"},
               {src:"img/loan1.png",id:"loan1"},
               {src:"img/loan2.png",id:"loan2"},
               {src:"img/hut2.png",id:"hut"},
               {src:"img/Hill.png",id:"hill"},
               /*{src:"img/human_sprite.png",id:"human"},*/
               {src:"img/human_sprite2.png",id:"human2"},
               {src:"img/car.png",id:"car"},
               {src:"img/donkey_sprite.png",id:"donkey"},
               {src:"img/cracks.png",id:"cracks"},
               {src:"img/farmhouse.png",id:"farmhouse"},
               {src:"img/fire.png",id:"fire"},
               /*{src:"img/newspaper_sprite.png",id:"newsman"},*/
               {src:"img/hutHover.png",id:"hutHover"},
               {src:"img/cow.png",id:"cow"},
               {src:"img/tax.png",id:"tax"},
               {src:"img/ruralChurch.png",id:"church"},
               {src:"img/cloud_animation.png",id:"cecilAnimation"},
               /*{src:"img/working_the_land.png",id:"workerLand"},*/
               {src:"img/Washing.png",id:"washingLady"},
               {src:"img/city.png",id:"city"},
               {src:"img/cityAdds.png",id:"cityAdds"},
               {src:"img/poleLight.png",id:"lightPole"},
               {src:"img/maiseSprite.png",id:"maise"},
               {src:"img/tobacoSprite.png",id:"tobaco"},
               {src:"img/basket_sprite.png",id:"basketWorker"},
               {src:"img/enchadaSprite.png",id:"encahdaWorker"},
               {src:"img/zanureducation.png",id:"zanuReducation"},
               {src:"img/servent_chef.png",id:"chefservent"},
               {src:"img/beerhall.png",id:"beerhall"},
               {src:"img/goat.png",id:"goat"},
               {src:"img/figure1.png",id:"figure1"},
               {src:"img/goat_switch.png",id:"hutHover2"},
               {src:"img/cow_switch.png",id:"hutHover1"},
               {src:"img/figure2.png",id:"figure2"},
               {src:"img/campfire.png",id:"campfire"},
               {src:"img/radio.png",id:"radio"},
               {src:"img/bus.png",id:"bus"},
               {src:"img/tvLight.png",id:"tv"},
               {src:"img/houseBkg.jpg",id:"houseBkg"},
               {src:"img/townChurch.png",id:"townChurch"},
               {src:"img/aroundFire.png",id:"aroundFire"},
               {src:"img/animateUrbanLady.png",id:"walkUrbanLady"}
             ];


var staticElementsDB=[
                    {id:"sky", width:3172, height:"auto",image:"sky"},
                    {id:"ground",width:"auto+330",height:360,image:"floor",module:330},
                    {id:"cracks",width:2684,height:360,image:"cracks"},
                    /*{id:"roadB",width:"auto+330",height:57,image:"roadB",module:330},*/
  					{id:"hill",width:1469,height:400,image:"hill"},
  					{id:"house",width:274,height:150,image:"house"},
  					{id:"loan1",width:252,height:60,image:"loan1"},
  					{id:"loan2",width:252,height:57,image:"loan2"},
  					{id:"pole",width:93,height:261,image:"pole"},
  					{id:"hut",width:267,height:200,image:"hut"},
  					{id:"hutHover",width:262,height:200,image:"hutHover"},
  					{id:"car",width:357,height:200,image:"car"},
  					{id:"farmhouse",width:299,height:175,image:"farmhouse"},
  					{id:"church",width:339,height:270,image:"church"},
  					{id:"cow",width:113,height:94,image:"cow"},
  					{id:"hutHover1",width:113,height:94,image:"hutHover1"},
  					{id:"city",width:1067,height:300,image:"city"},
  					{id:"cityAdds",width:1067,height:300,image:"cityAdds"},
  					{id:"lightPole",width:47,height:227,image:"lightPole"},
  					{id:"cecilExercise",width:"auto+1000",height:500,image:"cecilExercise"},
					{id:"zanuReducation",width:"auto+1000",height:500,image:"zanuReducation"},
  					{id:"beerhall",height:221,width:437,image:"beerhall"},
  					{id:"goat",height:174,width:202,image:"goat"},
  					{id:"hutHover2",height:174,width:202,image:"hutHover2"},
  					{id:"figure1",height:150,width:62,image:"figure1"},
  					{id:"figure2",height:150,width:135,image:"figure2"},
  					{id:"radio",height:103,width:66,image:"radio"},
  					{id:"bus",height:188,width:319,image:"bus"},
  					{id:"houseBkg",height:72,width:170,image:"houseBkg"},
  					{id:"townChurch",height:366,width:264,image:"townChurch"}
  					];


//var soundElementsDB=[{id:"rural",x:0,attack:0,sustain:1500,release:800,volume:0.5,loop:true,file:"rural",planeWidth:3334}];

var animationElementsDB = [ {
	id : "urbanLady",
	image : "urbanLady",
	frames : {
		regX : 0,
		height : 219,
		count : 4,
		regY : 0,
		width : 150
	},
	animations : {
		arm : [ 0, 3, "arm", 10 ]
	}
}/*,{
	id : "human",
	image : "human",
	frames : {
		regX : 36,
		regY : 50,
		height : 100,
		width :72,
		count : 5
	},
	animations : {
		walk : [ 0, 4, "walk", 6 ]
	}
} */,{
	id : "human2",
	image : "human2",
	frames : {
		regX : 85,
		regY : 150,
		height : 300,
		width :168,
		count : 2
	},
	animations : {
		walk : [ 0, 1, "walk", 16 ]
	}
},{
	id : "donkey",
	image : "donkey",
	frames : {
		regX : 0,
		regY : 0,
		height : 300,
		width :298,
		count : 2
	},
	animations : {
		nod : [ 0, 1, "nod", 22 ]
	}
},{
	id : "fire",
	image : "fire",
	frames : {
		regX : 0,
		regY : 0,
		height : 300,
		width :686,
		count : 3
	},
	animations : {
		burn : [ 0, 2, "burn", 10 ]
	}
}/*,{
	id : "newsman",
	image : "newsman",
	frames : {
		regX : 62,
		regY : 92,
		height : 183,
		width :123,
		count : 6
	},
	animations : {
		walk : {frames:[0,1,2,3,4,5],frequency:20}
	}
}*/,{
	id : "tax",
	image : "tax",
	frames : {
		regX : 30,
		regY : 30,
		height : 60,
		width :90,
		count : 4
	},
	animations : {
		taxup : [0,3,false,30]
	}
},{
	id : "cecilAnim",
	image : "cecilAnimation",
	frames : {
		regX :0 ,
		regY : 0,
		height : 243,
		width :803,
		count : 8
	},
	animations : {
		slideshow : [1,7,"slideshow",50]
	}
}/*,{
	id : "workerLand",
	image : "workerLand",
	frames : {
		regX :0 ,
		regY : 0,
		height : 207,
		width :200,
		count : 22
	},
	animations : {
		work : [0,21,"work",10]
	}
}*/,{
	id : "washingLady",
	image : "washingLady",
	frames : {
		regX :0 ,
		regY : 0,
		height : 300,
		width :230,
		count : 2
	},
	animations : {
		wash : [0,1,"wash",20]
	}
},{
	id : "maise",
	image : "maise",
	frames : {
		regX :85 ,
		regY : 85,
		height : 169,
		width :169,
		count : 3
	},
	animations : {
		grow : [0,2,false,20]
	}
},{
	id : "tobaco",
	image : "tobaco",
	frames : {
		regX :89 ,
		regY : 85,
		height : 169,
		width :178,
		count : 3
	},
	animations : {
		grow : [0,2,false,20]
	}
},{
	id : "basketWorker",
	image : "basketWorker",
	frames : {
		regX :64 ,
		regY : 100,
		height : 200,
		width :128,
		count : 7
	},
	animations : {
		"work" : [0,6,"work",20]
	}
},{
	id : "encahdaWorker",
	image : "encahdaWorker",
	frames : {
		regX :85 ,
		regY : 99,
		height : 198,
		width :171,
		count : 9
	},
	animations : {
		"work" : [0,8,"work",15]
	}
},{
	id : "chefservent",
	image : "chefservent",
	frames : {
		regX :75 ,
		regY : 75,
		height : 157,
		width :150,
		count : 10
	},
	animations : {
		serve : [7,9,"serve",10],
		walk:[0,6,"walk",10]
	}
},{
	id : "campfire",
	image : "campfire",
	frames : {
		regX :80 ,
		regY : 75,
		height : 150,
		width :159,
		count : 3
	},
	animations : {
		"burn" : [0,2,"burn",15]
	}
},{
	id : "tv",
	image : "tv",
	frames : {
		regX :45 ,
		regY : 26,
		height : 52,
		width :90,
		count : 2
	},
	animations : {
		"tv" : [0,1,"tv",10]
	}
},{
	id : "aroundFire",
	image : "aroundFire",
	frames : {
		regX :74 ,
		regY : 69,
		height : 138,
		width :148,
		count : 2
	},
	animations : {
		"talk" : [0,1,"talk",20]
	}
},{
	id : "walkUrbanLady",
	image : "walkUrbanLady",
	frames : {
		regX :24 ,
		regY : 58,
		height : 97,
		width :49,
		count : 3
	},
	animations : {
		"walk" : [0,2,"walk",20]
	}
}
//
];

var stagesDB=[{id:"common", scenes:[{planes:[{id:"planeSky",planeWidth:2172,staticElements:[{seid:"sky",x:0,y:0,scale:1,filter:"bright"},
                                                                                            {seid:"cecilExercise",x:100,y:320,scale:1,filter:"bright",alpha:0},
                                                                                            {seid:"zanuReducation",x:100,y:320,scale:1,filter:"bright",alpha:0}]},
                                             {id:"planeClouds",planeWidth:2272,animatedElements:[{aeid:"cecilAnim",scale:1,x:150,y:500,alpha:0.8,scenes:"0"}]},
                                         {id:"planeGround",planeWidth:4334,staticElements:[{seid:"ground",x:0,y:0,scale:1},
                                                                                           {seid:"cracks",x:0,y:0,scale:1,alpha:0}]
                                                                       },
                                          ],
                                          soundPlanes:[]}
			]},
            {id:"urban",scenes:[{planes:[{id:"planeCity",planeWidth:2572,staticElements:[{seid:"city",x:1612,y:360,onMouseOver:"hoverCity,over",onMouseOut:"hoverCity,out",scale:0.9},
																						 {seid:"cityAdds",x:1612,y:360,scale:0.9, alpha:1,scenes:"1"}]},
                                         {id:"planeHouseBack2TV",planeWidth:4054,staticElements:[{seid:"houseBkg",x:2839,y:350,repeatX:9,marginr:45, scale:0.25}],
                															     animatedElements:[{aeid:"tv",x:3220,y:350,scale:0.25,defAnimation:"tv",scenes:"1"}]}, 
                                         {id:"planeHouseBack2",planeWidth:4054,staticElements:[{seid:"house", x:2830,y:345,repeatX:9,marginr:19,scale:0.25,onMouseOver:"hoverHouse,over",onMouseOut:"hoverHouse,out"},
                                                                                               {seid:"loan1", x:2833,y:335,repeatX:5,marginr:112,scale:0.25},
                                                                                                {seid:"loan2", x:2920,y:335,repeatX:4,marginr:112,scale:0.25},
                                                                                                {seid:"pole", x:3250, y:325,repeatX:1,marginr:512,scale:0.25},
                                                                                                {seid:"lightPole", x:2900,y:335,repeatX:1,marginr:170,scale:0.25}]},
                                         {id:"planeHouseBack1TV",planeWidth:4064,staticElements:[{seid:"houseBkg",x:2860,y:320,repeatX:6,marginr:63, scale:0.4}],
                                                                                 animatedElements:[{aeid:"tv",x:3037,y:313,repeatX:2,marginr:365,scale:0.4,defAnimation:"tv",scenes:"1"}]}, 
                                         {id:"planeHouseBack1",planeWidth:4064,staticElements:[{seid:"house", x:2845,y:305,repeatX:6,marginr:22,scale:0.4,onMouseOver:"hoverHouse,over",onMouseOut:"hoverHouse,out"},
                                                                                              {seid:"loan1", x:2850,y:288,repeatX:3,marginr:163,scale:0.4},
                                                                                              {seid:"loan2", x:2981,y:288,repeatX:3,marginr:163,scale:0.4},
                                                                                              {seid:"pole", x:3470, y:278,repeatX:1,marginr:512,scale:0.4}]},
                                         {id:"planeHouseBackTV",planeWidth:4074,staticElements:[{seid:"houseBkg",x:2882,y:285,repeatX:4,marginr:90, scale:0.6}],
                                                                                animatedElements:[{aeid:"tv",x:3340,y:250,repeatX:1,marginr:160,scale:0.6,defAnimation:"tv",scenes:"1"}]},
                                         {id:"planeHouseBack",planeWidth:4074,staticElements:[/*{seid:"car", x:2300,y:160,scale:0.45},*/
                                                                                              {seid:"house", x:2860,y:245,repeatX:4,marginr:28,scale:0.6,onMouseOver:"hoverHouse,over",onMouseOut:"hoverHouse,out"},
                                                                                              {seid:"loan1", x:2868,y:225,repeatX:2,marginr:230,scale:0.6},
                                                                                              {seid:"loan2", x:3060,y:225,repeatX:2,marginr:231,scale:0.6},
                                                                                              {seid:"pole", x:3006, y:225,repeatX:1,marginr:231,scale:0.6},
                                                                                              {seid:"beerhall",x:3700,y:270,scale:0.5},
                                                                                              {seid:"townChurch", x:2650,y:225,repeatX:1,marginr:170,scale:0.7},
                                                                                              ],
                                                                                animatedElements:[{aeid:"walkUrbanLady",x:2820,y:135,scenes:"0",defAnimation:"walk_h",scale:0.85,flip:true}]},
                                          {id:"planeHouseFrontTV",planeWidth:4084,staticElements:[{seid:"houseBkg",x:2910,y:185,repeatX:3,marginr:108, scale:0.8}],
                                                                                 animatedElements:[{aeid:"tv",x:3000,y:170,repeatX:1,marginr:160,scale:1,defAnimation:"tv",alpha:1,scenes:"1"}]},                                                    
                                          {id:"planeHouseFront",planeWidth:4084, animatedElements:[{aeid:"chefservent",x:3450,y:50,scale:0.7,defAnimation:"walk",repeatX:6,marginr:-45,scenes:"0"}
                                                                                                   /*{aeid:"grant",x:2400,y:150,scale:1,defAnimation:"run",repeatX:6,marginr:30},*/
                                                                                                   /*{aeid:"newsman",x:3650,y:50,scale:0.6,defAnimation:"walk_h",repeatX:6,marginr:-5,flip:true}*/],
                                                                                  staticElements:[
                                                                                               {seid:"house", x:2880,y:170,repeatX:3,marginr:25,scale:0.8,alpha:1,onMouseOver:"hoverHouse,over",onMouseOut:"hoverHouse,out"},
                                                                                              
                                                                                               {seid:"loan1", x:2891,y:145,repeatX:2,marginr:289,scale:0.8},
                                                                                               {seid:"loan2", x:3135,y:145,scale:0.8},
                                                                                               {seid:"pole", x:3076,y:135,repeatX:1,marginr:170,scale:0.8},
                                                                                               {seid:"lightPole", x:3319,y:135,repeatX:1,marginr:170,scale:0.8},
                                                                                               {seid:"bus", x:3646, y:85,scale:1.1,filter:"low",scenes:"0"}
                                                                                              ]
                                                                               }                                                   
                                         ]
            				}
                                ]},
			 {id:"rural",scenes:[{planes:[{id:"planeHill",planeWidth:3572,staticElements:[{seid:"hill", x:320,y:300,scale:0.6,rotation:2,filter:"none"},{seid:"farmhouse", x:830,y:475,scale:0.6,}],
				 															animatedElements:[{aeid:"fire",x:830,y:470,scale:0.3,alpha:0},
				 															                  {aeid:"basketWorker",x:450,y:340,scale:0.4,repeatX:4, marginr:-20,defAnimation:"work",flip:true,scenes:"0"},
				 															                  {aeid:"encahdaWorker",x:690,y:410,scale:0.35,repeatX:4, marginr:-40,defAnimation:"work",flip:true,scenes:"0"},
				 															                 //encahdaWorker
				 															                  {aeid:"human2",x:860,y:280,scale:0.2,defAnimation:"walk_h",repeatX:3, rotation:10,marginb:-25,flip:true,scenes:"0"},
			                                                                	              /*{aeid:"maise",x:470,y:350,scale:0.3,repeatX:3, marginr:-20},*/
			                                                                	              {aeid:"maise",x:440,y:350,scale:0.4,repeatX:5, marginr:-40,flip:true},
			                                                                	              {aeid:"tobaco",x:680,y:400,scale:0.4,repeatX:4, marginr:-40,flip:true}]},
	                                                                                              
	                                          {id:"planeHutsBack",planeWidth:4134,staticElements:[{seid:"hut", x:810,y:250,repeatX:2,marginr:150,scale:0.4,onClick:"crack,hut",onMouseOver:"hoverHut,over",onMouseOut:"hoverHut,out"},
	                                                                                              {seid:"hutHover", x:810,y:250,repeatX:2,marginr:150,scale:0.4,alpha:0},
	                                                                                              {seid:"figure2",x:650,y:270,scale:0.4,scenes:"0"}
	                                                                                              ],
	                                                                              animatedElements:[{aeid:"tax",x:930,y:285,scale:0.6,alpha:0,repeatX:2,marginr:200}]},
	                                          {id:"planeHutsMiddle",planeWidth:4234,staticElements:[{seid:"hut", x:550,y:210,repeatX:2,marginr:600,scale:0.5,onClick:"crack,hut1",onMouseOver:"hoverHut,over",onMouseOut:"hoverHut,out"},
	                                                                                                {seid:"hutHover",x:550,y:210,repeatX:2,marginr:600,scale:0.5,alpha:0},
	                                                                                                {seid:"cow", x:1180,y:230,scale:0.6,onMouseOver:"hoverHut,over",onMouseOut:"hoverHut,out"},
	                                                                                                {seid:"hutHover1", x:1180,y:230,scale:0.6,alpha:0}/*,
	                                                                                                {seid:"figure1", x:980,y:220,scale:0.6}*/
	                                                                                                ],
	                                                                                animatedElements:[{aeid:"washingLady",x:920,y:190,scale:0.3,defAnimation:"wash",scenes:"0"}]},
	                                          {id:"planeHuts",planeWidth:4334,staticElements:[{seid:"hut", x:650,y:190,repeatX:1,marginr:110,scale:0.7,onClick:"crack,hut2",onMouseOver:"hoverHut,over",onMouseOut:"hoverHut,out"},
	                                                                                          {seid:"hutHover", x:650,y:190,repeatX:1,marginr:110,scale:0.7,alpha:0},
	                                                                                          {seid:"goat", x:820,y:130,scale:0.5,onMouseOver:"hoverHut,over",onMouseOut:"hoverHut,out"},
	                                                                                          {seid:"hutHover2", x:820,y:130,scale:0.5,alpha:0}
	                                                                                         ]},
	                                          {id:"planeHutsFront",planeWidth:4443,staticElements:[{seid:"hut", x:1000,y:140,repeatX:1,marginr:120,scale:0.9,onClick:"crack,hut3",onMouseOver:"hoverHut,over",onMouseOut:"hoverHut,out"},
	                                                                                               {seid:"hutHover",x:1000,y:140,repeatX:1,marginr:120,scale:0.9,alpha:0},
	                                                                                               {seid:"church", x:250,y:120,scale:1.1,onClick:"crack,church",onMouseOver:"hoverChurch,over",onMouseOut:"hoverChurch,out"},
	                                                                                               /*{seid:"figure2",x:640,y:70,scenes:"1",scale:0.8},*/
	                                                                                               {seid:"radio",x:755,y:60,scenes:"1",scale:0.4}
	                                                                                              ],
	                                                                               animatedElements:[{aeid:"aroundFire",x:700,y:25,scale:0.8,defAnimation:"talk",scenes:"1"},
	                                                                                                 {aeid:"campfire",x:700,y:30,scale:0.5,defAnimation:"burn",scenes:"1",onMouseOver:"hoverRadio,over",onMouseOut:"hoverRadio,out"}]}
	                                ],
	                                soundPlanes:[{id:"chants",planeWidth:4234,soundElements:[/*{id:"chant1",x:0,attack:0,sustain:1500,release:800,volume:0.5,loop:true,file:"rural",scenes:"0"}*/
                                                                                             ]}]
			 }]
			 
			 }];


this.getStaticElementByID = function(id) {
	var returnvalue = null;
	for ( var i = 0; i < staticElementsDB.length; i++) {
		if (staticElementsDB[i].id == id) {
			returnvalue = staticElementsDB[i];
		}
	}
	return returnvalue;
}

this.getAnimatedElementByID = function(id) {
	var returnvalue = null;
	for ( var i = 0; i < animationElementsDB.length; i++) {
		if (animationElementsDB[i].id == id) {
			returnvalue = animationElementsDB[i];
		}
	}
	return returnvalue;
}