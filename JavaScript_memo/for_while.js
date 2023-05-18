`for`
for (초기화부분; 조건부분; 추가동작부분) {
    동작부분
}

for (let i = 1; i <= 10;) {
    console.log('시루');
}

for (let i = 1; i <= 10; i++) {
    console.log('시루');
    i++;
}

let i = 1; 
for (; i <= 10; i++) {
    console.log(`${i} 코드잇 최고!`);
}


`for...in`
  // 객체의 property name을 가져오는 반복문
  // 배열의 메소드나 아니면 배열이 가지고 있는 length 프로퍼티 같은 것들이 여기 변수에
  // 할당될 가능성이 있고 사실상 일반적인 객체에 좀 더 최적화되어 있기에 배열에는 사용하지 않을 것을 권장
    for (변수 in 객체) {
    동작부분;
    }

    for (let j in siru) {
    console.log(j)
    console.log(siru[j]);
    }


`for...of`
  // 파이썬의 for i in x: 와 동일

    for (변수 of 배열) {
        동작부분;
    }

    for (let k in siru) {
        console.log(siru);
    }

    `while`
    while (조건부분) {
        동작부분
    }
    
    let t = 1;s
    while (t <= 10) {
        console.log(`${t} 시루`);
    i++;
    }


`forEach`
object.forEach((e, i) => {  // e = 요소, i = 변수;
    
});
