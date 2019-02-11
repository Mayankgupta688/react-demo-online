var data = [1, 5, 3, 10, 30, 3];

data.forEach((elem) => {
    console.dir(elem)
})

var doubledData = data.map(elem => elem * 3)

console.dir(doubledData);

console.dir(data);

var filterData = data.filter(elem => elem >= 10)

console.dir(filterData);

console.dir(data);

// forEach
// Map
// Filter
// Reduce
// Every
// Some