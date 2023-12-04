document.addEventListener('DOMContentLoaded', () => {
  // 어느 위치에서든지 실행 가능하게 하는
  const btn = document.querySelector('#upload_btn');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const f = document.upload_form;
    if (f.photo.value == '') {
      alert('파일을 첨부해 주세요.');
      return false; // 빠져나오기
    }
    f.submit(); // event.preventDefault();를 다시 풀어주기
  });
});
