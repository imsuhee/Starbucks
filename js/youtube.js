// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "EJF919p_hb0", // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: 1, // 자동 재생 유무
      loop: 1, // 반복 재생 유무
      playlist: "EJF919p_hb0", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      },
    },
  });
}
