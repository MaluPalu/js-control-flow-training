console.log("login.js loaded");
let userLogin = {
  username: "BrokebackBooty",
  password: "HeathLedgerRocks"
}

let userInput = prompt('Enter password for ' + userLogin.username);
let i = 1;
while (userInput != userLogin.password && i <= 2) {
  userInput = prompt('Enter password for ' + userLogin.username);
  i++;
}
if (userInput === userLogin.password){
alert("Correct");
}
