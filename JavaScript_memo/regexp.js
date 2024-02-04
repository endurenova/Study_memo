// 정규 표현식 리터럴
// Regular Expression (regexp / regexr): 정규 표현식
// Flag 종류 (중복 가능 ex.ig)
var IgnoreCase = `i: Ignore Case - 대소문자를 구별하지 않고 검색한다.`;
var Global = `g: Global - 문자열 내의 모든 패턴을 검색한다. 이것이 없으면 패턴과 일치하는 첫 번째 결과만 반환된다.`;
var MultiLine = `m: Multi Line - 문자열의 행이 바뀌더라도 검색을 계속한다.`;
var regularExpression = [
  /regexp/i, // Ignore Case - 대소문자를 구별하지 않고 검색
  /regexp/g, // Global - 문자열 내의 모든 패턴을 검색, 이것이 없으면 패턴과 일치하는 첫 번째 결과만 반환
  /regexp/m, // Multi Line - 문자열의 행이 바뀌더라도 검색
  /regexp/gi, // 대소문자 구분 없이 문자열 끝까지 검색
  /str/, // str이 포함된 문자
  /[str]/, // s, t, r이 포함된 문자
  /^str/, // str로 시작하는 지
  /[^str]/, // s, t, r이 포함되지 않은 문자
  /str$/, // str로 끝나는 지
  /[str]$/, // s, t, r로 끝나는 지

  /str?/, // str이 0번 또는 최대 한번 반복되는 문자열
  /str+/, // str이 최소 한번 이상 반복되는 문자열
  /[str]+/, // s, t, r로 시작하는 문자가 1개 이상
  /str{n}/, // str이 n번 반복되는 문자열
  /[str]{n}/, // s, t, r로 이루어진 n자의 모든 경우의 수
  /str{2,}/, // str이 최소 2번 이상 반복되는 문자열
  /str{n, m}/, // str이 최소 n번, 최대 m번 반복되는 문자열

  /\s/, // 모든 공백
  /\S/, // 공백 제외
  /\w/, // 모든 밑줄 (_)
  /\W/, // 밑줄 제외
  /\d/, // 숫자
  /\D/, // 숫자 제외
  /[0-9]/, // 숫자

  /([^)]+)/, // 괄호 안에있는 모든 문자 캡쳐
  // .match(/\(([^)]+)\)/) =>  ['(1, 0, 0, 1, 10, 0)', '1, 0, 0, 1, 10, 0', index: 6, input: 'matrix(1, 0, 0, 1, 10, 0)', groups: undefined]
  /^[0-9]+$/, // 숫자로 시작해서 숫자로 끝나는지
  /A[012]z/, // A0z, A1z, A2z
  /[A-Z][0-9][a-z]/, // A0a ~ Z9z
  /.../, // .의 개수 만큼의 임의의 문자 전역 검색 (공백 포함)"
  /[A-Za-z]+/g,
  /[A-Z]+/gi, // 'A' ~ 'Z' 또는 'a' ~ 'z'가 한번 이상 반복되는 문자열을 반복 검색
  /[0-9,]+/g,
  /[\d,]+/g, // '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색

  /[^A-Za-z0-9]/gi, // A-Za-z0-9 이외의 문자가 있는지 검사 (특수문자 확인)
  /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, // 이 방식의 장점은 특수 문자를 선택적으로 검사할 수 있다.
  /^(name(\d+))\.png$/, // name으로 시작하고 숫자가 붙는 확장자 png 파일
  /^\d{3}-\d{3,4}-\d{4}$/, // 000-0000-0000 형식
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/, // 메일 주소 형식
];
const myRegExp = /^[0-9]+$/; // /regexp/Flag
console.log(targetStr.replace(regexr, '')); // 특수 문자 제거
targetStr.replace(regexr, 'newSubStr');
targetStr.replace(regexr | substr, 'newSubStr'); // .replace(치환 대상, 치환할 문자열)
targetStr.search(regexr | substr); // .search(검색 대상) => 위치(0부터 시작)

// string.substr(start,length) length - 탐색구간이 끝나는 점(index), start+length 위치까지를 탐색구간으로 설정함
// 1. length값은 가져올 길이값이며, 생략가능하다.
// 2. 두번째 매개변수인 length값이 음수값일 경우 빈 값을 반환한다.
// (length값이 음수이라면 가져올 길이값이 마이너스이므로 당연히 빈값을 반환)
// 문자열 중 첫번째 인자(start)에서부터 두번째 인자(length)까지의 구간에 해당하는 문자열을 반환합니다.
// length를 지정하지 않으면 start에서부터 문자열 전체를 처리구간으로 간주합니다.
// start가 양수일 경우, 문자의 길이 보다 작으면 빈문자열이 리턴됩니다.
// start가 음수일 경우, start의 index는 문자열의 뒤에서부터 시작됩니다.

// string.substring(from,to) to - 탐색구간이 끝나는 점, 0 index부터 시작됨
// 1. 리턴값은 잘라진 문자열. 즉 시작 인덱스부터 End 바로 앞까지 반환.
// 2. End값은 생략가능 (시작부터 끝까지)
// 3. start값이 End값보다 크다면 작은 숫자가 시작위치로 큰숫자가 종료위치로 셋팅된다.
// 4. 매개변수 둘 중에 한개값이 음수값이라면 시작위치가 0으로 설정된다.
// 5. 매개변수가 둘다 음수값이라면 반환값이 무조건 없다.
// from과 to 모두 index 0부터 시작하는 위치 값을 가진다.
// from이 to 보다 작으면 from부터 to사이의 문자열을 리턴한다.
// from이 to 보다 크면 to부터 from 사이의 문자열을 리턴한다.
// from과 to가 같으면 빈문자열을 리턴한다.

// var str = "coding everybody"
// str.slice(7) => everybody
// str.substr(7) => everybody
// str.substring(7) => everybody
// str.slice(0, 7) => coding
// str.substr(0, 7) => coding
// str.substring(0, 7) => coding
// str.slice(3, 7) => ing
// str.substr(3, 7) => ing eve
// str.substring(3, 7) => ing
// str.slice(7, 2) =>
// str.substr(7, 2) => ev
// str.substring(7, 2) => ding

// RegExp.prototype.exec
// RegExp.prototype.test
// String.prototype.match
// str.match(regexp);

// console.log(targetStr.match(regexr)); // [ '찾을 문자', index: 문자열 내 단어 개수, input: '문자열' ]

// console.log(targetStr.match(regexr)); // [ 'Is', 'is', 'is' ]
// String.prototype.replace
// String.prototype.search
// String.prototype.split
const targetStr = 'Is this all there is is si isisfs?';

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.
const regexr = /is+/g;

console.log(targetStr.match(regexr)); // 3`
RegExp.prototype.match;
// String.prototype.match
// str.match(regexp);

var input_url = document.querySelector('');
var input_url_pattern = /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/g;

// url만 복붙되는
input_url.addEventListener('input', function () {
  if (!input_url_pattern.test(input_url.value)) {
    input_url.value = '';
  }
});

// 정규식 표현 - k단위 자동(,)입력
const regularExpressionComma = function (payment) {
  Array.from(payment).forEach(consultation => {
    consultation.innerText = Number(consultation.innerText).toLocaleString();
  });
};

// 정규식 표현 - 소수점 출력 (대상, 소수점 개수)
const regularExpressionFloat = function (invoiceCredit, len) {
  Array.from(invoiceCredit).forEach(credit => {
    credit.innerText = parseFloat(Number(credit.innerText)).toFixed(len);
  });
};
