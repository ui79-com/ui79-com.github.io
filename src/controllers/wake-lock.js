import {isInstalled, isIOSSafari} from '../lib/utils.js';

export const controller = () => {
  const supported = 'wakeLock' in navigator;

  if(!supported) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }

  if(supported && isIOSSafari() && isInstalled()) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support-ios`).style.display = 'block';
  }
  const wakeLockSwitch = document.querySelector('#wake-lock');
  wakeLockSwitch.disabled = !supported;

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
      console.error(`${err.name}, ${err.message}`);
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
}
