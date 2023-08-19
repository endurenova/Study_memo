if (조건부분) {
  동작부분;
} else if (조건부분) {
  동작부분;
} else {
  동작부분;
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}


switch (비교할_값) {
  case 조건값_1:
    동작부분;
  case 조건값_2:
    동작부분;
    break;  // break이 있어야 끝남
  default:
    동작부분;
}

switch (myChoice) {
  case 1:
    console.log("토끼");
  case 2:
    console.log("강아지");
    break;
  case 3:
    console.log("고양이");
    break;
  case 4:
    console.log("코알라");
    break;
  default:
    console.log("1에서 4 사이의 숫자를 입력해주세요.");
}
// myChoice가 "2"일 경우 if(myChoice == 2)
// switch문은 암시적 형 변환을 허용하지 않기 때문에 조건식에서 등호를 반드시 3개
// switch문은 값들을 비교할 때 자료형을 엄격하게 구분
// if문으로 대체할 때는 반드시 등호 3개로 일치 비교