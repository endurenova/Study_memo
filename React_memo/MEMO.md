
<link rel="stylesheet" href="./memoStyle.css"/>

# React
+ 어플리케이션이 interactive 하도록 만들어주는 Library
+ interactive한 UI를 만들어 주는 엔진
+ component(사용자정의 태그)를 만드는 것
+ SPA 방식

+ ## React-dom
+ React-dom은 Library 또는 Package
+ React-dom은 React element들을 HTML body에 조립하는 기계
+ 모든 React element들을 HTML body에 둘 수 있게 해줌

---
> ## SPA (Single Page Application)
>> 한 개의 페이지로 된 어플리케이션
>> <br> - 페이지마다 최초 접속 시 한번에 다운로드, 로딩하는 방식
> 
>> + 장점
>>   + <span class="accent">필요한 리소스만 부분적으로 로딩</span>
>> <br> - 캐시로 저장해놓기 때문에 성능 ↑
>>
>>   + <span class="accent"> 페이지 변환이 자연스러움 ↑</span>
>>
>>   + <span class="accent">컴포넌트 별 개발 용이</span>
> 
>> + 단점
>>    + <span class="accent">최초 접속 시 로딩 속도 ↓</span>
>> <br> - 정적 파일을 번들링해서 초기에 한 번에 받으므로
>>
>>    + <span class="accent">SEO가 어려움</span>
>> <br> - SSR로 해결 가능
>>
>>    + <span class="accent">보안 이슈</span>
>> <br> - SSR에선 사용자에 대한 정보를 세션으로 관리하지만,
CSR에선 쿠키말고는 저장할 공간이 마땅치 않음
> ---

> ## MPA (Multi Page Application)
>> 여러 개의 페이지로 만들어진 어플리케이션
>> <br> - 새로고침, 새로운 페이지를 요청할 때마다 서버에 정적 리소스를 요청
>> <br> - 매번 전체 페이지 리렌더링
> 
>> + 장점
>>   + <span class="accent">SEO가 쉬움</span>
>> <br> - 서버로부터 view(HTML)를 리턴 받아 검색 엔진이 크롤링 용이
>>
>>   + <span class="accent">최초 접속 시 로딩 속도 ↑</span>
>>
>>   + <span class="accent">컴포넌트 별 개발 용이</span>
> 
>> + 단점
>>    + <span class="accent">성능 저하</span>
>> <br> - 페이지 이동시 불필요한 템플릿도 중복해서 로딩
>>
>>    + <span class="accent">서버 렌더링에 따른 부하</span>
> ---

> ## Hosting 
>> 정보들이 호스트 컴퓨터(웹 서버)에 저장되어 있다가 사용자의 요청이 오면 응답
> ---

> ## Router
>> 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
> ---

+ 태그를 다룰 때는 하나의 태그 안에 있어야 한다.
+ int를 태그의 속성으로 넘기면 str이 된다.
+ (문자를 숫자로 바꿔주는 Number()사용)

### Prop(속성)은 컴포넌트를 사용하는 외부자를 위한 데이터
```jsx
function Header(props){  // 컴포넌트(사용자정의 태그)
  // 컴포넌트의 첫 글자는 대문자
  // 컴포넌트의 첫 글자는 소문자로 하면 태그로 인식
  // 컴포넌트는 어떤 JSX를 반환하는 함수
  {/* for와 class는 JavaScript용어라 JSX에선 htmlFor와 className으로 사용 */}
  console.log('props', props.title)
  return <header>
    <h1><a href="/">{props.title}</a></h1>
    {/* 태그 안에 중괄호{}를 사용할 경우, 표현식으로 인식 */}
  </header>
}

const MemorizedBrn = React.memo(Btn);
// 컴포넌트는 어떤 JSX를 반환하는 함수 ↓
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
        {/* ↓ Btn({id: value})처럼 오브젝트 인자(args)로 넣어주는 역할 */}
        {/* onClick은 이벤트리스너가 아닌 prop 이름일 뿐 */}
        {/* prop이름이므로 html에서 style하듯이 해도 안된다. */}
        <MemorizedBrn banana={value} click={changeValue} fontSize={18} />

        {/* props가 변경되지 않으면 re-render가 되지 않게 .memo를 사용 */}
        <MemorizedBrn banana="Continue"/>
    </div>
  );
}
```

