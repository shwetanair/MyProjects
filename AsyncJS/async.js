window.onload = function(){

  var http = new XMLHttpRequest(); //allows us to get the data back
  http.open("GET","data/tweets.json",true); //open ethods sets up the request; true if we want async
  http.send();
  console.log(http);

};








/*READY STATES
0 - request not initialized
*/
