// void는 아무 것도 return하지 않는 함수
void sayHello(String name) {
  print("Hello $name, nice to meet you");
}

// fat arrow syntax
String sayGoodbye(String name) {
  return "Goodbye, $name";
} // === String sayGoodbye(String name) => "Goodbye, $name";

num plus(num a, num b) {
  return a + b;
} // === num plus(num a, num b) =>  a + b;

void main() {
  sayHello("siru");
  print(sayGoodbye("ju"));
}

// positional parameter
String sayHi(String name, int age, String country) {
  return "Hi, my name is $name, $age years old and from $country";
}

// parameter 순서가 중요함
void main2() {
  sayHi("nico", 12, "cuba");
  // 클린 코드라는 책을 보면 이런 걸 최소화해야 한다하는데 특히나 해당 function이 같은 파일 내에 있지 않을 때, 보기 어렵다.
}

// Named Parameters

// default value
// Named Parameters를 사용하는 첫 번째 방법으로 null safety 때문에 default value 사용
// default 값을 정해줘서 sayHi에 아무 파라미터를 넣지 않아도 함수가 실행된다.
String sayHi1(
    {String name = 'anoun', int age = 1, String country = "wakanda"}) {
  // arguments들을 중괄호{}로
  return "Hi, my name is $name, $age years old and from $country ";
}

// required
// required modifier를 이용해서 필수 값으로 사용
// required를 사용하면 Dart가 sayHello는 반드시 name, country, age와 함께 호출되어야 한다는 걸 알게 됨.
String sayHi2(
    {required String name, required int age, required String country}) {
  // arguments들을 중괄호{}로
  return "Hi, my name is $name, $age years old and from $country ";
}

void main3() {
  print(sayHi2(
    age: 12,
    country: "cuba",
    name: "nico",
  ));
}

// Optional Positional Parameters
// 파라미터를 옵션으로 주고 싶을 때 대괄호로 감싸주고 데이터 타입 뒤에 not required의 의미인 ?를 붙인다(null이 올 수 있다는 뜻).
String sayHello3(String name, int age, [String? country = 'cuba']) =>
    'Hello $name, you are $age years old from $country';

void main4() {
  var result = sayHello3('nico', 12);
  print(result);
}

// ?? (QQ operator) (Question Question Operator)
// left ?? right => 좌항이면 null, 우항이면 return
//ternary operator

String capitalizeName(String? name) => name?.toUpperCase() ?? "ANON";
// name 자체가 null이면 toUpperCase를 호출할 수 없으니 not required를 해준다.

/*
  위 코드를 삼항연산자로 했을 때
  String capitalizeName(String? name) => name != null ? name.toUpperCase() : "ANON";  
  
  위 코드를 오리지날로 했을 때
  String capitalizeName(String? name) {
    if (name != null) {
      return name.toUpperCase();
    }
    return 'ANON';
  }
*/

void main5() {
  capitalizeName('nico');
  capitalizeName(null);
}

// QQ equals (QQ assignment operator)
// 대상이 null인 경우에 할당
void main6() {
  String? name;
  name ??= 'nico';
  name ??=
      'changedName'; // Warning - 왼쪽 값이 항상 null이 아니기 때문에 changedName이 name에 대입될 수 없음
  print(name); // nico
}

// Typedef
// 자료형에 alias를 붙일 수 있게 해줌 (긴 코드를 볼 때 유용)
// 자료형이 헷갈릴 때 도움이 되는 alias 만들기

typedef ListOfInts = List<int>;

ListOfInts reversListOfNumbers(ListOfInts list) {
  // List를 반대로 뒤집어서 return하는 function
  var reversed = list.reversed;
  return reversed.toList();
}

void main7() {
  print(reversListOfNumbers([1, 2, 3]));
}

typedef UserInfo = Map<String, String>;
String sayHi3(UserInfo userInfo) {
  return "Hi ${userInfo['name']}";
}

/* 
  typedef로 alias로 만들기 전의 위 코드와 동일
  String sayHi3 (Map<String, String> userInfo) {
    return "Hi ${userInfo['name']}";
  }
*/

void main8() {
  sayHi3({"sdfsdsdf": 'nico'});
  // 이 역시 Map<String, String>이기 때문에 structure data가 필요
}
// typeof는 간단한 데이터의 alias를 만들 때 사용함 (Map, Set 등..)
// 구조화된 data의 형태를 지정하고 싶다면 class 이용