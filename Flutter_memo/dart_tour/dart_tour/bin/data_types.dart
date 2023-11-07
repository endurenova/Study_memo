void main() {
  String name = 'nico';
  bool alive = true;
  int age = 12;
  double money = 69.99;
  // => 이 모든 자료형들이 object(객체)로 이루어짐
  // object, class로 이루어져 있기 때문에 자료형 안에 어떤 게 들어있는지 볼 수 있다.
  // ex) String name = 'nico';
  // name. 을 적으면 모든 method가 자동완성으로 뜸.

  num x = 12;
  x = 1.1;
  // int와 double은 num으로푸터 파생(상속)되어서 num타입을 쓰면 정수와 소수 둘 다 가능하다.
  // 마우스 올리고 'Go To Type Definition' 클릭하면 속성 볼 수 있음
}

// List
void main2() {
  // List를 선언하는 첫 번째 방법
  var number = [1, 2, 3, 4, 5];
  // number에 마우스를 올리면 List<int> => integer로 된 List라 알려줌.

  // List를 선언하는 두 번째 방법
  List<int> numbers = [1, 2, 3, 4];
  // VS Code나 DartPad를 사용하고 있을 때 ','로 마무리 지어주면 저절로 여러 줄 포맷팅 된다.
  // ex) List<int> numbers = [1, 2, 3, 4,];
  /* =>
    List<int> numbers = [
      1,
      2,
      3,
      4,
    ];
  */

  numbers.add(5);
  // => 요소 추가

  numbers.addAll([6, 7]);
  // => 여러 요소 추가

  print(numbers.first);
  // => 첫 번째 index

  print(numbers.last);
  // => 마지막 index
}

// collection if
// List를 만들 수 있는데 if로 존재할 수도 안할 수도 있는 요소를 가지고 만들 수 있다.
void main3() {
  var giveMeFive = true;
  List<int> numberss = [
    1,
    2,
    3,
    4,
    if (giveMeFive) 5, // if giveMeFive가 true면 5를 추가
  ];
  /*
    위의 if (giveMeFive) 5, 는 아래와 동일
    if (giveMeFive) {
      numberss.add(5);
    }
  */
}

// String interpolation
void main4() {
  var name = 'nico';
  var age = 10;
  var greeting = "Hello everyone, my name is $name and I'm ${age + 2}";
  // ''나 "" 안에 $변수를 넣을 수 있다.
}

// collection for
void main5() {
  var oldFriends = ['nico', 'lynn'];
  var newFriends = [
    'lewis',
    'ralph',
    'darren',
    for (var friend in oldFriends) "♥ $friend",
  ];
  /*
    위의 for (var friend in oldFriends) "♥ $friend", 는 아래와 동일
    for (var friend in oldFriends) {
      newFriends.add(friend);
    }
  */
  // newFriends 안에 oldFriends의 요소가 for로 분해 후 추가된다.
  print(newFriends);
}

// Map
// JavaScript와 TypeScript의 Object나 Python의 dictionary와 같음.
void main6() {
  var player = {
    'name': 'nico',
    'xp': 19.99,
    'superpower': false,
  };
  // 이 변수의 자료형은 Map<String, Object>인데 key = String, value = Object 라는 뜻
  // Dart에서는 모든 게 object로부터 생겨서 object는 기본적으로 어떤 자료형이든지 될 수 있다.
  Map<int, bool> player1 = {
    1: true,
    2: false,
    3: true,
  };
  Map<List<int>, bool> player2 = {
    [1, 2, 3]: true,
  };
  // 모든 게 class에서 나오고, Dart에선 모두 class니까 Map도 마찬가지로 method와 property를 가지고 있다.
  player2.containsKey([1, 2, 3]); // 괄호 안의 key가 포함되는지
  player2.containsValue(true); // 괄호 안의 value가 포함되는지

  player.putIfAbsent('pet', () => 'siru');
  // player.putIfAbsent(key, () => value로 할 값)
  // => if player 안에 'pet'이라는 key가 없다면 'pet': 'siru'를 player에 넣는다.

  player.update('name', (value) => '네코');
  // player.update(key, (value) => value로 할 값);
  // => 'name'이라는 키의 value를 '네코'로 바꾼다.

  List<Map<String, Object>> player3 = [
    {'name': 'nico', 'xp': 1999},
    {'name': 'nico', 'xp': 1999},
    // => JavaScript와 TypeScript의 Object나 Python의 dictionary와 같은 방식으로 만들 거라면 Map은 비추천
    // player나 movie처럼 API 구조의 데이터라면 class가 낫다.
  ];
}

// Dart Set => JS Set, Python Set, Python Tuple
// Dart List => JS Array, Python List

// Set
void main7() {
  var numbers = {1, 2, 3, 4};
  Set<int> numbers2 = {1, 2, 3, 4};
  // Set과 List의 차이
  // Set에 속한 모든 아이템은 유니크하다. Set은 sequence(순서가 있음)다.
  // 중복을 허용하지 않는다.
}
