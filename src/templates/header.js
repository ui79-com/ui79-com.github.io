export const template = `
<!DOCTYPE html>
<html lang="en" data-transition="slide" ssg>
  <head data-version="307">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>What PWA Test</title>

    <!-- Google tag (gtag.js) -->
    <script async src="/src/lib/gtag.js"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-VTKNPJ5HVC');
    </script>
    <script type="importmap">
      {
        "imports": {
          "@dannymoerkerke/": "/node_modules/@dannymoerkerke/",
          "three/": "/node_modules/three/"
        }
      }
    </script>

    <meta property="og:title" content="What PWA Test">
    <meta property="og:description" content="A showcase of what is possible with Progressive Web Apps today.">
    <meta property="og:image" content="https://ui79.com/src/img/social-logo.png">
    <meta property="og:url" content="https://ui79.com">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="Author" content="Danny Moerkerke">
    
    <!-- tabbed display mode -->
    <meta http-equiv="origin-trial" content="AoIGzgmzMUG9DsPZtn7kRZdSmF+BekgqhBlvzekLZKXJVIt0hxa+rHV1zfsflXCSPFMYPFEhoVHsxUAHOaOHCAEAAABteyJvcmlnaW4iOiJodHRwczovL3doYXRwd2FjYW5kby50b2RheTo0NDMiLCJmZWF0dXJlIjoiV2ViQXBwVGFiU3RyaXAiLCJleHBpcnkiOjE3MjI5ODg3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==">

    <!-- optional since iOS 11.3, replaced with display: standalone in manifest, still needed to display startup images -->
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- replaced by theme-color meta tag since iOS 15 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="theme-color" content="#ffffff">

    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/src/img/icons/browserconfig.xml">

    <link rel="preconnect" href="https://www.google-analytics.com">

    <link rel="manifest" href="/manifest.json">

    <!-- iOS icons, needed before iOS 15.4, still override icons in manifest -->
    <link rel="apple-touch-icon" href="/src/img/pwa/apple-icon-180.png">

    <link rel="icon" type="image/png" sizes="32x32" href="/src/img/icons/favicon-32.png">

    <!-- Apple splash screen images -->
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2048-2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2732-2048.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1668-2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2388-1668.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1536-2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2048-1536.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1668-2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2224-1668.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1620-2160.png" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2160-1620.png" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1290-2796.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2796-1290.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1179-2556.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2556-1179.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1284-2778.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2778-1284.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1170-2532.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2532-1170.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1125-2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2436-1125.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1242-2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2688-1242.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-828-1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1792-828.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1242-2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-2208-1242.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1334-750.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-640-1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-1136-640.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">

    <!-- Apple splash screen images dark mode-->
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2048-2732.png" media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2732-2048.png" media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1668-2388.png" media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2388-1668.png" media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1536-2048.png" media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2048-1536.png" media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1668-2224.png" media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2224-1668.png" media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1620-2160.png" media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2160-1620.png" media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1290-2796.png" media="(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2796-1290.png" media="(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1179-2556.png" media="(prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2556-1179.png" media="(prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1284-2778.png" media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2778-1284.png" media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1170-2532.png" media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2532-1170.png" media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1125-2436.png" media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2436-1125.png" media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1242-2688.png" media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2688-1242.png" media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-828-1792.png" media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1792-828.png" media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1242-2208.png" media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-2208-1242.png" media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-750-1334.png" media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1334-750.png" media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-640-1136.png" media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="https://ui79.com/src/img/pwa/apple-splash-dark-1136-640.png" media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">

    <style>
      :root {
        --footer-content-direction: column;
        --footer-justify-content: space-evenly;
        --footer-align-text: flex-start;
        --p-font-size: 1.2em;
        --h1-font-size: 2em;
        --h2-font-size: 1.6em;
        --h3-font-size: 1.3em;
        --main-background: #ffffff;

        --base-1: #8cc7fa;
        --base-2: #f5f8fa;
        --base-3: #c3e0f9;
        --base-font-family: 'system-ui', "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        --base-font-color: #3a4145;
        --base-link-color: var(--base-1);
        --footer-font-color: #ffffff;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --main-background: #696969;
          --base-font-color: #eaeaea;
          --base-1: #697c95;
          --base-2: #f5f8fa;
          --base-3: #7a8fa8;
          --base-link-color: #aac1da;
        }
      }

      @media (min-width: 1200px) {
        :root {
          --footer-content-direction: row;
          --footer-justify-content: space-between;
          --footer-align-text: center;
          --p-font-size: 1.2em;
          --h1-font-size: 3em;
          --h2-font-size: 1.5em;
          --h3-font-size: 1.17em;
        }
      }


      html, body {
        min-height: 100%;
        height: 100%;
        margin: 0;
        font-family: var(--base-font-family);
        color: var(--base-font-color);
        background-color: var(--main-background);
      }

      html {
        min-height: 100%;
        height: 100%;
      }

      body {
        /*min-height: 100%;*/
        height: 100%;
      }

      main {
        display: flex;
        height: 100%;
        max-height: 100%;
        flex-direction: column;
        -webkit-overflow-scrolling: touch;
      }

      #main-header {
        display: flex;
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid #cccccc;
        background: var(--main-background);
      }

      #main-header .logo {
        grid-column: 1 / 2;
        width: 70px;
        margin-left: 20px;
        align-self: center;
      }

      #main-content {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        flex-grow: 1;
      }
      #main-footer {
        display: flex;
        justify-content: center;
        background: var(--base-1);
        padding: 10px 15px 10px 15px;
        user-select: none;
        -webkit-user-select: none;
      }
      .network-status {
        position: relative;
        overflow: hidden;
        height: 0;
        transition: height .2s ease-out;
      }
      .network-status.offline {
        height: 63px;
      }
      .network-status header {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 15px 0 0 15px;
        width: 100%;
        color: #ff0000;
      }
      .network-status p {
        margin: 0;
        padding: 0 15px;
      }
      .network-status i.material-icons {
        font-size: 2.3em;
      }

      material-app-bar [slot="right-content"] {
        display: none;
        color: #ff0000 !important;
      }

      @supports (padding: max(0px)) {
        #main-footer {
          padding-bottom: env(safe-area-inset-bottom);
        }
      }

      #main-footer .content {
        color: var(--footer-font-color);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        padding-bottom: 10px;
      }

      #main-footer .material-icons {
        font-size: 32px;
      }

      #main-footer .content a,
      #main-footer .content a:hover,
      #main-footer .content a:visited {
        color: var(--footer-font-color);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      #main-footer .content a span {
        font-size: 12px;
      }

      #main-footer .content li {
        list-style-type: none;
        font-size: 2em;
        line-height: 1;
        display: inline-block;
        margin-bottom: 0;
      }

      #main-footer p {
        margin: 0;
        align-self: var(--footer-align-text);
      }

      .view .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 15px;
        height: 1px;
        overflow-y: auto;
      }

      dialog {
        border: none;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,.24),0 -2px 0 #eeeeee;
      }

      #install-dialog,
      #sensor-dialog,
      #geolocation-dialog {
        box-sizing: border-box;
        width: 80%;
        height: 80%;
        padding-top: 4px;
        background-color: #e5e5e5;
        border-radius: 10px;
      }

      #install-dialog {
        transform: translateY(100%);
        transition: transform .3s ease-out;
        box-shadow: none;
        width: 100vw;
        max-width: 100vw;
        height: 75%;
        margin: 0;
        top: auto;
        border-radius: 10px 10px 0 0;
      }

      #install-dialog[opened] {
        transform: translateY(0%);
      }

      @media (min-width: 1024px) {
        #install-dialog {
          margin: 0 auto;
          top: 5%;
          transform: translateY(-10%);
          opacity: 0;
          transition: transform .3s ease-out, opacity .3s ease-out;
        }

        #install-dialog[opened] {
          opacity: 1;
        }
      }

      #install-dialog header img {
        width: 60px;
      }

      #install-dialog header {
        padding-block: .5rem;
      }

      #install-dialog header div.heading {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        padding-inline: 1rem;
      }

      #install-dialog header span:first-child {
        font-weight: bold;
        line-height: 26px;
      }

      #install-dialog header span:last-child {
        font-size: 12px;
        line-height: 16px;
      }

      #install-dialog header div.close {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
      }

      #install-dialog button img {
        width: 18px;
      }

      #install-dialog button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: none;
        border-radius: 50%;
        background-color: #c5c1c6;
      }

      #install-dialog #back-button {
        transform: rotateY(180deg);
      }

      #install-dialog ul {
        list-style-type: none;
        padding: 0;
        margin-bottom: 2rem;
      }

      #install-dialog ul li {
        display: flex;
        align-items: center;
        padding: .5rem 0;
      }

      #install-dialog ul li img {
        padding-inline: .5rem;
        width: 24px;
      }

      #install-dialog .screenshots,
      #install-dialog .screenshots .scroll-div {
        width: 100%;
        overflow: auto;
        position: relative;
      }

      #install-dialog .screenshots .scroll-div div {
        display: flex;
        gap: 1rem;
      }

      #install-dialog .screenshots :is(.back, .forward) {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        height: 100%;
      }

      #install-dialog .screenshots .back {
        left: 8px;
        z-index: 1;
      }

      #install-dialog .screenshots .forward {
        right: 8px;
      }

      @media screen and (min-width: 1024px) {
        #install-dialog .screenshots :is(.back, .forward) {
          display: none;
        }
      }

      #install-dialog .screenshots img {
        height: 250px;
      }

      #install-dialog .screenshots img.wide {
        display: none;
      }

      @media screen and (min-width: 1024px) {
        #install-dialog,
        #sensor-dialog,
        #geolocation-dialog {
          width: fit-content;
        }

        #install-dialog .screenshots img.narrow {
          display: none;
        }
        #install-dialog .screenshots img.wide {
          display: block;
        }
      }

      #sensor-dialog::backdrop,
      #geolocation-dialog::backdrop {
        background-color: #cccccc;
        opacity: 0.5;
      }

      #install-dialog::backdrop {
        background-color: transparent;
      }

      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) section {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: hidden;
      }

      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) header {
        justify-self: flex-start;
        min-height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #bababa;
      }
      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) footer {
        justify-self: flex-end;
        height: 50px;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        border-top: 1px solid #cccccc;
      }

      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) .body {
        flex: 1 1 auto;
        height: 0;
        overflow-y: scroll;
      }

      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) header h2 {
        margin: 0;
        font-weight: normal;
      }

      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) picture img {
        box-shadow: 0 2px 6px 0 rgba(0,0,0,.24),0 -2px 0 #eeeeee;
      }

      :is(#install-dialog, #sensor-dialog, #geolocation-dialog) picture + p {
        margin-top: 2.5rem;
      }

      material-bottom-sheet {
        display: none;
        user-select: none;
        -webkit-user-select: none;
        --header-background: var(--main-background);
        --body-background: var(--main-background);
        --footer-background: var(--main-background);
      }

      material-dialog {
        --header-background: var(--main-background);
        --body-background: var(--main-background);
        --footer-background: var(--main-background);
      }

      @media (prefers-color-scheme: dark) {
        material-dialog {
          --header-background: var(--base-1);
        }
      }

      material-button {
        --font-color: var(--base-font-color);
        --button-color: var(--base-3);
      }

      material-textfield {
        --font-color: var(--base-font-color);
        --active-color: var(--base-font-color);
      }
    </style>

    <link rel="stylesheet" href="/src/css/styles.css">
    <script>
      const handleInstallPrompt = e => {
        e.preventDefault();

        window.deferredPrompt = e;
      };

      window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    </script>
    
    <!--[script]-->
    
  </head>
  <body>
    <main>
      <section id="main-content">
`;
