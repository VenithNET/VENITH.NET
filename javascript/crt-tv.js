// Create Music Player
function createYouTubePlayer() {
  // Default Playlist
  const defaultSrc =
    "https://www.youtube-nocookie.com/embed/videoseries?list=PLbiQ_Jf57CBWyu7z1UbCkWc79UNV4xitp&loop=1&enablejsapi=1";
  // Create iframe element
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", defaultSrc);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("id", "crtVideo");
  iframe.setAttribute("allow", "autoplay");

  // Set default volume
  iframe.onload = function () {
    this.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "setVolume",
        args: [50],
      }),
      "*"
    );
  };
  // CRT buttons
  function setVideoSource(source) {
    document.getElementById("crtVideo").src = source;
  }

  // CRT Upload button
  document.getElementById("crtUpload").addEventListener("click", function () {
    var url = document.getElementById("crtURL").value;
    iframe.setAttribute("src", url);
  });

  // CRT Reset button
  document.getElementById("crtReset").addEventListener("click", function () {
    iframe.setAttribute("src", defaultSrc);
  });

  // Where it appears
  const container = document.querySelector(".crt-screen-div div");
  container.appendChild(iframe);
  return iframe;
}

createYouTubePlayer();
