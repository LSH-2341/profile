// Project media hover video
document.querySelectorAll(".media-hover").forEach((media) => {
  const video = media.querySelector("video");

  if (!video) return;

  media.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  media.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  media.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
});


// Floating profile card follow effect
const profileCard = document.querySelector(".profile-card");

if (profileCard) {
  let lastScrollY = window.scrollY;
  let targetOffset = 0;
  let currentOffset = 0;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  window.addEventListener("scroll", () => {
    if (window.innerWidth < 1200) return;

    const scrollDelta = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    targetOffset = clamp(scrollDelta * 0.5, -25, 25);
  });

  function animateProfileCard() {
    if (window.innerWidth >= 1200) {
      currentOffset += (targetOffset - currentOffset) * 0.08;
      targetOffset *= 0.92;

      profileCard.style.setProperty("--profile-offset", `${currentOffset}px`);
    } else {
      profileCard.style.setProperty("--profile-offset", "0px");
    }

    requestAnimationFrame(animateProfileCard);
  }

  animateProfileCard();
}
