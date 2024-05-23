import {isIOSSafari} from '../lib/utils.js';

export const controller = async () => {
  const registration = await navigator.serviceWorker.getRegistration();
  const supported = registration && 'sync' in registration;

  console.log('background sync supported', supported);
  console.log('element', document.querySelector(`[data-view="${location.pathname}"] .no-support`));

  if(!supported ) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }

  let mainContent;
  const dialog = document.querySelector('#notification-dialog');
  const closeButton = document.querySelector('#notification-close');
  const syncButton = document.querySelector('#sync-button');

  syncButton.disabled = !supported;

  const preventSwipe = e => e.preventDefault();
  if(registration && 'sync' in registration) {
    let notificationNum = 0;

    syncButton.addEventListener('click', async () => {
      if(Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission();

        if(permission !== 'granted') {
          // get reference to mainContent here, otherwise it still refers to the previous view
          mainContent = document.querySelector('.view.active .content') || document.querySelector('.view .content');

          mainContent.style.overflowY = 'hidden';
          mainContent.style.maxHeight = '100vh';
          document.documentElement.style.overflowY = 'hidden';
          document.documentElement.style.maxHeight = '100vh';
          mainContent.addEventListener('touchmove', preventSwipe);
          dialog.open();
        }
      }

      const notification = {
        timestamp: Date.now(),
        title: 'Background Sync Demo',
        message: `This is notification #${++notificationNum}`,
      };

      const {getStore} = await import('./src/lib/idb.js');
      const idbStore = await getStore();
      idbStore.add(notification);
      await registration.sync.register(`sync-demo`);
      console.log(`sync-demo`);
    });

    closeButton.addEventListener('click', () => {
      dialog.close();
      mainContent.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
      mainContent.style.maxHeight = 'auto';
      document.documentElement.style.maxHeight = 'auto';
      mainContent.removeEventListener('touchmove', preventSwipe);
    });
  }
}
