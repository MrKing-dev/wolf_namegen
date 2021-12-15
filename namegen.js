const http = require('http');
const randomPuppy = require('random-puppy');
const names = {
    first: ["Roaring", "Fearless", "Black", "Broad", "Great", "Mighty", "Clever", "Crazy", "Swift", "Thundering", "Rapid", "Graceful", "Bloody", "Grumpy", "Deep", "Towering", "Shadowy", "Dark"],
    last: ["Waters", "Oak", "Pine", "Boulder", "Crag", "Heath", "River", "Cavern", "Sky", "Bark", "Mount", "Fjord", "Wolf", "Corbie", "Ettercap", "Hoolet"]
}


function getRandomInt(max) {
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
  } 

  const firstName = names.first[getRandomInt(names.first.length)];
  const lastName = names.last[getRandomInt(names.last.length)];
  const wolfName = firstName + " " + lastName;

  randomPuppy('EarthPorn')
  .then(url => {
      console.log(url);
  })

  console.log(wolfName);