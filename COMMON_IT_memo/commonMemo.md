<link rel="stylesheet" href="./css/style.css"/>


# Data Structure (자료 구조)
>
> ## Primitive Data Structure (단순 자료 구조)
> + <span class="bold">Integer</span>
> + <span class="bold">Float</span>
> + <span class="bold">Character</span>
> + <span class="bold">Pointer</span>
> 
> ## Non-Primitive Data Structure (복합 자료 구조)
>> ### Linear Structure (선형 구조)
>> + <span class="bold">Stack (스택)</span>
>> <br> - Last In First Out (LIFO, 후입선출)
>> 
>> + <span class="bold">Queue (큐)</span>
>> <br> First In First Out (FIFO, 선입선출)
>>
>> + <span class="bold">Deque (덱)</span>
>> <br> - Double-Ended Queue (DEQUE, 전단, 후단모두 입출력 가능)
>>
>> + <span class="bold">Linked List (연결 리스트)</span>
>> + <span class="bold">Heap (힙)</span>
>> <br> - 완전 이진 트리(Complete Binary Tree)
>> <br> - 최댓값과 최솟값을 빠르게 찾기 위해 고안 (중복 값 허용)
>> <br> - 최대 힙 (Max Heap)은 root가 제일 큰 값
>> <br> - 최소 힙 (Min Heap)은 root가 제일 작은 값
>> <br> - 왼 쪽부터 채워 짐
>>
>> ### Non-Linear Structure (비선형 구조)
>> + <span class="bold">Graph (그래프)</span>
>> <br> -  nodes/vertices 사이에 edge가 있는 collection
>>
>> + <span class="bold">Tree (트리)</span>
>> <br> - 노드로 구성된 계층적 자료구조
>> <br> - 최상위 노드(root), 거리(depth), 노드 선(edge), 끝(leaf)
>>
>> + <span class="bold">Hash Table (해시 테이블)</span>
>> <br> - (Key, Value)로 데이터를 저장하는 자료구조

> expression (식)
> <br> - 값을 만들어 내는 코드

> conditional statement (조건문)
> <br> - 무언가를 수행하지만 값을 만들지는 않는 코드
(if, switch, for, while, var..)

> operand (피연산자)
> <br> - 처리될 데이터 그 자체 또는 데이터를 지정하는 컴퓨터 명령어의 일부를 의미

> redirection (리디렉션)
> <br> - 어떤 처리를 한 후, 페이지를 전환

> ## parameter
> + 매개변수 (인자) (선언용)
> + 함수를 정의할 때 사용되는 변수
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>> 
>>``` JavaScript
>> // JavaScript - parameter
>>function func1(a, b) {
>>  console.log(`parameter: ${a}`);
>>  console.log(`parameter: ${b}`);
>>};
>>```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python</span>
>> </summary>
>> 
>>``` Python
>> # Python - parameter
>>def func1(a, b):
>>  print(f"parameter: {a}")
>>  print(f"parameter: {b}")
>>```
>>
>> </details>
> --- 
>
> ## argument
> + 전달인자 (인수) (호출용)
> + 변수가 아닌 값(Value)로 정의
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>> ``` JavaScript
>> // JavaScript - argument
>> function func1(a, b, c) {
>>  console.log(arguments);
>>  console.log(arguments[0]);
>> }
>>
>> func1(1, 2, 3);  // func1(argument, argument, argument);
>>
>> /* 
>>  Expected output: 
>>    > Arguments(3) [1, 2, 3]
>>    > 1
>> */
>> ```
>>
>> </details>
> --- 

