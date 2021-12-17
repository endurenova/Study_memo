# Beautiful Soup가 HTML 파싱에 최적화된 라이브러리기 때문에 태그를 선택하는 다양한 문법(.find(), .select_one(), .tagname 등)이
# 존재하고 문법 selenium보다 간결하고 빨라서 효율적이다. selenium 동작이 필요할 경우 같이 쓰거나 한다.
# 예를 들면 유동적인 스크롤 페이지에서 selenium으로 스크롤을 끝까지 내리고 Beautiful Soup로 파싱

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome("F:\pythonProject\96\chromedriver.exe")
driver.implicitly_wait(3)  # 웹 요소를 찾는데 암묵적으로 3초를 기다리는데 웹 요소를 다 찾으면 3초가 안지나도 넘어감

login_link = WebDriverWait(driver, 3).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.top-nav__login-link')))
login_link.click()
#  WebDriverWait(x, y) x를 무조건 기다리는게 아닌 최대한 y초만큼 기다림
#  .until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.top-nav__login-link')) CSS_SELECTOR 요소가 클릭 가능해 질때 까지


id_box = WebDriverWait(driver, 3).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.login-container__login-input')))
id_box.send_keys('codeit')
# .until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.login-container__login-input'))  CSS_SELECTOR가 보일 떄 까지
element_to_be_clickable() 웹 요소가 클릭 가능한 상태일 때까지 기다림.
visibility_of_element_located() 웹 요소가 실제로 보일 때까지 기다림.
text_to_be_present_in_element() 웹 요소 안에 텍스트가 로딩될 때까지 기다림.
invisibility_of_element_located() 웹 요소가 안 보일 때까지 기다림.

driver.get('https://workey.codeit.kr/costagram/index')
time.sleep(1)  # 창 로딩을 위한 기다림

driver.find_element_by_css_selector('#app > nav > div > a').click()

driver.find_element_by_css_selector('#app > div > div > div > form > input.login-container__login-input').send_keys('codeit')
# 갖고오고자 하는 요소 클래스를 그 요소만 갖고 있을 경우 .login-container__login-input 클래스명만 가져와도 됨
driver.find_element_by_css_selector('#app > div > div > div > form > input.login-container__password-input').send_keys('datascience')

driver.find_element_by_css_selector('#app > div > div > div > form > input.login-container__login-button').click()

driver.find_element_by_tag_name('tag_name')
driver.find_element_by_id('id-name')
driver.find_element_by_class_name('class-name')

# CSS 선택자
driver.find_elements_by_css_selector('selector')

# 태그 이름
driver.find_elements_by_tag_name('tag_name')

# class 이름
driver.find_elements_by_class_name('class-name')


import time
from selenium import webdriver
from selenium.webdriver import ActionChains

driver = webdriver.Chrome()
driver.implicitly_wait(3)

driver.get('https://workey.codeit.kr/costagram/index')

# 로그인 링크 클릭
driver.find_element_by_css_selector('.top-nav__login-link').click()
time.sleep(1)
find_element_by_css_selector()는 항상 웹 요소를 리턴하고 find_elements_by_css_selector()는 웹 요소가 있는 리스트를 리턴
# 아이디 박스, 비밀번호 박스, 로그인 버튼 찾아놓기
id_box = driver.find_element_by_css_selector('.login-container__login-input')
pw_box = driver.find_element_by_css_selector('.login-container__password-input')
login_button = driver.find_element_by_css_selector('.login-container__login-button')

# 액션 실행
actions = ActionChains(driver)
actions.send_keys_to_element(id_box, 'codeit')
actions.send_keys_to_element(pw_box, 'datascience')
actions.click(login_button)
actions.perform()

driver.quit()

액션 체인 기능
함수에 parameter=None은 파라미터가 선택적이라는 뜻입니다. 나머지 파라미터는 필수입니다.
.click(element=None) 웹 요소 element를 파라미터로 전달해 주면 element를 클릭하고 그렇지 않으면 현재 마우스가 위치해 있는 곳을 클릭합니다.
.double_click(element=None) 웹 요소 element를 파라미터로 전달해 주면 element를 더블 클릭하고 그렇지 않으면 현재 마우스가 위치해 있는 곳을 더블 클릭합니다.
.context_click(element=None) 웹 요소 element를 파라미터로 전달해 주면 element를 우클릭하고 그렇지 않으면 현재 마우스가 위치해 있는 곳을 우클릭합니다.
.drag_and_drop(source, target) source 웹 요소를 클릭해서 target 웹 요소까지 드래그한 다음, 드롭해 줍니다.
.move_to_element(element) element 웹 요소까지 마우스를 움직입니다.
.send_keys(keys) send_keys()는 현재 선택된 웹 요소에 키보드 입력을 보내고
id_box.send_keys('codeit')
from selenium.webdriver.common.keys import Keys

id_box.send_keys(Keys.RETURN)
.send_keys_to_element(element, keys) send_keys_to_element()는 element 요소에 키보드 입력을 보냅니다.
.pause(seconds) seconds초 동안 동작을 멈춥니다. 액션 체인에는 time.sleep() 대신 .pause()를 써 주세요.

import time
from selenium import webdriver

# 웹 드라이버 설정

# 현재 scrollHeight 가져오기
last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    # scrollHeight까지 스크롤
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # 새로운 내용 로딩될때까지 기다림
    time.sleep(0.5)

    # 새로운 내용 로딩됐는지 확인
    new_height = driver.execute_script("return document.body.scrollHeight")
    driver.execute_script("자바스크립트 코드")  # 셀리니움으로 자바스크립트 코드 실행 가능 (F12 콘솔에서도 가능)
    if new_height == last_height:
        break
    last_height = new_height  # 내릴 수록 스크롤이 늘어나니까 last_height의 크기도 커져서 갱신하는 코드



