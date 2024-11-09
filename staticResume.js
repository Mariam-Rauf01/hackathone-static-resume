document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleBtn');
    var additionalInfo = document.getElementById('additional-info');
    if (toggleButton && additionalInfo) {
        toggleButton.addEventListener('click', function () {
            if (additionalInfo.classList.contains('hidden')) {
                additionalInfo.classList.remove('hidden');
                toggleButton.textContent = 'Hide Additional Information';
            }
            else {
                additionalInfo.classList.add('hidden');
                toggleButton.textContent = 'Show Additional Information';
            }
        });
    }
});
