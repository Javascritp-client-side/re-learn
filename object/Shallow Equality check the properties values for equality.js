// Creating an object with key-value pairs
let person_1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: true,
 
};

let person_2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,

};

function isEqual(p1, p2) {
    for(let i of Object.keys(p1)){
        
        if(p1[i] !== p2[i]){
            return false
        }

    }
    return true
}

console.log(isEqual(person_1,person_2))