### State는 컴포넌트를 만드는 내부자를 위한 데이터
```jsx
import { useState } from 'react';
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // ↓ 축약형
  const [mode, setMode] = useState("WELCOME");
  // mode와 setMode의 값이 다르면 실행해주는 원리
```

```jsx
// state를 직접 변경하지 않고 setState를 사용하는 이유
// state는 불변성을 유지해야 함
// 컴포넌트는 setState를 비교해서 값이 달라지면 render함수를 호출
const [value, setValue] = useState(PRIMITIVE);
// PRIMITIVE = string, number, bigint, boolean, undefined, symbol, null

const [value, setValue] = useState(Object); // 범 객체
// Object = object, array
// useState에 범 객체를 사용할 경우, 복제를 해야 함

1. state가 object일 경우
// newValue = {...value} → newValue 변경 → setValue(newValue)

2. state가 array일 경우
// newValue = [...value] → newValue 변경 → setValue(newValue)
```
---

1. 생성
- npx create-react-app . (.은 현재 폴더일 경우, 아니면 경로 입력)
- powershell은 오류가 많으므로 command prompt(cmd)나 다른 명령창 사용

2. 수정
- npm start (개발하기 위한 어플리케이션)
- src/index.js = npm start시 시작되는 파일
- src/index.js의 <App />은 react 전체 ui
- src/index.css의 내용 지우기
- src/index.js에서 root.render()의 root는 public/index.html

3. 배포
- npm start build
- 실행 시, build 폴더가 생성되는데 index.html 줄바꿈 없이 적혀있다. (용량 최소화를 위한 공백 삭제)
- npx serve -s build (-s는 어느 주소로 접속해도 index.html로 연결되게)

## React 장점
### 1. virtual DOM을 사용해서 어플리케이션 성능 향상
>## virtual DOM (Document Object Model)
>> DOM을 추상화한 가상의 객체
을 사용해서 어플리케이션의 성능을 향상<br>
> + DOM(문서 객체 모델): 브라우저에서 다룰 HTML 문서를 파싱하여 문서의 구성요소들을 구조화한 객체
> ---

### 2. CSR, SSR 지원이 가능
>## CSR (Client Side Rendering)
>> 서버에서 받은 데이터로 브라우저가 화면(View) 렌더링<br>
>> View Rendering 주체: <strong>클라이언트(브라우저)</strong> 
>
>> + 장점
>>   + <span class="accent">서버 트래픽 감소, 새로고침 발생 X</span>
>> <br> - 네이티브 앱과 비슷한 빠른 인터랙션 구현 가능
>
>> + 단점
>>   + <span class="accent">첫 페이지 로딩 속도 SSR보다 ↓</span>
>> <br> - 서버에 첫 요청시 모든 문서 파일을 로드
>>
>>   + <span class="accent">SEO 추가 보완 작업 필요</span> (ex. sitemap 문서 작성)
>> <br> - 포털사이트 검색엔진 크롤러가 웹사이트에 대한 데이터를 제대로 수집하지 못하는 경우 발생
>> <br> - 구글 검색엔진은 JavaScript 엔진이 내장되어 있어 크롤링이 되지만 네이버, 다음의 경우 검색엔진이 제대로 크롤링하지 못하기에 별도의 보완작업 필요
>>   + <span class="accent">보안 이슈</span>
>> <br> - 쿠키에 사용자 정보를 저장해야해서 위험
>> <br>(SSR에선 사용자에 대한 정보를 세션으로 관리)
> ---

