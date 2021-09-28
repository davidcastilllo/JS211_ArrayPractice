//1 .length

let cars = ['Ford','Chevy','BMW','Toyota']
console.log('1. length of the array: ' + cars.length)

console.log('***************************************')

//2 .concat()

let moreCars = ['Audi','Mitsubishi','Jeep','Honda']
let totalCars = cars.concat(moreCars)
console.log('2. Total list of cars: ' + totalCars);

console.log('***************************************')

//3 .indexOf() and .lastIndexOf()

console.log('3. The index of Honda is: ' + totalCars.indexOf('Honda'))
console.log('The last index of Ford is: ' + totalCars.lastIndexOf('Ford'))

console.log('***************************************')

//4 .join()

let stringOfCars = totalCars.join()
console.log('4. TotalCars array as a string: ' + stringOfCars)

console.log('***************************************')

//5 .split()

let carsFromString = stringOfCars.split(',')
console.log('5. stringOfCars split back into an array: ' + carsFromString)

console.log('***************************************')

//6 .reverse()

let carsInReverse = totalCars.reverse()
console.log('6. The totalCars array in reverse: ' + carsInReverse)

console.log('***************************************')

//7 .sort()

carsInReverse.sort()
console.log('7. My guess of first object: ' + carsInReverse.indexOf('Audi'))

console.log('***************************************')

//8 slice()

let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4,6)
console.log('8. An array of reptiles: ' + reptiles)
console.log('An array of pets: ' + pets)

console.log('***************************************')

//9 .splice()

let removedReptiles = pets.splice(4,2,'hamster')
console.log('9. An array of removed reptiles: ' + removedReptiles);
console.log('An array of pets with reptiles removed: ' + pets)

console.log('***************************************')

//10 .pop()

let removedPet = pets.pop()
console.log('10 The removed pet: ' + removedPet)
console.log('The list of pets remaining: ' + pets)

console.log('***************************************')

//11 .push()

pets.push(removedPet)
console.log('11. The removed pet was put back on: ' + pets)

console.log('***************************************')

//12 .shift()

console.log('12. The removed first item in the pets array is: ' + pets.shift())

console.log('***************************************')

//13 .unshift()

pets.unshift('turtle')
console.log('13. The first new pet in the list is turtle: ' + pets)

console.log('***************************************')

//14 .forEach()

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
let addTwo = (num,index,arr) => {
arr[index] = num + 2
}
numbers.forEach(element => {
    addTwo(element,numbers.indexOf(element),numbers)
});
console.log('14. Each number in the array got 2 added to it: ' + numbers)