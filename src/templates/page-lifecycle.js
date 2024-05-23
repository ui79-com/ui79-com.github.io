import '/@dannymoerkerke/material-webcomponents/src/material-app-bar.js';

const supported = 'wasDiscarded' in document;

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
    <h2>Page lifecycle</h2>
    
    ${!supported ? '<p class="no-support">Your device may not fully support this feature</p>' : ''}
    
    <div class="log"></div>
  
  </div>
</div>
`;
