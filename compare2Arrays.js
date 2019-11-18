/*****************************************************
*
* "Compare 2 Array values and add  store coincidence"
*
****************************************************/
Arr =[12,22,33,44,55];
Arr2 =[1,2,4,5,33,44,55];

var answer = Arr.filter( function(value){
  //console.log(value);
 return Arr2.includes(value);//<- Store equals values find it.
 //To exclude equals and add unique use the next line.
 //return !Arr2.includes(value);
});

console.log(answer); //<--


/*****************************************************
*
* "Optimized with ES6 using arrow function"
*
****************************************************/
Arr = [12,22,33,44,55];
Arr2 =[1,2,4,5,33,44,55];

var answer = Arr.filter( (value) => Arr2.includes(value) );

console.log(answer);
