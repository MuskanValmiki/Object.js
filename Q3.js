//{a:400,b:400,d:400,c:300}
var d1 = {'a': 100, 'b': 200, 'c':300};
var d2 = {'a': 300, 'b': 200, 'd':400};
for (i in d1){
    if (i in d2){
        d2[i] = d1[i] + d2[i];
    }
    else
    {
        d2[i] = d1[i];
    }
    
}
console.log(d2);

var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars=Object.assign({},mynewCar,myOldCar)
console.log(allCars)
var allCars={...mynewCar,...myOldCar}
console.log(allCars);