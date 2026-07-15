(function () {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const checkbox = document.querySelector("input#dark-mode");
  checkbox.checked = isDark;

  const toggleMode = (isDark) => {
    document.body.className = `mode-set mode-set-${isDark ? "dark" : "light"}`;
  };

  checkbox.addEventListener("change", (event) => {
    toggleMode(event.target.checked);
  });

  toggleMode(isDark);
})();
