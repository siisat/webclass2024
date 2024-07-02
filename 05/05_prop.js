//함수 정의
const convert = (sel1, sel2, lb1, lb2, txt1, txt2) => {
     //섭씨 -> 화씨
     if(sel1.value === '℃') {
        sel2.value = '℉';
        lb1.textContent = '℃';
        lb2.textContent = '℉';
        if(txt1.value != '') {
            txt2.value = (9/5)*txt1.value + 32;
        }
    }
    //화씨 -> 섭씨
    else {
        sel2.value = '℉';
        lb1.textContent = '℉';
        lb2.textContent = '℃';
        if(txt1.value != '') {
            txt2.value = (txt1.value - 32)*(5/9);
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    //select box
    const sell = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    //input
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    //label
    const lb1 = document.querySelector('#lb1');
    const lb2 = document.querySelector('#lb2');

    sel1.addEventListener('change', ()=>{
        convert(sel1, sel2, lb1, lb2);
        if(txt1.value != ''&& lb1.textContent == '℃') {
            
        }
       
    })
})