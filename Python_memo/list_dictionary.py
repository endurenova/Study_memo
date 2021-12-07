
"""list"""
# index: list 안에 있는 요소의 위치 ---------------------------------------------------------------------------------------
fruits = ["strawberry", "mango", "banana", "orange", "grape", "mango"]
print(fruits.index("banana"))  # 2
fruits[0] = "apple"  # 0번 인덱스 "apple"로 수정
print(fruits)  # ['apple', 'mango', 'banana', 'orange', 'grape', 'mango']

# indexing: list 안에 있는 요소를 받아오는 것 ------------------------------------------------------------------------------
print(fruits[0])  # apple
print(fruits[-1])  # mango

# remove: 삭제하고자 하는 값이 있다면 리스트에서 첫 번째에 해당하는 값을 갖고 있는 원소 제거 ----------------------------------------
fruits.remove("mango")
print(fruits)  # ['apple', 'banana', 'orange', 'grape', 'mango']

# in: 요소가 리스트 안에 있는지 확인 ---------------------------------------------------------------------------------------
print("apple" in fruits)  # True

# not in: 요소가 리스트 안에 없는지 확인 ------------------------------------------------------------------------------------
print("apple" not in fruits)  # False

# list slicing: 리스트의 일부를 통째로 잘라서 사용 --------------------------------------------------------------------------
print(fruits[1:4])  # [x:y] x이상 y미만 ['banana', 'orange', 'grape']
print(fruits[2:])  # [x:] x이상 ['orange', 'grape', 'mango']
print(fruits[:4])  # [:y] y미만 ['apple', 'banana', 'orange', 'grape']
print(fruits[::-1])  # [::x] x만큼 증감 ['mango', 'grape', 'orange', 'banana', 'apple']
print('ABCDEFGHIJ'[0:5])  # ABCDE → string도 슬라이싱 가능

# len(length): 리스트에 몇 개의 요소가 있는지 확인 --------------------------------------------------------------------------
print(len(fruits))  # 5

# append: 리스트에 새로운 값을 추가 ----------------------------------------------------------------------------------------
fruits.append("kiwi")
print(fruits)  # ['apple', 'banana', 'orange', 'grape', 'mango', 'kiwi']

# insert: 리스트의 원하는 위치에 값을 삽입 ----------------------------------------------------------------------------------
fruits.insert(3, "melon")
print(fruits)  # ['apple', 'banana', 'orange', 'melon', 'grape', 'mango', 'kiwi']

# del(delete): 리스트에서 원하는 위치의 값을 삭제 ---------------------------------------------------------------------------
del fruits[3]
print(fruits)  # ['apple', 'banana', 'orange', 'grape', 'mango', 'kiwi']

# sorted: 글자, 숫자 정렬 (기존 리스트는 건드리지 않고 정렬된 새로운 리스트를 리턴 ------------------------------------------------
numbers = [19, 13, 2, 5, 3, 11, 7, 17]
new_list = sorted(numbers)
print(new_list)  # [2, 3, 5, 7, 11, 13, 17, 19]

# sort: 리스트 자체를 정렬 ------------------------------------------------------------------------------------------------
numbers = [19, 13, 2, 5, 3, 11, 7, 17]
numbers.sort()
print(numbers)  # [2, 3, 5, 7, 11, 13, 17, 19]

# reverse: 반대로 나열 ---------------------------------------------------------------------------------------------------
numbers = [19, 13, 2, 5, 3, 11, 7, 17]

numbers.sort(reverse=True)  # 아무것도 리턴하지 않고 기존 리스트를 리버스 정렬
print(numbers)  # [19, 17, 13, 11, 7, 5, 3, 2]

new_list = sorted(numbers, reverse=True)  # 기존 리스트를 리버스 정렬
print(new_list)  # [19, 17, 13, 11, 7, 5, 3, 2]

# nested list: 리스트 안의 리스트 -----------------------------------------------------------------------------------------
food = [["mango", "banana", "strawberry"], ["choco", "cream", "vanilla"], ["soda", "smoothie", "cocktail"]]
print(food[1])  # ['choco', 'cream', 'vanilla']
print(food[1][0])  # choco
print(food[0][2] + " " + food[1][0] + " " + food[2][1])  # strawberry choco smoothie

"""dictionary"""
# key(키), value(값)이 한 쌍 ---------------------------------------------------------------------------------------------
ingredients = {"fruits": ["mango", "banana", "strawberry"],
               "topping": ["choco", "cream", "vanilla"],
               "drink": ["soda", "smoothie", "cocktail"]}

print(ingredients["topping"])  # ['choco', 'cream', 'vanilla']

# 추가 -----------------------------------------------------------------------------------------------------------------
ingredients["bowl"] = ["mug", "glass", "shot"]
print(ingredients)  # {'fruits': ['mango', 'banana', 'strawberry'], 'topping': ['choco', 'cream', 'vanilla'],
                    # 'drink': ['soda', 'smoothie', 'cocktail'], 'bowl': ['mug', 'glass', 'shot']}

# values ---------------------------------------------------------------------------------------------------------------
for value in ingredients.values():
    print(value)
"""
    ['mango', 'banana', 'strawberry']
    ['choco', 'cream', 'vanilla']
    ['soda', 'smoothie', 'cocktail']
    ['mug', 'glass', 'shot']
"""

# keys -----------------------------------------------------------------------------------------------------------------
for key in ingredients.keys():
    print(key)
"""
    fruits
    topping
    drink
    bowl
"""

# items ----------------------------------------------------------------------------------------------------------------
for key, value in ingredients.items():
    print(key, value)
"""
    fruits ['mango', 'banana', 'strawberry']
    topping ['choco', 'cream', 'vanilla']
    drink ['soda', 'smoothie', 'cocktail']
    bowl ['mug', 'glass', 'shot']
"""
