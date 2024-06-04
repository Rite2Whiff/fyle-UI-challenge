const sliderContainer = document.querySelector(
  ".services__container__slider__slides"
);
const sliderCard = document.querySelectorAll(".slide");
const contentCard = document.querySelectorAll(
  ".about__container__2__row__card"
);
const imageContainer = document.querySelector(".about__container__2__row__img");
const sliderButton = document.querySelectorAll(
  ".services__container__slider__button"
);
const sliderImage = document.querySelectorAll(".slide__image");
const hoverContent = document.querySelectorAll(".slide__hover__content");

sliderCard.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    sliderCard.forEach((item) => {
      item.classList.remove("active");
    });
    card.classList.add("active");
    sliderImage[index].style.display = "none";
    hoverContent[index].style.display = "flex";
    hoverContent[index].style.flexDirection = "column";
    hoverContent[index].style.alignItems = "center";
    hoverContent[index].style.justifyContent = "center";
  });

  card.addEventListener("mouseleave", () => {
    sliderImage[index].style.display = "inline-block";
    hoverContent[index].style.display = "none";
  });
});

// slider

const updateCarousel = () => {
  sliderContainer.style.transform = `translateX(${-currentIndex * 300}px)`;

  sliderButton.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add("slider-button-active");
    } else {
      button.classList.remove("slider-button-active");
    }
  });
};

sliderButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

updateCarousel();

contentCard.forEach((item) => {
  item.addEventListener("click", () => {
    contentCard.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

contentCard.forEach((item) => {
  item.addEventListener("click", () => {
    const newImgSrc = item.getAttribute("data-image");
    imageContainer.setAttribute("src", newImgSrc);
  });
});
