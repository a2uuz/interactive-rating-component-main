const rating = document.querySelector("main");
const thanks = document.querySelector("aside");
const submit = document.querySelector("#submitBtn");
const result = document.querySelector("#result");
const ratingBtns = document.querySelectorAll(".item");

submit.addEventListener("click", () => {
  thanks.style.display = "block";
  rating.style.display = "none";
});

ratingBtns.forEach((rate) => {
  rate.addEventListener("click", () => {
    result.textContent = `You selected ${rate.textContent} out of 5`;
  });
});