> ## object
> + 객체
> + 순서가 없는 정보를 이음으로 식별자를 구분
>> <details>
>> <summary>
>>  <span class="accent">JavaScript - object</span>
>> </summary>
>>
>> ``` JavaScript
>> // JavaScript - object
>>
>> let object = {'한글': '가나', '영어': 'abc'};
>> ```
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">Object.keys(obj)</span>
>>>   <span class="small"> - 객체의 키만 담은 배열을 반환</span>
>>> </summary>
>>>
>>> ``` JavaScript
>>> // Object.keys(obj)
>>> let object = {'한글': '가나', '영어': 'abc'};
>>>
>>> console.log(Object.keys(object))
>>> // ['한글', '영어']
>>> ```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">Object.values(obj)</span>
>>>   <span class="small"> - 객체의 값만 담은 배열을 반환</span>
>>> </summary>
>>>
>>> ``` JavaScript
>>> // Object.values(obj)
>>> let object = {'한글': '가나', '영어': 'abc'};
>>>
>>> console.log(Object.values(object))
>>> // ['가나', 'abc']
>>> ```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">Object.entries(obj)</span>
>>>   <span class="small"> - [키, 값] 쌍을 담은 배열을 반환</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // Object.entries(obj)
>>> let object = {'한글': '가나', '영어': 'abc'};
>>>
>>> console.log(Object.entries(object))
>>> // [Array(2), Array(2)]
>>> // [['한글', '가나'], ['영어', 'abc']]
>>>```
>>>
>>> </details>
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python - dictionary</span>
>> </summary>
>>
>>``` Python
>> # Python - dictionary
>>
>> dict_1 = {}
>> dict_2 = dict()
>> dict_3 = {'한글': '가나', '영어': 'abc'}
>>
>> print(dict_3)  
>> # {'한글': '가나', '영어': 'abc'}
>>
>> print(type(dict_1), type(dict_2), type(dict_3))
>> # <class 'dict'> <class 'dict'> <class 'dict'>
>>```
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">dict.fromkeys()</span>
>>>   <span class="small"> - 인수로 dictionary 생성</span>
>>> </summary>
>>>
>>>``` Python
>>> # dict.fromkeys()
>>> # 딕셔너리_이름 = dict.fromkeys(key, value)
>>>
>>> languages = ('한글', '영어')
>>> dictionary_2 = dict.fromkeys(languages)
>>>
>>> print(dictionary_2)
>>> # {'한글': None, '영어': None}
>>>
>>> text = ('가나', 'abc')
>>> dictionary_3 = dict.fromkeys(languages, text)
>>>
>>> print(dictionary_3)
>>> # {'한글': '가나', '영어': 'abc'}
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.items()</span>
>>>   <span class="small"> - 모든 키(key), 값(value)</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .items()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>>
>>> print(dictionary.items())
>>> # dict_items([('한글', 가나), ('영어', abc)])
>>>```
>>>
>>> </details>
>>>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.keys()</span>
>>>   <span class="small"> - 모든 키(key)</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .keys()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>>
>>> print(dictionary.keys())
>>> # dict_keys(['한글','영어'])
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.values()</span>
>>>   <span class="small"> - 모든 값(value)</span>
>>> </summary>
>>>
>>> ``` Python
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>>
>>> # .values()
>>>
>>> print(dictionary.values())
>>> # dict_values(['가나','abc'])
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">dictionary_name[key]</span>
>>>   <span class="small"> - 키(key)로 값(value) 접근 & 조작</span>
>>> </summary>
>>>
>>> ``` Python
>>> # dictionary_name[key]
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>>
>>> print(dictionary['한글'])
>>> # '가나'
>>>
>>> dictionary['영어'] = 'ABC'
>>> print(dictionary['영어'])
>>> # 'ABC'
>>>
>>> dictionary['숫자'] = '123'
>>> print(dictionary['숫자'])
>>> # '123'
>>>
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">del dictionary_name[key]</span>
>>>   <span class="small"> - 키(key) & 값(value) 삭제</span>
>>> </summary>
>>>
>>> ``` Python
>>> # del dictionary_name[key]
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>> del dictionary['영어']
>>>
>>> print(dictionary)
>>> # {'한글': '가나'}
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.pop()</span>
>>>   <span class="small"> - 키(key) & 값(value) 삭제 (삭제 값 저장)</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .pop()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>> eng = dictionary.pop('영어')
>>>
>>> print(dictionary, eng)
>>> # {'한글': '가나'} 'abc'
>>>
>>> # 두 번째 인자 입력 시, KeyError 방지
>>> jp = dictionary.pop('일본어', "None")
>>> print(jp)
>>> # None
>>>
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.popitem()</span>
>>>   <span class="small"> - 마지막 키(key) & 값(value) 삭제</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .popitem()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>> dictionary.popitem()
>>>
>>> print(dictionary)
>>> # {'한글': '가나'}
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.get()</span>
>>>   <span class="small"> - 키(key)로 값(value) 접근 (KeyError 방지)</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .get()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>>
>>> print(dictionary.get('숫자'))
>>> # None
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.update()</span>
>>>   <span class="small"> - 딕셔너리 병합</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .update()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>> dictionary_2 = {'숫자': '123', '색깔': '빨노초'}
>>> dictionary.update(dictionary_2)
>>>
>>> print(dictionary)
>>> # {'한글': '가나', '영어': 'abc', '숫자': '123', '색깔': '빨노초'}
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.clear()</span>
>>>   <span class="small"> - 모든 키(key) & 값(value) 삭제</span>
>>> </summary>
>>>
>>> ``` Python
>>> # .clear()
>>>
>>> dictionary = {'한글': '가나', '영어': 'abc'}
>>> dictionary.clear()
>>>
>>> print(dictionary)
>>> # {}
>>>```
>>>
>>> </details>
>>
>> </details>
>>
> --- 


