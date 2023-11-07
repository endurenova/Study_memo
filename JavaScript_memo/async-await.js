
// async를 붙이면 해당 함수는 자동으로 프로미스를 반환

// await은 async가 붙은 함수 안에서만 사용 가능

async function myAsyncErrorFun() {
    throw 'myAsyncError';  // async는 throw로 예외처리
    //throw new Error("error");
    //await Promise.reject(new Error("error"));
    //return Promise.reject(new Error("error"));
}

// catch() 메소드를 사용한 예외 처리 방법
// 프로미스에서 예외 처리하는 방법과 동일하게 catch() 메소드를 이용해 예외를 처리 할 수 있습니다.
async function promise() {
    throw 'error';
}
promise()
    .then(result => console.log('status : fulfilled,', result))
    .catch(error => console.log('status : rejected,', error))
// => status : rejected, error


// try-catch 구문을 이용한 예외 처리 방법
// 함수 내부에서 예외가 발생한 경우 try-catch 구문을 이용하여 예외를 처리할 수 있습니다.
async function promise() {
    throw 'rejected';
}

async function exceptionFunc() {
    try {
        await promise()
    } catch (e) {
        console.log('catch error!', e)
    }
}
exceptionFunc() // => catch error! rejected


// catch() 메소드와 try-catch 메소드를 혼용한 예외 처리 방법
// 함수 내부에서 예외가 발생하였지만 예외를 내부가 아닌 외부로 넘겨 처리하고 싶은 경우 다음과 같이 혼용하여 사용할 수 있습니다.
async function promise() {
    throw 'rejected';
}

async function exceptionFunc() {
    try {
        return await promise()
    } catch (e) {
        console.log('catch error!', e) // => catch error! rejected
        throw e
    }
}

exceptionFunc()
    .then(result => console.log('status : fulfilled,', result))
    .catch(error => console.log('status : rejected,', error)) // => status : rejected, rejected
    
/*  => catch error! rejected
        status : rejected, rejected
*/

const resultAsyncs = myAsyncErrorFun().catch((e) => {console.error(e);});
// async 함수 내에서 await하는 Promise의 예외가 발생하면 throw를 반환합니다.


function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
    })
}

async function getApple() {
    // await는 promise가 완료될 때까지 기다린 후 resolve한 값 도출
    await delay();    
    return "apple"; // async 함수에서 return은 resolve()와 같은 역할 (프로미스 반환)
}

async function getBanana() {
    await delay();
    return "banana";
}

async function getFruites() {
    let a = await getApple(); // 리턴값이 promise의 resolve()이므로 대입 가능
    let b = await getBanana(); // getApple()이 처리되고 getBanana()가 처리됩니다.
    console.log(`${a} and ${b}`);
}

/*
    function getFruites() {
        getApple()
            .then((a) => { // 리턴값이 promise의 resolve()이므로 then 가능
                getBanana()
                    .then((b) => console.log(`${a} and ${b}`));
            })
    }
*/

getFruites(); // 결과 : apple and banana


// promise 객체를 사용하기 때문에 .then / .catch를 이용해서 예외처리를 하는 방법이 있습니다.

async function p2() {
    throw 'error';
    //throw new Error("error");
    //await Promise.reject(new Error("error"));
    //return Promise.reject(new Error("error"));
}

p2()
    .then((n) => console.log(n))
    .catch((n) => console.log(n));
// async는 throw로 예외처리 할 수 있습니다.

async function myAsyncErrorFun() {
    throw 'myAsyncError';
}

const resultAsync = myAsyncErrorFun().catch((e) => {
    console.error(e);
});
// async 함수 내에서 await하는 Promise의 예외가 발생하면 throw를 반환합니다.

async function myAsyncFunCheckErrorNextCode() {
    console.log(new Date());
    await rejectedWait(1); // throw를 반환하고, 아래 구문들은 실행되지 않는다.
    console.log(new Date());
}
const resultAsyncFunCheckErrorNextCode = myAsyncFunCheckErrorNextCode();
// async 함수 내에서 try / catch를 사용하는 방법이 있습니다.
// (반드시 await를 통해서 동기식으로 만들어주어야 합니다)

async function myAsyncFunTryCatch1() {
    console.log(new Date());
    try {
        await rejectedWait(1); // throw 되었다.
    } catch (e) {
        console.error('myAsyncFunTryCatch1', e);
    }
    // 그 다음일들을 쭉쭉할 수 있다.
    console.log(new Date());
}
const resultAsyncFunTryCatch1 = myAsyncFunTryCatch1();

// Promise의 예외처리
// reject를 이용하면 promise에 대한 예외처리를 진행할 수 있습니다.
function myPromiseErrorFun() {
    return new Promise((_, reject) => {
        reject('myPromiseError!');
    });
}
const resultPromise = myPromiseErrorFun().catch((e) => {
    console.error(e);
});
// reject에 에러 메시지를 담을 수 있고, .catch(e) => { console.error(e) }를 통해 그 메시지를 표시할 수 있습니다.

try {
	/**
	 * 정상이라면 이 코드는 아무런 문제없이 블록의 시작부터 끝까지 실행된다.
	 * 하지만 경우에 따라 예외가 발생할 수 있다.
	 * 예외는 throw 문에 의해 직접적으로 발생할 수도 있고,
	 * 또는 예외를 발생시키는 메서드의 호출에 의해 발생할 수도 있다.
	 */
} catch (e) {
	/**
	 * 이 블록 내부의 문장들은 오직 try 블록에서 예외가 발생할 경우에만 실행된다.
	 * 이 문장들에선 지역 변수 e를 사용하여 Error 객체 또는 앞에서 던진 다른 값을 참조할 수 있다.
	 * 이 블록에서는 어떻게든 그 예외를 처리할 수도 있고,
	 * 그냥 아무것도 하지 않고 예외를 무시할 수도 있고,
	 * 아니면 throw 를 사용해서 예외를 다시 발생시킬 수도 있다.
	 */
} finally {
	/**
	 * 이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
	 * 이 코드는 try 블록이 어떻게든 종료되면 실행된다.
	 * try 블록이 종료되는 상황은 다음과 같다.
	 *   1) 정상적으로 블록의 끝에 도달했을 때
	 *   2) break, continue 또는 return 문에 의해서
	 *   3) 예외가 발생했지만 catch 절에서 처리했을 때
	 *   4) 예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈 때
	 */
}

try {
	// 사용자에게 번호 입력을 요청
	var n = prompt("정수를 입력해 주세요.");
	// 사용자의 입력이 유효하다고 가정하고 그 숫자의 계승(factorial)을 계산한다.
	var f = factorial(n);
	// 결과를 표시한다.
	console.log(n + "! = " + f);
} catch (ex) { // 만약 사용자의 입력이 유효하지 않다면 이곳에 도달한다.
	// 사용자에게 에러가 무엇인지 알린다.
	alert(ex);
}