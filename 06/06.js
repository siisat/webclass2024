/*업다운게임
1. DOM 요소 가져오기
2. 확인 버튼 처리
    - 확인 버튼 내용이 '확인'이 아니면 초기화
    - 랜덤수 생성(최초 1회만_초기화 되기 전까지)
    - 텍스트 박스의 숫자와 비교 : 크면 down 같으면 good job 작으면 up
    - 이미지 변경
3. 성공한 경우
    - 텍스트 박스 숨김
    - 버튼의 글자 변경 : 숫자를 다시 생성하세요
4. 초기화
    - 이미지 what
    - 텍스트 상자 나타내기
    - 버튼 이름 '확인'
    - 랜덤수가 생성될 수 있도록 함 -> flag 변수 사용
*/

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
        img.setAttribute('src', '../img/04_1/what.png');
        txt1.value = '';
        txt1.style.display = 'inline'; //텍스트 상자와 취소 버튼 나타내기
        btcl.style.display = 'inline';
        btok.textContent = '확인';
        flag = true;
    }

    btok.addEventListener('click', (e) => {  
        e.preventDefault(); //위 괄호에 e 추가한 다음 이 줄 추가 : 아래 현상 방지
        //확인 취소 버튼을 <form></form>으로 묶고 나면 계속해서 숫자가 생성됨

        if(flag) { //조건문 추가해서 flag=true 일 때 랜덤수 생성하도록
            n = Math.floor(Math.random() * 100) + 1 //1~100까지 랜덤수 생성
            console.log(n);
            flag = false; //1회만(if문 마지막에 flag=false로 바꿔주기)
        }

        if(txt1.value == '') { //txt1에 입력된 숫자값은 txt1.value 로 지정
            alert('숫자를 입력하세요'); //알림창(경고창) 띄움
            txt1.focus(); //마우스 커서가 입력창(txt1)으로 맞춰짐
            return ;
        }
        
        //비교
        let usern = parseInt(txt1.value); //사용자 입력수 usern
        if(n > usern) { //up
            img.setAttribute('src', '../img/04_1/up.png');
        }
        else if(n < usern) { //down
            img.setAttribute('src', '../img/04_1/down.png');
        }
        else { //good job
            img.setAttribute('src', '../img/04_1/good.png');
            txt1.style.display = 'none'; //텍스트 박스 숨김
            btcl.style.display = 'none';
            btok.textContent = '번호를 다시 생성하세요' //버튼의 글자 변경
        }

        //이제 버튼은 '확인'이 아닌 상태
        if(btok.textContent != '확인') {
            init(); //초기화함수 호출
            return ;
        }

      })

});