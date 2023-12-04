<script>

const arr1 = ["a", "b", "c"];
const arr2 = [...arr1];  // php는 전개연산자 안 써도 분리됨

arr1.pop();
// arr1 = ["a", "b"], const arr2 = ["a", "b", "c"]

const arr3 = ["a", "b", "c"];
const arr4 = [arr3];
arr1.pop();
// arr3 = ["a", "b"], const arr4 = ["a", "b"]


const 배열모음 = ["배열", "모음", "변수입니당"];

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue // 아래 코드들을 진행하지 않고 다시 맨 위로
  } else if (i === 7) {
    break  // 진행 정지
  }
  console.log(i);
}
// 0, 1, 2, 3, 5, 6 



for (let i in 배열모음) {
  console.log(i); // 결과: 0, 1, 2,
}

for (let i of 배열모음) {
  console.log(i); // 결과: "배열", "모음", "변수입니당"
}
</script>

<?php
# http://localhost/1.php

// xampp
// 웹서버, DB서버, PHP
// Apache, MaraDB, PHP 컴파일러

$txt = "PHP";
echo "I love $txt !";

// 수퍼 전역
$GLOBALS["name"] = "수퍼전역";

// 전역변수
// 로컬변수 (지역변수)

// $name = x; 변수
// define("name", value) 상수
define("constPHP", "php const");

$x = 5;
function myText() {  
  global $x;  // 전역변수의 $x값을 사용한다는 의미
  $y = 6;  // 함수 안에서만 사용하는 지역ㅂ젼수
  echo "수퍼전역은 그냥 \$GLOBALS[name] => $GLOBALS[name]";
  echo "전역변수를 쓰기위해 global \$x를 호출 => $x";
  echo "\$y는 함수 내 지역변수 => $y";
}
myText();
$str = "나는 미국인이다.";
$str1 = str_replace("미국인", "한국인", $str);  // str_replace(바꿀 str, 바뀔 str, 대상 변수)
echo $str1;

# 문자열 연산자
// ., .=
/*
  $x = "안녕";
  $y = $x . "하세요";

  $x = "안녕";
  $x .= "하세요";
*/

# 비교연산자
// NOT (!=, !===, <>)

# 증감연산자
/*
  # ++$x
  $x = 10;

  $y = ++$x; 
    -> x = 11, y = 11

  # $x++
  $y = $x++;
    -> x = 11, y = 10
*/
  
# 논리연산자
# 0 = false, 1 = true

# 논리곱 and, &&
// t t = t
// t f = f
// f f = f

# 논리합 or, ||
// t t = t
// t f = t
// f f = f

# xor 서로 다를 때만 true
// t t = f
// t f = t
// f f = f

# boolean
// is_int(); 정수 판별
// is_float(); 실수 판별
// is_numeric(); 숫자인지 판별
// is_string(); 문자인지 판별


// var_dump(); 자료 타입 판별

// pi(); 원주율
// abs(num); 절대 값
// sqrt() 루트
// round() 반올림
// ceil() 소수점 올림
// floor() 소수점 내림
// rand(x, y) x부터 y까지의 랜덤


$z = 33443;
var_dump($z);   // var_dump() 어떤 자료형인지 -> int(33443)
var_dump(is_int($z));  // var_dump(is_int()) int인지 -> bool(true)
var_dump($x <> $z);  // -> bool(true)


echo rand(1, 4);
echo var_dump(is_numeric('f'));


# 반복문(loop);
# do while
// while문은 조건이 하나라도 만족하지 못하면 정지하는데
// do while문은 무조건 한 번은 실행함.
$a = 1;
do {
  echo $a;
  $a++;
} while ($a < 10);
echo "fffff";

# 인덱스 배열
$arr1 = [1, 2, 3, 4];
$arr2 = array(1, 2, 3, 4, 5); 

# 연관 배열 (key: value 쌍)
$arr3 = array(
  1 => "하나",
  2 => "둘",
  4 => "넷"
);

$arr4 = array();
$arr4[2] = "이";
$arr4[5] = "오";

echo "afafaf";
# 다차원 배열 (2차원 배열)
$arr5 = array(
  array("대한민국", "한국어", "서울"),
  array("일본", "일본어", "도쿄"),
  array("프랑스", "불어", "파리"),
);
print_r($arr5);
/*
  Array
  (
    [0] => Array
      (
        [0] => 대한민국
        [1] => 한국어
        [2] => 서울
      )
    [1] => Array
      (
        [0] => 일본
        [1] => 일본어
        [2] => 도쿄
      )
    [2] => Array
      (
        [0] => 프랑스
        [1] => 불어
        [2] => 파리
      )
  )
*/



