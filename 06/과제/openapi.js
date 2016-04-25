console.log('openapi.js')

var template = document.getElementById('searchListTemplate').innerHTML;
var input = document.getElementById('search');
var wrap = document.getElementById('wrap');
var nextPage = document.getElementById('nextPage');
var prevPage = document.getElementById('prevPage');
var apikey = '4881df46f3f3644bf261e98b55364625';

var page = 1;
var result = 15; //검색결과를 한 번에 15개까지 표시


function addInfo()
{
  var apiurl = 'https://apis.daum.net/search/web?q='+ searchObject +'&apikey='+apikey+
   '&output=json&pageno='+ page +'&result=' + result;
   getJSON(apiurl, function(res){
     console.log(res);
     render(wrap, template, res.channel.item);
   });
}

function render(wrap, template, data){

  var html = tmpl(template, {list:data});
  wrap.innerHTML = html;
}

input.addEventListener('keyup', function(event){
  if(event.keyCode==13) // keyCode 13 = Enter
  {
    searchObject = input.value; // 엔터가 눌릴 시 입력창의 값을 searchObject로
    wrap.innerHTML=''; // 검색시 이전화면 삭제
    page = 1; // 새로운 검색시 페이지를 1로 초기화
    addInfo();
  }
});

prevPage.addEventListener('click', function(event){
  page--; //이전 버튼 클릭시 page 1 감소
  addInfo();
  if(page<1)
  {
    page++; // page 값이 1 이하가 되려 할 시 페이지를 1 증가(page 최소값 = 1) 하고 메시지 출력
    window.alert('첫 페이지 입니다.');
  }
});

nextPage.addEventListener('click', function(event){
  page++; // 다음 버튼 클릭시 page 1 증가
  addInfo();
  if(page>3)
  {
    page--; // page 값이 3 이상이 되려 할 시 페이지를 1 감소(page 최대값 = 3)하고 메시지 출력
    window.alert('더 이상 표시할 수 없습니다.');
  }
});
