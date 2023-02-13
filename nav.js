const bars = document.querySelector("#bars");
const nav = document.querySelector("nav");
bars.addEventListener("click", () => {
  nav.classList.toggle("active");
});
