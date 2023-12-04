<?php
include 'menu.html';

print_r($_FILES);

$file_name = $_FILES['photo']['name'];
$arr = explode('.', $file_name);
$ext = end($arr);

if ($file_name == '') {
  echo "
  <script>
    alert('파일을 선택하지 않으셨습니다.');
    self.location.href='./index.php';
  </script>
  ";
  exit;
}

if($ext == 'jpg' or $ext == 'png' or $ext == 'PNG' or $ext == 'JPG') {
  copy($_FILE['photo']['tmp_name'], "./upload/". $file_name);
  echo "
  <script>
    alert('정상적으로 업로드가 완료되었습니다.');
    self.location.href='./gallery_list.php';
  </script>
  ";
  exit;
} else {
  echo "이미지 포맷 (png, jpg)만 업로드 가능합니다.";
}

?>