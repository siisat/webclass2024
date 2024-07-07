
document.addEventListener('DOMContentLoaded', ()=>{
    const lotto = document.querySelector('#lotto');
    const bt = document.querySelector('#bt');

    //배열에 로또 번호 저장
    let arr = [];
    
    bt.addEventListener('click', ()=>{
        //배열 초기화 필요
        arr = []; //arr.length = 0; 동일한 동작

        //로또 번호 생성 : 1~45 사이에서 중복 없이 7개
        while(arr.length < 7) {
            const n = Math.floor(Math.random()*45) + 1 ;
            //중복 확인 : n이 arr에 없는지 확인
            if(!arr.includes(n)) {
                arr.push(n);
            };
        }
        
        //번호 정렬
        arr.sort((a,b)=>a-b);

        let tm = arr.map(item =>
            //item의 10의자리수마다 색깔 다르게 띄우기
            //item을 10을 나눈 몫 : Math.floor(item/10)
            `<span class="sp${Math.floor(item/10)}">
                ${item}
            </span>`);
        
        //splice(끼워넣을 인덱스, 0, 끼워넣을 항목) : 보너스번호 앞에 + 추가
        tm.splice(6,0, '<span id="spplus">+</span>');

        lotto.innerHTML = tm.join('');
    });
});