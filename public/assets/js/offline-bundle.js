// Minimal offline functionality
document.addEventListener('DOMContentLoaded', () => {
  console.log('Offline mode active');
  
  // Add retry button functionality
  const retryButtons = document.querySelectorAll('.retry-button');
  retryButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.location.reload();
    });
  });
  
  // Check periodically if we're back online
  setInterval(() => {
    if (navigator.onLine) {
      window.location.reload();
    }
  }, 5000); // Check every 5 seconds
});
