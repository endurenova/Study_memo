// abstract class (추상화 클래스)
// 다른 클래스들이 직접 구현해야하는 메소드들을 모아 놓은 일종의 청사진
// extends 상속 받는 모든 클래스가 가지고 있어야 하는 메소드를 정의

// 그럼 추상 메소드가 필요한 이유는 무엇일까?
// 공통된 필드와 메소드를 통일하기 때문이다.
// 클래스가 여러 개일 경우에는 전에 사용했던 필드 및 메소드와 이름과 규격이 달라질 수 있다. 추상클래스는 필드와 메소드를 같은 이름과 규격으로 만들게 함으로써 통일성을 유지해준다.

abstract class Human {
  void walk();
  // 추상화 클래스는 특정 메소드를 구현하도록 강제
  // Human이라는 추상화 클래스를 extends하는 class들은 walk라는 메소드를 가지고 있어야 한다.
}

enum Team { red, blue }

enum XPLevel { beginner, medium, pro }

class Coach extends Human {
  void walk() {
    print("The coach is walking");
  }
}

class Player extends Human {
  // extends(상속, 확장)
  String name;
  XPLevel xp;
  Team team;
  Player({
    required this.name,
    required this.xp,
    required this.team,
  });

  void walk() {
    print("i'm walking");
  }

  void sayHello() {
    print("Hi my name is $name");
  }
}

void main() {
  var nico = Player(
    name: 'nico',
    xp: XPLevel.medium,
    team: Team.red,
  );
  var potato = nico
    ..name = 'las'
    ..xp = XPLevel.pro
    ..team = Team.blue
    ..sayHello();
}
