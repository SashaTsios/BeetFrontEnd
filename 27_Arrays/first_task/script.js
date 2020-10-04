// 1
let buy_list = [{'title': 'apples', 'needed-amount': 2, 'need': false}, {'title': 'potatoes', 'needed-amount': 5, 'need': true}, {'title': 'tomato', 'needed-amount': 1, 'need': false}, {'title': 'cheese', 'needed-amount': 0.5, 'need': false}, {'title': 'meat', 'needed-amount': 1, 'need': true}]

console.log(buy_list)
buy_list.sort((a,b) => {
    return b.need - a.need;
})



// function showProducts(list){
//     list.sort(function(a.need, b.need) {
//         return a.need - b.need;
//       });
//     console.log('Sorted: 'list.sort(compareNumbers));
// }

// buy_list.sort((a, b) => (b.need - a.need))
//   .map(e => console.log(e.name + ': ' + e.population));

let newItem = {'title': 'apples', 'needed-amount': 2, 'need': true}

function addProduct(listExisted, newItem){
    let r = listExisted.filter(e => e.title === newItem.title);
    console.log(r)
    if (r == false) {
        var addNew = listExisted.push(newItem);
    } else{
        listExisted
    }

}

function buyProduct(title){
    
}
// console.log(buy_list)
// console.log(showProducts(buy_list))