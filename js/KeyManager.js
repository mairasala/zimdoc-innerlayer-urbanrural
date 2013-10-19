
managers.keyManager=new function()
{
	var LEFTKEY=37;
	var RIGHTKEY=39;
	this.aceleration=0;
	this.speed=3;
	this.aceleration=1;
	this.xposition=0;
	this.isMoving=true;
	var me=this;
	this.firstAutomaticMove=true;
	
	this.updatePosition=function()
	{
		if(!this.isMoving)return false;
		else{
			//this.aceleration+=0.1;
			this.speed*=1.05;
			if(this.xposition+this.speed<GraphicUtils.wwidth && this.xposition+this.speed>0)
			{
				this.xposition+=this.speed;
				return true;
			}else{
				if(this.firstAutomaticMove){
					this.isMoving=false;
				}
				return false;
			}
			
		}
	}
	
	document.onkeydown=function(e)
	{
		if(!me.isMoving)me.isMoving=true;
		else return;
		var dir=0;
		var speed=5;
		switch(e.keyCode)
		{
			case LEFTKEY:
				//if(me.aceleration>0)me.aceleration=0;
				//me.aceleration-=0.1;
				dir=-1;
				break;
				
			case RIGHTKEY:
				//if(me.aceleration<0)me.aceleration=0;
				//me.aceleration+=0.1;
				dir=1;
				break;
		}
		me.speed=speed*dir;
		
		console.log(me.xposition+" + "+me.speed+"="+(me.xposition+me.speed)+" < "+GraphicUtils.wwidth);
		
		
	}
	document.onkeyup=function(e)
	{
		me.isMoving=false;
	}
	
}

