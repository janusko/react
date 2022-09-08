// ------ Object.freeze() -------

// makes array immutable

const shoppingList = Object.freeze([
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, // shoppingList[0]
    {id: 5, item: "red gamer chair", price: 200, shops: ["amazon", "BestBuy"], required: false}, // shoppingList[1]
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["99 ranch" , "Trader Joes"], required: true},  // shoppingList[2]
    {id: 2, item: "Air ticket to Japan", price: 800, shops: ["expedia"], required: false},  // shoppingList[3]
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}      // shoppingList[4]
])

// shoppingList.push('apples')
// this wouldn't work, because it is immutable, so no pushing and no popping




// ------ .map & .filter -------


//// --- .map() --- ////
// map() takes in a callback function. Grabs all the returned items, and forms in an array
// sometimes used to return some HTML

const prices = shoppingList.map((eachItem) => eachItem.price) // loop through the array and grab all the returned item, then form an array 
console.log(prices)
// implicit return currently.
// if curly bracket added around {eachItem.price}, we would have to add a return.

const pricesPlusItems = shoppingList.map((eachItem) => {return {item: eachItem.item , price: eachItem.price}})
console.log(pricesPlusItems)

// TODO: return a list of item names
const itemNames = shoppingList.map((eachItem) => eachItem.item)
console.log(itemNames)




//// --- .filter() --- ////
// filter() is similar to map, but creates a filtered copy of an array. 

// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems = shoppingList.filter((eachItem)=> eachItem.price<100 )
console.log(cheapItems) 
// returns the whole object


// DEMO: return a list of cheap items with only the names
const cheapItemsNames = shoppingList
                            .filter((eachItem)=> eachItem.price < 100)
                            .map((whatever) => whatever.item)
console.log(cheapItemsNames)
// chained filter and map together


// TODO: given a deleteId, return a list of items without the item of that matching id 
const deleteId = 5
const removeGivenId = shoppingList.filter((eachItem) => eachItem.id !== deleteId)
console.table(removeGivenId)
// this is just a copy of the original shoppingList array. if you print shoppingList then it will still have the item with id 5


// TODO: given an array index, return a list of items without the item of that index 
const deleteArrIdx = 0
const removeArrIdx = shoppingList.filter((eachItem, idx) => idx !== deleteArrIdx) // second argument of callback function is the array positiona
console.table(removeArrIdx)
// want to remove based on the index not the id. we need to give another argument, because we don't have access to the objects index. This idx is going to be the array index.
// second argument will always be index, regardless of name


// TODO: filter the items that can be bought in Trader Joes 
// HINT: .includes(keyword) returns a boolean

const traderJoesList = shoppingList.filter((eachItem) => eachItem.shops.includes("Trader Joes"))
console.table(traderJoesList)


// React example
// shoppingList
//     .filter((eachItem) => eachItem.price < 100)
//     .map((eachItem, idx) => {
//         <li key={i}> {eachItem.itemName}, price: ${eachItem.price} </li>
//     })