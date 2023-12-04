<?php

# 정규표현식 regex101.com
// preg_match()
// preg_match_all()
// preg_replace()
  // ^x: x로 시작하는 문자열
  // x$: x로 끝나는 문자열
  // . (any): 아무 문자(ex. /^R.r/ -> R로 시작해서 아무 문자 1개 + r)
  // [] (braket): []안에 있는 문자열 (ex. [a3gs] -> a,3,g,s를 찾음) (ex. [12][34] -> 13, 14, 23, 24를 찾음)
  // - (hyphen): 범위 (ex.[b-z] -> b부터 z) (ex.[A-Cf-i3-8] -> A부터 C, f부터 i, 3부터 8)
  // [^x]: []안에서만 Not. x로 시작하는게 아닌 (ex.[^C0-9] -> C랑 0부터 9가 아닌)
  // (|) (서브 패턴(버티컬 바)): 또는 (ex. /(on|tion|ate)/ -> on 또는 tion 또는 ate)

// 수량자 (Quantifier)
  // *x : x 앞에 문자가 있거나 없거나 (와일드 카드)
  // +x : x 앞에 문자가 1개 이상 있을 때
  // ?x : x 앞에 문자가 1개 이하거나 없거나
  // x{} : x라는 string에 대해 수량 지정 (ex. .{5} -> 아무 문자열 5개) (ex. [els]{1,3} -> e 또는 l 또는 s가 1~3개 있는지) (ex. [a-z]{3,} -> a부터 z까지의 문자가 3개 이상)

  /* 
    Lazy Quantify
    : 최소 반복
    *?
    +?
    {n,}?
  */
  
  /* 
    Greedy Quantify
    : 최대 반복
    *
    +
    {n,}
  */


  $string = "who is who";
  $pattern = '/^who/';
  $replacement = "!!";
  echo "<h3>before: $string</h3>";
  echo "<p>&nbsp</p>"; // Non-breaking Space를 의미하는 HTML entity (줄바꿈이 일으키지 않는 공백(space))
  $string  = preg_replace($pattern, $replacement, $string);
  echo "<h3>after: $string</h3>";
  ;
?>