> ## array
> + 배열
> + 순서가 있는 정보를 순서로 식별자를 구분
>> <details open>
>> <summary>
>>  <span class="accent">JavaScript - array</span>
>> </summary>
>>
>>``` JavaScript
>> // JavaScript - array
>>let array = ['가나', 'abc'];
>>```
>>
>>> <details open>
>>> <summary>
>>>   <span class="accent">.trim()</span>
>>>   <span class="small"> - </span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .trim()
>>>
>>>
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.splice()</span>
>>>   <span class="small"> - 배열 일부를 추가 및 삭제</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .splice(start[, deleteCount[, item1[, item2[, ...]]]])
>>> //  - start: 시작 index
>>> //  - deleteCount: 삭제할 요소 개수
>>> //  - itemX: 추가할 요소
>>>
>>> let listArray = [1, 2, 3, 4, 5, 6];
>>>
>>> listArray.splice(2, 1);
>>>
>>> console.log(listArray);
>>> // [1, 2, 4, 5, 6];
>>>
>>> listArray.splice(3, 2, 7, 8);
>>>
>>> console.log(listArray);
>>> // [1, 2, 4, 7, 8];
>>>
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.slice()</span>
>>>   <span class="small"> - 데이터 일부를 추출하여 새로운 데이터 반환</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .slice(start[, end])
>>> //  - start: 시작 index
>>> //  - end: 끝 index
>>>
>>> let stringArray = "[1, 2, 3, 4, 5, 6]";
>>> let sliceStringArray = stringArray.slice(1, -1)
>>>
>>> console.log(sliceStringArray);
>>> // "1, 2, 3, 4, 5, 6"
>>>
>>> let listArray = [1, 2, 3, 4, 5, 6];
>>> let sliceListArray_0 = stringArray.slice()
>>> let sliceListArray_1 = stringArray.slice(1, -1)
>>>
>>> console.log(sliceListArray_0);
>>> // [1, 2, 3, 4, 5, 6]
>>> console.log(sliceListArray_1);
>>> // [2, 3, 4, 5]
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.split()</span>
>>>   <span class="small"> - 매개변수로 문자열을 분리하여 배열 반환</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .split()
>>>
>>> let helloString = "Hello,Siru,Jjong";
>>>
>>> console.log(helloString.split(","));
>>> // ["Hello", "Siru", "Jjong"] 
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.join()</span>
>>>   <span class="small"> - 매개변수로 배열을 합쳐 문자열 반환</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .join()
>>>
>>> let helloArray = ["Hello", "Siru", "Jjong"];
>>>
>>> console.log(helloArray.join(","));
>>> // "Hello,Siru,Jjong"
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.push()</span>
>>>   <span class="small"> - 배열의 맨 뒤에 원소 추가</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .push()
>>>
>>> let helloArray = ["Hello", "Siru", "Jjong"];
>>>
>>> helloArray.push("Maltese", "Puppy");
>>>
>>> console.log(helloArray);
>>> // ["Hello", "Siru", "Jjong", "Maltese", "Puppy"]
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.pop()</span>
>>>   <span class="small"> - 배열의 맨 끝 원소 제거</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .pop()
>>>
>>> let helloArray = ["Hello", "Siru", "Jjong"];
>>>
>>> helloArray.pop();
>>>
>>> console.log(helloArray);
>>> // ["Hello", "Siru"]
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.unshift()</span>
>>>   <span class="small"> - 배열을 맨 앞에 원소 추가</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .unshift()
>>>
>>> let helloArray = ["Hello", "Siru", "Jjong"];
>>>
>>> helloArray.unshift("Maltese", "Puppy");
>>>
>>> console.log(helloArray);
>>> // ["Maltese", "Puppy", "Hello", "Siru", "Jjong"]
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">.shift()</span>
>>>   <span class="small"> - 배열을 맨 처음 원소 제거</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // .shift()
>>>
>>> let helloArray = ["Hello", "Siru", "Jjong"];
>>>
>>> helloArray.shift();
>>>
>>> console.log(helloArray);
>>> // ["Siru", "Jjong"]
>>>```
>>>
>>> </details>
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python - list</span>
>> </summary>
>>
>>``` Python
>> # Python - list
>> list_1 = []
>> list_2 = list()
>> list_3 = ['한글', '영어']
>>
>> print(list_3)  
>> # ['한글', '영어']
>>
>> print(type(list_1), type(list_2), type(list_3))
>> # <class 'list'> <class 'list'> <class 'list'>
>>```
> ---

> ## array-like
>> <details>
>> <summary>
>>   <span class="accent">JavaScript</span>
>> </summary>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">array-like object</span>
>>>   <span class="small"> - 유사 배열 객체 [LengthOfArrayLike]</span>
>>> </summary>
>>>
>>> + <strong>arguments</strong>
>>> 
>>> + <strong>HTMLCollection</strong>
>>> <br> - document.body.children
>>> 
>>> + <strong>NodeList</strong>
>>> <br> - element.childNodes
>>> <br> - document.querySelectorAll()
>>>
>>>``` JavaScript
>>> // JavaScript - array-like
>>>
>>> // - 배열처럼 인덱스로 프로퍼티 값에 접근 가능
>>> // - length 프로퍼티 존재
>>>
>>> const arrayLikeObject = {
>>>   0: 'a',
>>>   1: 'b',
>>>   2: 'c',
>>>   length: 3,
>>> };
>>>
>>> for(let i=0; i < arrayLikeObject.length; i++) {
>>>   console.log(arrayLikeObject[i])
>>>   // 'a', 'b', 'c'
>>> }
>>>```
>>>
>>> </details>
>>
>>> <details>
>>> <summary>
>>>   <span class="accent">iterable object</span>
>>> <span class="small"> - 반복 가능 객체</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // JavaScript - iterable
>>>
>>> // - for..of를 사용 가능한 객체
>>>
>>> function iterableObject(){
>>>
>>>  let iter_1 = "abcd";
>>>  let iter_2 = [ "a", "b", "c", "d"];
>>>
>>>  for (let char of iter_1) {
>>>    console.log(char);
>>>    // "a", "b", "c", "d"
>>>  };
>>>
>>>  for (let char of iter_2) {
>>>    console.log(char);
>>>    // "a", "b", "c", "d"
>>>  };
>>> };
>>>```
>>>
>>> </details>
>> ---
>>> <details>
>>> <summary>
>>>   <span class="accent">Array.from()</span>
>>>   <span class="small"> - 유사배열을 배열로 반환</span>
>>> </summary>
>>>
>>>``` JavaScript
>>> // Array.from()
>>>
>>> const arrayLikeObject = {
>>>   0: 'a',
>>>   1: 'b',
>>>   2: 'c',
>>>   length: 3,
>>> };
>>>
>>> console.log(Array.from(arrayLikeObject));
>>> // ['a', 'b', 'c']
>>>```
>>>
>>> </details>
>>
>> </details>
> --- 

