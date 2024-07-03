
document.addEventListener('DOMContentLoaded', ()=>{
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btAdd');
    const btDels = document.querySelectorAll('.btDel');
    const btChanges = document.querySelectorAll('.btChange');

    //배열 요소가 추가될 것이므로 let으로 정의
    let arr = [];

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
            // if(bt.textContent == '사과') {
            //     arr.push('🍎');
            // }
            // else if(bt.textContent == '바나나') {
            //     arr.push('🍌');
            // }
            // else if(bt.textContent == '오렌지') {
            //     arr.push('🍊');
            // }
            // else if(bt.textContent == '수박') {
            //     arr.push('🍉');
            // }
            // console.log(arr);

            arr.push(obj[bt.textContent]); //if문을 오브젝트로 대체

            txt1.value = arr.join(' '); //텍스트창에 배열 표시
        });
    }

    //삭제 버튼 : filter 이용해서 걸러내기
    for(let bt of btDels) {
        bt.addEventListener('click', ()=>{
            //삭제 버튼의 '삭제'를 없애서 키워드만 남기기
            const btkey = bt.textContent.replace('삭제', '');
            //let tm = arr.filter((item)=>{return item != obj[btkey]});
                //item이 하나일 때 () 생략, return문이 하나일 때 return과 {} 생략
            arr = arr.filter(item => item != obj[btkey]);

            // console.log(arr);
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
            //arr = arr.map((item) => {return item == obj[w1] ? obj[w2] : item});
                //(), return{} 생략 버전
            arr = arr.map(item => item == obj[w1] ? obj[w2] : item);

            txt1.value = arr.join(' ');
        });
    }
});