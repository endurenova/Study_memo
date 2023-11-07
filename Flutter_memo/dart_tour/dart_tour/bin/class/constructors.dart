// Constructors (생성자)
class Player {
  late final String name;
  late int xp;

  // Constructor method의 이름은 class의 이름과 같아야 함.
  Player(this.name, this.xp);
  /*
    위 코드의 의미.
    Player(String name, int xp) {
      this.name = name;
      this.xp = xp;
    }
  */

  void sayHello() {
    var name = '121'; // variable
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player('nico', 1500);
  player.sayHello();
}

// Named Constructor Parameters
class Player3 {
  final String name;
  int xp, age;
  String team;

  Player3({
    required this.name,
    required this.xp,
    required this.team,
    required this.age,
  });

  Player3.createBluePlayer({
    required String name,
    required int age, // colon(:)은 초기화 해주는 기능
  })  : this.age = age, // this.age를 전달 받는 age 파라미터로,
        this.name = name, // this.name를 전달 받는 name 파라미터로,
        this.team = 'blue', // this.team을 'blue'로,
        this.xp = 0; // this.xp을 0로,

  Player3.createRedPlayer(String name, int age)
      : this.age = age, // this.age를 전달 받는 age 파라미터로,
        this.name = name, // this.name를 전달 받는 name 파라미터로,
        this.team = 'red', // this.team을 'blue'로,
        this.xp = 0; // this.xp을 0로,
}

void main3() {
  var player = Player3.createBluePlayer(
    name: "nico",
    age: 21,
  );
}

// api에서 데이터 가져올 때의 예시
class Player4 {
  final String name;
  int xp;
  String team;

  Player4.fromJson(Map<String, dynamic> playerJson)
      : name = playerJson["name"],
        xp = playerJson["xp"],
        team = playerJson["team"];
  void talkTeam() {
    print("$name is $team team");
  }
}

void main4() {
  var apiData = [
    {
      "name": "nico",
      "team": "red",
      "xp": 0,
    },
    {
      "name": "lynn",
      "team": "red",
      "xp": 0,
    },
    {
      "name": "dal",
      "team": "red",
      "xp": 0,
    },
  ];
  apiData.forEach((playerJson) {
    var player = Player4.fromJson(playerJson);
    player.talkTeam();
  });
}
