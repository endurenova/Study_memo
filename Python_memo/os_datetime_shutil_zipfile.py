import os
import datetime
import shutil
import zipfile


"""os"""
# getcwd: 현재 작업 디렉터리 위치 -----------------------------------------------------------------------------------------
os.getcwd()
" / : 루트"
"./ : 현재 위치"
"../ : 현재 위치의 상단 폴더"

# mkdir: 디렉토리 생성 ---------------------------------------------------------------------------------------------------
for i in range(1, 53):
    os.mkdir(f"{i}주차 코드잇 보고서 폴더")

# rename: 파일 이름 변경 -------------------------------------------------------------------------------------------------
os.rename("기존이름", "새 이름")

# splittext: 파일 이름에서 확장자 추출 -------------------------------------------------------------------------------------
file = 'codeit.report.pdf'
filename, extension = os.path.splitext(file)
print(filename)  # codeit.report
print(extension)  # .pdf

# remove: 파일 삭제 -----------------------------------------------------------------------------------------------------
os.remove("파일 이름")

# getsize: 파일 크기 확인 (byte 단위) -------------------------------------------------------------------------------------
os.path.getsize('siru.png')
print(f"{round(os.path.getsize('siru.png')/1024, 2)}kb")

# getctime: 파일 생성(복사, 이동 등..) 날짜 확인 (초단위) --------------------------------------------------------------------
os.path.getctime('siru.png')

# getmtime: 파일 수정(편집 등..) 날짜 확인 (초단위) -------------------------------------------------------------------------
os.path.getmtime('siru.png')

# getatime: 엑세스 날짜(마지막으로 사용한 시각) -----------------------------------------------------------------------------
os.path.getatime('siru.png')


"""datetime"""
# datetime: 입력한 시간을 파이썬으로 표현 -----------------------------------------------------------------------------------
datetime.datetime(2021, 12, 7, 9, 13, 34)  # 2021-12-07 09:13:34

# now: 지금 날짜와 시간 --------------------------------------------------------------------------------------------------
today = datetime.datetime.now()
print(today)
print(today.date())  # 날짜(연 + 월 + 일)
print(today.time())  # 시간(시 + 분 + 초 + 마이크로초)
print(today.year)  # 연도
print(today.month)  # 월
print(today.day)  # 일
print(today.hour)  # 시
print(today.minute)  # 분
print(today.second)  # 초
print(today.microsecond)  # 마이크로초

# timedelta: 두 datetime 값 사이의 기간을 알고 싶으면, 마치 숫자 뺄셈을 하듯 계산 -----------------------------------------------
today = datetime.datetime.now()
pi_day = datetime.datetime(2020, 3, 14, 13, 6, 15)
print(today - pi_day)   # 22 days, 4:42:57.360266
print(type(today - pi_day))  # <class 'datetime.timedelta'>

today = datetime.datetime.now()
my_timedelta = datetime.timedelta(days=5, hours=3, minutes=10, seconds=50)
print(today)  # 2020-04-05 17:54:24.221660
print(today + my_timedelta)  # 2020-04-10 21:05:14.221660 # 반대로 timedelta를 생성해서 datetime 값에 더해 줄 수도 있다.

# strftime: 시간을 원하는 형태로 포맷팅 ------------------------------------------------------------------------------------
today = datetime.datetime.now()
print(today) # 2020-04-05 18:09:55.233501
print(today.strftime("%A, %B %dth %Y"))  # Sunday, April 05th 2020
print(today.strftime("%Y/%m/%d"))  # 2020/04/05
print(today.strftime("%Y/%m/%d %H시 %M분 %S초"))  # 2020/04/05 18시 9분 55초
print(today.strftime("%I:%M:%S %p"))  # 06:09:55 PM
print(today.strftime("%A %dth %B %Y"))  # Sunday 5th April 2020

""" 포맷 코드
코드	설명	            예시
%a	요일 (짧은 버전)	Mon
%A	요일 (풀 버전)	Monday
%w	요일 (숫자 버전, 0~6, 0이 일요일)	5
%d	일 (01~31)	23
%b	월 (짧은 버전)	Nov
%B	월 (풀 버전)	November
%m	월 (숫자 버전, 01~12)	10
%y	연도 (짧은 버전)	16
%Y	연도 (풀 버전)	2016
%H	시간 (00~23)	14
%I	시간 (00~12)	10
%p	AM/PM	AM
%M	분 (00~59)	34
%S	초 (00~59)	12
%f	마이크로초 (000000~999999)	413215
%Z	표준시간대	PST
%j	1년 중 며칠째인지 (001~366)	162
%U	1년 중 몇 주째인지 (00~53, 일요일이 한 주의 시작이라고 가정)	35
%W	1년 중 몇 주째인지 (00~53, 월요일이 한 주의 시작이라고 가정)	35
%c	날짜, 요일, 시간을 출력, 현재 시간대 기준	Sat May 19 11:14:27 2018
%x	날짜를 출력, 현재 시간대 기준	05/19/18
%X	시간을 출력, 현재 시간대 기준	'11:44:22'
"""

# fromtimestamp: 함수는 타임스탬프를 날짜와 시간 정보를 가지고 있는 datetime 객체로 변환 -----------------------------------------
datetime.datetime.fromtimestamp(os.path.getctime('siru.png'))


"""shutil"""
# copy: 파일 복사 -------------------------------------------------------------------------------------------------------
shutil.copy("원본 파일 이름", "복제한 파일 이름")


"""zipfile"""
# Zipfile: 파일들을 압축 및 해제 ------------------------------------------------------------------------------------------
with zipfile.ZipFile("압축파일 이름.zip", "w", compression=zipfile.ZIP_DEFLATED) as zip:  # 압축
    zip.write("파일이름")
    zip.write("파일이름")
# compression=zipfile.ZIP_DEFLATED = 용량 줄이기

with zipfile.ZipFile("압축파일 이름.zip", "r") as zip:  # 해제
    zip.extractall("압축 해제할 생성폴더 이름")
