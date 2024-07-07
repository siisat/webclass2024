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


//선언
const var_con = 0; //상수. 이후에 바뀌지 않을 값
let var_let = []; //변수. 이후에 바뀔 수 있는 값


//for문
let arr = [10, 20, 30];
//기본
for(let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}
//for ... in : object의 key를 순회할 때
console.log('for ... in');
for(let i in arr) {
    console.log(arr[i]);
}
//for each
console.log('for each');
arr.forEach((item) => {console.log(item);})
arr.forEach((item) => {console.log(`${i} => ${item}`);})

//for ... of : 여러 버튼 중 아무거나 누를 때 씀(08장)
    //i=버튼, arr=버튼 집합
console.log('for ... of');
for(let i of arr) {
    console.log(i);
}

for(let [i, item] of arr.entries()) {
    console.log(`${i} => ${item}`);
}


//요소 값 변경
//변수.innerHTML = : 요소 내의 HTML 소스에 접근
//변수.innerText = : style.display = 'none' 이면 접근 X
//변수.textContent = : 위와 같은 상황에서도 접근 O


//산술연산자
//** : 거듭제곱, % : 나머지, / : 나누기
//Math.floor(A/B) : A를 B로 나눈 몫  09장 : Math.floor(item/10)


//document.addEventListener(이벤트 타입, 함수);
//이벤트 타입 종류 : 'click', 'mousemove', 'change', 'input', 'DOM어쩌구'


//문자열
array.lengh //문자열 길이, 배열에도 사용 가능
array.charAt[index], array[index] //인덱스 위치 문자 추출
isNaN(A) //A가 숫자면 False 반환
parseInt(A) //A를 숫자로 변환
array.toUpperCase(), array.toLowerCase() //대/소문자 변환
array.indludes('A', index) //A가 있으면 true, index=검색시작위치(생략가능)
array.slice(index, end) //index부터 시작해서 끝(end, 생략가능)까지 추출
    //시작과 종료 숫자가 음수이면 끝에서부터 카운팅


//배열
array.push(), array.pop() //배열의 끝에서 추가/삭제
array.indludes(A) //배열에 A가 있는지 확인
array.sort() //알파벳순 정렬, 문자열로 입력된 숫자는 13 < 41 < 8 정렬됨
array.sort((a,b) => a-b) //오름차순 정렬, b-a로 바꾸면 내림차순 정렬
array.join('') //배열 합치기. '' 사이에 들어가는 걸로 구분해줌


//오브젝트 08장 참고
let obj = {key : 'value', key2 : 'value2', };
obj['new_key'] = new_value //객체 추가
const a = obj.key //객체 요소 접근, a == value
const b = obj['key2'] // 객체 요소 접근, b == value2