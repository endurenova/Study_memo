
// JavaScript에서 함수는 일급객체(first-class object),  즉, 함수를 다른 함수의 인자로 전달이 가능
// fuctional arguments: (funargs) 다른 함수의 인자로 전달되는 함수
// higher-order function: 다른 함수를 인자로 전달받는 함수
// function valued function: 함수가 다른 함수를 리턴하는 경우

// 콜백함수 (Callback)(higher-order function)

/* JavaScript의 세가지 코드 */
// global 코드, function 코드, eval 코드
var eval = "eval을 절대 사용하지 말 것! (eval is evil)"  // eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수

// 호이스팅 (hoisting): 선언과 변수의 할당을 구분하는 개념
function hoistingTest(){
    console.log('greeting :'  + hi);  // greeting :undefined  
    var hi = "hello";  // 함수 내의 선언된 어떤 위치의 변수든 함수의 최상단으로 올려지고 undefined로 임의의 값이 할당 됨
    console.log('greeting :'  + hi);  // greeting :hello  나중에 함수가 실행이 되면서 그 변수에 해당하는 값을 할당
}


/* 실행 컨텍스트 (Execution Context) */
// 컨텍스트 (context): 함수가 속해있는 객체가 무엇인지 의미한다. (만약 함수가 글로벌 스코프에서 선언되었다면, 이때의 컨텍스트는 global(window)이다.)
// 글로벌 컨텍스트 (global context): 오직 하나만 존재
// 변수 객체(Variable object)

// 문법 (Syntax)
// 인자/매개변수 (Parameters)
// 스코프 (scope): 유효 범위
// 생성자 함수(Constructor): function
// 인스턴스(Instance): 생성자 함수의 결과
// 전역변수(Global Variable) : 함수 외부에서 선언된 변수
// 지역변수(Local Variable) : 함수 내부에서 선언된 변수
// []: 리스트, {}: 코드블록(함수의 몸통), (): 안의 값이 객체임을 표현

const i = 0;  // const i(함수 외부)는 global scope이자 전역변수(Global Variable)
function x() { // 함수스코프 -> 지역스코프
    // 함수 생성과 동시에 x함수에 대한 새로운 실행 컨텍스트가 생성
    for (var i = 0; i < 2; i++) {  // scope var i(함수 내부)는 x함수의 scope 지역변수
        // 이 실행 컨텍스트 내부에 존재하는 변수환경(variable environment)에 i변수가 저장된다.
        console.log(i);
    }  // 블록스코프 - 블록 {}이 생성될 때마다 새로운 스코프가 형성
}  // 함수외부는 global scope이고, 함수 내부는 x함수의 scope인데 부모스코프는 자식스코프에서 간섭할 수 없기 떄문에 접근이 불가능하다.


// 스코프 체인 (scope chain)
    var x = 10;  // 보통은 최상위 객체인 window 객체(전역변수객체)까지 접근해 변수를 찾음 (이때도 없으면 undefinded)
    (function foo(){
        var y = 20;  // 이를 계속해서 반복해
        (function bar(){
            var z = 30;
            console.log(x + y + z);  // 현재 스코프(컨택스트) 상에 변수가 존재하지 않는다면 부모 변수 객체로 이동을 해서 찾고 
        })()
    })();

// this 바인딩
// this가 중요한 이유는 this는 일반 변수와는 다르게 어떤 중간 매개 없이 , 스코프 체인 같은 중간 과정이 없이 바로 실행컨택스트에 접근을 합니다. this의 값은 오직 컨택스트에 들어오는 순간 딱 한번 정의 가 됩니다
    // 기본 바인딩 (Default Binding): 기본 바인딩이 적용될 경우 this는 전역 객체에 바인딩된다.(브라우저 환경인 경우 window, Node.js 환경인 경우 global)
        window.a = 10; function foo() {console.log(this.a);}
        foo();  // 10

        'use strict'  // 엄격모드에서는 기본 바인딩 대상에서 전역객체는 제외된다. 전역객체를 참조해야할 this가 있다면 그 값은 undefined가 된다.
        window.a = 10; function foo() {console.log(this.a);}
        foo();  // undefined

    // 암시적 바인딩 (Implicit Binding): 함수가 객체의 메서드로서 호출되는 상황에서 this가 바인딩되는 것, 이때 this는 해당 함수를 호출한 객체, 즉 콘텍스트 객체에 바인딩된다.
        const foo = {a: 20, bar: function () {console.log(this.a);}} 
        foo.bar(); // 20

    // 명시적 바인딩 (Explicit Binding): JavaScript는 모든 Function 은 call(), apply(), bind()라는 프로토타입 메소드를 가지고 있다. 3가지 메서드 중 하나를 호출함으로써 this 바인딩을 코드에서 명시하는 것
        const foo = {a: 20}
        function bar() {console.log(this.a);}
        bar.call(foo);  // 20 .call(x, y);
        bar.apply(foo);  // 20 .apply(x, []);
        const bound = bar.bind(foo);  // .bind(x); 매개변수로 전달받은 오브젝트로 this가 바인딩된 함수를 반환.
        bound(); // 20 하드바인딩: 이후 호출될 때마다 처음 정해진 this 바인딩을 가지고 호출된다.
    
    // new 바인딩 (new Binding): 함수를 호출할 때 앞에 new 키워드를 사용하는 것으로 객체를 초기화할 때 사용하는데, 이때 사용되는 함수를 생성자 함수라고 한다.(컨벤션으로 생성자 함수는 대문자로 시작한다)
        function Foo() {this.a = 20;}
        const foo = new Foo();
        console.log(foo.a);  // 20

    // 화살표 함수 (Arrow Function)(ES6): 앞서 설명한 규칙들이 적용되지 않고, this에 어휘적 스코프(Lexical scope)가 적용
        const foo = {
            a: 20,
            bar: function () {
                setTimeout(() => {  // 화살표 함수를 정의하는 시점의 컨텍스트 객체가 this에 바인딩된다.
                    console.log(this.a);
                    }, 1);
                }
        }
        foo.bar();  // 20


