import '/@dannymoerkerke/material-webcomponents/src/material-app-bar.js';
import '/@dannymoerkerke/material-webcomponents/src/material-button.js';
import '../elements/code-snippet.js';

export const template = `
<div class="view next-screen">
  <material-app-bar>
    <a class="back" slot="left-content">
      <i class="material-icons">keyboard_backspace</i>
    </a>
    <a slot="right-content">
      <i class="material-icons">wifi_off</i>
    </a>
  </material-app-bar>
  
  <div class="content">
    <h2>Capture handle</h2>
    
    <p class="no-support-screencapture">Screen capturing is not (yet) supported on your device</p>
    <p class="no-support">Capture Handle is not (yet) supported on your device</p>
  
    <p>
      Capture Handle enables screen capturing web apps to reliably identify the captured web app if it has opted-in, 
      enabling better collaboration like remote control for example. A great use-case for this is a screen capture web 
      app that can remotely control a presentation inside the web app that is captured. 
    </p>
    
    <p>
      The user of the capturing web app then doesn't need to switch between the capturing and captured app anymore to 
      control that presentation.
    </p>
    
    <p>
      The captured app can opt-in through a call to <code>navigator.mediaDevices.setCaptureHandleConfig(config)</code>.
      The <code>config</code> parameter has a <code>handle</code> property containing a string that uniquely identifies 
      the captured app.
    </p>
    
    <p>
      The capturing app retrieves the handle by calling <code>getCaptureHandle</code> on the <code>VideoTrack</code> of 
       the screen capturing <code>MediaStream</code>. It then uses that handle in messages it sends to the captured app 
       through <code>BroadcastChannel</code>. These messages instruct the captured app to go to the previous or next 
       image in the gallery.
    </p>
    
    <h3>Demo</h3>
    <p>
      Click the button "Open page" below to open a page containing an image gallery. Then capture the screen of that 
      page by clicking the button "Share screen". After that, you can go back and forth between the images in the 
      gallery from this page by clicking the "Previous" and "Next" buttons. No need to switch between this app and the
      captured app anymore!
    </p>
    
    <div id="buttons">
      <material-button label="Open page" id="open-page-button" raised></material-button>
      <material-button label="Share screen" id="share-screen-button" raised disabled></material-button>
      <material-button label="Stop share" id="stop-share-screen-button" raised hidden></material-button>
      <material-button label="Previous" id="previous-button" raised disabled></material-button>
      <material-button label="Next" id="next-button" raised disabled></material-button>
    </div>
    
    <video id="preview" autoplay playsinline></video>
    
    
    <code-snippet lang="js">
// capturing side
let controller;

// CaptureController keeps the focus on the capturing web app
if ('CaptureController' in window && 'setFocusBehavior' in CaptureController.prototype) {
  controller = new CaptureController();
  controller.setFocusBehavior('no-focus-change');
}

const stream = await navigator.mediaDevices.getDisplayMedia({
  video: {
    displaySurface: 'browser', 
  },
  audio: true,
  surfaceSwitching: 'exclude', 
  selfBrowserSurface: 'exclude', 
  preferCurrentTab: false, 
  systemAudio: 'include', 
  monitorTypeSurfaces: "exclude", 
  ...(controller && {controller})
});

const [videoTrack] = stream.getVideoTracks();
let captureHandle = videoTrack.getCaptureHandle();
if (captureHandle) {
  previousButton.disabled = false;
  nextButton.disabled = false;
}

videoTrack.addEventListener('capturehandlechange', (e) => {
  captureHandle = e.target.getCaptureHandle();
});

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

// captured side
const config = {
  handle: crypto.randomUUID(),
  exposeOrigin: true,
  permittedOrigins: ['*'],
};
navigator.mediaDevices.setCaptureHandleConfig(config);

const gallery = document.querySelector('image-gallery');
const broadcastChannel = new BroadcastChannel("capture-handle");

broadcastChannel.addEventListener('message', ({data}) => {
  const {handle, command} = data;

  // only accept commands if the handle matches
  if(handle === config.handle) {
    switch(command) {
      case 'previous':
        gallery.previous();
        break;
        
      case 'next':
        gallery.next();
        break;
    }
  }
});
    </code-snippet>

    <section class="documentation">
      <h3>Documentation</h3>
      <a href="https://developer.chrome.com/docs/web-platform/capture-handle" target="_blank" rel="noopener">
        Capture handle on Chrome Developers.
      </a>
      
      <h3>Browser support</h3>
      <p>
        Capture Handle is supported in Chrome and Edge 102+.
      </p>
    </section>
  </div>
</div>
`;
