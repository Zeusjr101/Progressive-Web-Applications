const installButton = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeInstallPrompt', (event) => {
    console.log('beforeInstallPrompt event triggered');
    event.preventDefault();
    installButton.removedAttribute('hidden')
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
installButton.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    installButton.setAttribute('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appInstalled', (event) => {
    console.log('appInstalled event triggered');
    window.deferredPrompt = null;
});
