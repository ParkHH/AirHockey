
//stick �� puck �� ���˸��� check �ϴ� div ���� class
//Computer �� stick �� �¿��� �浹���� check

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