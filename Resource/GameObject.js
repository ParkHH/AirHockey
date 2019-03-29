
//에어하키 객체생성 클래스

class GameObject{
	constructor(container, x, y, width, height, velX, velY, targetX, targetY, bg, src){
		this.container = container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.targetX=targetX;
		this.targetY=targetY;
		this.src=src;
		this.bg=bg;
		


		if(this.src!=""){
			/*
			this.img=document.createElement("img");
			this.img.src=this.src;
			this.img.style.width=this.width+"px";
			this.img.style.height=this.height+"px";
			this.img.style.left=this.x+"px";
			this.img.style.top=this.y+"px";
			this.img.style.position="absolute";
			this.img.style.borderRadius=40+"px";
			*/
		
			this.div=document.createElement("div");
			this.div.style.width=this.width+"px";
			this.div.style.height=this.height+"px";
			this.div.style.left=this.x+"px";
			this.div.style.top=this.y+"px";
			this.div.style.position="absolute";
			this.div.style.backgroundImage="url('"+this.src+"')";
			this.div.style.backgroundSize=100+"%"+100+"%";
			this.div.style.borderRadius=40+"px";

			this.container.appendChild(this.div);


			//this.container.appendChild(this.img);

		}else{
			this.div=document.createElement("div");
			this.div.style.width=this.width+"px";
			this.div.style.height=this.height+"px";
			this.div.style.left=this.x+"px";
			this.div.style.top=this.y+"px";
			this.div.style.position="absolute";
			this.div.style.background=this.bg;

			this.container.appendChild(this.div);
		}
		
	}

	tick(){
		this.x = this.x+this.velX;
		this.y = this.y+this.velY;
	}

	render(){
		this.div.style.left = this.x+"px";
		this.div.style.top = this.y+"px";
	}
}