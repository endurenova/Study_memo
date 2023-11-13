<link rel="stylesheet" href="./css/style.css"/>

> expression (식)
> <br> - 값을 만들어 내는 코드

> conditional statement (조건문)
> <br> - 무언가를 수행하지만 값을 만들지는 않는 코드
(if, switch, for, while, var..)

> operand (피연산자)
> <br> - 처리될 데이터 그 자체 또는 데이터를 지정하는 컴퓨터 명령어의 일부를 의미


> redirection (리디렉션)
> <br> - 어떤 처리를 한 후, 페이지를 전환


> ### parameter (매개변수)
> + 입력되는 정보의 형식
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

> ### argument
> + 전달 인자
> + 배열이 아닌 객체
> + 식에 맞게 실제로 입력하는 값
>> <details>
>> <summary>
>>  <span class="accent">JavaScript</span>
>> </summary>
>>
>>``` JavaScript
>> // JavaScript - arguments
>>function func1(a, b, c) {
>>  console.log(arguments);
>>  console.log(arguments[0]);
>>}
>>
>>func(1, 2, 3);
>>
>>/* 
>>  Expected output: 
>>    > 1
>>    > Object { 0: 1, 1: 2, 2: 3 }
>>*/
>>```
>>
>> </details>
> --- 

> ### object
> + 객체
> + 순서가 없는 정보를 이음으로 식별자를 구분
>> <details>
>> <summary>
>>  <span class="accent">JavaScript - object</span>
>> </summary>
>>
>>``` JavaScript
>> // JavaScript - object
>>
>>let object = {'한글': '가나', '영어': 'abc'};
>>```
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

> ### array
> + 배열
> + 순서가 있는 정보를 순서로 식별자를 구분
>> <details>
>> <summary>
>>  <span class="accent">JavaScript - array</span>
>> </summary>
>>
>>``` JavaScript
>> // JavaScript - array
>>let array = ['가나', 'abc'];
>>```
>>
>> </details>
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
>>
> --- 

> ### 생략 가능 인자
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

> ### 재귀 함수
>```JavaScript
> // JavaScript
> function(x) {
>    if (x <= 1) return 1;
>    return x * arguments.callee(x-1);
>}
>```

> ### Alias
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


> ### String interpolation
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

> ### Fat arrow syntax
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