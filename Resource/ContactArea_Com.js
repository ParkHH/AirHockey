
//stick 과 puck 의 접촉면을 check 하는 div 생성 class
//Computer 의 stick 의 좌우측 충돌동작 check

class ContactArea_Com{
	constructor(container, x, y, width, height, velX, velY){
		this.container = container;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.velX=velX;
		this.velY=velY;

		this.div = document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.position="absolute";

		this.container.appendChild(this.div);
	}

	tick(){
		if(stick1.flagX){
			this.x += this.velX;
		}else{
			this.x -= this.velX;
		}
	}

	render(){
		this.div.style.left = this.x+"px";
	}

}