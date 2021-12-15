const randomPuppy = require('random-puppy');
const names = {
    first: ["Roaring", "Fearless", "Black", "Broad", "Great", "Mighty", "Clever", "Crazy", "Swift", "Thundering", "Rapid", "Graceful", "Bloody", "Grumpy", "Deep", "Towering", "Shadowy", "Dark"],
    last: ["Waters", "Oak", "Pine", "Boulder", "Crag", "Heath", "River", "Cavern", "Sky", "Bark", "Mount", "Fjord", "Wolf", "Corbie", "Ettercap", "Hoolet"]
}
let outputUrl = "";


function getRandomInt(max) {
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
  }   

  function createName(){
    const firstName = names.first[getRandomInt(names.first.length)];
    const lastName = names.last[getRandomInt(names.last.length)];
    const wolfName = firstName + " " + lastName;
    console.log(wolfName);
    document.getElementById('name-gen-output').innerHTML = wolfName;

    randomPuppy('EarthPorn')
  .then(url => {
      console.log(url);
      outputUrl = url;
      console.log(`The output url is ${outputUrl}`);
      document.body.style.backgroundImage = `url(${outputUrl})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
  })

  }