const getTime = () => {
  const time = document.getElementById("time");
  const span = document.getElementsByTagName("span");
  time.innerHTML = `${new Date().toLocaleString()}`;

  const changecolor = () => {
    const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let renk = "#";
    for (let i = 0; i < 6; i++) {
      renk += color[Math.floor(Math.random() * color.length)];
    }
    return renk;
  };

  time.style = `background-color:${changecolor()}; font-size: 1.2rem; color:white; display:inline-block; width:200px; padding:10px;  `;
  span[0].style="font-size:5rem"
  span[0].style.color= `${changecolor()}`
};

setInterval(getTime, 1000);

const under = document.querySelector("#underline")
under.style.textDecoration = "underline"

document.querySelector(".done").style.backgroundColor = "#5BBC7A";
document.querySelector(".ongoing").style.backgroundColor = "#F7DC5C";
document
  .querySelectorAll(".coming")
  .forEach((item) => (item.style.backgroundColor = "#EB695B"));
document.querySelectorAll("li").forEach(item=> item.style.padding="8px" )
document.querySelectorAll("li").forEach((item) => (item.style.margin = "5px"));
// const color = ["a", "b", "c", "d", "e", "f"];
// let renk = "#";
// for (let i = 0; i < color.length; i++) {
//   renk += color[Math.floor(Math.random() * color.length)];
// }
// console.log(renk);
