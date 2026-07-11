(function () {
  const video = document.querySelector("#hero video");
  const bubble = document.querySelector("#speechBubble");

  const speechTimes = [
    { light: 1.5, dark: 1.25, speech: "blocks", x: 0, y: 0 },
    { light: 4.25, dark: 4.15, speech: "cereal", x: 0, y: 0 },
    { light: 7.2, dark: 7.0, speech: "crayon", x: 0, y: 0 },
    { light: 10.2, dark: 10.3, speech: "apple", x: 0, y: 0 },
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
    const speech = speechTimes[index].speech;
    bubble.className = "";
    requestAnimationFrame(function () {
      bubble.className = speech;
    });
  };
})();
