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


// Floating profile card - delayed follow
const profileCard = document.querySelector(".profile-card");

if (profileCard) {
  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;

  function updateProfileCardPosition() {
    if (window.innerWidth >= 1200) {
      targetScroll = window.scrollY;

      // 숫자가 작을수록 더 늦게 따라옴
      currentScroll += (targetScroll - currentScroll) * 0.06;

      const cardHeight = profileCard.offsetHeight;
      const centerY = window.innerHeight / 2;
      const topPosition = currentScroll + centerY - cardHeight / 2;

      profileCard.style.top = `${topPosition}px`;
    } else {
      profileCard.style.top = "";
    }

    requestAnimationFrame(updateProfileCardPosition);
  }

  updateProfileCardPosition();
}
