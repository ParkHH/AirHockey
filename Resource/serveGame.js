// 서브를 결정하는 게임

function createServeGameBox(){
	var serveGame_box = document.createElement("div");
	serveGame_box.style.width=500+"px";
	serveGame_box.style.height=500+"px";
	serveGame_box.style.border=10+"px solid gray";
	serveGame_box.style.borderRadius=20+"px";
	serveGame_box.style.background="purple";
	serveGame_box.style.position="relative";
	serveGame_box.style.left=100+"px";
	serveGame_box.style.top=200+"px";

	stage.appendChild(serveGame_box);

	var coinThroughBox = document.createElement("div");
	coinThroughBox.style.width=420+"px";
	coinThroughBox.style.height=350+"px";
	coinThroughBox.style.background="white";
	coinThroughBox.style.position="absolute";
	coinThroughBox.style.border=1+"px solid black";
	coinThroughBox.style.borderRadius=20+"px";
	coinThroughBox.style.left=40+"px";
	coinThroughBox.style.top=40+"px";
	coinThroughBox.style.fontSize=75+"px";
	coinThroughBox.style.fontWeight="bold";
	coinThroughBox.style.textAlign="center";
	coinThroughBox.style.lineHeight=180+"px";
	coinThroughBox.style.fontFamily="휴먼편지체";
	coinThroughBox.innerText="서브권을\n결정합니다.";

	serveGame_box.appendChild(coinThroughBox);

	var choice_bt = document.createElement("button");
	choice_bt.style.width=335+"px";
	choice_bt.style.height=70+"px";
	choice_bt.innerHTML="Select";
	choice_bt.style.fontSize=25+"px";
	choice_bt.style.fontWeight="bold";
	choice_bt.style.textAlign="center";
	choice_bt.style.position="absolute";
	choice_bt.style.left=80+"px";
	choice_bt.style.top=410+"px";

	choice_bt.addEventListener("click", function(){
		select_flag=true;
		select_first = getRandom(2);
		if(select_first == 0){
			coinThroughBox.innerText="Computer\n선공!";
			choice_bt.disabled=true;
			setTimeout(function(){
				stage.removeChild(serveGame_box);
			},2000);
			//stage.removeChild(serveGame_box);
		}else if(select_first == 1){
			coinThroughBox.innerText="Player\n선공!";
			choice_bt.disabled=true;
			setTimeout(function(){
				stage.removeChild(serveGame_box);
			},2000);
			//stage.removeChild(serveGame_box);
		}
	});

	serveGame_box.appendChild(choice_bt);
}

