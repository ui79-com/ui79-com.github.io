import '/@dannymoerkerke/material-webcomponents/src/material-app-bar.js';
import '../elements/speech-recognition.js';

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
    <h2>Speech recognition</h2>
    
    <p class="no-support">This feature is not (yet) supported on your device</p>
    
    <p class="no-support-ios">
      This feature works in Safari on iOS but not (yet) for installed web apps.
    </p>
    
    <p>
      Speech recognition is part of the Web Speech API and provides the ability to recognize voice context from an 
      audio input.
    </p>
  
    <speech-recognition></speech-recognition>
    
    <section class="documentation">
      <h3>Documentation</h3>
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition" target="_blank" rel="noopener">
        SpeechRecognition API on MDN
      </a>
      
      <h3>Browser support</h3>
      <p>
        <a href="https://caniuse.com/speech-recognition" target="_blank" rel="noopener">
          SpeechRecognition API on caniuse.com
        </a>
      </p>
    </section>
  </div>
</div>
`;
