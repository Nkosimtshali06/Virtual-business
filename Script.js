// Get HTML elements
const loginBtn = document.getElementById('loginBtn');
const startBusinessBtn = document.getElementById('startBusiness');
const watchAdBtn = document.getElementById('watchAdBtn');
const usernameInput = document.getElementById('username');
const userNameDisplay = document.getElementById('user-name');
const coinsDisplay = document.getElementById('coins');

// Elements for toggling screens
const loginContainer = document.getElementById('login');
const dashboardContainer = document.getElementById('dashboard');

// Initial state
let coins = 100;

// Handle login
loginBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  if (username) {
    // Show dashboard
    userNameDisplay.textContent = username;
    loginContainer.classList.add('hidden');
    dashboardContainer.classList.remove('hidden');
  } else {
    alert('Please enter a username');
  }
});

// Start a business (placeholder action)
startBusinessBtn.addEventListener('click', () => {
  alert('You have started a new virtual business!');
  coins += 50;
  updateCoins();
});

// Watch an ad to earn coins
watchAdBtn.addEventListener('click', () => {
  // Simulate watching an ad (you can replace this with actual ad logic)
  setTimeout(() => {
    coins += 25;
    updateCoins();
    alert('You earned 25 coins for watching an ad!');
  }, 3000); // Simulate 3 second ad watch
});

// Update coin display
function updateCoins() {
  coinsDisplay.textContent = coins;
}
