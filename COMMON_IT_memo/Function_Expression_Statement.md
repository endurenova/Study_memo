<link rel="stylesheet" href="./css/function.css"/>

<h2>Syntax (구문)</h2>
<p>흐름제어(Control Flow) - 실행 순서를 조건문이나 반복문으로 제어</p>
<p>일반적으로 위에서 아래로 순서대로 실행</p>
<p>함수 호출로 변경 가능</p>
<ul>
  <li><a class="href-Depth-1" href="#fat-arrow-syntax">화살표 구문&#32;<span class="sub-Depth-1">(Fat arrow Syntax)</span></a></li>
  <li><a class="href-Depth-1" href="#spread-syntax">전개 구문&#32;<span class="sub-Depth-1">(Spread Syntax)</span></a></li>
</ul>

<h2>Expression (표현식)</h2> 
<p>평가(evaluation) - '식'에서 또 다른 '값'을 생성하는 연산 과정</p>
<p>사이드이펙트 발생 X</p>
<p>상수, 변수, 함수, 연산자들의 조합</p>
<ul>
  <li>
    <a class="href-Depth-1" href="#regular-expression"> 정규 표현식&#32;<span class="sub-Depth-1">(Regular Expression)</span></a>
  </li>
</ul>

<h2>Function  (함수)</h2>
  <ul>
    <li><a class="href-Depth-1" href="#callback-function">콜백 함수&#32;<span class="sub-Depth-1">(Callback Function)</span></a></li>
    <li><a class="href-Depth-1" href="#generator-function">제너레이터 함수&#32;<span class="sub-Depth-1">(Generator Function)</span></a></li>
    <li><a class="href-Depth-1" href="#recursive-function">재귀 함수&#32;<span class="sub-Depth-1">(Recursive Function)</span></a></li>
  </ul>
  
<h2>Function Declarations (함수 선언식)</h2>
함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

<h2>Function Expressions (함수 표현식)</h2>
클로져로 사용 ,콜백으로 사용 (다른 함수의 인자로 넘길 수 있음)  
<ul>
  <li><a class="href-Depth-1" href="#IIFE">즉시 실행 함수 표현식&#32;<span class="sub-Depth-1">(IIFE: Immediately Invoked Function Expression)</span></a></li>
</ul>


<h2>Operator (연산자)</h2>  
하나 이상의 표현식을 대상으로 연산을 수행해 값 출력
<ul>
  <li><a class="href-Depth-1" href="#arithmetic-operator">산술 연산자&#32;<span class="sub-Depth-1">(Arithmetic Operator)</span></a></li>
  <li><a class="href-Depth-1" href="#concatenation-operator">연결 연산자&#32;<span class="sub-Depth-1">(Concatenation Operator)</span></a></li>  
  <li><a class="href-Depth-1" href="#assignment-operator">할당 연산자&#32;<span class="sub-Depth-1">(Assignment Operator)</span></a></li>  
  <li><a class="href-Depth-1" href="#comparison-operator">비교 연산자&#32;<span class="sub-Depth-1">(Comparison Operator)</span></a></li>
  <li><a class="href-Depth-1" href="#logical-operator">논리 연산자</a>&#32;<span class="sub-Depth-1">(Logical Operator)</span></li>
  <li><a class="href-Depth-1" href="#type-operator">타입 연산자</a>&#32;<span class="sub-Depth-1">(Type Operator)</span></li>
  <li><a class="href-Depth-1" href="#conditional-operator">삼항 연산자&#32;<span class="sub-Depth-1">(Conditional Operator) (Ternary Operator)</span></a></li>
  <li><a class="href-Depth-1" href="#nullish-coalescing-operator">Null 병합 연산자  &#32;<span class="sub-Depth-1">(Nullish Coalescing Operator) (QQ Operator)</span></a></li>
</ul>


