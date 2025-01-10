"use strict";
const skillBtnsContainer = document.querySelector(".skill-cards");
const skillDescriptionContainer = document.querySelector(".skill-description");
const skillBtns = document.querySelectorAll(".skill");
const skillDescription = document.querySelectorAll(".description");

skillBtnsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".skill");
  skillBtns.forEach((i) => i.classList.remove("active-btns"));
  clicked.classList.add("active-btns");
  const skill = document.querySelector(`.description-${clicked.dataset.tab}`);
  skillDescription.forEach((i) => i.classList.remove("active"));
  skill.classList.add("active");
});
