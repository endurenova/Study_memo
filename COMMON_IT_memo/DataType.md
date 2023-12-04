<link rel="stylesheet" href="./css/function.css"/>

<!-- 
변수(Variable) 값이 저장된 메모리 공간의 주소를 가리키는 식별자(identifier)
리터럴(literal)	소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위
자바스크립트의 모든 값은 데이터 타입을 갖는다. 자바스크립트는 7가지 데이터 타입을 제공한다.
원시 타입 (primitive data type)
number
string
boolean
null
undefined
symbol (New in ECMAScript 6)
객체 타입 (Object data type)
object -->

<h2>Data type</h2>  
<ul>
  <li><a class="href-Depth-1" href="#argument">전달 인자 (인수)&#32;<span class="sub-Depth-1">(Argument)</span></a></li>
  <li><a class="href-Depth-1" href="#parameter">매개 변수 (인자)&#32;<span class="sub-Depth-1">(Parameter)</span></a></li>
  <li><a class="href-Depth-1" href="#optional-parameter">생략 가능 인자&#32;<span class="sub-Depth-1">(Optional Parameter)</span></a></li>
  <li><a class="href-Depth-1" href="#array">배열&#32;<span class="sub-Depth-1">(Array)</span></a></li>
  <li><a class="href-Depth-1" href="#array-like">유사 배열&#32;<span class="sub-Depth-1">(Array-Like)</span></a></li>
  <li><a class="href-Depth-1" href="#object">객체&#32;<span class="sub-Depth-1">(Object)</span></a></li>
  <li><a class="href-Depth-1" href="#string-interpolation">문자열 보간&#32;<span class="sub-Depth-1">(String Interpolation)</span></a></li>
  <li><a class="href-Depth-1" href="#alias">별칭&#32;<span class="sub-Depth-1">(Alias)</span></a></li>
</ul>

---

<blockquote class="blockquote-Depth-1">
  <h2 id="argument">Argument</h2>
  <ul>
    <li>전달인자 (인수) (호출용)</li>
    <li>변수가 아닌 값(Value)으로 정의</li>
  </ul>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ``` JavaScript
  // JavaScript - argument

  function func1(a, b, c) {
    console.log(arguments);
    console.log(arguments[0]);
  }

  func1(1, 2, 3);  // func1(argument, argument, argument);

  /* 
    Expected output: 
      > Arguments(3) [1, 2, 3]
      > 1
  */
  ```

  </details>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="parameter">Parameter</h2>
  <ul>
    <li>매개변수 (인자) (선언용)</li>
    <li>함수를 정의할 때 사용되는 변수(Variable)</li>
  </ul>

<blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ``` JavaScript
  // JavaScript - parameter

  function func1(a, b) {
    console.log(`parameter: ${a}`);
    console.log(`parameter: ${b}`);
  };
  ```

  </details>
</blockquote>
<blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  </summary>

  ``` Python
  # Python - parameter

  def func1(a, b):
    print(f"parameter: {a}")
    print(f"parameter: {b}")
  ```
  </details>

</blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="optional-parameter">Optional Parameter</h2>
  <ul>
    <li>생략 가능 인자</li>
  </ul>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  ```JavaScript
  // JavaScript
  function myFnc(a, /* optional */ b) {
    console.log(a)
  }

  module.method([대괄호는 생략 가능한 인자])
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
  def funtion(a, b=0):
  # 인자에 값을 설정하면 인자 생략 시, 해당 값을 전달
    return a
  ```

  </details>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="array">Array</h2>
  <ul>
    <li>배열</li>
    <li>순서가 있는 정보를 순서로 식별자를 구분</li>
  </ul>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
    <span class="accent">Array</span>
  </summary>

  ``` JavaScript
  // JavaScript - array
  let array = ['가나', 'abc'];
  ```

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.trim()</span>
    <span class="small">- </span>
  </summary>

  ``` JavaScript
  // .trim()


  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.splice()</span>
    <span class="small">- 배열 일부를 추가 및 삭제</span>
  </summary>

  ``` JavaScript
  // .splice(start[, deleteCount[, item1[, item2[, ...]]]])
  //  - start: 시작 index
  //  - deleteCount: 삭제할 요소 개수
  //  - itemX: 추가할 요소

  let listArray = [1, 2, 3, 4, 5, 6];

  listArray.splice(2, 1);

  console.log(listArray);
  // [1, 2, 4, 5, 6];

  listArray.splice(3, 2, 7, 8);

  console.log(listArray);
  // [1, 2, 4, 7, 8];

  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.slice()</span>
    <span class="small">- 데이터 일부를 추출하여 새로운 데이터 반환</span>
  </summary>

  ``` JavaScript
  // .slice(start[, end])
  //  - start: 시작 index
  //  - end: 끝 index

  let stringArray = "[1, 2, 3, 4, 5, 6]";
  let sliceStringArray = stringArray.slice(1, -1)

  console.log(sliceStringArray);
  // "1, 2, 3, 4, 5, 6"

  let listArray = [1, 2, 3, 4, 5, 6];
  let sliceListArray_0 = stringArray.slice()
  let sliceListArray_1 = stringArray.slice(1, -1)

  console.log(sliceListArray_0);
  // [1, 2, 3, 4, 5, 6]
  console.log(sliceListArray_1);
  // [2, 3, 4, 5]
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.split()</span>
    <span class="small">- 매개변수로 문자열을 분리하여 배열 반환</span>
  </summary>

  ``` JavaScript
  // .split()

  let helloString = "Hello,Siru,Jjong";

  console.log(helloString.split(","));
  // ["Hello", "Siru", "Jjong"] 
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.join()</span>
    <span class="small">- 매개변수로 배열을 합쳐 문자열 반환</span>
  </summary>

  ``` JavaScript
  // .join()

  let helloArray = ["Hello", "Siru", "Jjong"];

  console.log(helloArray.join(","));
  // "Hello,Siru,Jjong"
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.push()</span>
    <span class="small">- 배열의 맨 뒤에 원소 추가</span>
  </summary>

  ``` JavaScript
  // .push()

  let helloArray = ["Hello", "Siru", "Jjong"];

  helloArray.push("Maltese", "Puppy");

  console.log(helloArray);
  // ["Hello", "Siru", "Jjong", "Maltese", "Puppy"]
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.pop()</span>
    <span class="small">- 배열의 맨 끝 원소 제거</span>
  </summary>

  ``` JavaScript
  // .pop()

  let helloArray = ["Hello", "Siru", "Jjong"];

  helloArray.pop();

  console.log(helloArray);
  // ["Hello", "Siru"]
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.unshift()</span>
    <span class="small">- 배열을 맨 앞에 원소 추가</span>
  </summary>

  ``` JavaScript
  // .unshift()

  let helloArray = ["Hello", "Siru", "Jjong"];

  helloArray.unshift("Maltese", "Puppy");

  console.log(helloArray);
  // ["Maltese", "Puppy", "Hello", "Siru", "Jjong"]
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.shift()</span>
    <span class="small">- 배열을 맨 처음 원소 제거</span>
  </summary>

  ``` JavaScript
  // .shift()

  let helloArray = ["Hello", "Siru", "Jjong"];

  helloArray.shift();

  console.log(helloArray);
  // ["Siru", "Jjong"]
  ```

  </details>
  </blockquote>
  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
    <span class="small">List</span>
  </summary>

  ``` Python
  # Python - list
  list_1 = []
  list_2 = list()
  list_3 = ['한글', '영어']

  print(list_3)  
  # ['한글', '영어']

  print(type(list_1), type(list_2), type(list_3))
  # <class 'list'> <class 'list'> <class 'list'>
  ```
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="array-like">Array-like</h2>
  <ul>
    <li>배열</li>
    <li>순서가 있는 정보를 순서로 식별자를 구분</li>
  </ul>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  </summary>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">array-like object</span>
    <span class="small">- 유사 배열 객체 [LengthOfArrayLike]</span>
  </summary>
    <ul>
      <li>arguments</li>
      <li>HTMLCollection</li>
      <span>└ document.body.children</span>
      <li>NodeList</li>
      <span>└ element.childNodes</span><br>
      <span>└ document.querySelectorAll()</span>
    </ul>

  ``` JavaScript
  // JavaScript - array-like

  // - 배열처럼 인덱스로 프로퍼티 값에 접근 가능
  // - length 프로퍼티 존재

  const arrayLikeObject = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
  };

  for(let i=0; i < arrayLikeObject.length; i++) {
    console.log(arrayLikeObject[i])
    // 'a', 'b', 'c'
  }
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">iterable object</span>
    <span class="small">- 반복 가능 객체</span>
  </summary>

  ``` JavaScript
  // JavaScript - iterable

  // - for..of를 사용 가능한 객체

  function iterableObject(){

  let iter_1 = "abcd";
  let iter_2 = [ "a", "b", "c", "d"];

  for (let char of iter_1) {
    console.log(char);
    // "a", "b", "c", "d"
  };

  for (let char of iter_2) {
    console.log(char);
    // "a", "b", "c", "d"
  };
  };
  ```

  </details>
  </blockquote>

 ---

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">Array.from()</span>
    <span class="small">- 유사배열을 배열로 반환</span>
  </summary>

  ``` JavaScript
  // Array.from()

  const arrayLikeObject = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
  };

  console.log(Array.from(arrayLikeObject));
  // ['a', 'b', 'c']
  ```

  </details>
  </blockquote>

  </details>
  </blockquote>
</blockquote>

<blockquote class="blockquote-Depth-1">
  <h2 id="object">Object</h2>
  <ul>
    <li>객체</li>
    <li>순서가 없는 정보를 이음으로 식별자를 구분</li>
  </ul>
  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
    <span class="small">Object</span>
  </summary>

  ``` JavaScript
  // JavaScript - object

  let object = {'한글': '가나', '영어': 'abc'};
  ```

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">Object.keys(obj)</span>
    <span class="small">- 객체의 키만 담은 배열을 반환</span>
  </summary>

  ``` JavaScript
  // Object.keys(obj)
  let object = {'한글': '가나', '영어': 'abc'};

  console.log(Object.keys(object))
  // ['한글', '영어']
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">Object.values(obj)</span>
    <span class="small">- 객체의 값만 담은 배열을 반환</span>
  </summary>

  ``` JavaScript
  // Object.values(obj)
  let object = {'한글': '가나', '영어': 'abc'};

  console.log(Object.values(object))
  // ['가나', 'abc']
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">Object.entries(obj)</span>
    <span class="small">- [키, 값] 쌍을 담은 배열을 반환</span>
  </summary>

  ``` JavaScript
  // Object.entries(obj)
  let object = {'한글': '가나', '영어': 'abc'};

  console.log(Object.entries(object))
  // [Array(2), Array(2)]
  // [['한글', '가나'], ['영어', 'abc']]
  ```

  </details>
  </blockquote>
    
  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
    <span class="small">Dictionary</span>
  </summary>

  ``` Python
  # Python - dictionary

  dict_1 = {}
  dict_2 = dict()
  dict_3 = {'한글': '가나', '영어': 'abc'}

  print(dict_3)  
  # {'한글': '가나', '영어': 'abc'}

  print(type(dict_1), type(dict_2), type(dict_3))
  # <class 'dict'> <class 'dict'> <class 'dict'>
  ```

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">dict.fromkeys()</span>
    <span class="small">- 인수로 dictionary 생성</span>
  </summary>

  ``` Python
  # dict.fromkeys()
  # 딕셔너리_이름 = dict.fromkeys(key, value)

  languages = ('한글', '영어')
  dictionary_2 = dict.fromkeys(languages)

  print(dictionary_2)
  # {'한글': None, '영어': None}

  text = ('가나', 'abc')
  dictionary_3 = dict.fromkeys(languages, text)

  print(dictionary_3)
  # {'한글': '가나', '영어': 'abc'}
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.items()</span>
    <span class="small">- 모든 키(key), 값(value)</span>
  </summary>

  ``` Python
  # .items()

  dictionary = {'한글': '가나', '영어': 'abc'}

  print(dictionary.items())
  # dict_items([('한글', 가나), ('영어', abc)])
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.keys()</span>
    <span class="small">- 모든 키(key)</span>
  </summary>

  ``` Python
  # .keys()

  dictionary = {'한글': '가나', '영어': 'abc'}

  print(dictionary.keys())
  # dict_keys(['한글','영어'])
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.values()</span>
    <span class="small">- 모든 값(value)</span>
  </summary>

  ``` Python
  dictionary = {'한글': '가나', '영어': 'abc'}

  # .values()

  print(dictionary.values())
  # dict_values(['가나','abc'])
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">dictionary_name[key]</span>
    <span class="small">- 키(key)로 값(value) 접근 & 조작</span>
  </summary>

  ``` Python
  # dictionary_name[key]

  dictionary = {'한글': '가나', '영어': 'abc'}

  print(dictionary['한글'])
  # '가나'

  dictionary['영어'] = 'ABC'
  print(dictionary['영어'])
  # 'ABC'

  dictionary['숫자'] = '123'
  print(dictionary['숫자'])
  # '123'

  ```

  </details>
  </blockquote>


  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">del dictionary_name[key]</span>
    <span class="small">- 키(key) & 값(value) 삭제</span>
  </summary>

  ``` Python
  # del dictionary_name[key]

  dictionary = {'한글': '가나', '영어': 'abc'}
  del dictionary['영어']

  print(dictionary)
  # {'한글': '가나'}
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.pop()</span>
    <span class="small">- 키(key) & 값(value) 삭제 (삭제 값 저장)</span>
  </summary>

  ``` Python
  # .pop()

  dictionary = {'한글': '가나', '영어': 'abc'}
  eng = dictionary.pop('영어')

  print(dictionary, eng)
  # {'한글': '가나'} 'abc'

  # 두 번째 인자 입력 시, KeyError 방지
  jp = dictionary.pop('일본어', "None")
  print(jp)
  # None

  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.popitem()</span>
    <span class="small">- 마지막 키(key) & 값(value) 삭제</span>
  </summary>

  ``` Python
  # .popitem()

  dictionary = {'한글': '가나', '영어': 'abc'}
  dictionary.popitem()

  print(dictionary)
  # {'한글': '가나'}
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.get()</span>
    <span class="small">- 키(key)로 값(value) 접근 (KeyError 방지)</span>
  </summary>

  ``` Python
  # .get()

  dictionary = {'한글': '가나', '영어': 'abc'}

  print(dictionary.get('숫자'))
  # None
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.update()</span>
    <span class="small">- 딕셔너리 병합</span>
  </summary>

  ``` Python
  # .update()

  dictionary = {'한글': '가나', '영어': 'abc'}
  dictionary_2 = {'숫자': '123', '색깔': '빨노초'}
  dictionary.update(dictionary_2)

  print(dictionary)
  # {'한글': '가나', '영어': 'abc', '숫자': '123', '색깔': '빨노초'}
  ```

  </details>
  </blockquote>
  
  <blockquote class="blockquote-Depth-3">
  <details>
  <summary>
    <span class="accent">.clear()</span>
    <span class="small">- 모든 키(key) & 값(value) 삭제</span>
  </summary>

  ``` Python
  # .clear()

  dictionary = {'한글': '가나', '영어': 'abc'}
  dictionary.clear()

  print(dictionary)
  # {}
  ```

  </details>
  </blockquote>

  </details>
  </blockquote>
</blockquote>


<blockquote class="blockquote-Depth-1">
  <h2 id="string-interpolation">String Interpolation</h2>
  <ul>
    <li>문자열 보간</li>
    <li>String 내부에 parameter를 삽입</li>
  </ul>

<blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"/>
  </summary>

  ```Dart
  // Dart

  void main() {
    var name = 'nico';
    var age = 10;
    var greeting = "$name is ${age + 2}";
  }
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

  var name = 'nico';
  var age = 10;

  console.log(`${name} is ${age + 2}"`);
  /* 'nico is 12' */
  ```

  </details>
  </blockquote>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  </summary>

  ``` Python
  # Python

  def func1(a, b):
    print(f"parameter: {a}")
    print(f"parameter: {b}")
  ```

  </details>
  </blockquote> 
</blockquote>


<blockquote class="blockquote-Depth-1">
  <h2 id="alias">Alias</h2>
  <ul>
    <li>별칭</li>
    <li>보기 편하게 대체명을 만들기 위해 사용</li>
  </ul>

  <blockquote class="blockquote-Depth-2">
  <details>
  <summary>
    <img src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"/>
  </summary>

  ```Dart
  // Dart

  typedef ListOfInts = List<int>;
  
  ListOfInts reversListOfNumbers(ListOfInts list) {
    var reversed = list.reversed;
    return reversed.toList();
  };
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

  ColumnName AS 컬럼명칭 -- 컬럼에 별칭 부여
  TableName AS 테이블 명칭 -- 테이블에 별칭 부여

  SELECT NO_NUM AS 사원번호, NO_NAME AS 사원명 FROM EX_TABLE
  -- NO_NUM를 사원번호, NO_NAME을 사원명이라는 별칭 부여

  SELECT 컬럼1 + 컬럼2 AS TOTAL FROM EX_TABLE
  -- 컬럼1 + 컬럼2의 값에 TOTAL이라는 별칭 부여
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

  import numpy as np

  np.array()
  ```

  </details>
  </blockquote>
</blockquote>