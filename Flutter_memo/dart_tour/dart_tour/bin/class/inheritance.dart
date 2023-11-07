// Inheritance
// super라는 클래스를 사용하고 상속 기능이 있다.

class Human {
  final String name; // property
  Human({required this.name}); // 변수 넣어주기
  // Human(this.name); → A
  void sayHello() {
    // method
    print("Hi my name is $name");
  }
}

enum Team { blue, red }

class Player extends Human {
  final Team team;

  Player({
    // constructor
    required this.team,
    required String name,
  }) : super(name: name); // super 클래스는 확장한 부모 클래스를 의미하고 부모 클래스와 상호작용하게 해줌.
  // A → super(name);
  @override
  void sayHello() {
    super.sayHello(); // Human.sayHello(); 이런 식으론 안됨.
    print("and I play for $team");
  }
}

void main() {
  var player = Player(team: Team.red, name: 'nico');
  player.sayHello();
}

// 객체 지향 프로그래밍(OPP)의 개념