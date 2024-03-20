let userNumberInput = document.getElementById('userNumber');
let guessButton = document.getElementById('guessButton');
let loadingContainer = document.getElementById('loading-container');

const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

guessButton.addEventListener('click', async function() {
  const userNumber = parseInt(userNumberInput.value);

  // Disable number input and guess button
  userNumberInput.disabled = true;
  guessButton.disabled = true;
  loadingContainer.style.display = 'flex';

  const loadingModals = ["Initializing user data", "Gathering nodes", "Calculating socket runtime", 
  "Generating binary hashmap", "Computing server side authorization","Installing dependencies", 
  "Rebooting system operations"];

  for (const modal of loadingModals) {
    await showLoadingModal(modal); // Sequentially display each modal
  }

  loadingContainer.style.display = 'none'; // Hide loading container

  // Optionally, display a message after all modals
  const guessText = document.getElementById("guessText");
  guessText.innerHTML = "You Guessed: " + userNumberInput.value;

  // Re-enable user interaction
  userNumberInput.disabled = false;
  guessButton.disabled = false;
});

async function showLoadingModal(modalText) {
  const loadingModal = document.createElement('div');
  loadingModal.classList.add('loading-modal');

  const modalHeader = document.createElement('h3');
  modalHeader.textContent = modalText + "...";
  loadingModal.appendChild(modalHeader);

  const loadingBar = document.createElement('div');
  loadingBar.classList.add('loading-bar');
  loadingModal.appendChild(loadingBar);

  loadingContainer.appendChild(loadingModal);

  // Generate random delay for this modal
  const maxDelay = 5000;  // Maximum delay in milliseconds
  const minDelay = 2000;  // Minimum delay in milliseconds
  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  // Set animation duration based on the random delay
  loadingBar.style.animationDuration = `${delay}ms`;

  // Simulate loading with the random delay
  await new Promise(resolve => setTimeout(resolve, delay));

  await wait(1000 * Math.floor(Math.random() * (1 - 0.5 + 1)) + 0.5);

  loadingModal.remove(); // Remove the modal after delay
}
