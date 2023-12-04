<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>폼 입력을 통한 구구단 출력</title>
</head>
<body>
  <!-- form에 method 입력을 안 해주면 get방식이 된다. -->
  <!-- 파일 하나에서 처리하는 방식이니 get -->
  <form method="get" name='form1' action="<?php echo $_SERVER["PHP_SELF"]; ?>">  <!-- $_SERVER["PHP_SELF"] 자기 자신을 출력할 때 -->
    <label for="">출력하고자 하는 단을 입력 바랍니다.</label>
    <input type="text" name="dan" id="dan">
    <button id="submit_btn">구구단 출력</button>
  </form>
  <?php
    if(isset($_GET['dan']) and $_GET['dan'] != '') {
      for($i = 1; $i <= 9; $i++) {
        echo $_GET['dan'] . 'x' . $i . '=' . $_GET['dan'] * $i . '<br>';
      }
    }
  ?>
  <script>
    const regex = /[0-9]/;
    const submitBtn = document.querySelector("#submit_btn");
    submitBtn.addEventListener('click', event =>{
      
      event.preventDefault();
      const dan = document.querySelector('#dan');
      if(dan.value == '') {
        alert('입력값이 비었습니다.');
        dan.focus();
        return false;
      } else if (regex.test(dan.value) != true) {  // else if (isNaN(dan.value)) {}
        alert('숫자를 입력해주세요.');
        dan.value ='';
        dan.focus();
        return false;
      }
      // isNaN(is Not-A-Number) 숫자가 아닌지 확인
      // isNaN(x) x가 숫자가 아닌지 확인(아닐 경우 true)
      document.form1.submit();
    })
  </script>
</body>
</html>