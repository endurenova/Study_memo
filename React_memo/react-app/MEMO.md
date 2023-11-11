
리액트는 컴포넌트(사용자정의 태그)를 만드는 것

prop(속성)
function Header(props){
  console.log('props', props.title)
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
태그 안에 중괄호{}를 사용할 경우, 표현식으로 인식

int를 태그의 속성으로 넘기면 str이 된다.
(문자를 숫자로 바꿔주는 Number()사용)

Prop은 컴포넌트를 사용하는 외부자를 위한 데이터
State는 컴포넌트를 만드는 내부자를 위한 데이터


import { useState } from 'react';
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // ↓ 축약형
  const [mode, setMode] = useState("WELCOME");
  // mode와 setMode의 값이 다르면 실행해주는 원리

const [value, setValue] = useState(PRIMITIVE);
  PRIMITIVE = string, number, bigint, boolean, undefined, symbol, null

const [value, setValue] = useState(Object); 범 객체
  Object = object, array

useState에 범 객체를 사용할 경우, 복제를 해야 함

object일 경우
newValue = {...value} → newValue 변경 → setValue(newValue)

array일 경우
newValue = [...value] → newValue 변경 → setValue(newValue)



powershell은 오류가 많으므로 command prompt(cmd)나 다른 명령창 사용

npx create-react-app .(.은 현재 폴더일 경우, 아니면 경로 입력)

수정
npm start = 개발하기 위한 어플리케이션

src/index.js = npm start시 시작되는 파일
src/index.js의 <App />은 react 전체 ui
src/index.css의 내용 지우기

src/index.js에서 root.render()의 root는 public/index.html

배포
npm start build
실행 시, build 폴더가 생성되는데 index.html 줄바꿈 없이 적혀있다. (용량 최소화를 위한 공백 삭제)

npx serve -s build (-s는 어느 주소로 접속해도 index.html로 연결되게)




사용자정의 태그를 만들 때는 반드시 대문자로 시작
function Header