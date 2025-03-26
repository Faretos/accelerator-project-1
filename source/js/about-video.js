document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.about__play-video-button');
  const videoWrapper = document.querySelector('.about__video-wrapper');
  const videoIframe = document.getElementById('video-iframe');

  function setIframeSize() {
    const width = window.innerWidth;

    if (width < 768) {
      videoIframe.style.width = '320px';
      videoIframe.style.height = '170px';
    } else if (width >= 768 && width < 1366) {
      videoIframe.style.width = '270px';
      videoIframe.style.height = '170px';
    } else {
      videoIframe.style.width = '360px';
      videoIframe.style.height = '230px';
    }
  }

  setIframeSize();

  window.addEventListener('resize', setIframeSize);

  playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    videoWrapper.style.zIndex = '-1';
    videoIframe.style.display = 'block';
  });
});

