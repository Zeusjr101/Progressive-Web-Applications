const installButton = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeInstallPrompt', (event) => {
    window.deferredPrompt = event;
    butInstall.removeAttribute('hidden', false);
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
    window.deferredPrompt = null;
});
