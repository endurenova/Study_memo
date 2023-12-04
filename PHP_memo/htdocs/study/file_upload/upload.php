<?php
  // var_dump($_FILES);
  print_r($_FILES);
  /*
    Array 
    (
      [ufile] => Array
        (
          [name] => unnamed.jpg
          [type] => image/jpeg
          [tmp_name] => C:\xampp\tmp\phpD18E.tmp
          [error] => 0
          [size] => 23501
        )
    )
  */
  $file_name = $_FILES['ufile']['name'];
  $file_size = $_FILES['ufile']['size'];
  $file_type = $_FILES['ufile']['type'];
  echo "<p> 파일 명은 $file_name 이고 </p>";
  echo "<p> 파일 용량은 $file_size Byte이고 </p>";
  echo "<p> 파일 종류는 $file_type 입니다. </p>";
  $tfile = "./upload/abc.png";
  
  // move_uploaded_file(업로드한 파일 임시 이름, 업로드할 경로와 이름)
  move_uploaded_file($_FILES['ufile']['tmp_name'], $tfile);  // 파일
?>
