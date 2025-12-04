import './style.css'
 const memes = [
  {
    name: "Distracted Boyfriend",
    category: "funny",
    image: "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/master/pass/MemeLoveTriangle_297886754.jpg"
  },
  {
    name: "Drake yes no",
    category: "funny",
    image: "https://preview.redd.it/3tyfis4savq21.jpg?width=640&crop=smart&auto=webp&s=9c0b3556b61e317ad1ec6e4c6372ef08ded5055a"
  },
  {
    name: "Woman Yelling at Cat",
    category: "funny",
    image: "https://ih1.redbubble.net/image.5753717992.6682/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
  },
  {
    name: "Surprised Pikachu",
    category: "reaction",
    image: "https://external-preview.redd.it/0UF4Gqxwe330DKxNz1_GpmkwIDX0e_TyJdXbbkDVm78.jpg?width=1080&crop=smart&auto=webp&s=4137aba5c4eea563b3c1b5c38e9a5d7ea4edb6c9"
  },
  {
    name: "Change My Mind",
    category: "reaction",
    image: "https://preview.redd.it/change-my-mind-template-without-steven-crowder-v0-aunz7dyoumza1.jpg?width=640&crop=smart&auto=webp&s=fa1b5f7804d61f6462125cf25ae5fc915a14ee78"
  },
  {
    name: "Two Buttons",
    category: "relatable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEB6fYN0oLYwdzjJOLN2ppKGsZLCNApyXkIg&s"
  },
  {
    name: "Roll Safe",
    category: "smart",
    image: "https://a.pinatafarm.com/702x395/ac64fb8667/roll-safe.jpg"
  },
  {
    name: "Mocking Spongebob",
    category: "funny",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwp2Vu-wHrCop5hGwVoPRtcGfV1jQxSuSSTw&s"
  },
  {
    name: "Epic Handshake",
    category: "wholesome",
    image: "https://a.pinatafarm.com/1787x1280/1e44f0e695/epic-handshake.jpg"
  },
  {
    name: "Dog in Burning Room (This is Fine)",
    category: "dark humor",
    image: "https://pbs.twimg.com/media/Fsi5-9vWcAYK3xp.jpg"
  }
];
 memes.forEach((meme) => inject(meme))
function inject(memes) {
   document.querySelector(".main").insertAdjacentHTML(
    "afterbegin",
     `<div class="display-card">
      <img class="display-image" src="${memes.image}" />
       <h2 class="display-category">${memes.name} </h2>
      <h3 class="display-title">${memes.category} </h3>
       <button class="add text">Add text</button>
    </div>`
   );
  }
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("Add text")) {
    addToCart(event);
  }
}); 
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
displayItems(memes);
function filter(category){
const filtered = memes.filter((meme) => meme.category === category);
displayItems(filtered);
}
function showAll() {
  displayItems(memes);
}