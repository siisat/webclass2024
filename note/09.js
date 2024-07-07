
//09-1.js 로또 번호 생성기 : 랜덤으로 중복 없는 수 7개 생성+자릿수별로 색 다르게 공 모양으로 표시

document.addEventListener('DOMContentLoaded', ()=>{
    const lotto = document.querySelector('#lotto');
    const bt = document.querySelector('#bt');

    //배열 arr에 로또 번호 저장
    let arr = [];

    bt.addEventListener('click', ()=>{
        //버튼 클릭 시 배열 초기화 필요
        arr = []; //arr.length = 0; 동일한 동작

        //1~45 사이 랜덤수 7개 생성
        while(arr.length < 7) {
            const n = Math.floor(Math.random() * 45) + 1 ;

            //중복 방지 : arr에 방금 생성된 n이 있는지 점검 후 push
            if(!arr.includes(n)) {
                arr.push(n);
            }
        }
        //숫자 오름차순 정렬
        arr.sort((a,b)=>a-b);

        //로또번호 자릿수별로 css의 양식(색깔)을 적용한 tm 배열 생성
        //item을 10을 나눈 몫 : Math.floor(item/10)
        let tm = arr.map(item =>
            `<span class="sp${Math.floor(item/10)}">
            ${item}
            </span>`);

        //tm 배열 중 6번째 자리에 + 기호 추가
        //+에도 css 양식 추가를 위해 id 할당
        tm.splice(6,0, `<span id='spplus'>+</span>`);
        //tm을 lotto 자리에 추가
        lotto.innerHTML = tm.join('');
    });
});

    // 로또 공(텍스트에 css 양식 씌운 거지만), + 기호는
    // html에 정의되어 있지 않음.
    // js 파일에서만 정의된 것도 class나 id를 이용해 양식 지정 가능