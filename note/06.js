//06.js 업다운게임 : 컴퓨터는 랜덤수 생성, 사용자 입력수에 따라 이미지 변환
//1. DOM 요소 가져오기
document.addEventListener('DOMContentLoaded', ()=>{
    const img = document.querySelector('img'); //태그 selector
    const txt1 = document.querySelector('input[type=number]'); //속성 selector
    const btok = document.querySelector('#btok'); //id selector
    const btcl = document.querySelector('#btcl');

    //랜덤수 생성 제어 변수
    let flag = true; //true: 랜덤수 생성 가능 false: 랜덤수 생성 불가

    //랜덤수
    let n = 0;

    //4. 초기화 함수
    const init = ()=>{
        //이미지 바꾸기
        img.setAttribute('src', '../img/04_1/what.png');
        txt1.value = '';

        //.style.display = 'inline' : 나타내기
        txt1.style.display = 'inline'; 
        btcl.style.display = 'inline'; //텍스트 상자, 취소 버튼 나타냄
        
        //.textContent = '어쩌구' : 버튼 텍스트 바꾸기
        btok.textContent = '확인';
        flag = true;
    }

    btok.addEventListener('click', (e) => {  
        e.preventDefault(); //위 괄호에 e 추가한 다음 이 줄 추가 : 아래 현상 방지
        //html에서 확인 취소 버튼을 <form></form>으로 묶고 나면 계속해서 숫자가 생성됨

        //정답을 맞히면 버튼은 '확인'이 아닌 상태 -> 초기화
        //초기화를 실행할 if문이 크기비교 if문 뒤에 있으면 btok 버튼 내용이 바뀌자마자(맞히자마자)
        //이 if문이 실행되어서 good job 화면이 뜨지 않고 바로 초기화면으로 돌아감.
        if(btok.textContent != '확인') {
            init(); //초기화함수 호출
            return ;
        }

        if(flag) { //조건문 추가해서 flag=true 일 때 랜덤수 생성하도록
            n = Math.floor(Math.random() * 100) + 1 //1~100까지 랜덤수 생성
            console.log(n);
            flag = false; //랜덤수 생성은 1회만(if문 마지막에 flag=false로 바꿔주기)
        }

        //입력값 없는 경우 경고창 띄우기
        if(txt1.value == '') { //txt1에 입력된 숫자값은 txt1.value 로 지정
            alert('숫자를 입력하세요'); //알림창(경고창) 띄움
            txt1.focus(); //마우스 커서가 입력창(txt1)으로 맞춰짐
            return ;
        }
        
        //수 크기 비교
        //parseInt() : 괄호 안 값을 숫자 형식으로 변환
        let usern = parseInt(txt1.value); //사용자 입력수 usern
        if(n > usern) { //up
            img.setAttribute('src', '../img/04_1/up.png');
        }
        else if(n < usern) { //down
            img.setAttribute('src', '../img/04_1/down.png');
        }
        else { //good job
            img.setAttribute('src', '../img/04_1/good.png');

            //.style.display = 'none' : 숨김
            txt1.style.display = 'none'; 
            btcl.style.display = 'none'; //텍스트 박스, 취소 버튼 숨김
            btok.textContent = '번호를 다시 생성하세요' //버튼의 글자 변경
        }

      })

});