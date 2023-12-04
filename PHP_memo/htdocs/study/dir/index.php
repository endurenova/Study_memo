<?php
$dir_name = "./upload";
$d = dir($dir_name);  // 인스턴스를 만들어 준다.


while (($file_name = $d -> read()) !== false) {  // == while (($file_name = $d -> read())
  if($file_name == '.' or $file_name == '..')  {
    continue;  //
  }
  echo "<img src='upload/".$file_name."' width='100'>";
  echo "<img src='upload/{$file_name}' width='100'>";

  ?><img src="upload/<?php echo $file_name; ?>"width='100'>
  <?php

  echo $file_name ."<br>";
}

/*
  세 가지 방식
  echo "<img src='upload/".$file_name."' width='100'>";
  echo "<img src='upload/{$file_name}' width='100'>";

  ?><img src="upload/<?php echo $file_name; ?>"width='100'>
  <?php
*/

/*
  $file_name = $d -> read();
  echo $file_name ."<br>";  // . -> ./upload 디렉토리를 의미

  $file_name = $d -> read();
  echo $file_name ."<br>";  // .. -> ../dir 디렉토리를 의미

  $file_name = $d -> read();
  echo $file_name ."<br>";  // long.gif

  $file_name = $d -> read();
  echo $file_name ."<br>";  // siru.jpg
*/
$d ->close();

?>