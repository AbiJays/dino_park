const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Triassic Park", 15)
  })

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
    park.addDinosaur("Liliensternus", "Carnivore", 100);
    park.addDinosaur("Liliensternus", "Carnivore", 100);
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
    assert.strictEqual(park.mostPopularDino(), "Liliensternus")
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
