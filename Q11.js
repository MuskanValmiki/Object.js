const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
let l1 = []
for (i of list) {
  for (j in i) {
      if (!l1.includes(i[j])) { 
       l1.push(i[j])
      }
  }
}
console.log(l1);
// remove duplicate value from object