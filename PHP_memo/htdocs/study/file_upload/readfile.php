
<?php
  # file 원본 이름을 바꿈으로써 절대위치를 감추는 방법

  $filepath = 'a.txt';  // 대상 파일
  $filesize = filesize($filepath);  // 파일 사이즈
  $filename = 'b.txt';  // 저장할 파일 이름

// 헤더 설정
header("Content-TypeL application/octet-stream");
header("Content-Disposition: attachment; filename='$filename'");  //다운로드 되는 파일의 이름을 지정
header("Content-Transfer-Encoding: binary");
header("Content-Length: $filesize");  // 파일 사이즈 명시

// PHP_출력_버퍼링_제어 (https://zetawiki.com/wiki/PHP_%EC%B6%9C%EB%A0%A5_%EB%B2%84%ED%8D%BC%EB%A7%81_%EC%A0%9C%EC%96%B4)
ob_clean();  // 출력 버퍼를 지움
flush(); // 출력 버퍼를 비움
readfile($filepath);  // 파일 읽어서 출력



?>