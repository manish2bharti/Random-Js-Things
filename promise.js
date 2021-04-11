// when you wanna make an async call which has to wait for something to happen and then once it comes back you exit with a callback function. 
// And within that callback function you might do another ajax call which can wait for another result and you would have another callback 
// function on success or failure and it can become kind of nested callback function hell which is kinf of ugly and its hard to read and 
// debug and everything else. So thats why to simplify this thing we use promises.

$.ajax({
  url: "a.json",
  success: function(r){
    $.ajax({
      url: "b.json" + r.a,
      success: function(r){
				$('#div1').html(result);
      }
  	})
  }
})

var p1 = new Promise(function(resolve, reject){
resolve($.ajax('a.json');)
})

p1.then(function(r){
return new Promise()
}).then(function(result){
  $('#div1').html(result);
})
