document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchbtn').addEventListener('click', function() {
        const searchText = document.getElementById('searchField').value;
        fetchPhones(searchText);
    });

    // Adding event listeners for the new buttons
    document.getElementById('prev-btn').addEventListener('click', showPreviousPhones);
    document.getElementById('next-btn').addEventListener('click', showNextPhones);
    document.getElementById('show-all').addEventListener('click', showAllPhones);

    // Load phones from local storage if available
    const storedPhones = JSON.parse(localStorage.getItem('defaultPhones'));
    if (storedPhones && storedPhones.length > 0) {
        allPhones = storedPhones;
        displayPhones(getPhonesForCurrentPage());
    } else {
        fetchDefaultPhones();
    }
});

let mymodel = document.getElementById('my_modal');
let closebtn = document.getElementById('close');
closebtn.addEventListener('click', hideModal);

let currentPage = 0;
const pageSize = 8;  // Display at least 7-8 cards
let allPhones = [];

async function fetchDefaultPhones() {
    const categories = ['samsung', 'iphone', 'oppo'];
    const fetchPromises = categories.map(category => fetch(`https://openapi.programming-hero.com/api/phones?search=${category}`));
    const responses = await Promise.all(fetchPromises);
    const dataPromises = responses.map(response => response.json());
    const results = await Promise.all(dataPromises);

    let phones = [];
    results.forEach(result => {
        const categoryPhones = result.data.slice(0, 8); // Adjusting to fetch 7-8 phones per category
        phones = phones.concat(categoryPhones);
    });

    phones = shuffleArray(phones);
    localStorage.setItem('defaultPhones', JSON.stringify(phones));
    allPhones = phones; // Save all phones for pagination
    displayPhones(getPhonesForCurrentPage());
}

async function fetchPhones(searchText) {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    allPhones = data.data; // Save all phones for pagination
    currentPage = 0; // Reset to first page
    displayPhones(getPhonesForCurrentPage());
}

function displayPhones(phones) {
    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = '';

    if (phones.length === 0) {
        cardsSection.innerHTML = '<p>No phones found.</p>';
        return;
    }

    phones.forEach(phone => {
        const card = document.createElement('div');
        card.classList.add('card');

        const phoneImage = phone.image || 'https://via.placeholder.com/150';
        card.innerHTML = `
            <img src="${phoneImage}" alt="${phone.phone_name}">
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions">
                    <button class="btn btn-primary text-white" onclick="showDetailsHandler('${phone.slug}')">Show Details</button>
                </div>
            </div>
        `;

        cardsSection.appendChild(card);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function showDetailsHandler(phoneSlug) {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneSlug}`);
    const data = await res.json();

    const phone = data.data;
    showPhoneDetails(phone);
}

const showPhoneDetails = (details) => {
    const modelName = document.getElementById('detailsPhoneName');
    const brandName = document.getElementById('detailsBrand');
    const detailsSpec = document.getElementById('detailsSpec');
    const releaseDate = document.getElementById('releaseDate');
    const imageDiv = document.getElementById('imgContainer');

    imageDiv.innerHTML = `<img src="${details.image}" alt="">`;
    modelName.innerText = details.name;
    brandName.innerText = `Brand: ${details.brand}`;
    const features = details.mainFeatures;
    let string = "";
    for (const key in features) {
        string = string + `${key}: ${features[key]} \n`;
    }
    detailsSpec.innerText = string;
    releaseDate.innerText = `${details.releaseDate}`;
    mymodel.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    mymodel.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Pagination functions
function getPhonesForCurrentPage() {
    const start = currentPage * pageSize;
    const end = start + pageSize;
    return allPhones.slice(start, end);
}

function showPreviousPhones() {
    if (currentPage > 0) {
        currentPage--;
        displayPhones(getPhonesForCurrentPage());
    }
}

function showNextPhones() {
    if ((currentPage + 1) * pageSize < allPhones.length) {
        currentPage++;
        displayPhones(getPhonesForCurrentPage());
    }
}

function showAllPhones() {
    displayPhones(allPhones);
}
