<link rel="stylesheet" href="./css/memoStyle.css"/>

> ## SPA (Single Page Application)
> 한 개의 페이지로 된 어플리케이션
> <br> - 페이지마다 최초 접속 시 한번에 다운로드, 로딩하는 방식
> 
> + 장점
>   + <span class="accent">필요한 리소스만 부분적으로 로딩</span>
> <br> - 캐시로 저장해놓기 때문에 성능 ↑
>
>   + <span class="accent"> 페이지 변환이 자연스러움 ↑</span>
>
>   + <span class="accent">컴포넌트 별 개발 용이</span>
> 
> + 단점
>    + <span class="accent">최초 접속 시 로딩 속도 ↓</span>
> <br> - 정적 파일을 번들링해서 초기에 한 번에 받으므로
>
>    + <span class="accent">SEO가 어려움</span>
> <br> - SSR로 해결 가능
>
>    + <span class="accent">보안 이슈</span>
> <br> - SSR에선 사용자에 대한 정보를 세션으로 관리하지만,
CSR에선 쿠키말고는 저장할 공간이 마땅치 않음
> ---

> ## MPA (Multi Page Application)
> 여러 개의 페이지로 만들어진 어플리케이션
> <br> - 매번 전체 페이지 리렌더링
> <br> - 새로고침, 새로운 페이지마다 서버에 정적 리소스를 요청
> 
> + 장점
>   + <span class="accent">SEO가 쉬움</span>
> <br> - 서버로부터 view(HTML)를 리턴 받아 검색 엔진이 크롤링 용이
>
>   + <span class="accent">최초 접속 시 로딩 속도 ↑</span>
>
>   + <span class="accent">컴포넌트 별 개발 용이</span>
> 
> + 단점
>    + <span class="accent">성능 저하</span>
> <br> - 페이지 이동시 불필요한 템플릿도 중복해서 로딩
>
>    + <span class="accent">서버 렌더링에 따른 부하</span>
> ---