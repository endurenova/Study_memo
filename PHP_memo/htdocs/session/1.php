<?php
echo $_COOKIE['PHPSESSID'];
// 세션id가 쿠키에 저장되어 내 컴퓨터에서 세션이 생성되어 있는 것을 서버에서 확인

// 세션 생성
session_start();
$_SESSION['ss_name'] = '홍길동';
$_SESSION['ss_age'] = '14세';

?>
세션이 생성되었습니다.
<a href='2.php'>세션 확인</a>