
"""random"""
import itertools
"""대표적으로 iterable한 타입 - list, dict, set, str, bytes, tuple, range"""
# combinations(iterable, n): iterable에서 원소 개수가 n개인 원소 중복 없는 조합 ----------------------------------------------
nums = [1, 2, 3]
for i in itertools.combinations(nums, 2):
    print(i)
"""
(1, 2)
(1, 3)
(2, 3)
"""

# combinations_with_replacement(iterable, n): iterable에서 원소 개수가 n개인 원소 중복있는 조합 ------------------------------
nums = [4, 5, 6]
for i in itertools.combinations_with_replacement(nums, 2):
    print(i)
"""
(4, 4)
(4, 5)
(4, 6)
(5, 5)
(5, 6)
(6, 6)
"""

# permutations(iterable, n-None): iterable에서 원소 개수가 n개인 원소 순열 조합 ---------------------------------------------
nums = [7, 8, 9]
for i in itertools.permutations(nums, 2):  # n값을 지정하지 않거나 n=None으로 하면 최대 길이의 순열 리턴
    print(i)
"""
(7, 8)
(7, 9)
(8, 7)
(8, 9)
(9, 7)
(9, 8)
"""

# product(*iterables, repeat=1): 여러 iterable의 데카르트곱 리턴 ----------------------------------------------------------
nums = [1, 2]
char = ["a", "b"]
for i in itertools.product(nums, char, repeat=1):  # nums와 char의 모든 쌍을 지어 리턴한다
    print(i)
"""
(1, 'a')
(1, 'b')
(2, 'a')
(2, 'b')
"""

for i in itertools.product(nums, repeat=3):  # product(nums, nums, nums, repeat=1)와 동일한 출력
    print(i)
"""
(1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 2, 2)
(2, 1, 1)
(2, 1, 2)
(2, 2, 1)
(2, 2, 2)
"""