<h2>Statement (문)</h2>
<p>Expression(식)을 내부 요소로 가질 수 있다</p>
<p>실행 시, 사이드이펙트 발생</p>
<p>리터럴(Literal), 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성</p>
<ul>
  <li>
    <a class="href-Depth-1" href="variable-declaration">변수 선언&#32;<span class="sub-Depth-1">(Variable Declaration)</span></a>
    <li>
      <a class="href-Depth-1" href="#conditional-statement">조건문&#32;<span class="sub-Depth-1">(Conditional Statement)</span>
      </a>
      무언가를 수행하지만 값을 만들지는 않는 코드
      <ul>
        <li><a class="href-Depth-2" href="">if</a></li>
        <li><a class="href-Depth-2" href="">if-else</a></li>
        <li><a class="href-Depth-2" href="">switch</a></li>
      </ul>
    </li>
    <li>
      <a class="href-Depth-1" href="#loop-statement">반복문&#32;<span class="sub-Depth-1">(Loop Statement)</span></a>
      <ul>
        <li><a class="href-Depth-2" href="#while">while</a></li>
        <li><a class="href-Depth-2" href="#do-while">do-while</a></li>
        <li><a class="href-Depth-2" href="#for">for</a></li>
        <li><a class="href-Depth-2" href="#for-in">for-in</a></li>
        <li><a class="href-Depth-2" href="#for-of">for-of</a></li>
      </ul>
    </li>
    <li><a class="href-Depth-1" href="#debugger">디버거&#32;<span class="sub-Depth-1">(debugger)</span></a></li>
  </li>
</ul>

---

<blockquote class="blockquote-Depth-1">
  <h2 id="x">x</h2>
  <ul>
    <li>x</li>
    <li>x</li>
  </ul>
  
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"/>
  </summary>

  ```Dart
  // Dart
  ```

  </details>
  </blockquote>
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ``` JavaScript
  // JavaScript
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"/>
  </summary>

  ```SQL
  -- MySQL
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white"/>
  </summary>

  ```PHP
  # PHP
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  </summary>

  ```Python
  # Python
  ```

  </details>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="fat-arrow-syntax">Fat arrow Syntax</h2>
  <ul>
    <li>기호: =></li>
    <li>화살표 구문</li>
    <li>return을 포함한 function의 축약형</li>
  </ul>
  
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"/>
  </summary>


  ```Dart
  // Dart

  String sayGoodbye(String name) {
    return "$name";
  };

  // ↓
  String sayHi(String name) => "$name";
  ```

  </details>
  </blockquote>
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ```JavaScript
  // JavaScript

  function sayGoodbye(name) {
    return `${name}`;
  };

  // ↓
  sayGoodbye = (name) => `something ${name}`;
  ```
  </details>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="spread-syntax">Spread Syntax</h2>
  <ul>
    <li>전개 구문</li>
  </ul>
  
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ```JavaScript
  // JavaScript - ...Array

  function sum(x, y, z) {
    return x + y + z;
  }

  console.log(sum(...[1, 2, 3]))
  // 6
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  </summary>

  ```Python
  # Python - *list

  def sumList(x, y, z):
      return x + y + z

  print(sumList(*[1, 2, 3]))  # = sum([1, 2, 3])
  # 6
  ```

  </details>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-0">
  <h1>Expression</h1>
  <blockquote class="blockquote-Depth-1">
    <h2 id="regular-expression">Regular Expression</h2>
    <ul>
      <li>정규 표현식</li>
    </ul>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-0">
  <h1>Function</h1>
  <blockquote class="blockquote-Depth-1">
    <h2 id="callback-function">Callback Function</h2>
    <ul>
      <li>콜백 함수</li>
    </ul>
  </blockquote>

  <blockquote class="blockquote-Depth-1">
    <h2 id="generator-function">Generator Function</h2>
    <ul>
      <li>제너레이터 함수</li>
    </ul>
      
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ``` JavaScript
  // JavaScript - function*

  function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  var gen = generator(10);

  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); // 20
  
  ```

  </details>
  </blockquote>
  </blockquote>

  <blockquote class="blockquote-Depth-1">
    <h2 id="recursive-function">Recursive Function</h2>
    <ul>
      <li>재귀 함수</li>
    </ul>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ```JavaScript
  // JavaScript - .callee()

  function(x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x-1);
  }
  ```

  </blockquote>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-0">
  <h1>Operator</h1>
  <blockquote class="blockquote-Depth-1">
    <h2 id="arithmetic-operator">Arithmetic Operator</h2>
    <ul>
      <li>산술 연산자</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="concatenation-operator">Concatenation Operator</h2>
    <ul>
      <li>연결 연산자</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="assignment-operator">Assignment Operator</h2>
    <ul>
      <li>할당 연산자</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="logical-operator">Logical Operator</h2>
    <ul>
      <li>논리 연산자</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="type-operator">Type Operator</h2>
    <ul>
      <li>타입 연산자</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="conditional-operator">Conditional Operator</h2>
    <ul>
      <li>기호: ?</li>
      <li>삼항 연산자</li>
      <li>(Ternary Operator)</li>
      <li>operand ? expression : expression</li>
      <li>operand가 true일 경우, colon(:) 앞의 expression을 처리하고 false일 경우, colon(:) 뒤의 expression을 처리</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="nullish-coalescing-operator">Nullish Coalescing Operator</h2>
    <ul>
      <li>기호: ??</li>
      <li>Null 병합 연산자</li>
      <li>QQ Operator</li>      
      <li>left ?? right</li>
      <li>좌항(left-hand side operand)이 null or undefined일 경우, 우항(right-hand side operand)을 return 해주고 그렇지 않을 경우, 좌항을 return</li>
    </ul>
  </blockquote>
