(function () {
  let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const storageKey = "isDark";
  const storageTrue = "true";
  const storageFalse = "false";

  const getStoredValue = () => {
    const value = localStorage.getItem(storageKey);
    if (value == null) {
      return isDark;
    } else {
      return value == storageTrue;
    }
  };

  const setStoredValue = (value) => {
    localStorage.setItem(storageKey, value ? storageTrue : storageFalse);
  };

  isDark = getStoredValue();

  const checkbox = document.querySelector("input#dark-mode");
  checkbox.checked = isDark;

  const toggleMode = (isDark) => {
    document.body.className = `mode-set mode-set-${isDark ? "dark" : "light"}`;
  };

  checkbox.addEventListener("change", (event) => {
    toggleMode(event.target.checked);
    setStoredValue(event.target.checked);
  });

  toggleMode(isDark);
})();
