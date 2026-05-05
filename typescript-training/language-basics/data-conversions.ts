//Any data type to string data type
let stdCode=123;
let phone=456789;
let code=String(stdCode);
console.log(code+phone);

//string to integer
let balance: string="Account balance 10000 ";
balance=balance.replace(/[a-zA-Z]/g,"");
let accountBalance=parseInt(balance);
console.log(accountBalance);

let points="percentage is 98.6";
points=points.replace(/[a-zA-Z]/g,"");
let grade=parseFloat(points);
if(grade>90.0){
    console.log("A grade " +grade)
}
else{
    console.log("not A grade " +grade);
}