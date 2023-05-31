const container = document.querySelector(".grid-container");
for (i = 0; i < 256; i++) {
  let cell = document.createElement("div");
  cell.className = "cell";
  cell.style.width = "34px";
  cell.style.height = "35px";
  cell.style.border = "1px solid black";
  cell.style.flexGrow = "1";
  container.appendChild(cell);
}

//LETTING USER CHOOSE CELL SIZE
// let chooseNumberCells = Number(prompt("select number of cells per side"));
// if (!isNaN(chooseNumberCells)) {
//   let cellWidth = 560 / chooseNumberCells - 1;
//   let cellHeight = 560 / chooseNumberCells;
//   for (i = 0; i < chooseNumberCells ** 2; i++) {
//     let cell = document.createElement("div");
//     cell.className = "cell";
//     cell.style.width = cellWidth + "px";
//     cell.style.height = cellHeight + "px";
//     cell.style.border = "1px solid black";
//     cell.style.flexGrow = "1";
//     container.appendChild(cell);
//   }
// }
// //formula calculating current grid: height:560/16, width:(560/16)-1
//total cells =16x16

// for (i = 0; i < (chooseNumberCells ** 2); i++) {
//   let cell = document.createElement("div");
//   cell.style.width = cellWidth + "px";
//   cell.style.height = cellHeight + "px";
//   cell.style.border = "1px solid black";
//   cell.style.flexGrow = "1";
//   container.appendChild(cell);
// }

const allCells = document.querySelectorAll(".cell");
const colorBtns = document.querySelectorAll(".btn");
console.log(colorBtns);

for (let i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener("click", function () {
    colorBtns[i].classList.toggle("add-border");
  });
}
// colorBtns.addEventListener("click", function () {
//   colorBtns.forEach((button) => button.classList.toggle("add-border"));
// });

document.querySelector(".blue").addEventListener("click", function () {
  allCells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      e.target.classList.add("blue-color");
    })
  );
});
