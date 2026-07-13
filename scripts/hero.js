// Spawn the speech bubbles that appear in over the hero header.

(function () {
  const frame = document.querySelector("#hero .video-frame");
  const video = document.querySelector("#hero video");

  const frameInitialClassName = frame.className;

  const speechTimes = [
    { light: 1.5, dark: 1.25, className: "blocks" },
    { light: 4.25, dark: 4.15, className: "cereal" },
    { light: 7.2, dark: 7.0, className: "crayon" },
    { light: 10.2, dark: 10.3, className: "apple" },
  ];

  var isDarkMode = false;
  var speechIndex = 0;
  var previousTime = 0;

  video.addEventListener("timeupdate", () => {
    if (previousTime > video.currentTime) {
      speechIndex = 0;
    }
    previousTime = video.currentTime;

    if (speechIndex < speechTimes.length) {
      let nextSpeechTime =
        speechTimes[speechIndex][isDarkMode ? "dark" : "light"];

      if (video.currentTime >= nextSpeechTime) {
        speak(speechIndex);
        speechIndex += 1;
      }
    }
  });

  const speak = function (index) {
    const className = speechTimes[index].className;
    frame.className = frameInitialClassName;
    requestAnimationFrame(() => {
      frame.className = `${frameInitialClassName} speech-bubble speech-bubble-${className}`;
    });
  };
})();
