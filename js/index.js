

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


    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-1-2 border-indigo-500 w-full';

    historyItem.innerHTML = `
    
    <p class="text-xs text-gray-600">${donationAmount1.toFixed(2)} Taka is donated for Flood at Noakhali, Bangladesh</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
      
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})

// btn-2
donateNowButton2.addEventListener('click', function () {
    const donationAmount2 = parseFloat(document.getElementById('donation-amount-2').value);
    const donatedAmount2 = parseFloat(document.getElementById('donated-amount-2').innerText);


    if (isNaN(donationAmount2) || donationAmount2 <= 0) {

        showErrorModal();
        return;
    }
    else {
        const newTotal2 = donatedAmount2 + donationAmount2;
        document.getElementById('donated-amount-2').innerText = newTotal2;

        hideErrorModal();
        showModal();
    }

    const wallet = parseFloat(document.getElementById('wallet').innerText);

    if (!isNaN(donationAmount2) && donationAmount2 > 0) {
        const newWallet2 = wallet - donationAmount2;
        document.getElementById('wallet').innerText = newWallet2;

    }

    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-1-2 border-indigo-500';

    historyItem.innerHTML = `
    
    <p class="text-xs text-gray-600">${donationAmount2.toFixed(2)} Taka is donated for Flood Relief in Feni, Bangladesh</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
      
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});

// btn-3

donateNowButton3.addEventListener('click', function () {

    const donationAmount3 = parseFloat(document.getElementById('donation-amount-3').value);
    const donatedAmount3 = parseFloat(document.getElementById('donated-amount-3').innerText);


    if (isNaN(donationAmount3) || donationAmount3 <= 0) {

        showErrorModal();
        return;
    }
    else {

        const newTotal3 = donatedAmount3 + donationAmount3;

        document.getElementById('donated-amount-3').innerText = newTotal3;
        hideErrorModal();
        showModal();
    }

    const wallet = parseFloat(document.getElementById('wallet').innerText);

    if (!isNaN(donationAmount3) && donationAmount3 > 0) {
        const newWallet3 = wallet - donationAmount3;
        document.getElementById('wallet').innerText = newWallet3;

    }

    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-1-2 border-indigo-500';

    historyItem.innerHTML = `
    
    <p class="text-xs text-gray-600">${donationAmount3.toFixed(2)} Taka is aided for Injured in the Quota Movement</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
      
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});



const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function () {

    historyTab.classList.add('bg-[#B4F461]', 'text-black', 'font-semibold', 'px-8', 'py-2', 'rounded-md', 'opacity-100');
    historyTab.classList.remove('border-gray-300');
    donationTab.classList.remove('bg-[#B4F461]', 'opacity-100');
    donationTab.classList.add('opacity-70', 'border-solid', 'border', 'border-gray-300');

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    
})


donationTab.addEventListener('click', function () {
    donationTab.classList.add('bg-[#B4F461]', 'text-black', 'font-semibold', 'px-8', 'py-2', 'rounded-md', 'opacity-100');
    historyTab.classList.remove('bg-[#B4F461]', 'opacity-100');

    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})


const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');

        const toggle = question.querySelector('.faq-toggle');
        if (answer.classList.contains('hidden')) {
            toggle.textContent = '^';
        } else {
            toggle.textContent = '>';
        }
    });
});



const blogButton = document.getElementById('blog-button');


blogButton.addEventListener('click', function () {

    if (blogButton.innerText === "Blog") {
        blogButton.innerText = "Home";

        document.getElementById('faq-section').classList.remove('hidden');
        document.getElementById('cards').classList.add('hidden');
        document.getElementById('tabs').classList.add('hidden');
        document.getElementById('history-section').classList.add('hidden')

    } else {
        blogButton.innerText = "Blog";

        document.getElementById('faq-section').classList.add('hidden');
        document.getElementById('cards').classList.remove('hidden');
        document.getElementById('tabs').classList.remove('hidden');

    }

});



