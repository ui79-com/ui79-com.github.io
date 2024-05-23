export const template = `
  </section>

      <footer id="main-footer">
        <section class="content">
          <a href="/"><i class="material-icons">home</i>
          <span>Home</span>
          </a>
          <a href="/info"><i class="material-icons">info</i>
          <span>Info</span>
          </a>
          <a href="/" target="_blank">
            <li class="ion-social-github" data-pack="social" data-tags="connect"></li>
            <span>Bugs</span>
          </a>
          <a>
            <i class="material-icons" id="reload">refresh</i>
            <span>Reload</span>
          </a>
        </section>
      </footer>
    </main>

    <dialog id="install-dialog">
      <section>
        <header>
          <img src="/src/img/pwalogo.webp">
          <div class="heading">
            <span>What PWA Test</span>
            <span>A showcase of what is possible with Progressive Web Apps today</span>
          </div>
          <div class="close">
            <button type="button" id="close-install-dialog">
              <img src="/src/img/install/close.svg">
            </button>
          </div>
        </header>

        <div class="screenshots">
          <div class="back">
            <button type="button" id="back-button">
              <img src="/src/img/install/arrow-forward.svg">
            </button>
          </div>
          <div class="scroll-div">
            <div>
              <img src="/src/img/screenshots/shot1.png" class="narrow">
              <img src="/src/img/screenshots/shot2.png" class="narrow">
              <img src="/src/img/screenshots/shot3.png" class="narrow">
              <img src="/src/img/screenshots/shot4.png" class="narrow">
              <img src="/src/img/screenshots/shot5.png" class="narrow">
              <img src="/src/img/screenshots/shot6.png" class="narrow">
              <img src="/src/img/screenshots/shot7.png" class="wide">
              <img src="/src/img/screenshots/shot8.png" class="wide">
            </div>
          </div>
          <div class="forward">
            <button type="button" id="forward-button">
              <img src="/src/img/install/arrow-forward.svg">
            </button>
          </div>
        </div>
      </section>
    </dialog>

    <dialog id="sensor-dialog">
      <section>

        <footer>
          <material-button id="close-sensor-dialog" label="Close"></material-button>
        </footer>
      </section>
    </dialog>


    <dialog id="geolocation-dialog">
      <section>

        <footer>
          <material-button id="close-geolocation-dialog" label="Close" raised></material-button>
        </footer>
      </section>
    </dialog>

    <script type="module" src="/app.js"></script>
    <script>
      if('serviceWorker' in navigator) {
        const registerServiceWorker = async () => {
          await navigator.serviceWorker.register('/service-worker.js');
          const registration = await navigator.serviceWorker.ready;

          if(registration.waiting && registration.active) {
            console.log('new sw waiting');
            window.swNeedUpdate = true;
          }

          registration.onupdatefound = () => {
            const installingWorker = registration.installing;

            if(installingWorker) {
              console.log('installing sw found');
              installingWorker.onstatechange = async () => {
                if(installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('new sw installed');
                  window.swNeedUpdate = true;

                  await SWHelper.prepareCachesForUpdate();
                  await SWHelper.skipWaiting();
                }
              };
            }

          };
        };

        registerServiceWorker();

        const SWHelper = {
          async getWaitingWorker() {
            const registrations = await navigator?.serviceWorker?.getRegistrations() || [];
            const registrationWithWaiting = registrations.find(reg => reg.waiting);
            return registrationWithWaiting?.waiting;
          },

          async skipWaiting() {
            return (await SWHelper.getWaitingWorker())?.postMessage({type: 'SKIP_WAITING'});
          },

          async prepareCachesForUpdate() {
            return (await SWHelper.getWaitingWorker())?.postMessage({ type: 'PREPARE_CACHES_FOR_UPDATE' });
          }
        };

        window.addEventListener('beforeunload', async () => {
          if(window.swNeedUpdate) {
            console.log('send skipWaiting');
            await SWHelper.skipWaiting();
          }
        });
      }

      document.querySelector('#reload').addEventListener('click', e => location.reload());
    </script>
    <script src="/src/lib/prism.js"></script>
    
    <!--[script]-->
  </body>
</html>
`;
