<link rel="stylesheet" href="./css/memoStyle.css"/>

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
>> <br> - JavaScript가 동작하지 않는 환경이나 JavaScript가 다운 및 실행 전까지 화면이 표시되지 않기에 검색 엔진과 같은 로봇들이 컨텐츠 이용 불가
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
>> <br> - 서버에서 JavaScript가 실행되고 브라우저에서는 완성된 html을 전송해서 JavaScript가 동작되지 않는 환경에서도 잘 실행
> 
>> + 단점
>>    + <span class="accent">초기 로딩 이후 페이지 이동시 속도 다소 ↓</span>
>> <br> - 페이지 이동 시마다 데이터 요청, 서버 응답
>>
>>    + <span class="accent">CSR보다 더 많은 생산비용 ↑</span>
>> <br> - 코드를 많이 쳐야함, 인력, 추가 러닝 커브
> ---