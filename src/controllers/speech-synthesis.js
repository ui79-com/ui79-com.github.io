export const controller = () => {
  const supported = 'speechSynthesis' in window;

  if(!supported) {
    document.querySelector(`[data-view="${location.pathname}"] .no-support`).style.display = 'block';
  }
}
