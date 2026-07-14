// Pause videos until they are fully visible.
// Give their containing div a class of `video-pause` or `video-play` so that styling can be used to dim videos while paused.

(function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");
        const divs = Array.from(entry.target.children);

        // Don't pause video if it is larger than the viewport.
        const videoFillsViewport =
          entry.target.clientHeight > window.innerHeight * 0.8;

        if (entry.intersectionRatio >= 0.6 || videoFillsViewport) {
          divs.forEach((div) => {
            div.className = "video-play";
          });
          video.play();
        } else {
          divs.forEach((div) => {
            if (div.className == "video-play") {
              div.className = "video-pause video-play-ended";
            } else {
              div.className = "video-pause";
            }
          });
          video.pause();
        }
      });
    },
    {
      threshold: [0, 0.6],
      delay: 200,
    },
  );

  const sections = document.querySelectorAll(".arrow");
  sections.forEach((section) => {
    observer.observe(section);

    // Remove video tag's `autoplay` attribute otherwise their appearance becomes janky when paused.
    section.removeAttribute("autoplay");
  });
})();
