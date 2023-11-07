// 코멘트(단줄)
/* 코멘트(복줄)*/

`(백틱, 1번 옆에 기호) 백틱 안의 글자는 모두 문자열로 인식`
// \n 줄바꿈
// ctrl + D 파이썬의 shift + ctrl + alt + J

/*------------------------------------------------------------------------------------------------------------*/

`출력`
  console.log(value);

  console.log('${year}년'); // ${} python의 포맷과 동일, `(백틱) 사용해야함

  console.log(Number('10'));
  console.log(String(10));
    
  console.log("3" - 1); 
    - 2 (Number) // JS는 상황에 따라 유연하게 연산

  console.log("3" + 1);
    - 31 (String) // 더하기 처럼 두 가지 기능이 있는 경우, 문자열을 연결하는 기능이 우선순위

`타입`  
  const a = null;  // 비어있다 (값은 있 다)
  let b;  // undefined (값이 없다)

`변수 (camelCase 지향)`
  var name1;  // 함수스코프 = 지역스코프 사용x
  let  name2;  // 블록스코프;
  
`상수 (constant)`
  // 일정 값을 유지하는 수 (변수의 반대) naming 규칙. 대문자 (ex. MY_NUMBER)
  const PI = 3.14;  // 블록스코프

`삼항연산자`
  조건문 ? 선택문1 : 선택문2
  let age = 17;
  let checkAge = (age < 18) ? console.log("성인") : console.log("미성년자");
  checkAge = function(){age < 18 ? console.log("안녕") : console.log("안녕하세요!");}
  checkAge();


`자료형 타입`
  - 숫자 (Number)
  - 문자 (String)
  - 불린 (Boolean)
  - null  // 없다. 의도적인 없음. (의도적으로 값이 없는 상태를 표현할 때 반드시 사용)
  - undefined // 값이 없다. 지정된 값이 없음 (값이 없다는 것을 확인하는 값)

    let cup;
    console(log(cup)); // undefined
    cup = '물';
    console(log(cup)); // 물
    cup = null;
    console(log(cup)); // null

  typeof parameter // parameter의 type 확인 (python의 type()와 동일)


`연산자 (아래 세가지는 동일)`
  x = x + 1; 
  x += 1;
  x++;
  

`부등호`
  // == (동등)  1 == '1' -> true (형 변환 가능성 있어서 '===' 사용 지향)
  // === (일치)  1 === '1' -> false
  // != (동등하지 않다)
  // !== (불일치)
  

`Boolean`
  // && (AND)
  // || (OR)
  // ! (NOT)
  // true
  // false (false가 나오는 값을 falsy라고 부름 (ex. NaN))