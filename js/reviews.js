/*
const reviews = [
    {
        id: 1,
        name: "Desmond Tils",
        job: "Professional photografer",
        img: "img/img-vietnams/menwithfotoaparat.jpeg",
        text:
            '"I recommend a tour to Vietnam. It is perhaps better not to go to that country without a reliable guide. With Arabika Tours, we felt completely safe, and we want to go there again, with the kids. Well thought-out stops along the way, excellent hotels. Thanks for the wonderful experience!"'
    },
    {
        id: 2,
        name: "Cole Holmens",
        job: "Professional traveler",
        img: "img/img-vietnams/menwithelefant.jpeg",
        text:
            '"This is the second time I am going on a safari with Arabica Tours. To anyone who doubts,I REALLY recommend that active vacation!  It is a completely different experience than regular all-inclusive or sightseeing tours Here you see the real Azia, in all its diversity."'
    }
  
];

const img = document.getElementById("img");
const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".button-left");
const rightBtn = document.querySelector(".button-right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    testimonial.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
