/* scriptt.js */
document.addEventListener('DOMContentLoaded', () => {
    const pollButton = document.getElementById('poll-button');
    const coinsEarned = document.getElementById('coins-earned');
    const expiryDate = document.getElementById('expiry-date');

    pollButton.addEventListener('click', () => {
        // Sample data - replace with actual data fetching logic
        const coins = 150;
        const expiry = '2024-12-31';

        coinsEarned.textContent = coins;
        expiryDate.textContent = expiry;
    });

    document.getElementById('offers-button').addEventListener('click', () => {
        alert('Check out the latest offers!');
    });

    document.getElementById('discounts-button').addEventListener('click', () => {
        alert('Enjoy these exclusive discounts!');
    });

    document.getElementById('rewards-button').addEventListener('click', () => {
        alert('Redeem your rewards now!');
    });
});