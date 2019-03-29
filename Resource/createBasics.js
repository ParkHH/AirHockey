	
	//게임을 진행할 stage 생성 함수
	function createStage(){
			stage.style.width=700+"px";
			stage.style.height=900+"px";
			stage.style.margin="auto";
			stage.style.background="url('./Resource/img/bg.jpg')";
			stage.style.backgroundSize=100+"%"+100+"%";
			stage.style.position="relative";
			stage.style.float="left";
		}
	


	//게임 오른쪽 게임 정보 및 조작에 관한 것들을 띄울 div 생성 함수
	function createController(){
			controller.style.width=200+"px";
			controller.style.height=900+"px";
			controller.style.background="purple";
			controller.style.position="relative";
			controller.style.float="left";
			controller.style.textAlign="center";
		}



	// 게임의 진행에 사용될 Puck 을 생서하는 기능을 합니다.
	function createPuck(){
			velX = 0; //getRandomByRange(5, 10);
			velY = 0; //getRandomByRange(5, 10);

		// 서브권 추첨 후 처음 경기를 시작할때 puck 의 위치를 결정
			if(scoreCom ==0 && scorePlayer==0){
				if(select_first==0){									// 추첨 결과가 0이면 computer 의 서브권이 결정된것
					puck_Y=120;										// computer stick 생성 위치근방으로 puck 위치 결정
				}else if(select_first==1){							// 추첨 결과가 1이면 player 의 서브권이 결정된것
					puck_Y=700;										// player stick 생성 위치 근방으로 puck 위치 결정
				}
			}
									//container, x, y, width, height, velX, velY, targetX, targetY,src
			puck = new Puck(stage, 300, puck_Y, 50, 50, velX, velY, 0, 0, "", "./Resource/img/puck.jpg");

			puckArr.push(puck);									// 생성된 puck 을 배열에 담아 저장
		}




	// puck 을 칠 Stick 을 생성하는 기능을 합니다.
	function createStick(){
									//container, x, y, width, height, velX, velY, targetX, targetY,src
			stick1 = new Stick(stage, 300, 110, 80, 80, 5, 0, 0, 0, "", "./Resource/img/stick1.png");
														//container, x, y, width, height, velX, velY
				left_area_com = new ContactArea_Com(stage, parseInt(stick1.div.style.left)-5, 110, 10, 65, stick1.velX, 0);
				right_area_com = new ContactArea_Com(stage, parseInt(stick1.div.style.left)+75, 110, 10, 65, stick1.velX, 0);
				//left_area_com.div.style.background="yellow";
				//right_area_com.div.style.background="yellow";

			stick2 = new Stick(stage, 280, 700, 80, 80, 0, 0, 0, 0, "", "./Resource/img/stick2.png");
																		//container, x, y, width, height, velX, velY
				player_left = new ContactArea_Player_left(stage, parseInt(stick2.div.style.left)-5, parseInt(stick2.div.style.top)+15, 10, 65, 0, 0);
				player_right = new ContactArea_Player_right(stage, parseInt(stick2.div.style.left)+75, parseInt(stick2.div.style.top)+15, 10, 65, 0, 0);
				//player_left.div.style.background="pink";
				//player_right.div.style.background="pink";
		}

		


	// 득점 처리 기능에 필요한 goal zone 을 만드는 기능을 합니다.
	function createGoalArea(){
													//container, x, y, width, height, velX, velY, targetX, targetY,src
			goalzone_com = new Goalzone(stage, 275, 60, 150, 50, 0, 0, 0, 0, "#ff3366", "");
			goalzone_player = new Goalzone(stage, 275, 790, 150, 50, 0, 0, 0, 0, "dodgerblue", "");
		}




	// 게임 이용법을 안내해주는 문구
	function createHelper(){
		var help = document.createElement("div");
		help.style.width=200+"px";
		help.style.height=180+"px";
		//help.style.border=1+"px solid black";
		help.style.position="absolute";
		help.style.fontSize=20+"px";
		help.style.fontWeight="bold";
		help.style.fontFamily="휴먼모음T";
		help.style.lineHeight=40+"px";
		help.style.color="white";
		help.style.top=700+"px";
		help.style.textAlign="left";
		help.innerText="<조작키>\n-왼쪽 shift : smash\n-Mouse : stick 조작\n-Enter : game 시작"

		controller.appendChild(help);
	}