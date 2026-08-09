// Spawn the speech bubbles that appear in over the hero header.

(function () {
  const frame = document.querySelector("#hero .video-frame");
  const video = document.querySelector("#hero video");

  const frameInitialClassName = frame.className;

  const speechTimes = [
    { light: 3.2, dark: 2.95, className: "rice" },
    { light: 6.3, dark: 6.1, className: "crayon" },
    { light: 9.1, dark: 9.6, className: "apple" },
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
    const speechClass = speechTimes[index].className;
    requestAnimationFrame(() => {
      frame.className = frameInitialClassName;
      requestAnimationFrame(() => {
        frame.className = `${frameInitialClassName} speech-bubble speech-bubble-${speechClass}`;
      });
    });
  };
})();
