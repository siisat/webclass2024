//filter()

let array = [3,5,6,7];
// .filter(변수 => 조건식) : 조건식을 만족하는 변수를 array에 남김
let filtered = array.filter(item => item < 10);

function lessThan(item) {
    return item < 10
};
// .filter(함수) : 외부에서 정의한 함수를 만족하는 변수를 남김
let filtered_2 = array.filter(lessThan);


//map()

//item == obj[w1] : item(arr 배열의 항목)이 w1과 같으면
//obj[w2] : item  : w2로 교체
arr = arr.map(item => item == obj[w1] ? obj[w2] : item);