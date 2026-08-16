
/**  (Union) ->  Both will Accept 

* let subs: number | string = 10;
* let subs: number | string = '10M';
*let apiReq: 'pending' | 'success' | 'error' = 'pending';
let airLineSeat: 'aisle' | 'window' | 'middle' = "aisle";

**/

/** This code Will become difficult at the end 

let orders = ['10', '20', '30', '40']
let currentVal; // Due TO any
for (let order of orders){
    if (order === '50') {
        currentVal = order;
        break
    }
}
currentVal = 100;
console.log(currentVal);
*/


//  This code Will become difficult at the end 

let orders = ['10', '20', '30', '40']
let currentVal:string | undefined; // Tackle the Error
for (let order of orders){
    if (order === '50') {
        currentVal = order;
        break
    }
}

console.log(currentVal);