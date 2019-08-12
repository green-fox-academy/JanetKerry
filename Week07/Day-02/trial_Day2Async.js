window.onload = function() {
  let http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      console.log(JSON.parse(http.response)); //JSON to make it obeject format
    }
  };
  http.open('GET', 'data/tweets.json', true);
  http.send(); //true asynchronous behaviour
  //console.log('test');when you want synchronous behaviour
};

/*
 ready states
0-request not initialized
1-request has been set up
2-request has been sent
3-request is in process
4-request is complete

*/

//JQuery method

$.get('data/tweets.json', function(data) {
  //callback func which fires after the "data" has been retrieved-asynch behaviour
  console.log(data);
});
console.log('test');