object = {};
array = [];

// 객체(Object) - 프로퍼티로 구성
var obj1 = {
  key1: "value1",  // 프로퍼티 (key와 value로 구성)
  key2: "value2"   // 프로퍼티 (key와 value로 구성)
}

// 프로퍼티 값
// 프로퍼티 갱신 (update property)
obj1.key1 = 'value0';

// 프로퍼티 동적 생성 (dynamic property)
obj1.key5 = 'value5';

// 프로퍼티 삭제 (dynamic property)
delete obj1.key5;

// 접근 방식
// 마침표 표기법 (dot notation) - 마침표 프로퍼티 접근 연산자(.) 사용
console.log(obj1.key1);

// 대괄호 표기법 (bracket notation) - 대괄호 프로퍼티 접근 연산자([ ]) 사용
console.log(obj1['key1']);

// 메소드(Method) - 프로퍼티 (property)의 값이 함수일 경우
var obj2 = {
    num: 2,  // 프로퍼티 (key(모든 string 또는 symbol 값)와 value(JavaScript에서 사용할 수 있는 모든 값)로 구성)
    increase: function () {  // 메소드
        this.num++;
        return this // this는 객체 자신을 가리키는 참조 변수
    }
}
console.log(obj2.increase());

let name1 = function(a, b) {}

// -----------------------------------------------------------------------------------------------------------------

var objArry = (x) => {return {x : x}};
objArry = (x) => ({x : x});                 // 코드블록{}이 없으면 객체(object)를 함수스코프로 인식
objArry = x => ({x : x});
objArry = x => ({x});                       // 반환값(return)이 객체(object)면 괄호() 필수

var paramArry = (x) => {return new Date()}
paramArry = (x) => new Date();              // 반환값(return)만 있다면 코드블록(함수의 몸통)인 중괄호{}와 return(식 or 값)을 생략 가능
paramArry = x => new Date();                // 매개변수를 하나만 받는다면 매개변수의 괄호()도 생략 가능
paramArry = () => new Date();               // 매개변수가 없으면 괄호 필요
paramArry = (x, y) => new Date();           // 매개변수가 2개 이상이면 괄호 필요

let makingSimple = function (a) {return function (b) {return a + b;}}  // <=
makingSimple = (a) => {return function (b) {return a + b;}}  // <=
makingSimple = a => function (b) {return a + b;}  // <=
makingSimple = a => (b) => {return a + b;}  // <=
makingSimple = a => b => a + b;  // <=
makingSimple(a)(b);

let returnObj = (x) => {return {x : x}};  // <=
returnObj = (x) => ({x : x});  // <=
returnObj = x => ({x : x});  // <=
returnObj = x => ({ x });  // <=

// -----------------------------------------------------------------------------------------------------------------

param.addEventListener('', function () {});
param.addEventListener('', someFunction);
param.addEventListener('', () => {});
function someFunction() {}

// 매개변수가 하나뿐인 경우 괄호는 선택사항:
(singleParam) => { statements }
singleParam => { statements }

// 매개변수가 없는 함수는 괄호가 필요:
() => { statements }


let double = n => n * 2;
let doublew = function(n) { return n * 2 }

let func = function(arg1, arg2, ...argN) {
    return expression;
};


// 스택(stack)- 후입선출(LIFO, Last-In-First-Out) 구조
var stack = [0, 1, 2];  // 2가 top
stack.pop();            // pop: top을 통해 삽입하는 연산
stack.push(3);          // push: top을 통한 삭제하는 연산
//  push → | | → pop
//         |2| top
//         |1|
//         |0|
// 뒤로 가기, undo
// stack underflow, stack overflow

// 큐(QUEUE) - 선입선출(FIFO, First in first out) 구조
var queue = [0, 1, 2];  // 2가 rear
queue.shift();          // 디큐(dnQueue): 프론트에서 이루어지는 삭제연산
queue.push(3);          // 인큐(enQueue): 리어에서 이루어지는 삽입연산
//  offer → | |   rear
//          |2|
//          |1|
//  front   |0| → poll
// 캐시(Cache) 구현, 우선순위가 같은 작업 예약 (프린터의 인쇄 대기열), 프로세스 관리, 너비 우선 탐색(BFS, Breadth-First Search) 구현
