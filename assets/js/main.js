(function () {
  var root = document.documentElement;

  // Language toggle. The page opens in English; this button switches to Chinese and back.
  try { localStorage.removeItem("lang"); } catch (e) {} // clear the choice older versions remembered
  var toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "zh" ? "en" : "zh";
      root.setAttribute("data-lang", next);
      root.lang = next === "zh" ? "zh-CN" : "en";
    });
  }

  // Video: load the YouTube player only when the visitor presses play.
  var play = document.getElementById("play-video");
  var frame = document.getElementById("video-frame");
  if (play && frame) {
    play.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/azUuq09ZGRs?autoplay=1&rel=0";
      iframe.title = "Chinese Dreamcore: Tangping, Mark Fisher, and Hauntology in the Anthropocene (Acid Horizon)";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      frame.innerHTML = "";
      frame.appendChild(iframe);
      iframe.focus();
    });
  }
})();
