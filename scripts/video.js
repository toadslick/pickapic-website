// Pause videos until they are fully visible.
// Give their containing div a class of `video-pause` or `video-play` so that styling can be used to dim videos while paused.

(function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");

        // Don't pause video if it is larger than the viewport.
        const videoFillsViewport =
          entry.target.clientHeight > window.innerHeight * 0.8;

        if (entry.intersectionRatio > 0.9 || videoFillsViewport) {
          entry.target.className = "video-play";
          video.play();
        } else {
          video.pause();
          entry.target.className = "video-pause";
        }
      });
    },
    {
      threshold: [0, 0.9],
      delay: 200,
    },
  );

  const sections = document.querySelectorAll(".arrow > div:first-child");
  sections.forEach((section) => {
    observer.observe(section);

    // Remove video tag's `autoplay` attribute otherwise their appearance becomes janky when paused.
    section.removeAttribute("autoplay");
  });
})();
