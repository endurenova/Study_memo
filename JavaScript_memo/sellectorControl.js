

jQuery
/* 클래스 추가 */
$("#element").addClass("class1");
$("#element").addClass("class1", "class2");

/* 클래스 제거 */
$("#element").removeClass("class1");
$("#element").removeClass("class1", "class2");

/* 클래스 교체 */
$().switchClass("oldClass", "newClass");
$("#element").removeClass("oldClass").add("newClass");

/* 클래스 새로 지정 */
$("#element").attr("class", "newClass");

/* 클래스 존재 여부 확인 (반환값: boolean) */
$("#element").hasClass("class1"); 
$("#element").hasClass("class1", "class2"); // 여러개, 한 개라도 일치하지 않으면 false 반환

/* 클래스 토글 */
$("#element").toggleClass("class1"); 
$("#element").toggleClass("class1", true);  // true면 클래스 추가
$("#element").toggleClass("class1", false);  // false면 클래스 제거

/* 클래스 추가 */
$("#element").addClass("class1");
$("#element").addClass("class1", "class2");


// JavaScript
/* 자식 목록 리스트 */
const childNodes = document.getElementById("").childNodes;  // id의 모든 자식 노드 리스트 (NodeList 형태)
const childList = document.getElementById("").children;  // id의 모든 노드 중 element 리스트 (HTMLCollection 형태)
childList[0].style.color = "#fff";

// 해당 요소와 동일 레벨의 element 중 바로 다음 element
document.getElementById("").nextElementSibling;
document.querySelector("").nextElementSibling;
childList[0].nextElementSibling;

// 해당 요소와 동일 레벨의 element 중 바로 이전 element
document.getElementById("").previousElementSibling;
document.querySelector("").previousElementSibling;
childList[1].previousElementSibling;

/* 부모 선택자 */
document.querySelector("").parentNode;  // 부모 노드 선택자
document.querySelector("").parentNode.parentNode;  // 부모의 부모 노드 선택자
document.querySelector("").parentElement;  // 부모 엘리먼트 선택자
document.querySelector("").parentElement.parentElement;  // 부모 엘리먼트 엘리먼트 선택자

/* 클래스 제거 */
element.classList.remove("class1");
element.classList.remove("class1", "class2");

/* 클래스 교체 */
element.classList.replace("oldClass", "newClass");

/* 클래스 존재 여부 확인 (반환값: boolean) */
element.classList.contains("class1"); 
element.classList.contains("class1", "class2");  // 여러개, 한 개라도 일치하지 않으면 false 반환

/* 클래스 토글 */
element.classList.toggle("class1");
element.classList.toggle("class1", true);
element.classList.toggle("class1", false);