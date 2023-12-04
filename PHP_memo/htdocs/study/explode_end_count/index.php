<?php
// 파일 확장자 구하기

function getFileExtention($file_name) {
  $arr = explode('.', $file_name);  // explode() 지정된 문자로 문자열을 잘라서 배열을 만들어 줌
  // ['aaa', 'jpg']
  $ext = end($arr);  // end() 배열의 마지막 값을 반환
  
  return $ext;
}

$file_name = "aaa.jpg";
$ext = getFileExtention($file_name);
echo $ext;
// jpg


function getFileExtention2($file_name) {
  $arr = explode('.', $file_name);  // explode() 지정된 문자로 문자열을 잘라서 배열을 만들어 줌
  $arr_length = count($arr); // count() 배열의 길이 반환
  $file_ext = $arr[$arr_length - 1];
  // ['aaa', 'jpg']

  return $file_ext;
}

$file_name = 'hello.png';
$ext = getFileExtention2($file_name);
echo $ext;
// png

?>