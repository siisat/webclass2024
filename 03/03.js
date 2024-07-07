//console.log('외부 파일') : 콘솔 창에 메시지가 찍힘

//addEventListener : 이벤트(어떤 이벤트)가 발생하는지 지켜봄
document.addEventListener("DOMContentLoaded", function(){
    //실행될 내용 적기. 줄 구분 필요함.
    console.log('기본 실행')
});

document.addEventListener("DOMContentLoaded", ()=>{
    //function(){}  ==  ()=>{}
    console.log('화살표 함수 : ()=>{}')

    //변수 선언
    //const msg = document.getElementById('msg');
    const msg = document.querySelector('#msg'); //ID가 msg => # 사용
    //위 둘은 동일한 기능. 쿼리셀렉터를 더 많이 씀.
    const bt = document.querySelector('button');
    //msg에 적어둔 '????'를 '안녕'으로 치환
    //msg.innerHTML = '<h1>안녕</h1>'; //HTML을 번역해서 치환
    //msg.textContent = '<h1>안녕</h1>'; //텍스트 그대로 치환

    //button(bt)에 (클릭)이벤트가 발생하는지 감지
    bt.addEventListener('click', ()=>{
        if(msg.innerHTML == '안녕') msg.innerHTML = '잘가';
        else msg.innerHTML = '안녕';
    });
});