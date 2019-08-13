window.onload = function() {
  let http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    //use two if(s) to catch an error
    if (http.readyState == 4 && http.status == 200) {
      //use if(hxr.readystate===XMLHttpRequest.DONE)-Can be changed anytime DONT use 4
      console.log(JSON.parse(http.response)); //JSON to make it object format
    }
  };
  http.open('GET', 'data/tweets.json', true); //use false to make it synchronous- not a good practice
  http.send(); //true asynchronous behaviour
  //console.log('test');when you want synchronous behaviour
};

/*
 ready states//
0-request not initialized
1-request has been set up//display loader
2-request has been sent
3-request is in process
4-request is complete//dismiss the loader

*/

//JQuery method

$.get('data/tweets.json', function(data) {
  //you need to download files
  //callback func which fires after the "data" has been retrieved-async behaviour
  console.log(data);
});
console.log('test');
