class Player {
  // class를 생성할 때는 타입을 꼭 명시해주어야 한다.
  final String name = 'nico'; // class property
  int xp = 1500;

  // method
  void sayHello() {
    var name = '121'; // variable
    print("Hi my name is $name");
    // print("Hi my name is $this.name");
    // $this.name이라 쓰면 Player의 name에 접근
    // 해당 method variable name이 class property와 겹치는게 아니라면 $name으로 쓰는걸 권고
  }
  /*    
    method 안에 같은 variable name이 있는 경우
    void sayHello() {
      var name = '121';
      print("Hi my name is $name");
      > $name = 121;
      > $this.name = nico;
    }
  */
}

void main() {
  var player = Player(); // Player class의 instance인 object
  player.sayHello();
}
