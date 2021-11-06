//{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
let readlineSync = (require("readline-sync"));
var num = readlineSync.question("enter any number");
var dic = {}
for (var i = 1; i <= num;i++){
   dic[i] = i * i
}
console.log(dic);