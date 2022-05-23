const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  let lilien1;
  let lilien2;
  let lilien3;
 
  let colorad1;
  let colorad2;
  let colorad3;

  let stauri1;
  let stauri2;
  let stauri3;
  
  beforeEach (function () {
    park = new Park("Triassic Park", 15)

    lilien1 = new Dinosaur(("Liliensternus", "Carnivore", 100))
    lilien2 = new Dinosaur(("Liliensternus", "Carnivore", 52))
    lilien3 = new Dinosaur(("Liliensternus", "Carnivore", 43))
    
    colorad1 = new Dinosaur("Coloradisaurus", "Omnivorous", 41)
    colorad2 = new Dinosaur("Coloradisaurus", "Omnivorous", 31)
    colorad3 = new Dinosaur("Coloradisaurus", "Omnivorous", 23)

    stauri1 = new Dinosaur("Staurikosaurus", "Carnivorous", 20)
    stauri2 = new Dinosaur("Staurikosaurus", "Carnivorous", 20)
    stauri3 = new Dinosaur("Staurikosaurus", "Carnivorous", 20)

  });

  it('should have a name', function (){
    assert.strictEqual(park.name, "Triassic Park")
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 15)
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(lilien1);
    park.addDinosaur(stauri1);
    assert.strictEqual(park.dinosaurs.length, 2)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("Liliensternus", "Carnivorous", 100);
    park.addDinosaur("Coloradisaurus", "Omnivorous", 50)
    park.removeDinosaur('Coloradisaurus', "Omnivorous", 50);
    assert.deepStrictEqual(park.dinosaurs.length, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur("Liliensternus", "Carnivorous", 100);
    park.addDinosaur("Coloradisaurus", "Omnivorous", 50);
    park.addDinosaur("Staurikosaurus", "Carnivorous", 20);
    assert.strictEqual(park.mostPopularDino(), "Liliensternus", "Carnivorous", 100)
  });

  // it('should be able to find all dinosaurs of a particular species', function () {
  //   park.addDinosaur("Liliensternus", "Carnivorous", 100);
  //   park.addDinosaur("Coloradisaurus", "Omnivorous", 50);
  //   park.addDinosaur("Staurikosaurus", "Carnivorous", 20);
  //   park.addDinosaur("Coloradisaurus", "Omnivorous", 50);
  //   park.addDinosaur("Coloradisaurus", "Omnivorous", 50);
  //   var Coloradisaurus = park.dinosaurs.speciesSearch("Coloradisaurus");
  //   assert.deepStrictEqual( Coloradisaurus.length, 3)
  // });


//   it('should be able to calculate the total number of visitors per day');
//   park.addDinosaur("Liliensternus", "Carnivorous", 100);
//   park.addDinosaur("Coloradisaurus", "Omnivorous", 50);
//   park.addDinosaur("Staurikosaurus", "Carnivorous", 20);
//   assert.strictEqual(park.dinosaurs.visitorsPerDay(date.now), )

//   it('should be able to calculate the total number of visitors per year');


//   it('should be able to calculate total revenue for one year');

});
