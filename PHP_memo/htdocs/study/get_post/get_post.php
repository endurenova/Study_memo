<?php

# PHP Superglobal
// $_SERVER
print_r($_SERVER);  // 해당 파일에 대한 많은 정보가 들어있다.
echo $_SERVER['PHP_SELF'];  // <- 사용 예시
echo $_SERVER['HTTP_USER_AGENT'];
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36

echo $_SERVER['REMOTE_ADDR'];  // 방문자의 ip 확인가능(공유기를 껐다키지 않는 이상 유지됨) (ex. 순 방문자 수, 몇 번째 방문인지 체크, 동시 접근 비허용 등..)

// 유저 정보로 운영체제, 브라우저 등 확인 가능
// strpos(string $haystack, string $needle, int $offset = 0): int|false  -> strpos(탐색할 문자열, 찾을 문자)


// $_REQUERST - $_GET, $_POST, $_COOKIE 모두 사용 가능

// $_GET - 주소를 통해서 데이터를 얻음 (주소 뒤에 Query문이 붙는다)(단순한 검색용으로 쓰이고 db(sql)에 저장 가능)
print_r($_GET);
// Query string (질의하는 문자문)

// $_POST - form으로 전달되는 데이터를 얻음
?>
<?php echo "<h1>GET</h1>"; ?> <br>
<?php echo $_GET['id_get']; ?> <br>
<?php echo $_GET['password']; ?> <br>
<?php echo nl2br($_GET['memo']); ?> <br>  

<?php echo "<h1>POST</h1>"; ?>

<?php echo $_POST['id_post']; ?> <br>
<?php echo $_POST['password']; ?> <br>
<?php echo nl2br($_POST['memo']); ?> <br>

<?php
// nl2br() newline에 br처리를 해줌 (xhtml 문법인 <br />이 나오지만 <br>과 기능 동일
/*
  # POST방식으로 데이터를 받아서 sql에 저장하는 예

  $name = $_POST['name_post'];
  $company = $_POST['company_post'];

  mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
  $link = mysqli_connect("localhost", "my_user", "my_password", "world");
  $sql = "INSERT INTO member(name, company) values('{$name}', '{$company}')";

  mysqli_query($link, $sql);
*/

?>