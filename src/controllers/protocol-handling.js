export const controller = async () => {
  const supported = 'registerProtocolHandler' in navigator;

  if(!supported) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }
}


