
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".sub-nav-track ul");
  const leftBtn = document.querySelector(".slide-btn.left");
  const rightBtn = document.querySelector(".slide-btn.right");

  let scrollAmount = 0;
  const scrollStep = 200; // adjust how much it scrolls per click

  rightBtn.addEventListener("click", () => {
    scrollAmount -= scrollStep;
    if (Math.abs(scrollAmount) >= track.scrollWidth - track.parentElement.offsetWidth) {
      scrollAmount = -(track.scrollWidth - track.parentElement.offsetWidth);
    }
    track.style.transform = `translateX(${scrollAmount}px)`;
  });

  leftBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    if (scrollAmount > 0) scrollAmount = 0;
    track.style.transform = `translateX(${scrollAmount}px)`;
  });
});



