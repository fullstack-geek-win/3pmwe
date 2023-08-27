
let fruits = ['Grape', 'Apple', 'Orange']
// for..in
// for (let index in animals) 
//     console.log(index + "-->" + animals[index]);
//  for..of
// for (let animal of animals)
//     console.log(animal);

// for (let fruit of fruits)
//     console.log(fruit);

// forEach
var text = '';
let animals = ['Lion', 'Tiger', 'Elephant', 'Fox', 'Wolf'];
function ShowAnimals(item, index) {
    console.log(index + ": " + item);
}
animals.forEach(ShowAnimals);
// console.log(text);