</blockquote>
</blockquote>

<blockquote class="blockquote-Depth-0">
  <h1>Statement</h1>
  <blockquote class="blockquote-Depth-1">
    <h2 id="variable-declaration">Variable Declaration</h2>
    <ul>
      <li>변수 선언</li>
    </ul>
  </blockquote>
  
  <blockquote class="blockquote-Depth-1">
    <h2 id="conditional-statement">Conditional Statement</h2>
    <ul>
      <li>조건문</li>
    </ul>
    <blockquote class="blockquote-Depth-2">
    <h3 id="if">if</h3>
      <ul>
        <li>조건문</li>
      </ul>
    </blockquote>
    <blockquote class="blockquote-Depth-2">
    <h3 id="if-else">if-else</h3>
      <ul>
        <li>조건문</li>
      </ul>
    </blockquote>
    <blockquote class="blockquote-Depth-2">
    <h3 id="switch">switch</h3>
      <ul>
        <li>조건문</li>
      </ul>
    </blockquote>
  </blockquote>

  <blockquote class="blockquote-Depth-1">
    <h2 id="loop-statement">Loop Statement</h2>
    <ul>
      <li>반복문</li>
    </ul>
    <blockquote class="blockquote-Depth-2">
    <h3 id="while">while</h3>
      <ul>
        <li>반복문</li>
      </ul>
    </blockquote>
    <blockquote class="blockquote-Depth-2">
    <h3 id="do-while">do-while</h3>
      <ul>
        <li>반복문</li>
      </ul>
    </blockquote>
    <blockquote class="blockquote-Depth-2">
    <h3 id="for">for</h3>
      <ul>
        <li>반복문</li>
      </ul>
    </blockquote>
    <blockquote class="blockquote-Depth-2">
    <h3 id="for-in">for-in</h3>
      <ul>
        <li>반복문</li>
      </ul>
    </blockquote>
    <blockquote class="blockquote-Depth-2">
    <h3 id="for-of">for-of</h3>
      <ul>
        <li>반복문</li>
      </ul>
    </blockquote>
  </blockquote>

  <blockquote class="blockquote-Depth-1">
    <h2 id="debugger">debugger</h2>
    <ul>
      <li>디버거</li>
    </ul>
  </blockquote>
</blockquote>
