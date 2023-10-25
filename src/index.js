function skipToVideoEnd() {
  var video = document.querySelector('video');
  var videoAdContainer = document.querySelector('.ytp-ad-player-overlay');
  if (videoAdContainer && video) {                   
    video.currentTime = video.duration;  
}        
skipToVideoEnd();
