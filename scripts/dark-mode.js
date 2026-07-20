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

    // Replace all images
    document.querySelectorAll("img").forEach((image) => {
      let oldAttr = image.getAttribute("srcset");
      if (oldAttr) {
        let newAttr = oldAttr.replace(
          `.${oldText[0]}.jpg`,
          `.${newText[0]}.jpg`,
        );
        image.setAttribute("srcset", newAttr);
      }
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
    if (!section) {
      return;
    }

    section.querySelectorAll("a").forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  });
})();

// Highlight link in side nav
(function () {
  const visibleIDs = new Set();

  const observer = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        let id = `#${entry.target.id}`;
        if (entry.intersectionRatio > 0) {
          visibleIDs.add(id);
        } else {
          visibleIDs.delete(id);
        }
      }

      for (const link of document.querySelectorAll("nav li a")) {
        if (visibleIDs.has(link.getAttribute("href"))) {
          link.parentElement.setAttribute("aria-current", "location");
        } else {
          link.parentElement.removeAttribute("aria-current");
        }
      }

      console.log(visibleIDs);
    },
    {
      threshold: [0, 0.0000001],
      delay: 300,
    },
  );

  const headings = document.querySelectorAll("hgroup[id]");
  headings.forEach((h) => {
    observer.observe(h);
  });
})();
