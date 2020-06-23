// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//     this.name = name;
//     this.species = species;
//     this.age = age;
//     this.health = health;
//     this.weight = weight;
//     this.color = color;
//   }

//   Give me the power to create a similar class like this:
//   const Animal = makeClass("name","species","age","health","weight","color") 


const makeClass = (...properties) => {
    return class {
        constructor(...props) {
            properties.forEach((prop, index) => {
                this[prop] = props[index]
            })
        }
    }

}

const Animal = makeClass("name","species","age","health","weight","color") 

const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')

console.log(dog1)