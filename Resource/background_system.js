// 게임 background_system



		var stage;							// 게임을 진행할 stage 생성 변수
		var controller;						// stage 우측 버튼과 score 를 표시할 공간 생성변수
		var scoreCom=0;				// computer 의 득점 점수 누적, 표시 관련 변수
		var scorePlayer=0;				// player 의 득점 점수 누적, 표시 관련 변수

		var puck;							// 게임 진행에 사용될 puck 생성 변수
		var puck_Y=0;					// puck 초기 생성 위치에 관련된 변수
		var velX;							// puck 의 x축 속도 증가 및 감소에 사용될 변수
		var velY;							// puck 의 y축 속도 증가 및 감소에 사용될 변수
		var puck_max_speed=15;		// puck 의 최대 속도 지정 변수
		var puckArr = new Array();	// 생성된 puck 을 저장할 변수

		var stick1;							// computer 의 stick 생성 변수
		var left_area_com;				// computer stick의 좌측 sensor 생성 변수
		var right_area_com;			// computer stick 의 우측 sensor 생성 변수
		var com_action_number=0;	// computer 의 공격 동작과 관련된 변수

		var stick2;							// player 의 stick 생성 변수
		var player_left;					// player stick 의 좌측 sensor 생성 변수
		var player_right;					// player stick 의 우측 sensor 생성 변수
		
		var bt_play;						// play button 생성 변수
		var key;								// 마우스좌표값을 저장할 변수
		var select_first=0;				//	서브권 결정 결과를 담을 변수
		var win_Score = 5;				// 한판의 승패를 결정짓는 점수값 설정.
		var select_flag = false;




// play button 을 눌렀을때의 기능입니다.
		function play(){
			if(select_flag == true){
				createPuck();
			}else{
				alert("서브권 추첨을 하지 않았습니다.");
			}
		}



	// 득점을 하면 score 를 표시하는 기능을 합니다.
		function showScore(){
				score_com.innerText=scoreCom;
				score_player.innerText=scorePlayer;
				if(scoreCom == win_Score){
					alert("Computer 의 승리입니다.");
					location.reload();
				}else if(scorePlayer == win_Score){
					alert("Player 의 승리입니다.");
					location.reload();
				}
		}



	// 키보드에서 누른 키값에 따른 동작에 관한 설정 함수입니다.
		function keyAction(){
			var key=event.keyCode;

			switch(key){
				case 13 : play(); bt_play.blur(); break;
				case 16 : stick2.smash(); break;
			}
		}



		function init(){
			stage=document.getElementById("stage");
			controller=document.getElementById("controller");
			bt_play=document.getElementById("bt_play")
			score_com=document.getElementById("score_com");
			score_player=document.getElementById("score_player");

			createStage();
			createController();
			createGoalArea();
			createStick();
			showScore();
			createServeGameBox();
			createHelper();
			gameLoop();

			addEventListener("mousemove", function(){
				key=event.clientX-500;
				stick2.x=key;
				if(stick2.x >= 133 && stick2.x <= 484){
					stick2.div.style.left=stick2.x+"px";
					player_left.div.style.left = parseInt(stick2.x)-5+"px";
					player_right.div.style.left = parseInt(stick2.x)+75+"px";
				}
				//console.log(key+"."+key2);
			});
		}



		function gameLoop(){
			//console.log("loop is Running");
			for(var i=0; i<puckArr.length; i++){
				puck.tick();
				puck.render();

				stick1.tick_com();
				stick1.render();
				stick1.smash_com();

				goalzone_com.goal();
				goalzone_player.goal();

				left_area_com.tick();
				left_area_com.render();
				right_area_com.tick();
				right_area_com.render();
			
				player_left.tick();
				player_right.tick();
				player_left.render();
				player_right.render();
			}
			setTimeout("gameLoop()", 10);
		}

		addEventListener("load", function(){
			init();
		});