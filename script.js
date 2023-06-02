const container = document.querySelector(".grid-container");
let chooseNumberCells = Number(document.querySelector(".build-grid").value);
const colorBtns = document.querySelectorAll(".btn");

for (i = 0; i < 256; i++) {
  let initialCell = document.createElement("div");
  initialCell.className = "initialcell";
  initialCell.setAttribute("id", "initial-cell1");
  initialCell.style.width = "34px";
  initialCell.style.height = "35px";
  initialCell.style.border = "1px solid black";
  initialCell.style.flexGrow = "1";
  container.appendChild(initialCell);
}

document.querySelector(".select-btn").addEventListener("click", function () {
  chooseNumberCells = Number(document.querySelector(".build-grid").value);
  let cellWidth = 560 / chooseNumberCells - 1;
  let cellHeight = 560 / chooseNumberCells;
  container.innerHTML = "";
  colorBtns.forEach((btn) => btn.classList.remove("add-border"));
  for (i = 0; i < chooseNumberCells * chooseNumberCells; i++) {
    let newCell = document.createElement("div");
    newCell.className = "initialcell";
    newCell.setAttribute("id", "new-cell");
    newCell.style.width = cellWidth + "px";
    newCell.style.height = cellHeight + "px";
    newCell.style.border = "1px solid black";
    newCell.style.flexGrow = "1";
    newCell.style.flexShrink = "1";
    container.appendChild(newCell);
  }
});

let allCells = container.childNodes;

document.querySelector(".blue").addEventListener("click", function () {
  allCells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#99b3ff";
    })
  );
});

document.querySelector(".purple").addEventListener("click", function () {
  allCells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#b199ff";
    })
  );
});

document.querySelector(".pink").addEventListener("click", function () {
  allCells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#ff99ff";
    })
  );
});

document.querySelector(".eraser").addEventListener("click", function () {
  allCells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "transparent";
    })
  );
});
const randomColorsArray = [
  "#88f7ff",
  "#a387ff",
  "#ff57ff",
  "#DDCAFF",
  "#FBCAFF",
  "#CAF8FF",
  "#2EBED5",
  "#AF49FF",
];

function getColor() {
  const randomColor = Math.floor(Math.random() * randomColorsArray.length);
  const selectedColor = randomColorsArray[randomColor];
  return selectedColor;
}

document.querySelector(".random").addEventListener("click", function () {
  allCells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = getColor();
    })
  );
});
