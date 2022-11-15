const container = document.querySelector(".containerAnime");
for (var i = 0; i <= 150; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}
const animateBlocks = () => {
  anime({
    targets: ".block",
    translateX: function () {
      //左右分散
      return anime.random(200, 1300);
    },
    translateY: function () {
      //上下分散
      return anime.random(-100, 500);
    },
    scale: function () {
      //用來分散
      return anime.random(0, 5);
    },
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  });
};
animateBlocks();
