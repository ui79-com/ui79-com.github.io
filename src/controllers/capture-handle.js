export const controller = async () => {
  const screenCaptureSupported = 'getDisplayMedia' in navigator.mediaDevices;
  const supported = 'getCaptureHandle' in MediaStreamTrack.prototype && 'setCaptureHandleConfig' in navigator.mediaDevices;

  if(!screenCaptureSupported) {
    document.querySelector('.no-support-screencapture').style.display = 'block';
  }

  if(!supported) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }

  const openPageButton = document.querySelector('#open-page-button');
  const shareScreenButton = document.querySelector('#share-screen-button');
  const stopShareScreenButton = document.querySelector('#stop-share-screen-button');
  const previousButton = document.querySelector('#previous-button');
  const nextButton = document.querySelector('#next-button');
  const preview = document.querySelector('#preview');

  openPageButton.disabled = !supported;

  let capturedPage;
  openPageButton.addEventListener('click', () => {
    capturedPage = window.open('/image-gallery', '_blank');

    capturedPage.addEventListener('load', () => {
      shareScreenButton.disabled = false;
      openPageButton.disabled = true;
    });
  });

  let stream;

  shareScreenButton.addEventListener('click', async () => {
    let controller;

    if ('CaptureController' in window && 'setFocusBehavior' in CaptureController.prototype) {
      controller = new CaptureController();
      controller.setFocusBehavior('no-focus-change');
    }

    stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: 'browser', // sharing entire screen is preselected
      },
      audio: true,
      surfaceSwitching: 'exclude', // option to switch tabs while sharing
      selfBrowserSurface: 'exclude', // exclude tab of screen recorder
      preferCurrentTab: false, // "true" will only offer the current tab for capturing
      systemAudio: 'include', // capture audio, default is 'include'
      monitorTypeSurfaces: "exclude", // offer option to share entire screen, default is 'include'
      ...(controller && {controller})
    });

    preview.srcObject = stream;
    shareScreenButton.hidden = true;
    stopShareScreenButton.hidden = false;

    const [videoTrack] = stream.getVideoTracks();
    let captureHandle = videoTrack.getCaptureHandle();
    if (captureHandle) {
      previousButton.disabled = false;
      nextButton.disabled = false;
    }

    videoTrack.addEventListener('capturehandlechange', (e) => {
      console.log('capturehandlechange');
      captureHandle = e.target.getCaptureHandle();
    });

    videoTrack.addEventListener('ended', onScreenShareStop);

    const broadcastChannel = new BroadcastChannel("capture-handle");

    previousButton.addEventListener('click', () => {
      broadcastChannel.postMessage({
        handle: captureHandle.handle,
        command: 'previous',
      });
    });

    nextButton.addEventListener('click', () => {
      broadcastChannel.postMessage({
        handle: captureHandle.handle,
        command: 'next',
      });
    });
  });

  const onScreenShareStop = () => {
    preview.srcObject = null;
    capturedPage.close();

    openPageButton.disabled = false;
    shareScreenButton.disabled = true;
    shareScreenButton.hidden = false;
    stopShareScreenButton.hidden = true;
    previousButton.disabled = true;
    nextButton.disabled = true;
  };

  stopShareScreenButton.addEventListener('click', () => {
    stream.getTracks().forEach(track => track.stop());

    onScreenShareStop();
  });
}
