<link rel="stylesheet" href="style.css"/>

<details>
<summary>용어 (CLICK ME)</summary>

> CSR (Client Side Rendering)<br>
<span>- 클라이언트 쪽에서 렌더링하는데 JavaScript가 동작하지 않는 환경이나 JavaScript가 다운 및 실행 전까지 화면이 표시되지 않기에 검색 엔진과 같은 로봇들이 컨텐츠를 이용할 수 없다.</span>

> SSR (Server Side Rendering)<br>
<span>- 서버에서 JavaScript가 실행되고 브라우저에서는 완성된 html을 전송해서 JavaScript가 동작되지 않는 환경에서도 잘 실행된다.</span>

> expression (식)<br>
<span>- 값을 만들어 내는 코드</span>

> conditional statement (조건문)<br>
<span>- 무언가를 수행하지만 값을 만들지는 않는 코드
(if, switch, for, while, var..)</span>

> operand (피연산자)<br>
<span>- 처리될 데이터 그 자체 또는 데이터를 지정하는 컴퓨터 명령어의 일부를 의미</span>

> parameter (파라미터)<br>
<span>- 입력되는 정보의 형식</span>

> argument (아규먼트)<br>
<span>- 식에 맞게 실제로 입력하는 값</span>

> redirection (리디렉션)<br>
<span>- 어떤 처리를 한 후, 페이지를 전환</span>

> object(객체)<br>
<span>- 순서가 없는 정보를 이음으로 식별자를 구분</span>

> array(배열)<br>
<span>- 순서가 있는 정보를 순서로 식별자를 구분</span>
```
var array = ['하나', '1', 'abc'];
var object = {
  '한글': '하나',
  '숫자': '1',
  '영어': 'abc'
};
```
</details>

```
module.method([대괄호는 생략 가능한 인자])
```

---

### Alias
> <span>- 별칭이란 뜻으로 보기 편하게 대체명을 만들기 위해 사용</span>
```SQL
"SQL"

ColumnName AS 컬럼명칭 -- 컬럼에 별칭 부여
TableName AS 테이블 명칭 -- 테이블에 별칭 부여

SELECT NO_NUM AS 사원번호, NO_NAME AS 사원명 FROM EX_TABLE
/* NO_NUM를 사원번호, NO_NAME을 사원명이라는 별칭 부여*/

SELECT 컬럼1 + 컬럼2 AS TOTAL FROM EX_TABLE
/* 컬럼1 + 컬럼2의 값에 TOTAL이라는 별칭 부여 */
```
```Dart
Dart

typedef ListOfInts = List<int>;
ListOfInts reversListOfNumbers(ListOfInts list) {
  var reversed = list.reversed;
  return reversed.toList();
}
```
---

### __?__ Ternary operator (Conditional Operator)
#### > operand ? expression : expression
> <span>- operand가 true일 경우, colon(:) 앞의 expression을 처리하고 false일 경우, colon(:) 뒤의 expression을 처리한다.</span>
---

### __??__ Nullish coalescing operator (QQ operator)
#### > left ?? right;
> <span>- 좌항(left-hand side operand)이 null or undefined일 경우, 우항(right-hand side operand)을 return 해주고 그렇지 않을 경우, 좌항을 return 해준다.</span>
---

### __\`${}\`__ || __"$var"__ String interpolation
> <span>- String 내부에 parameter를 넣을 수 있다.</span>

```JavaScript
JavaScript

var name = 'nico';
var age = 10;
console.log(`${name} is ${age + 2}"`);
```

```Dart
Dart

void main() {
  var name = 'nico';
  var age = 10;
  var greeting = "$name is ${age + 2}";
}
```
___

### __=>__ Fat arrow syntax
> <span>- return을 포함한 function의 축약형</span>
```JavaScript
JavaScript

function sayGoodbye(name) {
  return `${name}`;
}

sayGoodbye = (name) => `something ${name}`;
```
```Dart
Dart

String sayGoodbye(String name) {
    return "$name";
}

String sayHi(String name) => "$name";
```