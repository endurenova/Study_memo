<?php
// 쿠키 만들기

setcookie("ck_name", "홍길동", time() + 5, "/");  // 지정 시간 후에 삭제 됨
setcookie("ck_age", "34세", time() + 10, "/");
// $_COOKIE["ck_name"]
?>
쿠키가 생성되었습니다. <br>
<a href="cookie.php">쿠키 확인</a>