>## SSR (Server Side Rendering)
>> 클라이언트에서 요청된 데이터를 서버가 매번 새로운 화면(View) 렌더링<br>
>> View Rendering 주체: <strong>서버</strong>
>
>> + 장점
>>   + <span class="accent">첫 페이지 로딩 속도 CSR보다 ↑</span>
>> <br> - 첫 페이지의 문서만 브라우저에 전달하여 브라우저가 렌더링
>>
>>   + <span class="accent">검색엔진최적화(SEO) 가능</span>
>> <br> - 웹 사이트를 검색엔진이 크롤링(읽기)하여 사용자에게 제공, 해당 과정을 최적화하여 더 많은 사용자에게 웹 사이트를 노출
> 
>> + 단점
>>    + <span class="accent">초기 로딩 이후 페이지 이동시 속도 다소 ↓</span>
>> <br> - 페이지 이동 시마다 데이터 요청, 서버 응답
>>
>>    + <span class="accent">CSR보다 더 많은 생산비용 ↑</span>
>> <br> - 코드를 많이 쳐야함, 인력, 추가 러닝 커브
> ---

>## SEO (Search Engine Optimization)
>> 웹사이트가 유기적인(무료) 검색 방식을 통해 검색 엔진에서 상위에 노출될 수 있도록 최적화하는 과정 (검색 엔진 최적화)<br>
> + 검색 주체: <strong>웹 크롤러</strong><br>
> + 검색 대상
> <br> - 웹페이지에 수집 가능한 모든 정보
> <br>
>   + 각 페이지에서 사용할 수 있는 정보 유형에 대한 충분한 정보를 수집하여 해당 내용이 검색자에게 유용하다고 판단하면 해당 페이지를 색인 (본질적으로 검색 엔진이 잠재적인 검색자에게 제공하기 위해 저장한 모든 가능성 있는 웹 결과) 에 추가
> + On-Page SEO<br>
>   + 작업 위치: <strong>웹 사이트 내부</strong><br>
>   + 작업 대상
> <br> - H태그, 메타태그
> <br> -  이미지 최적화, 콘텐츠 최적화, 글자의 수
> <br> - 대체 텍스트
> <br> - 내부 링크
>
> + Off-Page SEO<br>
>   + 작업 대상: <strong>웹 사이트 외부</strong><br>
>   + 작업 대상
> <br> - 관련성, 신뢰성 및 권한
> <br> - 외부 링크(백 링크)
> <br> - SNS 게시물, 프로모션 광고 등
> + Organic Traffic
> <br> - 광고나 소셜미디어, 리퍼럴 사이트와 같은 채널을 통해 사이트로 유도되는 트래픽을 제외하고 검색 엔진을 통해 곧바로 유입되거나 동일한 도메인 안에서 유입되는 트래픽
> + SEO 작업
>> 1. 키워드 리서치 
>>> + 주어진 주제를 기반으로 페이지 순위가 결정될 수 있는 일반적인 키워드 그룹
>>
>> 2. 페이지 속도 최적화
>>> + LCP(Largest Contentful Paint)
>>>   + URL을 클릭한 후 사용자가 웹페이지의 가장 중요한 콘텐츠를 볼 수 있을 때까지 소요되는 시간 
>>> 
>>> + FID(First Input Delay)
>>>   + URL 클릭한 시점 및 사용자가 사이트 요소와 상호 작용하는 시점의 간격
>>>   + 사용자가 내 페이지에서 무언가를 클릭할 수 있는 시점 
>>>
>>> + CLS(Cumulative Layout Shift)
>>>   + 페이지를 불러오는 동안의 사이트 요소가 안정적인 정도
>>>   + 수치는 낮을수록 이상적
>>>   + 수치가 낮다는 것은 페이지의 로딩이 완전히 끝나면 요소들이 원래 위치에 있다는 뜻
>> 3. 타이틀 태그 및 메타 설명을 작성
>
>> 4. 대체 텍스트 추가
>
>> 5. 내부 링크 제작
>
>> 6. 외부 링크 연결
>
>> 7. 모바일 친화적
> ---
### 3. 컴포넌트의 가독성이 높고 간단하여 유지보수가 쉬움
### 4. 다른 프레임워크와도 혼용이 가능


