document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  //   This will get the random color and change it to hexadecimal
  function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
  }
  //   Function to click the button and call the randomcolor function
  changeColorBtn.addEventListener("click", function () {
    getRandomColor();
  });
});
