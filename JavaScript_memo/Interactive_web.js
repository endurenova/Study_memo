/* JavaScript는 모든 것이 객체다.*/

`window`
  // window 객체는 JavaScript의 모든 객체가 들어 있어서 전역 객체(Global Object)라고도 부름. 
  // 그래서 window.console.log 적을 필요 없이 console.log로 생략
      console.log(window);  // 브라우저에 있는 프로퍼티들 출력
      console.log(window.innerWidth);  // 탭 내부의 너비
      console.log(window.innerHeight);  // 탭 내부의 높이


console.dir();  // 객체의 속성을 출력해주고 클릭해서 펼치면 값을 보여줌
console.log();  // 값만 보여줌

/*------------------------------------------------------------------------------------------------------------*/
`CSS 선택자`
  // HTML id속성으로 태그 선택하기
      document.getElementById('id')	 // id에 해당하는 태그 하나

  // HTML class속성으로 태그 선택하기
      document.getElementsByClassName('class')	// class에 해당하는 태그 모음(HTMLCollection)

  // HTML 태그 이름으로 태그 선택하기 
      document.getElementsByTagName('tag');	// tag에 해당하는 태그 모음(HTMLCollection)
      document.getElementsByTagName('button')[x];  // tag에 해당하는 태그 모음의 x번째

  // css 선택자로 태그 선택하기
      document.querySelector('css');	 // css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나
      document.querySelector('#grade'); 
      document.querySelector('button');
      document.querySelector("#LessonViewer > div.LessonViewer__contents");  // 'JS 경로 복사'를 했을 시의 예시
      document.querySelectorAll('css');	 // css 선택자에 해당하는 태그 모음(NodeList)
      document.querySelectorAll('button')[x];  // css 선택자에 해당하는 태그 모음의 x번째

  `DOM(Document Object Model)`
    // 문서 객체 모델, 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것
    // 웹 브라우저 안에 나타나는 콘텐츠 부분을 웹 페이지라고도 부르지만 다르게는 웹 문서라고도 표현
    // DOM 트리에서는 각 객체를 노드라는 용어로 표현


  '요소 노드 (Element Node)'
    // '요소 노드'인 경우에만 존재하는 프로퍼티들
    // HTML 태그 같은 노드가 요소 노드
  
    // 자식 요소 노드 (Child Element Node)
      element.children  // element의 자식 요소 모음(HTMLCollection)
      element.children[x]  // element의 자식 x번째 요소
      element.firstElementChild  // element의 첫 번째 자식 요소 하나
      element.lastElementChild  // element의 마지막 자식 요소 하나
    
    // 부모 요소 노드 (Parent Element Node)
      element.parentElement  // element의 부모 요소 하나
    
    // 형제 요소 노드 (Sibling Element Node)
      element.previousElementSibling  // element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
      element.nextElementSibling  // element의 다음(next) 혹은 우측(right)에 있는 요소 하나


  '모든 노드 (All node)'
    // 문자들은 텍스트 노드, 주석은 주석 노드

    // 자식 요소 노드 (Child Element Node)
      node.childNodes  // node의 자식 노드 모음(NodeList)
      node.firstChild  // node의 첫 번째 자식 노드 하나
      node.lastChild  // 마지막 자식 노드 하나

    // 부모 요소 노드 (Parent Element Node)
      node.parentNode  // 부모 노드 node의 부모 요소 하나

    // 형제 요소 노드 (Sibling Element Node)
      node.previousSibling  // node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
      node.nextSibling  // node의 다음(next) 혹은 우측(right)에 있는 노드 하나
/*------------------------------------------------------------------------------------------------------------*/


`유사 배열(Array-Like Object)`
  //  - HTMLCollection
  //  - NodeList
  //  - DOMTokenList
  //    1. 숫자 형태의 indexing이 가능
  //    2. length 프로퍼티 소유
  //    3. 배열의 기본 메소드를 사용 불가
  //    4. Array.isArray(유사배열)의 리턴값은 false


`이벤트 (Event)`
  // - 웹 페이지에서 발생하는 대부분의 일(사건)들 (버튼 클릭, 스크롤, 키보드 입력 등)

`이벤트 핸들링(Event Handling)`
  // 자바스크립트를 통해 이벤트를 다루는 일

`이벤트 핸들러(Event Handler) / 이벤트 리스너(Event Listener)`
  // 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드

  // 이벤트 핸들러를 등록하는 2가지 방법
  // 1. 자바스크립트로 해당 DOM 객체의 onclick 프로퍼티에 등록하기
      const xxx = document.querySelector('#myBtn'); // 이벤트(Event)와 버튼 클릭

      xxx.onclick = function() { // 이벤트 핸들러(Event Handler)
        console.log('Hello Codeit!');
      };
      //----------------------------------------------------------------------//
      const yyy = document.querySelector('#grade');

      check.onclick = function() {
        alert('정답입니다!👏');
      };

  // 2. HTML 태그의 onclick 속성에 바로 표시하기
      <button id="myBtn" onclick="console.log('Hello Codeit!')">클릭!</button>

