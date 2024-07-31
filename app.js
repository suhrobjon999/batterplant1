const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const karzinka = document.querySelector('.karzinka');
const shop = document.querySelector('.shop')
const shopping = document.querySelector('.shopping')
const closee = document.querySelector('.closee')
const shops = document.querySelector('.shops')
const shops1 = document.querySelector('.shops1')
const shops2 = document.querySelector('.shops2')
const shops3 = document.querySelector('.shops3')
const shops4 = document.querySelector('.shops4')
const shops5 = document.querySelector('.shops5')
const shops6 = document.querySelector('.shops6')
const shops7 = document.querySelector('.shops7')
const shops8 = document.querySelector('.shops8')
const imgs1 = document.querySelector('.imgs1')
const imgss2 = document.querySelector('.imgss2')
const imgss3 = document.querySelector('.imgss3')
const imgss4 = document.querySelector('.imgss4')
const imgss5 = document.querySelector('.imgss5')
const imgss6 = document.querySelector('.imgss6')
const imgss7 = document.querySelector('.imgss7')
const imgss8 = document.querySelector('.imgss8')
const imgss9 = document.querySelector('.imgss9')
const num = document.querySelector('.num')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});
karzinka.addEventListener('click', () => {

});

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
karzinka.addEventListener("click", () => {
  shopping.style.transform = 'scale(1)'
});

closee.addEventListener("click", () => {
  shopping.style.transform = 'scale(0)'

});
let a = 0;
shops.addEventListener("click", () => {
  imgs1.style.display = 'block'
  a++;
  a = (a < 9) ? "" + a : 9;
  num.innerText = a;
});

shops1.addEventListener("click", () => {
  imgss2.style.display = 'block'
  a++;
  a = (a < 2) ? "" + a : 2;
  num.innerText = a;
});
shops2.addEventListener("click", () => {
  imgss3.style.display = 'block'
  a++;
  a = (a < 3) ? "" + a : 3;
  num.innerText = a;
});
shops3.addEventListener("click", () => {
  imgss4.style.display = 'block'
  a++;
  a = (a < 4) ? "" + a : 4;
  num.innerText = a;
});
shops4.addEventListener("click", () => {
  imgss5.style.display = 'block'
  a++;
  a = (a < 5) ? "" + a : 5;
  num.innerText = a;
});
shops5.addEventListener("click", () => {
  imgss6.style.display = 'block'
  a++;
  a = (a < 6) ? "" + a : 6;
  num.innerText = a;
});
shops6.addEventListener("click", () => {
  imgss7.style.display = 'block'
  a++;
  a = (a < 6) ? "" + a : 6;
  num.innerText = a;
});
shops7.addEventListener("click", () => {
  imgss8.style.display = 'block'
  a++;
  a = (a < 7) ? "" + a : 7;
  num.innerText = a;
});
shops8.addEventListener("click", () => {
  imgss9.style.display = 'block'
  a++;
  a = (a < 8) ? "" + a : 8;
  num.innerText = a;
});
(function () {
  const quantityContainer = document.querySelector(".quantity");
  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".plus");
  const inputBox = quantityContainer.querySelector(".input-box");

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= parseInt(inputBox.max);
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("minus")) {
      decreaseValue();
    } else if (event.target.classList.contains("plus")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;

    // Execute your code here based on the updated quantity value
    console.log("Quantity changed:", value);
  }
})();