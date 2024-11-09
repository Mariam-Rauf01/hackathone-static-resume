document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleBtn');
    const additionalInfo = document.getElementById('additional-info');
  
    if (toggleButton && additionalInfo) {
      toggleButton.addEventListener('click', () => {
        if (additionalInfo.classList.contains('hidden')) {
          additionalInfo.classList.remove('hidden');
          toggleButton.textContent = 'Hide Additional Information';
        } else {
          additionalInfo.classList.add('hidden');
          toggleButton.textContent = 'Show Additional Information';
        }
      });
    }
  });
  