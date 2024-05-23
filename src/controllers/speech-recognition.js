import {isInstalled, isIOSSafari} from '/src/lib/utils.js';

export const controller = () => {
  const supported = 'webkitSpeechRecognition' in window;

  if(!supported) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }

  if(supported && isIOSSafari() && isInstalled()) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support-ios`).style.display = 'block';
  }
}