## 재조정 (Reconciliation)
> 실제로 DOM을 제어하지 않고 중간에 virtual DOM을 두어 virtual DOM이 변경될 때, 실제 DOM을 변경하는 작업 방식
> #### virtual DOM을 갱신 방법
> + setState()메소드를 호출
> + redux의 경우처럼 store가 변하면 다시 최상위 컴포넌트의 render()함수를 호출해서 갱신
> ---

## React Life Cycle (생명주기)
### Component Life Cycle
+ 생성(mounting) - 업데이트(updating) - 제거(unmounting)

### mount - render - update - unmount
> ### componentDidMount()
>> 최초로 컴포넌트 객체가 생성될 때 한 번 수행
>
> ### render()
>> 초기에 화면을 그려줄 때와, 업데이트가 될 때 호출
> JSX가 HTML로 변환
> ### componentDidUpdate()
>> 컴포넌트의 속성 값 또는 상태값이 변경되면 호출
>
> ### componentWillUnmount()
>> 컴포넌트가 소멸될 때 호출
> ---

> ## Class Component
> ### Life Cycle: <strong>Life Cycle Method</strong>
> 
> ### 1. Mount
>> constructor
>> <br> - 컴포넌트 생성자 메서드
>> <br> - 컴포넌트가 생성되면 가장 먼저 실행되는 메서드
>> <br> - this.props, this.state에 접근 가능, 리액트 요소 반환
>>
>> getDerivedStateFromProps
>> <br> - props로부터 파생된 state를 가져옴
>> <br> - props로 받아온 것을 state에 넣어주고 싶을때 사용
>>
>> render
>><br> - 컴포넌트를 렌더링하는 메서드
>>
>> componentDidMount
>> <br> - 컴포넌트의 첫번째 렌더링이 마치면 호출되는 메서드
>> <br> - 이 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태
>> <br> - 여기서는 주로 DOM을 사용해야 하는 외부 라이브러리 연동, 해당 컴포넌트에서 필요로하는 데이터를 ajax로 요청 등의 행위
> ---
> ### 2. Update
>> getDerivedStateFromProps
>> <br> - 컴포넌트의 props나 state가 바뀌었을때도 이 메서드가 호출
>> <br> ---> React.memo와 유사함, boolean 반환으로 결정
>
>> shouldComponentUpdate
>> <br> - 컴포넌트가 리렌더링 할지 말지를 결정하는 메서드
>
>> componentDidUpdate
>> <br> - 컴포넌트가 업데이트 되고 난 후 발생
>> <br> ---> 의존성 배열이 변할때만 useEffect가 실행하는 것과 같음
> ---
> ### 3. Unmount
>> componentWillUnmount
>> <br> - 컴포넌트가 화면에서 사라지기 직전에 호출
>> <br> - 주로 DOM에 직접 등록했었던 이벤트를 제거
>> <br> - setTimeout을 걸은 것이 있다면 clearTimeout을 통하여 제거
>> <br> - dispose기능이 있는 외부 라이브러리를 사용했다면 호출
> ---

