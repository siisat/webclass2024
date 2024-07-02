
document.addEventListener('DOMContentLoaded', ()=>{
    const imgCom = document.querySelector('#com');
    const imgUser = document.querySelector('#user');
    const bts = document.querySelectorAll('#bt > button');
    const msg = document.querySelector('#msg');
    console.log(bts);

    for(let bt of bts){
        bt.addEventListener('click', ()=>{
            const nCom = Math.floor(Math.random() * 6) + 1;
            const nUser = parseInt(bt.textContent.charAt(0));
            imgCom.setAttribute('src', `../img/04/${nCom}.png`);
            imgUser.setAttribute('src', `../img/04/${nUser}.png`);
            
            if(nCom === nUser) {
                msg.innerHTML = '<h1>맞음</h1>';
            }
            else {
                msg.innerHTML = '<h1>틀림</h1>'
            }
        });
    };
    
});