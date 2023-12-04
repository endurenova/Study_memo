<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>갤러리</title>
</head>
<body>
  <?php include 'menu.html'; ?>
  <div class="wrapper">
  <?php 
    $d = dir("./upload");
    while($file = $d->read()) {
      if($file == '.' or $file == '..') {
        continue;
      }
      $arr = explode('.', $file);
      $ext = end($arr);
      if ($ext == 'jpg' or $ext == 'JPG' or $ext == 'png' or $ext == 'PNG') {
        echo "
          <div class='img_div'>
            <img src='upload/".$file."'width='100'>
          </div>
        ";
        print_r($_FILES);
      } // <img src='upload{$file}' width='100'>
    }
  ?>

  </div>
</body>
</html>