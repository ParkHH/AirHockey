
// 득점영역을 표시할 사각형 영역 생성 클래스

class Goalzone extends GameObject{
	constructor(container, x, y, width, height, velX, velY, targetX, targetY, bg, src){
		super(container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
	}

	// Puck 과 goalzone 의 충돌시 score 를 올리는 code 작성중
	// 
	goal(){
		if(collisionCheck(this, puck)){
			//alert();
			stage.removeChild(puck.div);
			puckArr.splice(0,1);
			

			if(this==goalzone_com){
				alert("player 득점입니다.");
				scorePlayer++;
				showScore();
				puck_Y=120;
			}else if(this==goalzone_player){
				alert("Com 득점입니다.");
				scoreCom++;
				showScore();
				puck_Y=700;
			}
		}
	}
}