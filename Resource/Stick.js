
// 에어하키 Stick 을 만드는 클래스

class Stick extends GameObject{
	constructor(container, x, y, width, height, velX, velY, targetX, targetY, bg, src){
		super(container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
		this.flagX = true;
		this.hitFlag = false;
	}

	tick_com(){
		//Computer Stick 의 자동 움직임을 위한 조건
		if(this.flagX){
			this.x = this.x+this.velX;
		}else{
			this.x = this.x-this.velX;
		}
		
		//Computer Stick 의 자동 움직임 범위의 지정
		if(this.x>430 || this.x<180){
			this.flagX=!this.flagX;	
		}
	}
 

 // 사용자의 공격에 관한 Method 설정
	smash(){
		if(collisionCheck(this, puck)){
			puck.flagY=false;
			puck.velX = 0;
			puck.velY += 15;
			if(collisionCheck(player_left, puck)){
					puck.flagX=false;
					puck.flagY=false;
					puck.velY += 5;
					puck.velX += puck.velY;
					//alert("받아라 왼쪽공격!");
			}

			if(collisionCheck(player_right, puck)){
					puck.flagX=true;
					puck.flagY=false;
					puck.velY +=5;
					puck.velX +=puck.velY;
					//alert("받아라 오른쪽 공격!");
			}
		}
	}


// 컴퓨터의 자동 공격에 관한 Method 설정
	smash_com(){
		com_action_number = getRandom(2);
		if(com_action_number == 0){
			if(collisionCheck(this, puck)){
				puck.flagY=true;
				puck.velX = 0;
				puck.velY += 15;
			if(collisionCheck(left_area_com, puck)){
					puck.flagX=false;
					puck.flagY=true;
					puck.velY += 5;
					puck.velX +=puck.velY;
					//alert("받아라 왼쪽공격!");
			}
			if(collisionCheck(right_area_com, puck)){
					puck.flagX=true;
					puck.flagY=true;
					puck.velY +=5;
					puck.velX +=puck.velY;
					//alert("받아라 오른쪽 공격!");
			}
		}
		}
	}
}