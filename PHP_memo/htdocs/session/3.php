<?php
session_start();

session_unset(); 
session_destroy();
// session_unset(); 세션 전체 삭제할 때
// session_destroy(); 세션 전체 삭제할 때

// unset($_SESSION['ss_age']); 일정 세션만 unset 할 때

?>
<a href="2.php">세션 확인</a>