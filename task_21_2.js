const jsonInitial = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

// Output initial JSON string
console.log('Initial JSON string: ', jsonInitial);

// Transfer JSON string to JS object
const data = JSON.parse(jsonInitial);
console.log('Automaticaly getting JS-object: ', data);

//Create new JS object manualy
const result = {
    name: data.name,
    age: data.age,
    skills: data.skills,
    salary: data.salary,
};
console.log('Manualy getting JS-object: ', result);

// Get resulted JSON string
const jsonResulted_1 = JSON.stringify(data);
console.log('Resulted JSON string from auto JS-object: ', jsonResulted_1);

const jsonResulted_2 = JSON.stringify(result);
console.log('Resulted JSON string from manual JS-object: ', jsonResulted_2);

//Сheck equality of initial and resulted JSON strings
console.log(jsonResulted_1 === jsonInitial);
console.log(jsonResulted_2 === jsonInitial);
