
const contactApi = 'https://6srbe7uzgd.execute-api.us-east-1.amazonaws.com/production/contact';
export const routes = [
  {
    url: '/',
    template: '../templates/home.js',
    controller: '../controllers/home.js'
  },
  {
    url: '/media',
    template: '../templates/media.js',
    controller: '../controllers/media.js',
    onExit() {
      const webCam = document.querySelector('web-cam');
      try {
        if(webCam.preview.src !== '') {
          webCam.closeVideo();
        }
        if(webCam.stream) {
          webCam.stopVideo();
        }
      }
      catch(e) {
        console.error(e);
      }
    },
    exitOnHidden: true
  },
  {
    url: '/audio',
    template: '../templates/audio.js',
    controller: '../controllers/audio.js'
  },
  {
    url: '/view-transitions',
    template: '../templates/view-transitions.js',
    controller: '../controllers/view-transitions.js'
  },
  {
    url: '/audio-recording',
    template: '../templates/audio-recording.js',
    controller: '../controllers/audio-recording.js'
  },
  {
    url: '/authentication',
    template: '../templates/authentication.js',
    controller: '../controllers/authentication.js',
  },
  {
    url: '/geolocation',
    template: '../templates/geolocation.js',
    controller: '../controllers/geolocation.js'
  },
  {
    url: '/device-orientation',
    template: '../templates/device-orientation.js',
    controller: '../controllers/device-orientation.js',
  },
  {
    url: '/device-motion',
    template: '../templates/device-motion.js',
    controller: '../controllers/device-motion.js',
  },
  {
    url: '/web-share',
    template: '../templates/web-share.js',
    controller: '../controllers/web-share.js',
    onExit() {
      const title = document.querySelector('#title');
      const text = document.querySelector('#text');
      const url = document.querySelector('#url');
      const fileField = document.querySelector('#file');
      const fileName = document.querySelector('#file-name');

      title.value = title.getAttribute('value');
      text.value = text.getAttribute('value');
      url.value = url.getAttribute('value');

      if(fileField && fileName) {
        fileField.value = '';
        fileName.innerText = '';
      }
    }
  },
  // {
  //   url: '/share-target',
  //   template: '../templates/share-target.js',
  //   controller({title = '', text = '', url = ''}) {
  //     document.querySelector('#shared-content').innerHTML = `
  //       <h3 id="title">${title}</h3>
  //       <p id="text">${text}</p>
  //       <p id="url">${url}</p>
  //     `;
  //   },
  //   onExit() {
  //     document.querySelector('#shared-content').innerHTML = '';
  //   }
  // },
  {
    url: '/multi-touch',
    template: '../templates/multi-touch.js'
  },
  {
    url: '/ar-vr',
    template: '../templates/ar-vr.js',
    controller: '../controllers/ar-vr.js'
  },
  {
    url: '/speech-synthesis',
    template: '../templates/speech-synthesis.js',
    controller: '../controllers/speech-synthesis.js'
  },
  {
    url: '/speech-recognition',
    template: '../templates/speech-recognition.js',
    controller: '../controllers/speech-recognition.js',
    onExit() {
      document.querySelector('speech-recognition').reset();
    }
  },
  {
    url: '/page-lifecycle',
    template: '../templates/page-lifecycle.js',
    controller: '../controllers/page-lifecycle.js'
  },
  {
    url: '/notifications',
    template: '../templates/notifications.js',
    controller: '../controllers/notifications.js'
  },
  {
    url: '/bluetooth',
    template: '../templates/bluetooth.js',
    controller: '../controllers/bluetooth.js'
  },
  {
    url: '/bluetooth-test',
    template: '../templates/bluetooth2.js',
    controller: '../controllers/bluetooth2.js'
  },
  {
    url: '/contacts',
    template: '../templates/contacts.js',
    controller: '../controllers/contacts.js',
    onExit() {
      document.querySelector('#contacts').innerHTML = '';
    }
  },
  {
    url: '/network-info',
    template: '../templates/network-info.js',
    controller: '../controllers/network-info.js'
  },
  {
    url: '/info',
    template: '../templates/info.js',
    controller: '../controllers/info.js'
  },
  {
    url: '/payment',
    template: '../templates/payment.js',
    controller: '../controllers/payment.js'
  },
  {
    url: '/wake-lock',
    template: '../templates/wake-lock.js',
    controller: '../controllers/wake-lock.js'
  },
  {
    url: '/vibration',
    template: '../templates/vibration.js',
    controller: '../controllers/vibration.js'
  },
  {
    url: '/nfc',
    template: '../templates/nfc.js',
    controller: '../controllers/nfc.js'
  },
  {
    url: '/file-system',
    template: '../templates/file-system.js',
    controller: '../controllers/file-system.js',
  },
  {
    url: '/file-handling',
    template: '../templates/file-handling.js',
    controller: '../controllers/file-handling.js',
  },
  {
    url: '/protocol-handling',
    template: '../templates/protocol-handling.js',
    controller: '../controllers/protocol-handling.js',
  },
  {
    url: '/protocol-handler-page',
    template: '../templates/protocol-handler-page.js',
    controller: '../controllers/protocol-handler-page.js',
  },
  {
    url: '/barcode',
    template: '../templates/barcode.js',
    controller: '../controllers/barcode.js'
  },
  {
    url: '/face-detection',
    template: '../templates/face-detection.js',
    controller: '../controllers/face-detection.js'
  },
  {
    url: '/background-sync',
    template: '../templates/background-sync.js',
    controller: '../controllers/background-sync.js'
  },
  {
    url: '/background-fetch',
    template: '../templates/background-fetch.js',
    controller: '../controllers/background-fetch.js'
  },
  {
    url: '/storage',
    template: '../templates/storage.js',
    controller: '../controllers/storage.js'
  },
  {
    url: '/audiosession',
    template: '../templates/audiosession.js',
    controller: '../controllers/audiosession.js'
  },
  {
    url: '/capture-handle',
    template: '../templates/capture-handle.js',
    controller: '../controllers/capture-handle.js'
  },
  {
    url: '/image-gallery',
    template: '../templates/image-gallery.js',
    controller: '../controllers/image-gallery.js'
  },
];
