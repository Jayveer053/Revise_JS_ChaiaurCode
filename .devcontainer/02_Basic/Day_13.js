// Array In JavaScript

// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)



// const myHeroes = ["Shaktiman", "naagraj"];


// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);


//Array method s
/*
myArr.push(6)
console.log((myArr));
myArr.pop()
console.log(myArr);
*/



// myArr.unshift(9);
// console.log(myArr)



// console.log(myArr.includes(3));


// slice,splice

/*
console.log("A",myArr)

const myn1 = myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)
*/



// Advance Array Methods


const marvel_Heroes = ["Thor","Ironman","Spiderman"];
const dc_Heroes = ["Superman","Flash","Batman"]

// marvel_Heroes.push(dc_Heroes);

// console.log(marvel_Heroes);


// const all_Heroes = marvel_Heroes.concat(dc_Heroes);
// console.log(all_Heroes);

// const all_new_heroes = [...marvel_Heroes, ...dc_Heroes]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]
const real_anther_array = another_array.flat(Infinity)
console.log(real_anther_array);



console.log(Array.isArray("Jayveer"));
console.log(Array.from("Jayveer"));