> ## Functional Component
> ### Life Cycle: <strong>Hook</strong>
>
>> + React state와 생명주기 기능을 연동 할 수 있게 해주는 함수
>> + class 안에서는 동작하지 않고 class없이 React를 사용 가능
>> + 컴포넌트를 함수 단위로 잘게 쪼갤 수 있음
>> + 기존 라이프사이클 메서드는 관련 없는 로직이 자주 섞여 버그가 쉽게 발생하고, 무결성을 쉽게 해친다
>
> ### 사용 규칙
> ---
>> + 최상위에서만 Hook 호출
> <br> - 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행 X
> <br> - 이 규칙을 따르면 컴포넌트가 렌더링될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장
>>
>> + 리액트 함수 컴포넌트에서만 Hook 호출
> <br> - 일반 JS함수에서는 Hook을 호출 X
>
> ### 종류
> ---
>> ### <span class="method">useState</span>
>>```jsx
>> const [state, setState] = useState(initialState);
>>```
>> + 기능
>> <br> - 상태 관리
>>
>> + 작동
>> <br> - [state이름, setter이름] 순으로 반환 받아서 사용
>
>> ### <span class="method">useEffect</span><br>
>>```jsx
>> // 렌더링 결과가 실제 돔에 반영된 후마다 호출
>> useEffect(() => {});
>>
>> // 컴포넌트가 처음 나타날때 한 번 호출
>> useEffect(() => {}, []);
>>
>> // 조건부 effect 발생 (의존성 중 하나가 변경 시 항상 재생성)
>> useEffect(() => {}, [의존성1, 의존성2, ..]);
>>```
>> + 기능
>> <br> - componentDidMount
>> <br> - componentDidUpdate
>> <br> - componentWillUnmount
>>
>> + 작동
>> <br> - 화면에 렌더링이 완료된 후에 수행
>> <br> - 화면 렌더링 전에 동기화 되어야 하는 경우, useLayoutEffect 활용
>> <br> ---> 컴포넌트 렌더링 - useLayoutEffect 실행 - 화면 업데이트 순으로 effect 실행
>> + return
>> <br> - return은 정리 함수(clean-up)를 사용하기 위한 용도
>> <br> (메모리 누수 방지를 위해 UI에서 컴포넌트를 제거하기 전에 수행)
>> <br> (컴포넌트가 여러 번 렌더링 된다면 다음 effect가 수행되기 전에 이전 effect가 정리 됨)
>
>> ### <span class="method">useContext</span>
>>```jsx
>> const value = useContext(MyContext);
>>```
>> + 기능
>> <br> - Context API를 통해 만들어진 Context의 Value를 가져오는 기능
>>
>> + 작동
>> <br> - 컴포넌트에서 가장 가까운 <MyContext.Provider>가 갱신되면 그 MyContext provider에게 전달된 가장 최신의 context value를 사용하여 렌더러를 트리거
>
>> ### <span class="method">useReducer</span>
>>```jsx
>> const [state, dispatch] = useReducer(reducer, initialArg, init);
>>```
>> + 기능
>> <br> - 현재 상태와 액션 객체를 파라미터로 받아 새로운 상태를 반환
>> <br> - 컴포넌트 외부의 로직 작성 가능
>> <br> - 다른 파일에 작성한 후 불러와서 사용 가능
>>
>> + 작동
>> <br> - useState의 대체 함수로 컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리
>
>> ### <span class="method">useRef</span>
>>```jsx
>> const refContainer = useRef(null);
>>```
>> + 기능
>> <br> - 특정 DOM 선택할때 주로 사용
>>
>> + 작동
>> <br> - .current 프로퍼티로 전달된 인자로 초기화된 variable ref 객체 반환
>> <br> - 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지
>
>> ### <span class="method">useMemo</span>
>>```jsx
>> const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
>>```
>> + 기능
>> <br> - 메모이제이션된 값을 반환
>>
>> + 작동
>> <br> - 이미 연산 된 값을 리렌더링 시 다시 계산하지 않도록 함
>> <br> - 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산
>
>> ### <span class="method">useCallback</span>
>>```jsx
>> const memoizedCallback = useCallback(
>>  () => {
>>    doSomething(a, b);
>>  },
>>  [a, b],
>>);
>>```
>> + 기능
>> <br> - 메모이제이션 된 콜백을 반환
>> <br> - useMemo와 유사하게 이용되며 '함수'에 적용해 줌
>> <br> - 특정 함수를 새로 만들지 않고 재사용 가능하게 함
>>
>> + 작동
>> <br> - 의존성이 변경되었을 때만 변경 됨
> ---
