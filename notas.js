// SUPERCLASS
class Person{
    constructor(name = "Prueba", lastname, age){
        this._name = name
        this._lastname = lastname
        this._age = age
    }
    get fullName(){ // Puedo determinar todo lo que quiera extraer de mi objeto
        return `${this.name} ${this.lastname}`
    }
    set phone(newPhone){ // Indica alguna propiedad que quiera modificar
        this._phone = newPhone
    }
  
}

let jonathan = new Person( "Jonathan", "Reyes Alatorre", 35)
let liliana = new Person( "Liliana", "Reyes Alatorre", 30)

console.log(jonathan)
console.log(jonathan.fullName)

console.log(liliana)
console.log(liliana.fullName)

jonathan.phone = "5525342596"
console.log(jonathan)

class Koder extends Person{
  constructor(name, lastname, age, project){
    super(name, lastname, age)
    this._project = project
  }
}

let miriam = new Koder("Miriam", null, 34, "React")

console.log(miriam)

miriam._lastname = "Reyes Alatorre"

console.log(miriam)

let prueba = new Koder()
console.log(prueba)