<?php

$new_file = 'x.txt';
$pf = fopen($new_file, 'w');  // 쓰기모드
fwrite($pf, "Say, Hi~");  // 쓰기
fwrite($pf, PHP_EOL."Say, Hi~");  // PHP_EOL (줄 바꿈)
fclose($pf);

$file = 'a.txt';
if (file_exists($file)) {  // 파일 존재 여부 확인
  $pf = fopen($file, 'r');  // 읽기모드
  // $pf = fopen($file, 'w');  // 쓰기모드
  // fwrite($pf, "Say, Hi~");  // 쓰기
  if ($pf) {
    $fz = filesize($file);
    $fr = fread($pf, $fz);
    if($fr) {
      echo $fr;
      echo $fz;
      fclose($pf);
    } else {
      echo "파일 읽기에 실패했습니다.";
    }
  } else {
    echo "파일 읽기에 실패했습니다.";
  }
} else {
  echo "존재하지 않는 파일입니다.";
}

?>