echo "afafaf";
echo array_key_exists(2, $arr3);
echo var_dump(array_key_exists(2, $arr3));
print_r(array_reverse($arr3, true));  // 사람이 읽을 수 있는 정보 출력
// array_push(array $array, mixed ...$value) array의 마지막에 요소 넣기 - array_push($arr2, mixed ...$arr3);
// array_pop(array $array) array의 마지막 요소 빼기
// array_key_first(array $array) array의 첫 번째 key  true면 1을 반환.
// array_last_first(array $array) array의 첫 번째 key

$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");
asort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
// sort() 오름차순 정렬
// rsort() 내림차순 정렬
// natsort() 자연 숫자 순서 정렬 (ex. [1, 10, 12, 2] = > [1, 2, 10, 12]) nature order
// natcasesort() 대소문자를 구분하지 않는 nature order
// asort() value(값)의 오름차순 정렬 
// ksort() key(키)의 오름차순 정렬
// arsort() value(값)의 내림차순 정렬 
// krsort() key(키)의 내림차순 정렬 


// declared: 선언된
// isset(mixed $var, mixed ...$vars): bool
// 변수가 선언(declared) 되었고 값이 있을 때 => true
// 변수가 선언(declared) 되었지만 값이 없을 때(null) => false
// 변수가 정의되지 않았을 때(undefined) => false


// unset(mixed $var, mixed ...$vars): void 변수 초기화
//unset($arr4, $arr5);

/*
  property_exists(object|string $object_or_class, string $property): bool
  array_key_exists(key, array $array) array 안에 key가 존재하는지
  PHP 7.4.0부터 더 이상 사용되지 않으며 PHP 8.0.0부터 제거 -> property_exits()나 isset() 사용
  echo var_dump()
*/


/*
  array_reverse(array $array, bool $preserve_keys = false) array를 반전시키고 key값 0부터 재배치, bool을 true로 하면 key값 유지 (기본 값: false)
  $arr = array(
    1 => "하나",
    2 => "둘",
    4 => "넷"
  );

  $reversed = array_reverse($arr);  // = array_reverse($arr, false);
  print_r($reversed);
  // Array ( [0] => 넷 [1] => 둘 [2] => 하나 )

  $preserved = array_reverse($arr, true);
  print_r($preserved);
  // Array ( [4] => 넷 [2] => 둘 [1] => 하나 )

*/

# foreach
echo "fffff";
foreach ($arr2 AS $fruit) {
  echo $fruit . " ";
}
echo "fffff";
foreach ($arr3 AS $key => $value) {
  echo "$key: $value";
}


$a = rand(1, 3);
switch($a) {
  case 1:
    echo "가위";
    break;  // break을 만날 때까지 실행
  case 2:
    echo "바위";
    break;
  case 3:
    echo "보";
    break;
  default:  // 조건 값을 만족시키지 못했을 때 기본 값
    echo "범위를 벗어났습니다.";
    $a = rand(1, 3);
}

$b = "green";
switch($b) {
  case "red":
    echo "빨강";
    break;  // break을 만날 때까지 실행
  case "yellow":
    echo "노랑";
    break;
  case "green":
    echo "초록";
    break;
  default:  // 조건 값을 만족시키지 못했을 때 기본 값
    echo "범위를 벗어났습니다.";
}



// 내장함수
/*
  number_format(
      float $num,
      int $decimals = 0,
      ?string $decimal_separator = ".",
      ?string $thousands_separator = ","
  ): string
*/
$money = 3000;
echo number_format($money);

// declare(strict_types=1);  // 엄격한 타입 체크 (맨 윗줄에 넣어야함)
function addNumber(int $a, int $b) {
  echo $a + $b;
}
addNumber(1, 2);  // function의 파라미터에 지정한 데이터 타입과 다를 시, 에러

function multNumber(int $a, int $b) : int {  // : datatype을 적을 시, return 값을 해당 datatype으로 return 한다는 의미
  echo $a * $b;
  return $a * $b;
}
addNumber(1, 2); 




// php로만 구성되어 있으면 생략가능 => ?>
