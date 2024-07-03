
//05.js 섭씨 화씨 온도 변환기 : 선택창-옵션, 옵션 바꾸면 자동으로 반대 선택창, 아래 텍스트창 바뀜

//함수 정의
//괄호 안에 매개변수 입력
const convert = (sel1, sel2, lb1, lb2) => {
    //선택창에서 섭씨/화씨 중 하나를 고르면 자동으로 다른 선택창이 바뀌게 설정
    //사용자가 sel1을 변경했을 때 sel1을 기준으로 설정됨
    if(sel1.value == '℃') {
        sel2.value = '℉';
        lb1.textContent = '℃';
        lb2.textContent = '℉';
        }
    else {
        sel2.value = '℃';
        lb1.textContent = '℉';
        lb2.textContent = '℃';
    }
};

//변환기
const txtConvert = (txt1, lb1, txt2) => {
    //섭씨 입력 -> 화씨 출력
    //&& : and 연산자
    if(txt1.value != '' && lb1.textContent == '℃') {
        txt2.value = (9/ 5) * txt1.value + 32 ;
    }
    //화씨 입력 -> 섭씨 출력
    else if(txt1.value !='' && lb1.textContent == '℉') {
        txt2.value = (txt1.value - 32) * (5/9) ;
    }
};

document.addEventListener('DOMContentLoaded', ()=>{
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');
    const lb1 = document.querySelector('#lb1');
    const lb2 = document.querySelector('#lb2');

    //입력창에 숫자를 입력한 경우
    //'change' : (1) 입력창의 value 변화를 감지
    txt1.addEventListener('change', ()=> {
        txtConvert(txt1, lb1, txt2);
    });

    //첫 번째 선택창(섭씨/화씨 옵션)을 바꾼 경우
    //'change' : (2) 선택창의 option 변화를 감지
    sel1.addEventListener('change', ()=>{
        convert(sel1, sel2, lb1, lb2);
        //변환기도 함께 작동. 입력해둔 숫자의 단위가 바뀌었음.
        txtConvert(txt1, lb1, txt2);
    });

    //두 번째 선택창 옵션을 바꾼 경우 : 변환 기준이 sel2로 바뀜
    sel2.addEventListener('change', ()=>{
        convert(sel2, sel1, lb2, lb1);
        txtConvert(txt1, lb1, txt2);
        //txt는 이미 convert함수로 바뀐 뒤라 매개변수 상관 없음
    });
});
