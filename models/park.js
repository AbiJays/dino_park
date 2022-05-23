const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};


// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function (newDino) {
    this.dinosaurs.push(newDino);
};

// Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function (dinoSpecs) {
    const results = [];
    for (dino of this.dinosaurs) {
        if (dino != dinoSpecs) {
            results.push(dinoSpecs)
        }
    }
    return results;
// better to use splice rather than looping through an array because splice refreshes before each iteration
};

// Most popular Dino
Park.prototype.mostPopularDino = function () {
    let result = new Dinosaur("Pretend", "Pretend", 0);
    for (let dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > result.guestsAttractedPerDay) {
            result = dino;
        }
    }
    return results;
};
// Assume: get a comparison running = create variable as mosty attractive and nominate the first dinosaur
// set variable to compare = 0
    // loop through dinos in dino Array
    // for each dino visitors 
    //   if > variableToCompare replace variableToCompare

// species search

// Park.prototype.speciesSearch = function (species) {
//     const results = [];
//     for (dino of this.dinosaurs) {
//         if (dino.species === species) {
//             results.push(dino)
//         };
//     }
//     return results;
// };

// total number of visitors a day
// total number of visitors a year
// total revenue from ticket sales for one year

module.exports = Park;