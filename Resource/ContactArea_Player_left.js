
//stick �� puck �� ���˸��� check �ϴ� div ���� class
//player stick �� sensor, ���� �浹���� check

class ContactArea_Player_left extends ContactArea_Com{
	constructor(container, x, y, width, height, velX, velY){
		super(container, x, y, width, height, velX, velY);
	}

	tick(){
		this.x = parseInt(stick2.div.style.left)-5;
	}
}