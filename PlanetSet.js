var assert = require('assert')

const Planets = new Set(["Mercury", "Mars", "Jupiter", "Mars"])

assert(Planets.has("Mars"), console.log("Mars is in our Set"))

assert(Planets.size === 3, console.log("There are only three planets in our Set!"))

assert(!Planets.has("Neptune"), console.log("Neptune is not in our Set yet..."))

Planets.add("Neptune")

assert(Planets.has("Neptune"), console.log("Neptune is added"))

assert(Planets.has("Mercury"), console.log("The Planet Mercury has already been added!"))

Planets.add("Mercury")

assert(Planets.size === 4, console.log("Adding the Planet Mercury again has no effect on the Set"))

for(let Planet of Planets) {
    assert(Planet !== null, Planets)
}

console.log(Planets)