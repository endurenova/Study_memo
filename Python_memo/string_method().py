# 메서드 Method()

# strip: " ", "\n", "\t" 같은 화이트스페이스 제거 --------------------------------------------------------------------------
print("      abc  def   ".strip())  # abc  def 중간에 있는 공백은 사라지지 않는다.
print(".abc.def".strip("."))  # abc.def 중간에 있는 점은 사라지지 않는다.

import os
file = 'codeit.report.pdf'
filename, extension = os.path.splitext(file)
print(filename)  # codeit.report
print(extension)  # .pdf

# split: 이 파라미터를 기준으로 문자열을 분할 --------------------------------------------------------------------------------
print("      abc  def   ".split())  # ['abc', 'def']
print("1. 2. 3. 4. 5. 6".split("."))  # ['1', ' 2', ' 3', ' 4', ' 5', ' 6']

# join: 문자열 ----------------------------------------------------------------------------------------------------------
phone_number_segments = ['010', '0000', '1111']
print("-".join(phone_number_segments))  # 010-0000-1111
text = "Siru"
print(text.join("123"))  # 1Siru2Siru3

# replace: 문자열 수정 ---------------------------------------------------------------------------------------------------
# .replace("원래 문자열", "바꿀 문자열")
message = "Hello, Siru. Nice to meet you."
print(message.replace("Hello", "Hi"))  # Hi, Siru. Nice to meet you.

# lower: 소문자로 변경 ---------------------------------------------------------------------------------------------------
print("siRu".lower())  # siru

# upper: 대문자로 변경 ---------------------------------------------------------------------------------------------------
print("siRu".upper())  # SIRU

# capitalize: 첫 글자 대문자로 변경 ---------------------------------------------------------------------------------------
print("siRu".capitalize())  # Siru

# find: 문자열 검색 ------------------------------------------------------------------------------------------------------
print(message.find("Siru"))  # 7 → 7번째에 위치한다는 의미(0부터 시작)

# count: 문자열 출현 횟수 ------------------------------------------------------------------------------------------------
log = "간장 공장 공장장은 강 공장장이고 된장 공장 공장장은 장 공장장이다"
print(log.count("공장"))  # 6
print(log.count("공장장"))  # 4
""" txt파일도 카운트 가능
    with open(".txt") as file:
        content = file.read()
        print(content.count("text"))
"""
""" in: 찾고자 하는 문자열이 있는지 확인 
    with open(".txt") as file:
        content = file.read()
        print("text" in content)
"""

# startswith: 어떤 문자열이 특정한 단어로 시작되는지 확인 ---------------------------------------------------------------------
print("siru.png".startswith("siru"))  # True

# endswith: 어떤 문자열이 특정한 단어로 끝나는지 확인 -------------------------------------------------------------------------
print("siru.png".endswith(".png"))  # True

# isalpha: 어떤 문자열이 모두 문자로 이루어져 있는지 확인 ---------------------------------------------------------------------
print("Siruhearts".isalpha())  # True
print("Siru dog".isalpha())  # False
# 특수문자나 공백이 문자열 안에 포함되어 있으면 False

# isalnum: 어떤 문자열이 문자+숫자로 이루어져 있는지 확인 ---------------------------------------------------------------------
print("Siru0812".isalnum())  # True
print("Siru@0812".isalnum())  # False
# 특수문자나 공백이 문자열 안에 포함되어 있으면 False

# isdigit: 어떤 문자열이 모두 숫자로 이루어져 있는지 확인 ---------------------------------------------------------------------
print("090812".isdigit())  # True
print("2009.08.12".isdigit())  # False
# 특수문자나 공백이 문자열 안에 포함되어 있으면 False
