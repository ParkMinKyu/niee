# niee
-------------------------------------------
- html tag에 data-start, data-end 속성을 추가하여
입력된 날짜에 따라 해당 tag를 보이거나 안보이게 하는 jquery 플러그인

사용법
```javascript
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="niee.js"></script>
<script>
$(function(){
//1.기본 사용 (selector된 요소들중 data-start가 있으면 start이후부터 show(), data-end가 있으면 이후부터 remove())
$(".page1 > div").niee();

//2.적용 할 수 있는 옵션
$(".page1 > div").niee({
autoLoad : true, // setIntervall로 1초마다 변경사항 확인 default : false
time : 2000, //autoLoad = true일때 변경사항 확인할 시간 1000 = 1sec
before : function(obj){
 //날짜 체크 전 시작할 함수 시작전 아래처럼 추가하여 사용 가능
 $(obj).eq(0).data('end','2016-01-22');
},
after : function(obj){
//날짜 체크 후 시작할 함수
$(obj).eq(0).addClass("on");
},
change : function(before, after){
//변동사항이 일어난 후 처리되는 함수 before : 변동전 선택된 요소들, after : 변동 후 선택된 요소들
console.log(before);
console.log(after);
}
});


});
</script>
```
```html
<div class="page1">
<div>1</div>
<div>2</div>
<div>3</div>
<div data-start="2016-01-20" data-end="2016-01-21 05:00">4</div>
<div>5</div>
<div data-start="2016-01-30">6</div>
</div>
```
