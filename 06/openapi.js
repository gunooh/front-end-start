console.log('openapi.js')


var apikey = '4881df46f3f3644bf261e98b55364625';

var q = '제주대';
var apiurl = 'https://apis.daum.net/search/web?q='+ q +'&apikey='+apikey+
 '&output=json';


 console.log(apiurl)

 getJSON(apiurl, function(res){
   console.log(res);


 });
