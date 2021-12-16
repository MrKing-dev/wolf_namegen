const names = {
    first: ["Roaring", "Fearless", "Black", "Broad", "Great", "Mighty", "Clever", "Crazy", "Swift", "Thundering", "Rapid", "Graceful", "Bloody", "Grumpy", "Deep", "Towering", "Shadowy", "Dark", "Regal"],
    last: ["Waters", "Oak", "Pine", "Boulder", "Crag", "Heath", "River", "Cavern", "Sky", "Bark", "Peak", "Fjord", "Bear", "Corbie", "Ettercap", "Hoolet", "Alpha"]
}
let imgArr = [];


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

    fetch("http://www.reddit.com/r/earthporn/.json")
  .then(r => r.json()).then((r) => {
     r.data.children.forEach((i) => {
       try{
        imgArr.push(i.data.url);
       } catch (error){console.log(error.message)}

 })
      
      imgArr.forEach(img => console.log(img));
      const outputUrl = imgArr[getRandomInt(imgArr.length)];
      document.body.style.backgroundImage = `url(${outputUrl})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
})

 

    /*randomPuppy('EarthPorn')
  .then(url => {
      console.log(url);
      outputUrl = url;
      console.log(`The output url is ${outputUrl}`);
      document.body.style.backgroundImage = `url(${outputUrl})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
  })*/

  }

  createName();

