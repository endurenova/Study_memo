<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php include 'menu.php'; ?>
  <?php include_once 'about.php'; // include_once로 중복 호출 방지 가능 ?> 
  <!-- include는 비동기화 방식으로 에러가 나도 다음 코드들이 진행 됨 -->
  <!-- require는 동기화 방식으로 에러가 나면 다음 코드들이 진행되지 않음 -->

</body>
</html>