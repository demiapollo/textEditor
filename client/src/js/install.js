const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// A click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show the install prompt
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  butInstall.classList.toggle("hidden", true);
});

// An handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("appinstalled", event);
  window.deferredPrompt = null;
});
