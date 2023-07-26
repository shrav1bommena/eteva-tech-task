
const list1=['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata']
const list2=['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi']

const list1Unique = []
const list2Unique = []
const list1List2Same = []

// for getting same values and list1 unique values
for (let eachValue of list1) {
    if (list2.includes(eachValue)){
        list1List2Same.push(eachValue)
    }
    else {
        list1Unique.push(eachValue)
    }
}

// for getting list2 unique values
for (let eachValue of list2) {
    if (list1.includes(eachValue)){
        continue
    }
    else {
        list2Unique.push(eachValue)
    }
}

console.log(list1Unique)
console.log(list2Unique)
console.log(list1List2Same)