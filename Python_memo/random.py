
"""random"""
import random
# randint(a, b): a이상 b이하의 랜덤한 정수 리턴 ----------------------------------------------------------------------------
random.randint(1, 20)

# randrange(a, b): a이상 b미만의 랜덤한 정수 리턴 --------------------------------------------------------------------------
random.randrange(1, 20)

# randrange(b): 0이상 b미만의 랜덤한 정수 리턴 -----------------------------------------------------------------------------
random.randrange(20)

# uniform(a, b): a이상 b이하의 랜덤한 소수 리턴 ----------------------------------------------------------------------------
random.uniform(0, 1)

# sample(seq or set, n): 시퀀스 데이터 타입(튜플, 문자열, range, 리스트) 또는 set 타입에서 겹치지 않게 n개를 리턴 -----------------
random.sample([1, 2, 3, 4, 5], 3)
random.sample('BlockDMask', 5)

# suffle(): 시퀀스를 랜덤으로 섞어서 리턴 ----------------------------------------------------------------------------------
abc = ['a', 'b', 'c', 'd', 'e']
print(random.shuffle(abc))

# choice(): 아무 원소 하나를 리턴 -----------------------------------------------------------------------------------------
abc = ['a', 'b', 'c', 'd', 'e']
random.choice(abc)
