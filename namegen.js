const names = {
    first: ["Roaring", "Fearless", "Black", "Broad", "Great", "Mighty", "Clever", "Crazy", "Swift", "Thundering", "Rapid", "Graceful", "Bloody", "Grumpy", "Deep", "Towering", "Shadowy", "Dark", "Regal"],
    last: ["Waters", "Oak", "Pine", "Boulder", "Crag", "Heath", "River", "Cavern", "Sky", "Bark", "Peak", "Fjord", "Bear", "Corbie", "Ettercap", "Hoolet", "Alpha"]
}

function getRandomInt(max) {
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
  } 

  function getBackground(){ 
  fetch("https://api.unsplash.com/photos/random?query=nature&client_id=fF2wVjd38AA7Pmba9pf5Bl8IKrNWzK0Px0q2-eMJzIY")
        .then(r => r.json()).then((r) => {
          const data = r;
            const outputUrl = data.urls.regular;     
            const imgAtt = data.user.name;
            const imgDownload = data.links.download;
          
            console.log(outputUrl);
            document.body.style.backgroundImage = `url(${outputUrl})`;
            document.getElementById("image-att").innerHTML = `Image create by ${imgAtt} from Unsplash.com. Get it here:`
            document.getElementById("image-down").href = imgDownload;
        }) 
      }

      window.onload = function () {
        getBackground();
        window.setInterval(getBackground, 90000);
    }


  
   function createName(){
    const firstName = names.first[getRandomInt(names.first.length)];
    const lastName = names.last[getRandomInt(names.last.length)];
    const wolfName = firstName + " " + lastName;
    console.log(wolfName);
    document.getElementById('name-gen-output').innerHTML = wolfName;

            
  }
