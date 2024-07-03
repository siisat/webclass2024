
document.addEventListener('DOMContentLoaded', ()=>{
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btAdd');
    const btDels = document.querySelectorAll('.btDel');

    //배열 요소가 추가될 것이므로 let으로 정의
    let arr = [];

    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉'
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

            console.log(arr);
            txt1.value = arr.join(' ');
        });
    }
});