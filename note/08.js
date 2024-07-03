//08.js 배열 오브젝트 : 과일 배열을 만들고 특정 과일만 다른 요소로 변환하거나 삭제
document.addEventListener('DOMContentLoaded', ()=>{
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btAdd');
    const btDels = document.querySelectorAll('.btDel');
    const btChanges = document.querySelectorAll('.btChange');

    //배열 요소가 추가될 것이므로 let으로 정의
    let arr = [];

    //오브젝트 {key : value, ..., } 로 구성
    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉',
        '오이' : '🥒',
        '당근' : '🥕',
        '가지' : '🍆',
        '브로콜리' : '🥦',
    };

    //추가 버튼
    for(let bt of btAdds) {
        bt.addEventListener('click', ()=>{
            //.push : 배열 맨 뒤에 항목 추가
            //obj[key] == key의 쌍인 value
            arr.push(obj[bt.textContent]);
            
            //.join() : 배열 합치기. default는 쉼표로 구분해서 합침.
            txt1.value = arr.join(' '); //텍스트창에 배열 표시
        });
    }

    //삭제 버튼 : filter 이용해서 걸러내기
    for(let bt of btDels) {
        bt.addEventListener('click', ()=>{
            //삭제 버튼의 '삭제'를 없애서 키워드만 남기기
            //.replace('A', 'B') : A를 B로 대체하기
            const btkey = bt.textContent.replace('삭제', '');

            // .filter(변수 => 조건식) : 조건식을 만족하는 변수만 남김
            arr = arr.filter(item => item != obj[btkey]);
            
            //필터링한 배열을 띄움
            txt1.value = arr.join(' ');
        });
    }

    //변경 버튼
    for(let bt of btChanges) {
        bt.addEventListener('click', ()=>{
            //화살표 기준으로 버튼의 텍스트를 분리 : 사과/→/오이
            const w1 = bt.textContent.split('→')[0]; //화살표 앞단어 : 사과
            const w2 = bt.textContent.split('→')[1]; //화살표 뒷단어 : 오이

            //item == obj[w1] : item(arr 배열의 항목)이 w1과 같으면
            //obj[w2] : item  : w2로 교체
            arr = arr.map(item => item == obj[w1] ? obj[w2] : item);

            txt1.value = arr.join(' ');
        });
    }
});