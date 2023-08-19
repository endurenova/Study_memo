const foo = {
    a: 20
  }
  
  function bar() {
    console.log(this.a);
  }
  
  bar.call(foo); // 20
  bar.apply(foo); // 20

  
offset: path()는 CSS offset-path 속성의 값으로 사용되며, SVG 경로 명령어를 포함할 수 있습니다. 여기에 몇 가지 일반적으로 사용되는 명령어를 설명하겠습니다:

M (Move To): 현재 위치를 이동합니다.

예: M x y
L (Line To): 직선을 그립니다.

예: L x y
H (Horizontal Line To): 수평선을 그립니다.

예: H x
V (Vertical Line To): 수직선을 그립니다.

예: V y
C (Cubic Bézier Curve): 3차 베지어 곡선을 그립니다.

예: C x1 y1, x2 y2, x y
S (Smooth Curve To): 이전 커브의 제어점 대칭을 사용하여 3차 베지어 곡선을 그립니다.

예: S x2 y2, x y
Q (Quadratic Bézier Curve): 2차 베지어 곡선을 그립니다.

예: Q x1 y1, x y
T (Smooth Quadratic Curve To): 이전 커브의 제어점 대칭을 사용하여 2차 베지어 곡선을 그립니다.

예: T x y
A (Elliptical Arc Curve): 타원 호를 그립니다.

예: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
Z (Close Path): 현재 경로를 닫습니다.

이 명령어들을 조합하여 원하는 모양의 경로를 정의할 수 있습니다. 경로의 시작점은 M 명령어로 설정하고, Z 명령어로 경로를 닫을 수 있습니다. 제공된 offset: path('M 50 80 C 150 -20 250 180 350 80')의 예시에서는 M과 C 명령어가 사용되었습니다.