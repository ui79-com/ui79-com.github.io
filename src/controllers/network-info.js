export const controller = () => {
  const supported = 'connection' in navigator;
  if(!supported) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }
}
