document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
  }
  changeColorBtn.addEventListener("click", function () {
    getRandomColor();
  });
});
