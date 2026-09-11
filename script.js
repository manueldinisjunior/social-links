const year = String(new Date().getFullYear());
document.querySelector("#year").textContent = year;
document.querySelector("#footer-year").textContent = year;

const stage = document.querySelector(".visual-stage");
const allowsMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (stage && allowsMotion) {
  stage.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 22;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
    stage.style.setProperty("--move-x", `${x}px`);
    stage.style.setProperty("--move-y", `${y}px`);
  });

  stage.addEventListener("pointerleave", () => {
    stage.style.setProperty("--move-x", "0px");
    stage.style.setProperty("--move-y", "0px");
  });
}
