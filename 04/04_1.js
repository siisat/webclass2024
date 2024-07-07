
document.addEventListener('DOMContentLoaded', ()=>{
    const imgCom = document.querySelector('#com');
    const imgUser = document.querySelector('#user');
    //여러 개의 버튼을 한번에 변수로 설정 : query~~All
    const bts = document.querySelectorAll('#bt > button');
    const msg = document.querySelector('#msg');
    console.log(bts);

    //여러 버튼 중 아무거나 누를 때 bt = 버튼 자체, bts = 버튼들의 배열
    for(let bt of bts){ //버튼 배열 위에서 도는 for문
        bt.addEventListener('click', ()=>{

            //1~6 사이 랜덤수 생성
            const nCom = Math.floor(Math.random() * 6) + 1;
            /*
            parseInt() : 문자열 -> 숫자 변환
            .textContent : 버튼 안의 문자열 가져오기
            .charAt(위치) : 위치(0이상 숫자)에 해당하는 문자 가져오기
            */
            const nUser = parseInt(bt.textContent.charAt(0));

            //`${변수}` <- 그냥 따옴표 아니고 백틱(`)
            //변수명을 포함한 경로를 설정하려면 따옴표 대신 백틱+${} 이용
            imgCom.setAttribute('src', `../img/04/${nCom}.png`);
            imgUser.setAttribute('src', `../img/04/${nUser}.png`);
            
            //=== : 자료형(str or int)과 내용 모두 같은지 비교함. '5' != 5
                //이걸 쓰려고 nUser에 str형에서 int형으로 변환하는 parseInt() 사용
            //== : 자료형 상관없이 내용만 비교함. '5' == 5
            if(nCom === nUser) {
                //.innerHTML : 변수 msg의 내용을 변경(HTML 문법 변환해서 표시해줌)
                msg.innerHTML = '<h1>맞음</h1>';
            }
            else {
                msg.innerHTML = '<h1>틀림</h1>'
            }
        });
    };
    
});