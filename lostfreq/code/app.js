function updateDateTime() {
    var currentDate = new Date();
    var options = {
      month: 'numeric', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true, timeZoneName: 'short'
    };
    var formattedDate = currentDate.toLocaleString('en-US', options);
    document.getElementById('datetime').textContent = formattedDate;
  }
  

  setInterval(updateDateTime, 1000);
  

  updateDateTime();


var backgroundMusic = document.getElementById('backgroundMusic');
var playButton = document.getElementById('playButton');
var playImage = document.getElementById('playImage');
var pauseImage = document.getElementById('pauseImage');


document.addEventListener('DOMContentLoaded', function() {
  backgroundMusic.play();
  togglePlayPauseButton(true);
});


playButton.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
  togglePlayPauseButton(!backgroundMusic.paused);
});


function togglePlayPauseButton(isPlaying) {
  playImage.style.display = isPlaying ? 'none' : 'block';
  pauseImage.style.display = isPlaying ? 'block' : 'none';
}
