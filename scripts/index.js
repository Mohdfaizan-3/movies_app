let i = 0;
let id;
let images = [
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220517063340_Vieste_1.jpg&w=118&h=78&q=75&c=1",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220517063340_Vieste_6.jpg&w=118&h=78&q=75&c=1",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220517063340_Vieste_8.jpg&w=118&h=78&q=75&c=1",
];

let container = document.getElementById("slideshow");

id = setInterval(function () {
  if (i === images.length) {
    i = 0;
  }
  container.innerHTML = null;
  let image = images[i];

  let img = document.createElement("img");
  img.src = image;

  container.append(img);

  i++;
}, 2000);

let arr = [
  {
    name: "mero",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 1,
  },

  {
    name: "hero",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 2,
  },
  {
    name: "zero",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 3,
  },
  {
    name: "bero",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 4,
  },
  {
    name: "herp",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 5,
  },
  {
    name: "herp",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 6,
  },
  {
    name: "herp",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 7,
  },
  {
    name: "herp",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 8,
  },
  {
    name: "herp",
    release_date: "22.1.2010",
    poster:
      "https://images.fandango.com/r1.0.1035/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/224884/fnd_poster_jurassicworld_presale.jpg",
    IMDb_rating: 9,
  },
];
displayData(arr);
function displayData(arr){
arr.map(function (ele) {

  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = ele.poster;
  let name = document.createElement("h2");
  name.innerText = ele.name;
  let date = document.createElement("p");
  date.innerText = ele.release_date;
  let IMDb_rating = document.createElement("p");
  IMDb_rating.innerText = ele.IMDb_rating;
  div.append(img, name, date, IMDb_rating);
  document.querySelector("#movies").append(div);
});
}
//  window.addEventListener("load", function () {
//    displayData(arr);
//  });



 
  function high_to_low() {
    document.querySelector("#movies").innerHTML=null
    let list = document.querySelector('#sort-hl')
    if (list.attributes[0].value == "htl") {
      
      arr.sort(function (a, b) {
        return b.IMDb_rating - a.IMDb_rating;
      });
      displayData(arr);
      
    }
  }

    function low_to_high() {
       document.querySelector("#movies").innerHTML = null;
      let list = document.querySelector("#sort-lh");
      if (list.attributes[0].value == "lth") {
        
        arr.sort(function (a, b) {
          return a.IMDb_rating - b.IMDb_rating;
        });

        displayData(arr);
      }
    }