const list1=[]
const word="MISSISSIPPI"
let output={}
for (var i of word) {
      if(list1.includes(i)){
       output[i]=output[i]+1
    
  }else{
       list1.push(i);
       output[i]=1;
  }
}
console.log(output);
//{ M: 1, I: 4, S: 4, P: 2 } here we find which element comes how many times