> ## 생략 가능 인자
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>>```JavaScript
>> // JavaScript
>> function myFnc(a, /* optional */ b) {
>>   console.log(a)
>> }
>>
>> module.method([대괄호는 생략 가능한 인자])
>>```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python</span>
>> </summary>
>>
>>```Python
>> # Python
>> def funtion(a, b=0):
>>  # 인자에 값을 설정하면 인자 생략 시, 해당 값을 전달
>>   return a
>>```
>>
>> </details>
> ---

> ## Callback Function
> + 콜백 함수

> ## Generator Function 
> + 제너레이터 함수
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>> 
>>``` JavaScript
>> // JavaScript - function*
>>
>> function* anotherGenerator(i) {
>>   yield i + 1;
>>   yield i + 2;
>>   yield i + 3;
>> }
>> 
>> function* generator(i) {
>>   yield i;
>>   yield* anotherGenerator(i);
>>   yield i + 10;
>> }
>> 
>> var gen = generator(10);
>> 
>> console.log(gen.next().value); // 10
>> console.log(gen.next().value); // 11
>> console.log(gen.next().value); // 12
>> console.log(gen.next().value); // 13
>> console.log(gen.next().value); // 20
>> 
>>```
>>
>> </details>
> ---

> ## Recursive Function
> + 재귀 함수
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>>```JavaScript
>> // JavaScript - .callee()
>>
>> function(x) {
>>    if (x <= 1) return 1;
>>    return x * arguments.callee(x-1);
>>}
>>```
>>
>> </details>
> ---

