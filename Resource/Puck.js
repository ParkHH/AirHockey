
// 에어하키 puck 을 만드는 클래스

class Puck extends GameObject{
	constructor(container, x, y, width, height, velX, velY, targetX, targetY, bg, src){
		super(container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
		this.flagX = true;
		this.flagY = true;
	}

	tick(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//Puck 의 X 축 움직임 변화
		if(this.flagX){												// 설정 flagX 값이 true 일때 우측이동
			if(this.velX<puck_max_speed){
				this.x = this.x+this.velX;							// puck 우측 이동식, velX 값을 기존 puck의 x위치에다가 더해줌
			}else{
				this.velX=puck_max_speed;
				this.x = this.x+this.velX;
			}
		}else{														// 설정 flagX 값이 flase 일때 좌측이동
			if(this.velX<puck_max_speed){
				this.x = this.x-this.velX;							// puck 좌측 이동식, velX 값을 기존 puck의 x위치에다가 빼줌
			}else{
				this.velX=puck_max_speed;
				this.x = this.x - this.velX;
			}
		}
		
	// 경기장 가로축 내에서 puck 의 운동범위를 지정한다.
		if(this.x>=530){ //|| this.x<120){				// puck 의 위치가 경기장 우측끝에 다다르면 
			this.flagX=false;										// x축 위치를 왼쪽으로 이동시키도록 flagX 를 전환
			if(this.velX>=3){
				if(this.velX>=3 && this.velY>=3){		// puck 의 속도가 x,y 모두 5이상이면
					this.velX-=1;									// puck 의 x 속도를 감소시킴
					this.velY-=1;									// puck 의 y 속도를 감소시킴
				}else{
					this.velX -= 1;
				}
			}
		}
			
		if(this.x<120){											// puck 의 위치가 경기장 좌측 끝에 다다르면
			this.flagX=true;										// puck 의 x축위치를 오른쪽으로 이동시키도록 flagX 를 전환
			if(this.velX>=3){
				if(this.velX>=3 && this.velY>=3){		// puck 의 속도가 x,y 모두 5이상이면
					this.velX-=1;									// puck 의 x 속도를 감소시킴
					this.velY-=1;									// puck 의 y 속도를 감소시킴
				}else{
					this.velX -= 1;
				}
			}
		}

	//Puck 의 Y 축 움직임 변화
		if(this.flagY){												// 설정 flagY 값이 true 일때 아래쪽으로 이동
			if(this.velY<puck_max_speed){
				this.y = this.y+this.velY;							// puck 아래 이동식, velY 값을 기존 puck 의 y 위치에다가 더해줌
			}else{
				this.velY=puck_max_speed;
				this.y = this.y+this.velY;
			}
		}else{														// 설정 flagY 값이 false 일때 위쪽으로 이동
			if(this.velY<puck_max_speed){
				this.y = this.y-this.velY;							// puck 위쪽 이동식, velY 값을 기존 puck 의 y 위치에다 빼줌
			}else{
				this.velY=puck_max_speed;
				this.y = this.y-this.velY;
			}
		}


	// Puck 움직임 변화 조건
		if(this.y >=740){// || this.y<110){				// puck 이 경기장 아래쪽 끝에 다다르면
			this.flagY = false;									// puck을 위쪽으로 이동시키도록 flagY 를 전환
			if(this.velY>=3){
				if(this.velX>=3 && this.velY>=3){		// puck 의 속도 x, y 가 모두 5이상이면
					this.velX-=1;									// puck 의 x 속도를 감소
					this.velY-=1;									// puck 의 y 속도를 감소
				}else{
					this.velY -= 1;
				}
			}
		}
		
		if(this.y<110){											// puck 이 경기장 위쪽 끝에 다다르면
			this.flagY = true;										// puck 을 아래쪽으로 이동시키도록 flagY 를 전환
			if(this.velY>=3){
				if(this.velX>=3 && this.velY>=3){		// puck 의 속도 x,y 가 모두 5이상이면
					this.velX-=1;									// puck 의 x 속도를 감소
					this.velY-=1;									// puck 의 y 속도를 감소
				}else{
					this.velY -= 1;
				}
			}
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Puck 과 Stick 이 충돌하였을때의 변화
		if(collisionCheck(this, stick1)){
			stick1.hitFlag=true;								// puck 이 stick1 과 부딪혔다는 flag 표시
			if(stick1.hitFlag){								// puck 이 stick1 과 부딪혔다면
				this.flagY=true;								// puck 의 진행방향을 반전시킴
				if(this.velY >= 15){							// 만약 puck 이 smash 상태로 와서 맞았다면
					this.velY -=10;							// smash 를 받은것이므로 puck 의 y 축 공격속도를 감소시킴
				}else{											// smash 상태로 오지 않앗다면
					this.velY += 0;							// 충돌에 의한 운동에너지 감소로 x, y를 1씩 감소시킴
					this.velX += 0;
				}
			}
			stick1.hitFlag=false;							// puck 이 stick1 을 맞고 떠났으므로 부딪힘상태를 다시 초기화
		}

		if(collisionCheck(this, stick2)){				
			stick2.hitFlag=true;								// puck 이 stick2 과 부딪혔다는 flag 표시
			if(stick2.hitFlag){								// puck 이 stick2 과 부딪혔다면
				this.flagY=false;								// puck 의 진행방향을 반전시킴
				if(this.velY >= 15){							// 만약 puck 이 smash 상태로 와서 맞았다면
					this.velY -=10;							// smash 를 받은것이므로 puck 의 y 축 공격속도를 감소시킴
				}else{											// smash 상태로 오지 않앗다면
					this.velY += 0;							// 충돌에 의한 운동에너지 감소로 x, y를 1씩 감소시킴
					this.velX +=0;
				}
			}
			stick2.hitFlag=false;							// puck 이 stick2 을 맞고 떠났으므로 부딪힘상태를 다시 초기화
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		

	// com_stick 좌,우 와 puck 의 충돌시 동작 설정
		if(collisionCheck(this, left_area_com)){
				//alert("부딪혔다");
				this.flagX=false;
				this.flagY=true;

				if(this.velX == 0){	// velX=0 이라면 x축 속도 1증가
					this.velX+=1;
				}else if(this.velX < this.velY){
					this.velX += 1;
				}else if(this.velX > this.velY){
					this.velX -= 1;
				}
				//this.velY+=1;
		}
		
		if(collisionCheck(this, right_area_com)){
			//alert("부딪혔다");
			this.flagX=true;
			this.flagY=true;

			if(this.velX == 0){	// velX=0 이라면 x축 속도 1증가
					this.velX+=1;
			}else if(this.velX < this.velY){
				this.velX += 1;
			}else if(this.velX > this.velY){
				this.velX -= 1;
			}
			//this.velY+=1;
		}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// player_stick 좌,우 와 puck 의 충돌시 동작 설정
		if(collisionCheck(this, player_left)){
				//alert("부딪혔다");
				this.flagX=false;
				this.flagY=false;

				if(this.velX == 0){	// velX=0 이라면 x축 속도 1증가
					this.velX+=1;
				}else if(this.velX <= this.velY){
					this.velX += 1;
				}else if(this.velX > this.velY){
					this.velX -= 1;
				}
				//this.velX+=1;
				//this.velY+=1;
		}
		
		if(collisionCheck(this, player_right)){
			//alert("부딪혔다");
			this.flagX=true;
			this.flagY=false;

			if(this.velX == 0){	// velX=0 이라면 x축 속도 1증가
					this.velX+=1;
			}else if(this.velX <= this.velY){
				this.velX += 1;
			}else if(this.velX > this.velY){
				this.velX -= 1;
			}

			//this.velY+=1;
		}
	}	
}