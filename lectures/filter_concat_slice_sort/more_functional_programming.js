const shoppingList = Object.freeze([
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, // shoppingList[0]
    {id: 5, item: "red gamer chair", price: 200, shops: ["amazon", "BestBuy"], required: false}, // shoppingList[1]
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["99 ranch" , "Trader Joes"], required: true},  // shoppingList[2]
    {id: 2, item: "Air ticket to Japan", price: 800, shops: ["expedia"], required: false},  // shoppingList[3]
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}      // shoppingList[4]
])

// ------ The Big Freeze (More built-in functions for object & array)  -------

//// push without .push?
// concat: to glu 2 arrays together
// spread: to create an array from the copy


// CONCAT (glue 2 arrays together) --
const campingList = [
    {id: 20, item: "RV", price: 50000, shops: ["Camping world", "Craigslist"], required: true},
    {id: 21, item: "tent", price: 500, shops: ["Craigslist"], required: true}
]
const shoppingListWithRV = shoppingList.concat(campingList)
console.table(shoppingListWithRV)




// SPREAD (create an array with ...arr) --
const shoppingListWithTV = [ ...shoppingList , {id: 15, item: "TV", price: 599, shops: ["amazon", "BestBuy"], required: false} ]
console.table(shoppingListWithTV)




//// -- SLICE : return a portion of the array -- ////
// slice will return a portion of the array. starting, ending (not included)

const firstThreeItems = [...shoppingList.slice(0,3)]
console.table(firstThreeItems)

const deleteArrIdx2 = 2
const first2Items = [ ...shoppingList.slice(0,deleteArrIdx2), ...shoppingList.slice(deleteArrIdx2+1)]
// glues the second list to the first with the comma -- just removes the second index
console.table(first2Items)
// filter is more efficient.




// -- SPLICE vs slice (splice: remove the element, slice: return a portion) --

const array=[1,2,3,4,5];
console.log(array.splice(1, 2)) // delete 2 elements from array[1]
// first number is your starting number, and second number is the count of how many elements you want to delete
console.log(array)





const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2
console.log(array2)





//// -- Sorting -- ////

const cheapItemsNames = shoppingList             //brought in from map_filter
                            .filter((eachItem)=> eachItem.price < 100)
                            .map((whatever) => whatever.item)
const prices = shoppingList.map((eachItem) => eachItem.price)

console.table(cheapItemsNames)
const sortedNames = cheapItemsNames.sort()
console.table(sortedNames)

console.log(prices)
const sortedPrice = prices.sort((a, b) => a-b)
console.log(sortedPrice)


const sortedByPrice = [...shoppingList].sort((a, b)=> a.price > b.price? 1: -1)
// console.table(sortedByPrice)