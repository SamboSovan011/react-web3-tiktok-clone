function onScreenPause(e) {

  const video = e.target;
  const videoView = video.closest(".video-view");

  if(!videoView) { return; }

  const videoToPlay = videoView.querySelector(".video-to-play");
  const transparentBgForPlayButton = videoView.querySelector(".transparent-bg-for-play-button");
  const playButton = videoView.querySelector(".play-button");

  if(!videoToPlay || !transparentBgForPlayButton) { return; }

  videoToPlay.pause();
  playButton.style.display = "block";
  transparentBgForPlayButton.style.display = "block";

}

function onPlayBtnClick(e) {

  const playButton = e.target;
  const videoView = playButton.closest(".video-view");

  if(!videoView) { return; }

  const videoToPlay = videoView.querySelector(".video-to-play");
  const transparentBgForPlayButton = videoView.querySelector(".transparent-bg-for-play-button");

  if(!videoToPlay || !transparentBgForPlayButton) { return; }

  videoToPlay.play();
  playButton.style.display = "none";
  transparentBgForPlayButton.style.display = "none";

}

function Feed() {
  return (
    <div className='feed'>
      
      <div className="mobile-view">

        <div className="video-view">
          <div 
            className="transparent-bg-for-play-button"
            style={{ 
              position: "fixed", 
              backgroundColor: "#000000b6", 
              zIndex: 1, 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)", 
              width:"1200px", 
              height: "1200px" 
            }} 
          ></div>

          <video style={{ position: "fixed", zIndex: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} width="1200" height="1200">
            <source src="/simple-video.mp4" type="video/mp4"/>
          </video>

          <img 
            className="play-button"
            style={{ 
              position: "fixed", 
              zIndex: 4, 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)" 
            }}
            src="/play-icon.svg" 
            width="80px" 
            height="80px" 
            onClick={onPlayBtnClick}
          />

          <video className="video-to-play" onClick={onScreenPause}>
            <source src="/simple-video.mp4" type="video/mp4"/>
          </video>
        </div>

        <div className='footer'>
          <div style={{ color: "white" }}>
            <img src="/home-icon.svg" width="20px" height="20px" />
          </div>
          <div style={{ color: "white" }}>
            <img src="/safari-icon.svg" width="20px" height="20px" />
          </div>
          <div style={{ color: "white" }}>
            <img src="/tiktok-upload-video-icon.svg" width="40px" height="40px" />
          </div>
          <div style={{ color: "white" }}>
            <img src="/message-minus-icon.svg" width="20px" height="20px" />
          </div>
          <div style={{ color: "white" }}>
            <img src="/profile-icon.svg" width="20px" height="20px" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Feed
