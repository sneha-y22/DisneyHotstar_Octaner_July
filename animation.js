let bar = document.querySelector('.bars');
let menu = document.querySelector('.nav-links');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_nav');
});

let movies = [
  {
    name: "Falcon and the Winter Soldier",
    des:
      "Following the events of 'Avengers: Endgame' Sam Wilson and Bucky Barnes team up in a global adventure that test their abilities and their patience.",
    image: "./Images/slider 2.PNG"
  },
  {
    name: "Culpa Mia",
    des:
      "Noah must leave her town, boyfriend and friends to move into her mom's new husband's mansion. There, she meets her new stepbrother Nick and their personalities clash from the very beginning.",
    image: "./Images/slider 6.jpeg"
  },
  {
    name: "Loki",
    des:
      "The mercurial villain Loki resumes his role as the God of Mischief in the new series that takes place after the events of 'Avengers: Endgame'.",
    image: "./Images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "Wanda Maximoff and Vision - two superpowered beings living idealized and sububan lives - begin to suspect that everything is not like as it seems.",
    image: "./Images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya, a fallen princess must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "./Images/slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "The movie is a coming-of-age story about one young boy experiencing unforgettable summer filled with gelato, pasta and endless scooter rides.",
    image: "./Images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
