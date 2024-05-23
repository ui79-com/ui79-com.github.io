import '/@dannymoerkerke/material-webcomponents/src/material-app-bar.js';
import '/@dannymoerkerke/material-webcomponents/src/material-switch.js';
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
    <h2>Screen Wake Lock</h2>
    
    <p class="no-support">Your device may not fully support this feature</p>
    
    <p class="no-support-ios">
      This feature works in Safari on iOS but not (yet) for installed web apps.
    </p>
    
    <p>
      The Screen Wake Lock API enables web apps to prevent devices from dimming or locking the screen when the app needs 
      to keep running.
    </p>
    
    <h3>Demo</h3>
    <material-switch label="Prevent your screen from locking" id="wake-lock"></material-switch>
    
    <code-snippet lang="js">
const wakeLockSwitch = document.querySelector('#wake-lock');

let wakeLock = null;

const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');

    wakeLock.addEventListener('release', () => {
      console.log('Wake Lock was released');
    });
    console.log('Wake Lock is active');
  }
  catch(err) {
    console.error(\`$\{err.name\}, $\{err.message\}\`);
  }
};

const releaseWakeLock = () => {
  console.log('releasing wakeLock');

  wakeLock.release();
  wakeLock = null;
};

wakeLockSwitch.addEventListener('change', ({detail}) => {
  const {checked} = detail;

  checked ? requestWakeLock() : releaseWakeLock();
});      
    </code-snippet>
    <section class="documentation">
      <h3>Documentation</h3>
      <a href="https://web.dev/wakelock/" target="_blank" rel="noopener">
        Screen Wake Lock API on web.dev
      </a>
      
      <h3>Browser support</h3>
      <p>
        The Screen Wake Lock API is available from Chrome 84. 
      </p>
    </section>
  </div>
</div>
`;
