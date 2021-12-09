import requests
from bs4 import BeautifulSoup

response = requests.get("https://workey.codeit.kr/music", verify=False)
music_page = response.text
soup = BeautifulSoup(music_page, 'html.parser')

popular_artists = []

#.get_text: 태그 안에 있는 모든 텍스트를 하나로 합쳐서 리턴
for tag in soup.select('ul.popular__order li'):
    popular_artists.append((tag.get_text().strip()))
    # 괄호 안에 "문자"를 넣을 경우 텍스트를 합칠 때 파라미터로 넣은 문자열을 텍스트 사이에 넣어줌

# .strings: 줄 바꿈 포함 모든 문자열 가져오기, list 추가 필요 (list(tag.strings))
for tag in soup.select('ul.popular__order li'):
    print(list(tag.stripped_strings)[1])
    popular_artists.append(list(tag.strings)[1])

# stripped_strings: 줄 바꿈이 제거된 문자열, list 추가 필요 (list(tag.stripped_strings))
for tag in soup.select('ul.popular__order li'):
    print(list(tag.stripped_strings)[1])
    popular_artists.append(list(tag.stripped_strings)[1])

# .attrs: 태그의 모든 속성 가져오기
soup.select_one('img').attrs  # {'src': '/images/nielsen/group.png', 'id': 'tv-image'}
soup.select_one('img')['src']  # images/nielsen/group.png

#.tagname: tag를 간결하게 호출 (class, id는 불가)
soup.tagname # soup.select_one('tagname')과 동일
tag.tagname # tag.select_one('tagname')과 동일

# Method Chaining: (태그만 가능) 메소드의 리턴값을 변수에 저장하지 않고, 리턴값에 바로 또 다른 메소드를 호출하는 것을 뜻
# 1. selector1에 매칭되는 태그를 찾은 다음 그 안에서 selector2에 매칭되는 태그 선택
soup.select_one("selector1").select_one("selector2")

# 2. selector1에 매칭되는 태그를 찾은 다음 그 안에서 selector2에 매칭되는 모든 태그 선택
soup.select_one("selector1").select("selector2")

# 3. selector1에 매칭되는 태그를 찾은 다음 그 안에서 텍스트 추출
soup.select_one("selector1").get_text()
"""
    <div class="data">
      <div>
        <h2>제목</h2>
        <p>내용<b>키워드</b>내용</p>
        <a href="www.example.com">링크</a>
      </div>
    </div>
"""
# 예를 들어 위와 같은 HTML 구조에서 b 태그 안에 있는 키워드를 가져와야 한다면. 아래와 같은 코드를 쓸 수 있다.

div_tag = soup.select_one('div.data')
keyword = div_tag.div.p.b.get_text()
print(keyword)