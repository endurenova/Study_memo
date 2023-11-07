// import 'package:dart_tour/dart_tour.dart' as dart_tour;

import 'dart:html';

void main() {
  var name = '니꼬';
  name = 'nico';
  // var
  // 변수를 수정할 때는 같은 타입으로만 가능.
  // 함수나 메소드 내부에 지역 변수를 선언할 때에 var 사용 권장 (컴파일러가 자동으로 인식)
  // class에서 변수나 property를 선언할 때에는 타입 지정 String, int 권장
}

void main2() {
  final siru = '12';
  print(siru);
  // final
  // JavaScript나 TypeScript에서의 const와 동일
  // => final String name = 'nico';나 final name = 'nico'; 둘다 가능

  const hi = 12;
  print(hi);
  // const
  // dart의 const는 JavaScript나 TypeScript의 const와 다르다.
  // dart에서 const는 compile-time constant를 만들어준다.
  // 사전에 알고 있는 값을 상수로 쓰는데 사용자로부터 입력값을 받거나 API로 부터 값을 받으면 final이나 var 사용
  // => ex) 앱스토어에 올리기 전에 이미 알고 있는 값

  // final은 런타임 중에 만들어질 수 있다.(form에 입력한 username처럼 사용자가 앱을 실행하면서 변수를 만들 수 있다.)
  // const의 값은 코드를 컴파일 하기 전에 알아야 한다.
}

void main3() {
  late final String name;
  name = "siru";
  print(name);
  // late
  // 초기 데이터 없이 변수 선언을 가능하게 하는 수식(final이나 var 앞)
  // 데이터를 넣기 전에 사용하지 못하게 함.
  // API에서 값을 받을 때, 많이 사용.
  // => late final String name; final을 사용했으므로 한 번 데이터를 할당 받으면 재할당 불가능

  dynamic siru;
  if (siru is int) {
    print("siru");
  }
  // dynamic
  // 어떤 데이터(String int bool(boolean))가 들어올지 모를 때 사용.
  // 조심스럽게 사용해야하고 자주 쓰면 좋지 않다.

  String? nico = '니꼬';
  nico = null;
  // ?(null safety) (not required)
  print("dart의 변수는 기본적으로 nullable이 아니다.");
  print("변수에 null을 넣어줄 수 없다.");
  // 잘못된 상태의 변수를 참조하는 것을 막아줌.
  // 선언 타입 뒤에 ?를 붙이면 해당 변수가 null값도 될 수 있다는 뜻
  if (nico != null) {
    nico.isEmpty; // nico가 null이 아니라면 컴파일러에게 isNotEmpty라고 알려줌
  }
  // => nico?.inNotEmpty로 줄일 수 있음
}
