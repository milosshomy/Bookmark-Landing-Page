/* Variables */

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const slideContainer = document.getElementById("slide-container");
const slideContainerWidth = slideContainer.getBoundingClientRect().width;
const indicators = document.querySelectorAll(".indicator");
const lists = document.querySelectorAll("#faq li");
const errorIcon = document.getElementById("error-icon");
const successIcon = document.getElementById("success-icon");
const errorContainer = document.getElementById("error-container");
const submitBtn = document.getElementById("submit-btn");

/* Open menu */

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close");
  nav.classList.toggle("open");
  logo.classList.toggle("mobile");
});

/* Slider */

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    slideContainer.style.translate = "-" + slideContainerWidth * index + "px";
    slideContainer.style.transition = "200ms ease-in-out";
  });
});

/* Change style of active slide */

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    indicators.forEach((btn) => {
      btn.classList.remove("active");
    });
    indicator.classList.add("active");
  });
});

/* Accordion */

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      const hiddenElement =
        e.target.parentElement.parentElement.lastElementChild;
      const arrowIcon = e.target.nextElementSibling.firstElementChild;
      hiddenElement.classList.toggle("add");
      arrowIcon.classList.toggle("rotate");
    } else if (e.target.tagName === "DIV") {
      const hiddenElement = e.target.parentElement.lastElementChild;
      const arrowIcon = e.target.lastElementChild.firstElementChild;
      hiddenElement.classList.toggle("add");
      arrowIcon.classList.toggle("rotate");
    } else if (e.target.tagName === "IMG") {
      const hiddenElement =
        e.target.parentElement.parentElement.parentElement.lastElementChild;
      const arrowIcon = e.target;
      hiddenElement.classList.toggle("add");
      arrowIcon.classList.toggle("rotate");
    } else if (e.target.tagName === "LI") {
      const hiddenElement = e.target.lastElementChild;
      const arrowIcon =
        e.target.firstElementChild.lastElementChild.firstElementChild;
      hiddenElement.classList.toggle("add");
      arrowIcon.classList.toggle("rotate");
    }
  });
});

/* Email validation */

submitBtn.addEventListener("click", () => {
  const emailInputValue = document.getElementById("email-input").value;
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (pattern.test(emailInputValue)) {
    successIcon.classList.add("valid");
    errorContainer.classList.remove("invalid");
    errorIcon.classList.remove("invalid");
  } else {
    successIcon.classList.remove("valid");
    errorContainer.classList.add("invalid");
    errorIcon.classList.add("invalid");
  }
});
