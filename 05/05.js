let x = 10;
console.log("x1=", x);
// var x = 10;
// let x = 10; 여기 쓰면 오류
console.log("x2=", x);

//반복문
let arr = [10, 20, 30];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log('for');
for(let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}

//for ... in
console.log('for ... in');
for(let i in arr) {
    console.log(arr[i]);
}

//for each
console.log('for each');
arr.forEach((item) => {console.log(item);})
arr.forEach((item) => {console.log(`${i} => ${item}`);})

//for ... of : 가장 많이 씀
console.log('for ... of');
for(let i of arr) {
    console.log(i);
}

for(let [i, item] of arr.entries()) {
    console.log(`${i} => ${item}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = '<h1 style="color: blue;">메시지영역</h1>'
})