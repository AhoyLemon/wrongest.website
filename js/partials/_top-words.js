// jshint -W117
var wrongestwords = [];
var leastwrongwords = [];
$.getJSON( "http://www.wrongest.net/bottom10/lifetime", function(wrongest) {
  console.log(wrongest);
  
  for (i = 0; i < wrongest.length;) {
    var s = wrongest[i].replace('{','<span class="revealed">').replace('}','</span>');
    wrongestwords.push('<li><span class="statement">'+s+'</span><span class="score">'+wrongest[i+1]+'</span></li>');
    i = i +2;
  }
  console.log(wrongestwords);
  $('#MostWrongWords').append(wrongestwords);
});

$.getJSON( "http://www.wrongest.net/top10/lifetime", function(leastwrong) {
  leastwrong.reverse();
  console.log(leastwrong);
  for (i = 0; i < leastwrong.length;) {
    var s = leastwrong[i+1].replace('{','<span class="revealed">').replace('}','</span>');
    leastwrongwords.push('<li><span class="statement">'+s+'</span><span class="score">+'+leastwrong[i]+'</span></li>');
    i = i +2;
  }
  console.log(leastwrongwords);
  $('#LeastWrongWords').append(leastwrongwords);
});