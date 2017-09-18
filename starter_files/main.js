//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, hungry) {
  this.name = name
  this.status = status
  this.hungry = hungry
}
// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog("Sadie", "normal", false)
sadie.owner = "mason"
sadie.color = "black"

const moonshine = new Dog("Moonshine", "normal", true)
console.log(moonshine);

const atticus = new Dog("Atticus", "normal", true)
console.log(atticus);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name
  this.pet = function(dogName) {
    return dogName.status = "happy"
  }
  this.feed = function(dogName) {
    return dogName.hungry = false
  }
  this.cool = cool
  }

// Instances of Human
// Needed: mason, julia
const mason = new Human("Mason", false)
console.log(mason);

const julia = new Human("Julia", true)
console.log(julia);
