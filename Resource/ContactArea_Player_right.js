
//stick 과 puck 의 접촉면을 check 하는 div 생성 class
//player stick 의 senso 우측 충돌동작 check

class ContactArea_Player_right extends ContactArea_Com{
	constructor(container, x, y, width, height, velX, velY){
		super(container, x, y, width, height, velX, velY);
	}

	tick(){
		this.x = parseInt(stick2.div.style.left)+75;
	}
}