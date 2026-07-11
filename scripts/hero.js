(function () {
  const video = document.querySelector("#hero video");

  const speechTimes = [
    { light: 1.5, dark: 1.25, className: "blocks" },
    { light: 4.25, dark: 4.15, className: "cereal" },
    { light: 7.2, dark: 7.0, className: "crayon" },
    { light: 10.2, dark: 10.3, className: "apple" },
  ];

  var isDarkMode = false;
  var speechIndex = 0;

  video.addEventListener("timeupdate", () => {
    let nextSpeechTime =
      speechTimes[speechIndex][isDarkMode ? "dark" : "light"];

    if (video.currentTime >= nextSpeechTime) {
      speak(speechIndex);

      speechIndex += 1;
      if (speechIndex >= speechTimes.length) {
        speechIndex = 0;
      }
    }
  });

  const speak = function (index) {
    const className = speechTimes[index].speech;
    video.className = "";
    requestAnimationFrame(function () {
      video.className = `speech-bubble speech-bubble-${className}`;
    });
  };
})();
