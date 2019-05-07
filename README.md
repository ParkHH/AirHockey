<h1>AirHockey Project</h1>
<ul>
  <li>개발기간 : 2018-12-08 ~ 2018-12-14 (7일)</li>
  <li>인원 : 1명</li>
  <li>개발환경 : JavaScript, Editplus</li>
</ul>

<table style="text-align:center;">
  <tr>
    <td>UI</td>
    <td>상세 설명</td>
  </tr>
  <tr>
    <td>
    <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfMjcw/MDAxNTU3MjAzMjMzNTIz.ZvnKTGgOzd1KIudYt--pfKkR3-U1DQOptrdE9jT2xX4g.bPEXwqcROZ5gF5CBwALsjZIiaroFv4RLbl1-yhwF6mMg.PNG.phh_92/airhockey_startPage.png?type=w2" width="250px"/>
    </td>
    <td>
      ▶ AirHockey Main Page<br>
      <ul>
        <li>Start Button Click 시 Game Main Page 로 이동!</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfODkg/MDAxNTU3MjAzMjMzMDA2.cosE2Y1wqiRG4Hi37uRoTzd8CoECTQRdOH4zCxBZXvcg.g4WxPlb2rx4cX-HDbMsKpWV5Nqi4kVDFwknwc9xML_Ug.PNG.phh_92/airhockey_gameMain.png?type=w2" width="250px"/>
    </td>
    <td>
      ▶ Game Main Page<br>
      <ul>
        <li>Game 의 서브권을 결정함</li>
        <li>select Button Click 시 내장객체 Math에 의해 추출된 난수값 (0, 1) 에 의해 서브권이 결정됨 </li>
        <table>
          <tr>
            <td colspan="2">서브권 결정 화면</td>
          </tr>
          <tr>
            <td>
            <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfNzcg/MDAxNTU3MjAzMjM0MDEz.Deu40I5FTo9dZi1hK5EPrW8c68Q4ap5WUBqVIOnc8_4g.f9F-IvDcFoyBo9fXKeFmfwg8ADSMq-RPuqtuqBZ_zxkg.PNG.phh_92/serve_com.png?type=w2" width="250px"/> 
            </td>
            <td>
              <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfMjgw/MDAxNTU3MjAzMjM0MjMx.at0j4EGPCXbpzIbuMMjNDT1v23JQO4mBbyhLIudW-AUg.kTPOxtkQScOToO8feXLyrrRbbCoNn-AkOaxf2FrbrC4g.PNG.phh_92/serve_player.png?type=w2" width="250px"/>
            </td>
          </tr>
        </table>
        <li>이 후에는 setTimeOut() Method 를 통해 div 을 제거 및 게임 시작/li>
        <li>Puck 의 위치는 서브권에 따라 다르게 </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfMTAz/MDAxNTU3MjA0MjExMTU0.J1VdMLUXK7_cHZ8GoewasLqA537RdOzVjLcSLhszzggg.MgHbPQXdWDZKP0gxXtXNfQKTrCAmiJaQ5OzQ3RP0LzUg.PNG.phh_92/game_main.png?type=w2" width="250px"/>
    </td>
    <td>
      ▶ Game Page<br>
      <ul>
        <li>서브권이 결정되고 나서의 화면</li>
        <li>붉은색 Stick 은 Com, 파란색 Stick 은 Player 이다.</li>
        <li>Com 의 Stick 은 setInterval() Method 를 통해 일정한 속도로 좌우로 움직임.</li>
        <li>각 Stick 에는 충돌 Check Method 가 적용되어있는 Sensor 들로 감싸져 있음</li>
        <li>각 Puck 은 이동시 Stage 의 벽과 Puck 에 충돌시 속도가 조금씩 줄어듦</li>
        <li>Puck 뒤 Goal Line 에 또한 충돌 Check 가 적용된 Sensor 가 있어서 충돌시 Goal 처리 및 Score 변경됨</li>
        <table>
          <tr>
            <td colspan="2">Goal 처리 이후 Score 변경 처리 화면</td>
          </tr>
          <tr>
            <td>
            <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfNjMg/MDAxNTU3MjA0MzIyMTUz.C7PsSgY83hRLyoJNnIoM65yz_4eLkZDwVFiInLft68Ig.LpP4bbai4nRF1ohsNC9hveK8Gk-iXtRp3CXJFVTY_cEg.PNG.phh_92/Goal.png?type=w2" width="250px"/> 
            </td>
            <td>
              <img src="https://blogfiles.pstatic.net/MjAxOTA1MDdfMjA2/MDAxNTU3MjA0MzIyNDE1.aA54p_XHn0uEOcoyRq7W1vATWhX4FZc0da-pKmy1evQg.Nx-kMfIMtE5Swk_RYfPxP-ijBQ3y1ZsTjN-CgeNu-KEg.PNG.phh_92/socre.png?type=w2" width="250px"/>
            </td>
          </tr>
        </table>
      </ul>
    </td>
  </tr>
</table>
