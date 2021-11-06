var myDict = {1:'NAVGURUKUL',2: 'IN',3:{'A' : 'WELCOME','B' : 'To','C' : 'DHARAMSALA'}}
for (i in myDict){
    if ((typeof myDict[i]) === "object"){
        delete myDict[3]['A']
    }
}
console.log(myDict);
//remove the element of welcome