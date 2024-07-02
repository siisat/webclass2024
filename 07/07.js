
document.addEventListener('DOMContentLoaded', ()=>{
   const txt1 = document.querySelector('#txt1');
   const txt2 = document.querySelector('#txt2');

   const bt1 = document.querySelector('#bt1');
   const bt2 = document.querySelector('#bt2');

   //버튼 1. 회문 확인
   bt1.addEventListener('click', (e)=>{
    e.preventDefault();

    if(txt1.value == '') return ;

    console.log(txt1.value);
    console.log(txt1.value.length);
    console.log(txt1.value.charAt(0)); //txt1의 첫 글자 출력
    for(let c of txt1.value) { //txt1를 한글자씩 출력
        console.log(c)
    }

    //뒤집어서 출력 (1)
    let tm = '';
    for(let i=txt1.value.length -1; i>=0; i--) { //txt1의 뒤에서부터 순회
        tm = tm + txt1.value[i]; //txt1을 뒤집어서 출력
    }
    console.log(tm);


    //문자열 변경 -> 공백 제거한 버전으로 사용
    let txt = txt1.value.replaceAll(' ', '');
    
    //뒤집어서 출력 (2)
    //tm = txt.value.split('')... 아님! value 들어가면 오류남
    tm = txt.split('').reverse().join('');
    //split('') 쪼개기 : 배열로 만듦. 부산역 -> ['부','산','역']
    //reverse() 뒤집기 : ['역','산','부']
    //join() 합치기(defalut=쉼표) : 역,산,부
    //join('') 공백으로 합치기 : 역산부
    console.log(txt, tm);


    if(txt == tm) {
        txt2.value = '회문입니다.';
    }
    else {
        txt2.value = '회문이 아닙니다.';
    }

   })

   //버튼 2. 숫자 합계
   bt2.addEventListener('click', (e)=>{
    e.preventDefault();

    if(txt1.value =='') {
        alert('글자를 입력하세요.');
        txt1.focus();
        return ;
    }

    let sum = 0;
    for(let c of txt1.value) {
        //isNaN : txt1이 숫자인지 확인, 숫자면 false
        if(!isNaN(c)) {
            sum = sum + parseInt(c);
        }
    }
    txt2.value = sum;
   });
});