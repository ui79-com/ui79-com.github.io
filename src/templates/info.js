import '/@dannymoerkerke/material-webcomponents/src/material-app-bar.js';
import '/@dannymoerkerke/material-webcomponents/src/material-textfield.js';
import '/@dannymoerkerke/material-webcomponents/src/material-button.js';

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
    <h2>What is a PWA?</h2>
  
    <p>
      A Progressive Web App (PWA) is basically just a website with some added features, which enable it to provide an 
      app-like user-experience.
    </p>
    
    <p>
      This means it can work practically just like a native iOS or Android app. It can be installed to the home screen 
      of your mobile device, work offline and receive push notifications, among other things. 
    </p>
    
    <p>
      A well-designed PWA is indistinguishable from a native app, but it also offers some strong added benefits:
    </p>
    
    <ul>
      <li>
        It's  just a website! You don't need to build separate apps anymore. If you have a website, you can easily 
        turn it into and iOS and Android app as well!
      </li>
      <li>
        A PWA is much smaller than a native app. Your users no longer need to install tens of megabytes of code
      </li>
      <li>
        No need to get your app into the App Store or Play Store. Just share the link to your website and users can 
        install it as an app
      </li>
      <li>
        There's no need to get users to install updates anymore. When you release a new version of your app, all your 
        users automatically get the new version
      </li>
      <li>
        By default, PWAs are served over HTTPS and are therefore safe and secure
      </li>
      <li>
        PWAs are lightweight and offer high performance
      </li>
      <li>
        Especially on Android, a PWA can almost do anything a native app can
      </li>
    </ul>
    
    <h3>Need help?</h3>
    <p>
      Do you want to develop a PWA but you need help? Contact me!
    </p>
    <p>
      As an experienced developer and trainer, I can help you implement a PWA or run a workshop for your team.
    </p>
    
    <p>
      Please fill out the form below and I'll get back to you as soon as possible:
    </p>
    
    <form id="contact-form">
      <material-textfield type="text" label="Name" id="name"></material-textfield>
      <material-textfield
        type="email"
        label="Email"
        id="email"
        error-required="Please enter a valid email address"
        error-type="Please enter a valid email address">
      </material-textfield>
      <textarea name="message" id="message" rows="12" required></textarea>

      <material-textfield type="text" label="Anti-spam: 2+5=" id="challenge"></material-textfield>

      <div class="flex">
        <material-button id="send-button" label="Send" raised></material-button>
        <p id="result"></p>
      </div>
    </form>


  </div>
</div>
`;
