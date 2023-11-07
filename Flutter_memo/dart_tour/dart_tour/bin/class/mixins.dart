// Mixin
// 생성자가 없는 클래스를 의미 (생성자가 없어야 한다)
// 클래스에 프로퍼트들을 추가하거나 할 때 사용

mixin Strong {
  final double strengthLevel = 1500.99;
}

mixin QuickRunner {
  void runQuick() {
    print("ruuuuuuun!");
  }
}

mixin Tall {
  final double height = 1.99;
}

enum Team { blue, red }

class Player with Strong, QuickRunner, Tall {
  // 가져오는거라 상속이 아니다.
  final Team team;

  Player({
    required this.team,
  });
}

void main() {
  var player = Player(team: Team.red);
  player.runQuick();
}

// 객체 지향 프로그래밍(OPP)의 개념