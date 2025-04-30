const accId = 144  //value will not change
let accEmail = "mohdsafee@google.com"
var accPassword = "1234"
let accState; //undefined

/*
Prefer not to use var bcoz of issue in block and functional scope
*/

accCity = "Jaipur" 

// accId = 2 //not allowed
accEmail = "safee@gmail.com"
accPassword = "321"
accCity = "kanpur"

console.log(accId);

console.table([accId, accEmail, accPassword, accCity, accState])
