document.addEventListener("DOMContentLoaded", () => {
  const numberBlock = document.querySelector(".header_number-block");
  const headerContent = document.querySelector(".header");
  const mainContent = document.querySelector(".main");
  const footerContent = document.querySelector(".footer");

  let count = 1;

  headerContent.style.display = "none";
  mainContent.style.display = "none";
  footerContent.style.display = "none";

  const counter = setInterval(() => {
    if (count === 100) {
      numberBlock.innerHTML = `<p class="aristide">Aristide</p>`;
      clearInterval(counter);
      showContent();
    } else {
      const digits = count.toString().padStart(3, "0");
      numberBlock.innerHTML = `
          <p class="header_number">${digits[0]}</p>
          <p class="header_number">${digits[1]}</p>
          <p class="header_number">${digits[2]}</p>
        `;
    }
    count++;
  }, 65);

  function showContent() {
    headerContent.style.display = "block";
    mainContent.style.display = "block";
    footerContent.style.display = "block";

    const aristideText = document.querySelector(".aristide");
    aristideText.innerHTML = [...aristideText.textContent]
      .map(
        (letter, index) =>
          `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`
      )
      .join("");
  }
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".main_social_img");
const imageColors = [
  "#008000",
  "#ffffff",
  "#ffffff",
  "#FF33A1",
  "#00008B",
  "#00008B",
  "#ffffff",
  "#00008B",
  "#FF3333",
  "#33FF8C",
  "#FFC133",
  "#ffffff",
  "#FF33D4",
  "#A9A9A9",
  "#FF3357",
  "#A9A9A9",
  "#33A1FF",
  "#ffffff",
  "#000000",
  "#000000",
  "#33FFC1",
  "#C1FF33",
  "#5733C1",
  "#ffffff",
  "#000000",
  "#8C33A1",
  "#000000",
  "#ffffff",
  "#33C1FF",
  "#A9A9A9",
];

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.backgroundColor = hexToRgba(imageColors[index], 0.8);
    modal.classList.add("show");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
});

function hexToRgba(hex, alpha) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const scrollContainer = document.querySelector(".main_social");

document.addEventListener("wheel", (event) => {
  event.preventDefault();

  scrollContainer.scrollBy({
    left: event.deltaY,
    behavior: "auto",
  });
});

const indicators = document.querySelectorAll(".header_single");
const imagews = document.querySelectorAll(".main_social_img");
const container = document.querySelector(".main_social");

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    const image = imagews[index];
    const containerWidth = container.offsetWidth;
    const imageLeft = image.offsetLeft;
    const imageWidth = image.offsetWidth;

    const scrollPosition = imageLeft - (containerWidth - imageWidth) / 2;
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    imagews.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
  });
});
