<?php
if(isset($_COOKIE['ck_name'])) {
  echo '이름은 : '.$_COOKIE['ck_name'].'입니다.<br>';
} else {
  echo '이름을 모르겠습니다.<br>';
}
if(isset($_COOKIE['ck_age'])) {
  echo '나이는 : '.$_COOKIE['ck_age'].'입니다.<br>';
} else {
  echo '나이를 모르겠습니다.<br>';
}

?>
<a href="delete.php">쿠키 지우기</a>