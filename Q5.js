//The substring is there 2 times in the main string.
var mainString="My name is muskan, and my friend’s name is Sarika"
var list = mainString.split(" ")
var subString = "is"
var count = 0
for (var i = 0;i < list.length;i++){
    if (list[i] == subString){
        count ++
    }
         
}   
console.log("The substring is there ",count," times in the main string.");