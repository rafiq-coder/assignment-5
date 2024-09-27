

let count = 1;

const errorModal = document.getElementById('error-modal');
const closeErrorModal = document.getElementById('close-error-modal');

const modalSurface = document.getElementById('modal-surface');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

function showErrorModal() {
    errorModal.classList.remove('hidden');
}

function hideErrorModal() {
    errorModal.classList.add('hidden');
}
closeErrorModal.addEventListener('click', hideErrorModal);

function showModal() {
    modalSurface.classList.remove('hidden');
}

closeModalButton.addEventListener('click', () => {
    modalSurface.classList.add('hidden');
});

const donateNowButton1 = document.getElementById('donate-now-1');
const donateNowButton2 = document.getElementById('donate-now-2');
const donateNowButton3 = document.getElementById('donate-now-3');
//   btn-1
donateNowButton1.addEventListener('click', function () {
    count += 1;
    const donationAmount1 = parseFloat(document.getElementById('donation-amount-1').value);
    console.log(donationAmount1);
    const donatedAmount1 = parseFloat(document.getElementById('donated-amount-1').innerText);
    console.log(donatedAmount1);

    if (isNaN(donationAmount1) || donationAmount1 <= 0) {
        console.log('Invalid donation amount.');
        showErrorModal();
        return;
    }
    else {
        hideErrorModal();
        const newTotal1 = donatedAmount1 + donationAmount1;
        document.getElementById('donated-amount-1').innerText = newTotal1;
        console.log('New total donated amount:', newTotal1);

        showModal();

    }

    const wallet = parseFloat(document.getElementById('wallet').innerText);
    console.log(wallet);

    if (!isNaN(donationAmount1) && donationAmount1 > 0) {
        const newWallet1 = wallet - donationAmount1;
        document.getElementById('wallet').innerText = newWallet1;

    }
