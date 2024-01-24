document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".home__cover-video");

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 10;
    video.ontimeupdate = () => {
      if (video.currentTime >= 10) {
        video.currentTime = 0;
      }
    };
  });
});
