const circles = document.querySelectorAll(".circle");

function animateCircles() {
  const totalCircles = circles.length;

  function triggerExhale(circle, delay, text) {
    setTimeout(() => {
      circle.style.animation = "exhaleAnim 1s both";
      circle.textContent = text; 
    }, delay);
  }

  for (let i = totalCircles - 1; i >= 0; i--) {
    const circle = circles[i];
    const delay = (totalCircles - i) * 2500;

    let text = "";

    if (i === 2) {
      setTimeout(() => {
        circle.style.animation = "blinkAnim 2s both";
        text = "HOLD 2 seconds";
        setTimeout(() => {
          triggerExhale(circle, 0, text);
        }, 2000);
      }, delay);
    } else if (i === 1) {
      text = "EXHALE 3 seconds";
      const exhaleDelay = delay + 1000; 
      triggerExhale(circle, exhaleDelay, text);
    } else {
      text = "INHALE 3 seconds";
      triggerExhale(circle, delay, text);
    }
  }
}

window.onload = () => {
  animateCircles();
};
