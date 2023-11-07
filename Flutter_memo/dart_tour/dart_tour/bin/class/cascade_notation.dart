//Cascade Notation
class Player {
  String name;
  int xp;
  String team;

  Player({
    required this.name,
    required this.xp,
    required this.team,
  });
  void talkTeam() {
    print("$name is $team team");
  }
}

void main() {
  var nico = Player(name: 'nico', xp: 1200, team: 'red')
    ..name = 'las'
    ..xp = 1200000
    ..team = 'blue'
    ..talkTeam();
  /*   
    위 코드랑 동일
    var nico = Player(name: 'nico', xp: 1200, team: 'red');
    nico.name = 'las';
    nico.xp = 1200000;
    nico.team = 'blue';    
    nico.talkTeam();
  */
}
