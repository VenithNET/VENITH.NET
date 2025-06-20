// Create Music Player
function createYouTubePlayer() {
  const DEFAULT_SRC =
    "https://www.youtube-nocookie.com/embed/videoseries?list=PLbiQ_Jf57CBUAwG62pOMh9lXz9o-geRgr&loop=1&enablejsapi=1";
  const IFRAME = document.createElement("iframe");
  IFRAME.setAttribute("src", DEFAULT_SRC);
  IFRAME.setAttribute("frameborder", "0");
  IFRAME.setAttribute("allowfullscreen", "");
  IFRAME.setAttribute("id", "musicVideoPlayer");
  IFRAME.setAttribute("allow", "autoplay");
  // Change Music
  const VIDEO_PREFIX = "https://www.youtube-nocookie.com/embed/";
  const LINKS = document.querySelectorAll(".video-link");
  LINKS.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const VIDEO_ID = link.getAttribute("data-video-id");
      const VIDEO_SRC = VIDEO_PREFIX + VIDEO_ID + "?autoplay=1";
      IFRAME.setAttribute("src", VIDEO_SRC);
      // Pause Nav Music
      document.getElementById("navMusic").pause();
      // Nav Music Buttons
      const BUTTON_PLAY = document.getElementById("navMusicPlay");
      const BUTTON_PAUSE = document.getElementById("navMusicPause");
      BUTTON_PLAY.style.backgroundColor = "#3a55cb";
      BUTTON_PAUSE.style.backgroundColor = "#3257fa";
    });
  });
  // Set default volume
  IFRAME.onload = function () {
    this.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "setVolume",
        args: [50],
      }),
      "*"
    );
  };
  // Where it appears
  const CONTAINER = document.querySelector(".music-video div");
  CONTAINER.appendChild(IFRAME);
  return IFRAME;
}

createYouTubePlayer();