> ## Alias
> + 별칭이란 뜻으로 보기 편하게 대체명을 만들기 위해 사용
>> <details>
>> <summary>
>>  <span class="accent">Dart</span>
>> </summary>
>>
>>  ```Dart
>> // Dart
>>
>> typedef ListOfInts = List<int>;
>> ListOfInts reversListOfNumbers(ListOfInts list) {
>>  var reversed = list.reversed;
>>  return reversed.toList();
>> };
>> ```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python</span>
>> </summary>
>>
>>  ```Python
>> # Python
>>
>> import numpy as np
>>
>> np.array()
>> ```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">SQL</span>
>> </summary>
>>
>>  ```SQL
>> -- SQL
>>
>> ColumnName AS 컬럼명칭 -- 컬럼에 별칭 부여
>> TableName AS 테이블 명칭 -- 테이블에 별칭 부여
>>
>> SELECT NO_NUM AS 사원번호, NO_NAME AS 사원명 FROM EX_TABLE
>> -- NO_NUM를 사원번호, NO_NAME을 사원명이라는 별칭 부여
>>
>> SELECT 컬럼1 + 컬럼2 AS TOTAL FROM EX_TABLE
>> -- 컬럼1 + 컬럼2의 값에 TOTAL이라는 별칭 부여
>> ```
>>
>> </details>
> ---

> ## Spread syntax
> + 전개 문법
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>>```JavaScript
>> // JavaScript - ...Array
>>
>> function sum(x, y, z) {
>>    return x + y + z;
>> }
>>
>> console.log(sum(...[1, 2, 3]))
>> // 6
>>```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python</span>
>> </summary>
>>
>>```Python
>> # Python - *list
>>
>> def sumList(x, y, z):
>>    return x + y + z
>>
>> print(sumList(*[1, 2, 3]))  # = sum([1, 2, 3])
>> # 6
>>```
>>
>> </details>
> ---


> ## String interpolation
> + 문자열 보간
> + String 내부에 parameter를 넣을 수 있다.
>> <details>
>> <summary>
>>  <span class="accent">Dart</span>
>> </summary>
>>
>> ```Dart
>> // Dart
>>
>> void main() {
>>  var name = 'nico';
>>  var age = 10;
>>  var greeting = "$name is ${age + 2}";
>> }
>> ```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>> ```JavaScript
>> // JavaScript
>> 
>> var name = 'nico';
>> var age = 10;
>>
>> console.log(`${name} is ${age + 2}"`);
>> /* 'nico is 12' */
>> ```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">Python</span>
>> </summary>
>> 
>>``` Python
>> # Python - parameter
>>
>>def func1(a, b):
>>  print(f"parameter: {a}")
>>  print(f"parameter: {b}")
>>```
>>
>> </details>
> ---

> ## Fat arrow syntax
> + =>
> + return을 포함한 function의 축약형
>> <details>
>> <summary>
>>  <span class="accent">Dart</span>
>> </summary>
>>
>> ```Dart
>> // Dart
>>
>> String sayGoodbye(String name) {
>>     return "$name";
>> };
>> // ↓
>> String sayHi(String name) => "$name";
>> ```
>>
>> </details>
>
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>> ```JavaScript
>> // JavaScript
>>
>> function sayGoodbye(name) {
>>   return `${name}`;
>> };
>> // ↓
>> sayGoodbye = (name) => `something ${name}`;
>> ```
>>
>> </details>
> ---
>
> 

### __?__ Ternary operator (Conditional Operator)
#### > operand ? expression : expression
> <span>- operand가 true일 경우, colon(:) 앞의 expression을 처리하고 false일 경우, colon(:) 뒤의 expression을 처리한다.</span>
---

### __??__ Nullish coalescing operator (QQ operator)
#### > left ?? right;
> <span>- 좌항(left-hand side operand)이 null or undefined일 경우, 우항(right-hand side operand)을 return 해주고 그렇지 않을 경우, 좌항을 return 해준다.</span>