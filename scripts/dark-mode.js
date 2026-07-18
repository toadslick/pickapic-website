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
    let oldText = !isDark ? "dark" : "light";
    let newText = isDark ? "dark" : "light";

    document.body.className = `mode-set mode-set-${newText}`;

    // Replace all video sources
    document.querySelectorAll("source").forEach((source) => {
      let oldUrl = source.getAttribute("src");
      let newUrl = oldUrl.replace(`-${oldText}`, `-${newText}`);
      source.setAttribute("src", newUrl);
      source.parentElement.load();
    });
  };

  checkbox.addEventListener("change", (event) => {
    toggleMode(event.target.checked);
    setStoredValue(event.target.checked);
  });

  toggleMode(isDark);
})();

// Add target="_blank" to links in given sections that were written in Markdown.
(function () {
  const externalLinkSections = ["#why"];

  externalLinkSections.forEach((selector) => {
    let section = document.querySelector(selector);
    section.querySelectorAll("a").forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  });
})();
